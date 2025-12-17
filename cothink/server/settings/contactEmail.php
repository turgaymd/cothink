<?php
header("Content-Type: application/json; charset=UTF-8");

// CORS (React üçün)
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit;
}

require "../../../vendor/autoload.php";

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$name    = trim($_POST['name'] ?? '');
$email   = trim($_POST['email'] ?? '');
$phone   = trim($_POST['phone'] ?? '');
$message = trim($_POST['message'] ?? '');

if (!$email || !$phone || !$message) {
    echo json_encode([
        "status" => "error",
        "message" => "Bütün xanalar doldurulmalıdır"
    ]);
    exit;
}

$mail = new PHPMailer(true);

try { 
    $mail->isSMTP();
    $mail->Host       = "smtp.gmail.com";
    $mail->SMTPAuth   = true;
    $mail->Username   = "contact@cothink.az";   
    $mail->Password   = "ContactMailBox@CoThinkAz2025";      
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = 587;

    // EMAIL SETTINGS
    $mail->setFrom("contact@cothink.az", "Website Contact");
    $mail->addAddress("contact@cothink.az"); 

    $mail->isHTML(true);
    $mail->Subject = "Saytdan yeni əlaqə mesajı";
    $mail->Body = "
        <b>Ad:</b> $name <br>
        <b>Email:</b> $email <br>
        <b>Telefon:</b> $phone <br><br>
        <b>Mesaj:</b><br>
        $message
    ";

    $mail->send();

    echo json_encode([
        "status" => "success",
        "message" => "Mesaj uğurla göndərildi"
    ]);
} catch (Exception $e) {
    echo json_encode([
        "status" => "error",
        "message" => "Email göndərilmədi"
    ]);
}