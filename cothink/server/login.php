<?php
require_once "db.php";

// CORS
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Credentials: true");

// JSON cavab
header("Content-Type: application/json");

// Preflight OPTIONS cavabı
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// JSON request oxu
$data = json_decode(file_get_contents("php://input"), true);

$email    = trim($data["email"] ?? '');
$password = trim($data["password"] ?? '');

// ============================
//  VALIDATION
// ============================

// Boş input yoxlaması
// if (!$email || !$password) {
//     echo json_encode(["error" => "Bütün xanaları doldurun"]);
//     exit;
// }

// Email format validation
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(["error" => "Email düzgün formatda deyil"]);
    exit;
}

// ============================
//  DB QUERY
// ============================

try {
    $query = $pdo->prepare("SELECT * FROM student_table WHERE student_email = ?");
    $query->execute([$email]);
    $user = $query->fetch(PDO::FETCH_ASSOC);
} catch (Exception $e) {
    echo json_encode(["error" => "DB error: " . $e->getMessage()]);
    exit;
}

// User tapılmadı
if (!$user) {
    echo json_encode(["error" => "Email və ya şifrə yanlışdır"]);
    exit;
}

// Şifrə yoxlaması (plaintext)
if ($password !== $user["student_password"]) {
    echo json_encode(["error" => "Email və ya şifrə yanlışdır"]);
    exit;
}

// Token yaradılır (DB-də saxlanmır)
$token = bin2hex(random_bytes(32));

// Uğurlu cavab
echo json_encode([
    "success"  => true,
    "username" => $user["name"],
    "email"    => $user["email"],
    "token"    => $token
]);
?>
