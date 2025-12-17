<?php
require_once "../../db.php";

header("Content-Type: application/json; charset=UTF-8");

$course_id = intval($_GET['course_id']);
$data = json_decode(file_get_contents("php://input"), true);
$student_id = intval($data['student_id']);

try {
    $check = $pdo->prepare("
        SELECT id FROM course_likes
        WHERE student_id = ? AND course_id = ?
    ");
    $check->execute([$student_id, $course_id]);

    if ($check->rowCount() === 0) {
        echo json_encode(["status" => "not_liked"]);
        exit;
    }

    $pdo->prepare("
        DELETE FROM course_likes
        WHERE student_id = ? AND course_id = ?
    ")->execute([$student_id, $course_id]);

    $pdo->prepare("
        UPDATE mentor_course
        SET likes = GREATEST(likes - 1, 0)
        WHERE course_id = ?
    ")->execute([$course_id]);

    echo json_encode(["status" => "unliked"]);

} catch (PDOException $e) {
    echo json_encode(["status" => "error"]);
}
