<?php
require_once "db.php";

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST");
 
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

$data = json_decode(file_get_contents("php://input"), true);

$name = trim($data["name"] ?? '');
$email = trim($data["email"] ?? '');
$password = trim($data["password"] ?? '');

// if (!$name || !$email || !$password) {
//     echo json_encode(["error" => "Bütün xanaları doldurun"]);
//     exit;
// }

if (strlen($password) < 8) {
    echo json_encode(["error" => "Şifrə ən azı 8 simvol olmalıdır"]);
    exit;
}

// email var?
$check = $pdo->prepare("SELECT student_id FROM student_table WHERE student_email = ?");
$check->execute([$email]);

if ($check->rowCount() > 0) {
    echo json_encode(["error" => "Bu email ilə artıq qeydiyyat var"]);
    exit;
}

// ŞİFRƏNİ HASH ET! 
// $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

$query = $pdo->prepare("
    INSERT INTO student_table (student_name, student_email, student_password)
    VALUES (?, ?, ?)
");

try {
    $query->execute([$name, $email, $password]);
} catch (Exception $e) {
    echo json_encode(["error" => "DB error: " . $e->getMessage()]);
    exit;
}

$token = bin2hex(random_bytes(32));

echo json_encode([
    "username" => $name,
    "email" => $email,
    "success" => true,
    "token" => $token
]);
 
?>