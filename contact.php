<?php
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

$to      = 'hi@mdi.io';
$subject = 'Torin Works — New Assessment Request from ' . $name;

$body = "Name: $name\n";
$body .= "Email: $email\n";
$body .= "Phone: $phone\n";
$body .= "Practice: $practice\n";
$body .= "Message:\n$message\n";

$headers = "Reply-To: $email\r\n";
$headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";

$mailSent = mail($to, $subject, $body, $headers);

if ($mailSent) {
    echo json_encode(['success' => true]);
} else {
    echo json_encode(['success' => false, 'error' => 'Mail failed']);
}
