<?php
require_once "../db.php";
require_once "../auth.php";

$user = require_auth();

// User tipini müəyyənləşdirək
$student_id = $user["student_id"] ?? null;
$mentor_id  = $user["mentor_id"] ?? null;

if (!$student_id && !$mentor_id) {
    echo json_encode(["error" => "User tipi müəyyən edilə bilmədi"]);
    exit;
}

$user_id = $student_id ?: $mentor_id;
$user_type = $student_id ? "student" : "mentor";

// Student-mentor üçün düzgün cədvəli seçirik
$post_table = $student_id ? "student_posts" : "mentor_posts";

$sql = "
    SELECT p.*
    FROM saved_posts s
    JOIN $post_table p ON s.post_id = p.id
    WHERE s.user_id = ? AND s.user_type = ?
";

$stmt = $pdo->prepare($sql);
$stmt->execute([$user_id, $user_type]);

$posts = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode([
    "success" => true,
    "saved_posts" => $posts
]);
?>