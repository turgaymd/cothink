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

    if ($check->rowCount() === 0) {
        echo json_encode(["status" => "not_liked"]);
        exit;
    }

    $pdo->prepare("
        DELETE FROM post_likes
        WHERE student_id = ? AND post_id = ?
    ")->execute([$student_id, $post_id]);

    $pdo->prepare("
        UPDATE mentor_post
        SET likes = GREATEST(likes - 1, 0)
        WHERE post_id = ?
    ")->execute([$post_id]);

    echo json_encode(["status" => "unliked"]);

} catch (PDOException $e) {
    echo json_encode(["status" => "error"]);
}
