<?php
// Simple mail test for Hostinger
$to = 'hi@mdi.io';
$subject = 'Torin Works - Mail Test ' . date('H:i:s');
$body = "This is a test email from torinworks.com sent at " . date('Y-m-d H:i:s') . "\n";
$body .= "Server: " . $_SERVER['SERVER_NAME'] . "\n";
$body .= "PHP Version: " . phpversion() . "\n";

$headers = "X-Mailer: PHP/" . phpversion() . "\r\n";

$result = mail($to, $subject, $body, $headers);

$log = date('Y-m-d H:i:s') . " | mailtest | Result: " . ($result ? 'SUCCESS' : 'FAILED') . "\n";
file_put_contents('mail_log.txt', $log, FILE_APPEND | LOCK_EX);

echo "Mail test result: " . ($result ? "SENT" : "FAILED") . "<br>";
echo "Check hi@mdi.io inbox and spam folder.<br>";
echo "Log written.";
