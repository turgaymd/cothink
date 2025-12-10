<?php
require_once "../../db.php";
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization"); 
header("Content-Type: application/json; charset=UTF-8");

if (!isset($_GET['student_id'])) {
    echo json_encode(["status" => "error", "message" => "student_id is required"]);
    exit;
}

$student_id = intval($_GET['student_id']);

try {
    $sql = "SELECT 
                sa.id AS saved_id,
                sa.student_id,
                sa.article_id,
                sa.saved_at,

                ma.article_title,
                ma.article_desc,
                ma.article_img,
                ma.likes,
                ma.saved,
                ma.category_id,
                c.category

            FROM saved_articles sa
            JOIN mentor_article ma ON sa.article_id = ma.article_id
            LEFT JOIN categories c ON ma.category_id = c.category_id
            WHERE sa.student_id = ?
            ORDER BY sa.saved_at DESC";

    $stmt = $conn->prepare($sql);
    $stmt->execute([$student_id]);
    $saved = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode(["status" => "success", "saved_articles" => $saved]);

} catch (PDOException $e) {
    echo json_encode(["status" => "error", "message" => $e->getMessage()]);
}
