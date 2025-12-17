<?php
require_once "../../db.php";

header("Content-Type: application/json; charset=UTF-8");

$article_id = intval($_GET['article_id']);
$data = json_decode(file_get_contents("php://input"), true);
$student_id = intval($data['student_id']);

try {
    $check = $pdo->prepare("
        SELECT id FROM article_likes
        WHERE student_id = ? AND article_id = ?
    ");
    $check->execute([$student_id, $article_id]);

    if ($check->rowCount() === 0) {
        echo json_encode(["status" => "not_liked"]);
        exit;
    }

    $pdo->prepare("
        DELETE FROM article_likes
        WHERE student_id = ? AND article_id = ?
    ")->execute([$student_id, $article_id]);

    $pdo->prepare("
        UPDATE mentor_article
        SET likes = GREATEST(likes - 1, 0)
        WHERE article_id = ?
    ")->execute([$article_id]);

    echo json_encode(["status" => "unliked"]);

} catch (PDOException $e) {
    echo json_encode(["status" => "error"]);
}
