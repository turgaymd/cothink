<?php
require_once "../db.php";

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST");

$data = json_decode(file_get_contents("php://input"), true);

$email = trim($data["mentor_name"] ?? '');
$password = trim($data["mentor_password"] ?? '');

if (!$email || !$password) {
    echo json_encode(["error" => "Bütün xanaları doldurun"]);
    exit;
}

// Emailə uyğun mentor tap
$query = $pdo->prepare("SELECT * FROM  mentors WHERE  mentor_email = ?");
$query->execute([$email]);
$user = $query->fetch(PDO::FETCH_ASSOC);

if (!$user) {
    echo json_encode(["error" => "Email və ya şifrə yanlışdır"]);
    exit;
}

// PASSWORD YOXLAMASI (hansı istifadə olunursa onu seç)
if ($password !== $user["mentor_password"]) {  
    // Əgər hash istifadə edirsənsə aşağıdakını işə sal
    // if (!password_verify($password, $user["mentor_password"])) {

    echo json_encode(["error" => "Email və ya şifrə yanlışdır"]);
    exit;
}

$token = bin2hex(random_bytes(32));

echo json_encode([
    "username" => $user["mentor_name"],
    "email" => $user["mentor_email"],
    "success" => true,
    "token" => $token
]);
?>