<?php
require_once "../db.php";

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
    $sql = "SELECT `id`, `article_id`, `comment_text`, `parent_id`, `student_id`, `created_at`, `likes`
            FROM `article_comment`
            WHERE `article_id` = ?
            ORDER BY `created_at` ASC";

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
