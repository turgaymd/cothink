<?php
session_start();
require_once "../db.php";

// CORS
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json");

// OPTIONS preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

// JSON oxu
$data = json_decode(file_get_contents("php://input"), true);

$name         = trim($data["name"] ?? '');
$email        = trim($data["email"] ?? '');
$linkedinLink = trim($data["linkedinLink"] ?? '');
$category     = trim($data["category"] ?? '');
$position     = trim($data["position"] ?? '');
$password     = trim($data["password"] ?? '');

// Validation
if (!$name || !$email || !$password) {
    echo json_encode(["error" => "Bütün xanaları doldurun"]);
    exit;
}

if (strlen($password) < 8) {
    echo json_encode(["error" => "Şifrə ən azı 8 simvol olmalıdır"]);
    exit;
}

// Email mövcuddur?
$check = $pdo->prepare("SELECT mentor_id FROM mentors WHERE mentor_email = ?");
$check->execute([$email]);

if ($check->rowCount() > 0) {
    echo json_encode(["error" => "Bu email ilə artıq qeydiyyat var"]);
    exit;
}

// Şifrəni HASH ET!
// $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

// INSERT
$query = $pdo->prepare("
    INSERT INTO mentors (mentor_name, mentor_email, linkedn_link, category_id, mentor_password)
    VALUES (?, ?, ?, ?, ?)
");

try {
    $query->execute([$name, $email, $linkedinLink, $category, $password]);
} catch (Exception $e) {
    echo json_encode(["error" => "DB error: " . $e->getMessage()]);
    exit;
}

// Yeni id
$mentor_id = $pdo->lastInsertId();

// Session-a yaz (istəsən)
$_SESSION["mentor_id"] = $mentor_id;

// Token yarat
$token = bin2hex(random_bytes(32));

// Response
echo json_encode([
    "success" => true,
    "message" => "Mentor uğurla qeydiyyatdan keçdi",
    "mentor_id" => $mentor_id,
    "name" => $name,
    "email" => $email,
    "linkedinLink" => $linkedinLink,
    "category" => $category, 
    "token" => $token
]);

exit;
?>
