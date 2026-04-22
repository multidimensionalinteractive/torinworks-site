<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

$to = 'hi@mdi.io';
$fallback = 'matthaydon@gmail.com';

$raw = file_get_contents('php://input');
$data = json_decode($raw, true);

if (!$data) {
    echo json_encode(['success' => false, 'error' => 'Invalid input']);
    exit;
}

$name     = htmlspecialchars($data['name'] ?? '');
$email    = filter_var($data['email'] ?? '', FILTER_SANITIZE_EMAIL);
$phone    = htmlspecialchars($data['phone'] ?? '');
$practice = htmlspecialchars($data['practice'] ?? '');
$message  = htmlspecialchars($data['message'] ?? '');

if (empty($name) || empty($email)) {
    echo json_encode(['success' => false, 'error' => 'Name and email are required']);
    exit;
}

$subject = "Torin Works Assessment Request from $name";
$body  = "New assessment request submitted via torinworks.com\n\n";
$body .= "Name: $name\n";
$body .= "Email: $email\n";
$body .= "Phone: $phone\n";
$body .= "Practice: $practice\n";
$body .= "Message:\n$message\n";

$headers = "From: noreply@torinworks.com\r\n";
$headers .= "Reply-To: $email\r\n";

$sent = mail($to, $subject, $body, $headers);
if (!$sent) {
    $sent = mail($fallback, $subject, $body, $headers);
}

if ($sent) {
    echo json_encode(['success' => true]);
} else {
    echo json_encode(['success' => false, 'error' => 'Mail delivery failed']);
}
