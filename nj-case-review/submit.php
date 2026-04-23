<?php
require __DIR__ . '/../lib/PHPMailer.php';
require __DIR__ . '/../lib/SMTP.php';
require __DIR__ . '/../lib/Exception.php';

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
    // Fallback for standard form POST (non-JSON)
    $input = $_POST;
}

$full_name       = htmlspecialchars($input['full_name']       ?? '');
$email           = filter_var($input['email']           ?? '', FILTER_SANITIZE_EMAIL);
$phone           = htmlspecialchars($input['phone']           ?? '');
$contact_method  = htmlspecialchars($input['contact_method']  ?? '');
$accident_type   = htmlspecialchars($input['accident_type']   ?? '');
$description     = htmlspecialchars($input['description']     ?? '');

if (empty($full_name) || empty($email) || empty($phone) || empty($accident_type) || empty($description)) {
    echo json_encode(['success' => false, 'error' => 'All required fields must be filled']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(['success' => false, 'error' => 'Invalid email address']);
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
$smtpFromName = 'Torin Works — NJ Case Review';
$primaryTo    = 'info@torinworks.com';   // Primary recipient
$bccTo        = 'hi@mdi.io';             // BCC backup
/* ================================================================ */

$typeLabels = [
    'car'            => 'Car Accident',
    'truck'          => 'Truck / Commercial Vehicle Accident',
    'slip_fall'      => 'Slip and Fall / Premises Liability',
    'workplace'      => 'Workplace Injury (Third-Party Claim)',
    'wrongful_death' => 'Wrongful Death',
    'other'          => 'Other',
];
$accidentLabel = $typeLabels[$accident_type] ?? $accident_type;

$mail = new PHPMailer(true);
$logFile = __DIR__ . '/mail_log.txt';
$backupDir = __DIR__ . '/submissions';

// Save local JSON backup
if (!is_dir($backupDir)) {
    mkdir($backupDir, 0755, true);
}
$backupFile = $backupDir . '/submission_' . date('Y-m-d_H-i-s') . '_' . uniqid() . '.json';
file_put_contents($backupFile, json_encode([
    'timestamp'      => date('c'),
    'full_name'      => $full_name,
    'email'          => $email,
    'phone'          => $phone,
    'contact_method' => $contact_method,
    'accident_type'  => $accident_type,
    'description'    => $description,
    'ip'             => $_SERVER['REMOTE_ADDR'] ?? null,
    'ua'             => $_SERVER['HTTP_USER_AGENT'] ?? null,
], JSON_PRETTY_PRINT));

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
    $mail->addReplyTo($email, $full_name);

    $mail->Subject = "NJ Case Review Submission — $full_name ($accidentLabel)";
    $mail->Body    = "NEW JERSEY PERSONAL INJURY CASE REVIEW SUBMISSION\n"
                   . "=================================================\n\n"
                   . "Full Name:  $full_name\n"
                   . "Email:      $email\n"
                   . "Phone:      $phone\n"
                   . "Preferred Contact: $contact_method\n\n"
                   . "Accident Type: $accidentLabel\n\n"
                   . "Description:\n$description\n\n"
                   . "---\n"
                   . "Submitted: " . date('c') . "\n"
                   . "IP: " . ($_SERVER['REMOTE_ADDR'] ?? 'unknown') . "\n";

    $mail->send();

    $log = date('Y-m-d H:i:s') . " | SENT | To: $primaryTo | BCC: $bccTo | From: $email | Subject: " . $mail->Subject . "\n";
    file_put_contents($logFile, $log, FILE_APPEND | LOCK_EX);

    echo json_encode(['success' => true]);
} catch (MailException $e) {
    $log = date('Y-m-d H:i:s') . " | FAILED | Error: " . $mail->ErrorInfo . "\n";
    file_put_contents($logFile, $log, FILE_APPEND | LOCK_EX);

    echo json_encode(['success' => false, 'error' => 'Mail failed: ' . $mail->ErrorInfo]);
}
