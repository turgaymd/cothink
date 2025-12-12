<?php
require_once "../db.php";
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization"); 
header("Content-Type: application/json; charset=UTF-8");

if (!isset($_GET['article_id'])) {
    echo json_encode([
        "status" => "error",
        "message" => "article_id is required"
    ]);
    exit;
}

$article_id = intval($_GET['article_id']);

try {
 $sql = "SELECT 
            ac.id,
            ac.article_id,
            ac.comment_text,
            ac.parent_id,
            ac.student_id,
            ac.created_at,
            ac.likes,
            s.student_name,
            s.profile_img
        FROM article_comment ac
        LEFT JOIN student_table s ON ac.student_id = s.student_id
        WHERE ac.article_id = ?
        ORDER BY ac.created_at ASC";

    $stmt = $conn->prepare($sql);
    $stmt->execute([$article_id]);

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
