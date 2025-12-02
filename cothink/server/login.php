<?php
require_once "db.php";

session_start();

// CORS
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Credentials: true");

header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// JSON request oxu
$data = json_decode(file_get_contents("php://input"), true);

$email    = trim($data["email"] ?? '');
$password = trim($data["password"] ?? '');

// DB QUERY
try {
    $query = $pdo->prepare("
        SELECT student_id, student_name, student_email, student_password 
        FROM student_table 
        WHERE student_email = ?
    ");
    $query->execute([$email]);
    $user = $query->fetch(PDO::FETCH_ASSOC);

} catch (Exception $e) {
    echo json_encode(["error" => "DB error: " . $e->getMessage()]);
    exit;
}
$_SESSION["student_id"] = $user["student_id"];

// İstifadəçi tapılmadı
// if (!$user) {
//     echo json_encode(["error" => "Email və ya şifrə yanlışdır"]);
//     exit;
// }

// Şifrə yoxla (plaintext)
// if ($password !== $user["student_password"]) {
//     echo json_encode(["error" => "Email və ya şifrə yanlışdır"]);
//     exit;
// }

// SESSION yaz

// Token yarat
$token = bin2hex(random_bytes(32));

echo json_encode([
    "success"  => true,
    "username" => $user["student_name"],
    "student_id"       => $user["student_id"],
    "email"    => $user["student_email"],
    "token"    => $token
]);

