<?php
require_once "db.php";

// CORS headers
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
header("Content-Type: application/json");

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

$data = json_decode(file_get_contents("php://input"), true);

$username = trim($data["username"] ?? '');
$email = trim($data["email"] ?? '');
$password = trim($data["password"] ?? '');

if (strlen($password) < 8) {
    echo json_encode(["error" => "Şifrə ən azı 8 simvol olmalıdır"]);
    exit;
}

// Check if email exists
$check = $pdo->prepare("SELECT student_id FROM student_table WHERE student_email = ?");
$check->execute([$email]);

if ($check->rowCount() > 0) {
    echo json_encode(["error" => "Bu email ilə artıq qeydiyyat var"]);
    exit;
}

// Hash password before saving
$hashedPassword = password_hash($password, PASSWORD_DEFAULT);

$query = $pdo->prepare("
    INSERT INTO student_table (student_name, student_email, student_password)
    VALUES (?, ?, ?)
");

try {
    $query->execute([$username, $email, $hashedPassword]);
} catch (Exception $e) {
    echo json_encode(["error" => "DB error: " . $e->getMessage()]);
    exit;
}

$token = bin2hex(random_bytes(32));

echo json_encode([
    "success" => true,
    "message" => "User registered successfully",
    "username" => $username,
    "email" => $email,
    "token" => $token
]);
exit;
?>