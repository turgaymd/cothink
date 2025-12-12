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

$post_id = intval($_GET['post_id']);

try {
$sql = "SELECT 
            c.id,
            c.post_id,
            c.comment_text,
            c.parent_id,
            c.student_id,
            c.created_at,
            c.likes,
            s.student_name,
            s.profile_img
        FROM comments c
        LEFT JOIN student_table s ON c.student_id = s.student_id
        WHERE c.post_id = ?
        ORDER BY c.created_at ASC";


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
