<?php
require 'lib/PHPMailer.php';
require 'lib/SMTP.php';
require 'lib/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception as MailException;

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method not allowed']);
    exit;
}

$input = json_decode(file_get_contents('php://input'), true);

if (!$input) {
    echo json_encode(['success' => false, 'error' => 'Invalid input']);
    exit;
}

$name     = htmlspecialchars($input['name']     ?? '');
$email    = filter_var($input['email']    ?? '', FILTER_SANITIZE_EMAIL);
$phone    = htmlspecialchars($input['phone']    ?? '');
$practice = htmlspecialchars($input['practice'] ?? '');
$message  = htmlspecialchars($input['message']  ?? '');

if (empty($name) || empty($email)) {
    echo json_encode(['success' => false, 'error' => 'Name and email required']);
    exit;
}

/* ================================================================
   SMTP CONFIGURATION
   Fill in these values via Hostinger File Manager after deploy.
   Do NOT commit real passwords to the public GitHub repo.
   ================================================================ */
$smtpHost     = 'smtp.titan.email';
$smtpPort     = 465;
$smtpUser     = 'hi@mdi.io';
$smtpPass     = 'YOUR_PASSWORD_HERE';    // ← REPLACE THIS in Hostinger File Manager
$smtpFrom     = 'hi@mdi.io';
$smtpFromName = 'Torin Works';
$primaryTo    = 'info@torinworks.com';   // Primary recipient
$bccTo        = 'hi@mdi.io';             // BCC backup
/* ================================================================ */

$mail = new PHPMailer(true);
$logFile = 'mail_log.txt';
$backupDir = 'submissions';

// Save local JSON backup
if (!is_dir($backupDir)) {
    mkdir($backupDir, 0755, true);
}
$backupFile = $backupDir . '/submission_' . date('Y-m-d_H-i-s') . '_' . uniqid() . '.json';
file_put_contents($backupFile, json_encode([
    'timestamp' => date('c'),
    'name'      => $name,
    'email'     => $email,
    'phone'     => $phone,
    'practice'  => $practice,
    'message'   => $message,
    'ip'        => $_SERVER['REMOTE_ADDR'] ?? null,
    'ua'        => $_SERVER['HTTP_USER_AGENT'] ?? null,
], JSON_PRETTY_PRINT));

// Send to Hetzner backup endpoint
$hetznerBackupUrl = 'http://204.168.128.194/torinworks-backup';
try {
    $ch = curl_init($hetznerBackupUrl);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode([
        'timestamp' => date('c'),
        'name'      => $name,
        'email'     => $email,
        'phone'     => $phone,
        'practice'  => $practice,
        'message'   => $message,
        'ip'        => $_SERVER['REMOTE_ADDR'] ?? null,
    ]));
    curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_TIMEOUT, 5);
    curl_exec($ch);
    curl_close($ch);
} catch (Exception $e) {
    // Hetzner backup is best-effort; don't fail the form if it times out
}

try {
    $mail->isSMTP();
    $mail->Host       = $smtpHost;
    $mail->SMTPAuth   = true;
    $mail->Username   = $smtpUser;
    $mail->Password   = $smtpPass;
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port       = $smtpPort;
    $mail->CharSet    = 'UTF-8';

    $mail->setFrom($smtpFrom, $smtpFromName);
    $mail->addAddress($primaryTo);
    $mail->addBCC($bccTo);
    $mail->addReplyTo($email, $name);

    $mail->Subject = 'Torin Works — New Assessment Request from ' . $name;
    $mail->Body    = "Name: $name\nEmail: $email\nPhone: $phone\nPractice: $practice\nMessage:\n$message\n";

    $mail->send();

    $log = date('Y-m-d H:i:s') . " | SENT via SMTP | To: $primaryTo | BCC: $bccTo | From: $email | Subject: " . $mail->Subject . "\n";
    file_put_contents($logFile, $log, FILE_APPEND | LOCK_EX);

    echo json_encode(['success' => true]);
} catch (MailException $e) {
    $log = date('Y-m-d H:i:s') . " | FAILED | Error: " . $mail->ErrorInfo . "\n";
    file_put_contents($logFile, $log, FILE_APPEND | LOCK_EX);

    echo json_encode(['success' => false, 'error' => 'Mail failed: ' . $mail->ErrorInfo]);
}
