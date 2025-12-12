<?php
require_once "../db.php";
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization"); 
header("Content-Type: application/json; charset=UTF-8");

if (!isset($_GET['post_id'])) {
    echo json_encode([
        "status" => "error",
        "message" => "course_id is required"
    ]);
    exit;
}

$course_id = intval($_GET['post_id']);

try {
    $sql = "SELECT `id`, `post_id`, `comment_text`, `parent_id`, `student_id`, `created_at`, `likes`
            FROM `commentss`
            WHERE `post_id` = ?
            ORDER BY `created_at` ASC";

    $stmt = $conn->prepare($sql);
    $stmt->execute([$post_id]);

    $comments = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode([
        "status" => "success",
        "comments" => $comments
    ]);

} catch (PDOException $e) {
    echo json_encode([
        "status" => "error",
        "message" => $e->getMessage()
    ]);
}
