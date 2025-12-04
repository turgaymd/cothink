<?php
require_once "../db.php";
require_once "../auth.php";

$user = require_auth();

$data = json_decode(file_get_contents("php://input"), true);
$post_id = $data["post_id"] ?? null;

$student_id = $user["student_id"] ?? null;
$mentor_id  = $user["mentor_id"] ?? null;

if (!$post_id) {
    echo json_encode(["error" => "Post ID yoxdur"]);
    exit;
}

if (!$student_id && !$mentor_id) {
    echo json_encode(["error" => "User tipi tapılmadı"]);
    exit;
}

$user_id = $student_id ?: $mentor_id;
$user_type = $student_id ? "student" : "mentor";

$stmt = $pdo->prepare("
    DELETE FROM saved_posts 
    WHERE user_id = ? AND post_id = ? AND user_type = ?
");

$stmt->execute([$user_id, $post_id, $user_type]);

echo json_encode([
    "success" => true,
    "message" => "Post unsaved"
]);
?>