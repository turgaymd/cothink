<?php
require_once "../../db.php";

header("Content-Type: application/json; charset=UTF-8");

$post_id = intval($_GET['post_id']);
$data = json_decode(file_get_contents("php://input"), true);
$student_id = intval($data['student_id']);

try {
    $check = $pdo->prepare("
        SELECT id FROM post_likes
        WHERE student_id = ? AND post_id = ?
    ");
    $check->execute([$student_id, $post_id]);

    if ($check->rowCount() > 0) {
        echo json_encode(["status" => "exists"]);
        exit;
    }

    $pdo->prepare("
        INSERT INTO post_likes (student_id, post_id)
        VALUES (?, ?)
    ")->execute([$student_id, $post_id]);

    $pdo->prepare("
        UPDATE mentor_post SET likes = likes + 1
        WHERE post_id = ?
    ")->execute([$post_id]);

    echo json_encode(["status" => "liked"]);

} catch (PDOException $e) {
    echo json_encode(["status" => "error"]);
}
