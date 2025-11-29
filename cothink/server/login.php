<?php
require_once "db.php";

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST");

$data = json_decode(file_get_contents("php://input"), true);

$email = trim($data["student_email"] ?? '');
$password = trim($data["student_password"] ?? '');

if (!$email || !$password) {
    echo json_encode(["error" => "Bütün xanaları doldurun"]);
    exit;
}

// Emailə uyğun mentor tap
$query = $pdo->prepare("SELECT * FROM student_table WHERE student_email = ?");
$query->execute([$email]);
$user = $query->fetch(PDO::FETCH_ASSOC);

if (!$user) {
    echo json_encode(["error" => "Email və ya şifrə yanlışdır"]);
    exit;
}

// PASSWORD YOXLAMASI (hansı istifadə olunursa onu seç)
if ($password !== $user["student_password"]) {  
    // Əgər hash istifadə edirsənsə aşağıdakını işə sal
    // if (!password_verify($password, $user["mentor_password"])) {

    echo json_encode(["error" => "Email və ya şifrə yanlışdır"]);
    exit;
}

$token = bin2hex(random_bytes(32));

echo json_encode([
    "username" => $user["student_name"],
    "email" => $user["student_email"],
    "success" => true,
    "token" => $token
]);
?>