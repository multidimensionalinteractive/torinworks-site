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
$smtpHost     = 'smtp.titan.email';      // Titan SMTP server
$smtpPort     = 465;                     // SSL port
$smtpUser     = 'hi@mdi.io';             // Your Titan email
$smtpPass     = 'YOUR_PASSWORD_HERE';    // ← REPLACE THIS in Hostinger File Manager
$smtpFrom     = 'hi@mdi.io';             // From address
$smtpFromName = 'Torin Works';
$sendTo       = 'hi@mdi.io';             // Where form submissions go
/* ================================================================ */

$mail = new PHPMailer(true);

// Log file path
$logFile = 'mail_log.txt';

try {
    $mail->isSMTP();
    $mail->Host       = $smtpHost;
    $mail->SMTPAuth   = true;
    $mail->Username   = $smtpUser;
    $mail->Password   = $smtpPass;
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS; // Port 465
    $mail->Port       = $smtpPort;
    $mail->CharSet    = 'UTF-8';

    $mail->setFrom($smtpFrom, $smtpFromName);
    $mail->addAddress($sendTo);
    $mail->addReplyTo($email, $name);

    $mail->Subject = 'Torin Works — New Assessment Request from ' . $name;
    $mail->Body    = "Name: $name\nEmail: $email\nPhone: $phone\nPractice: $practice\nMessage:\n$message\n";

    $mail->send();

    $log = date('Y-m-d H:i:s') . " | SENT via SMTP | From: $email | Subject: " . $mail->Subject . "\n";
    file_put_contents($logFile, $log, FILE_APPEND | LOCK_EX);

    echo json_encode(['success' => true]);
} catch (MailException $e) {
    $log = date('Y-m-d H:i:s') . " | FAILED | Error: " . $mail->ErrorInfo . "\n";
    file_put_contents($logFile, $log, FILE_APPEND | LOCK_EX);

    echo json_encode(['success' => false, 'error' => 'Mail failed: ' . $mail->ErrorInfo]);
}
