<?php
require_once "../db.php";
require_once "../auth.php";

$user = require_auth();

$data = json_decode(file_get_contents("php://input"), true);
$content_id   = $data["content_id"] ?? null;
$content_type = $data["content_type"] ?? null; // book / course / article

if (!$content_id || !$content_type) {
    echo json_encode(["error" => "Content məlumatları tam deyil"]);
    exit;
}

$student_id = $user["student_id"] ?? null;
$mentor_id  = $user["mentor_id"] ?? null;

if (!$student_id && !$mentor_id) {
    echo json_encode(["error" => "User tipi tapılmadı"]);
    exit;
}

$user_id   = $student_id ?: $mentor_id;
$user_type = $student_id ? "student" : "mentor";

// Content cədvəlini seçək
if ($user_type === "student") {
    $table = "student_" . $content_type . "s"; // student_books, student_courses, student_articles
} else {
    $table = "mentor_" . $content_type . "s";
}

// Contentin həqiqətən mövcudluğunu yoxla
$check = $pdo->prepare("SELECT id FROM $table WHERE id = ?");
$check->execute([$content_id]);

if ($check->rowCount() === 0) {
    echo json_encode(["error" => "Belə content yoxdur"]);
    exit;
}

// Save et
$query = $pdo->prepare("
    INSERT IGNORE INTO saved_items (user_id, user_type, content_id, content_type)
    VALUES (?, ?, ?, ?)
");
$query->execute([$user_id, $user_type, $content_id, $content_type]);

echo json_encode(["success" => true, "message" => "Content saved"]);
?>