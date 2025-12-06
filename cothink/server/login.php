<?php
require_once "db.php";
session_start();

// CORS headers
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Credentials: true");
header("Content-Type: application/json");

// OPTIONS request üçün
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// JSON body oxu
$data = json_decode(file_get_contents("php://input"), true);
$email = trim($data["email"] ?? '');
$password = trim($data["password"] ?? '');

if (!$email || !$password) {
    echo json_encode(["error" => "Email və şifrə tələb olunur"]);
    exit;
}

try {
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // =====================
    //      STUDENT LOGIN
    // =====================
    $stmt = $pdo->prepare("
        SELECT student_id, student_email, student_password
        FROM student_table
        WHERE student_email = ?
    ");
    $stmt->execute([$email]);
    $student = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($student && $student["student_password"]) {
        $_SESSION["student_id"] = $student["student_id"];
        $token = bin2hex(random_bytes(32));

        echo json_encode([
            "success" => true,
            "type"    => "student",
            "id"      => $student["student_id"],
            "email"   => $student["student_email"],
            "token"   => $token
        ]);
        exit;
    }

    // =====================
    //      MENTOR LOGIN
    // =====================
    $stmt = $pdo->prepare("
        SELECT mentor_id, mentor_email, mentor_password
        FROM mentors
        WHERE mentor_email = ?
    ");
    $stmt->execute([$email]);
    $mentor = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($mentor && $mentor["mentor_password"]) {
        $_SESSION["mentor_id"] = $mentor["mentor_id"];
        $token = bin2hex(random_bytes(32));

        echo json_encode([
            "success" => true,
            "type"    => "mentor",
            "id"      => $mentor["mentor_id"],
            "email"   => $mentor["mentor_email"],
            "token"   => $token
        ]);
        exit;
    }

    // Əgər heç biri yoxdursa
    echo json_encode(["error" => "Email və ya şifrə yanlışdır"]);
    exit;

} catch (Exception $e) {
    echo json_encode(["error" => "DB error: " . $e->getMessage()]);
    exit;
}
?>
