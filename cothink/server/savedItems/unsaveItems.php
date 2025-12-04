<?php
require_once "../db.php";
require_once "../auth.php";

$user = require_auth();

$data = json_decode(file_get_contents("php://input"), true);
$content_id   = $data["content_id"] ?? null;
$content_type = $data["content_type"] ?? null;

$student_id = $user["student_id"] ?? null;
$mentor_id  = $user["mentor_id"] ?? null;

if (!$content_id || !$content_type || (!$student_id && !$mentor_id)) {
    echo json_encode(["error" => "Məlumat tam deyil"]);
    exit;
}

$user_id   = $student_id ?: $mentor_id;
$user_type = $student_id ? "student" : "mentor";

$stmt = $pdo->prepare("
    DELETE FROM saved_items
    WHERE user_id = ? AND user_type = ? AND content_id = ? AND content_type = ?
");
$stmt->execute([$user_id, $user_type, $content_id, $content_type]);

echo json_encode(["success" => true, "message" => "Content unsaved"]);
?>