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

    if ($check->rowCount() > 0) {
        echo json_encode(["status" => "exists"]);
        exit;
    }

    $pdo->prepare("
        INSERT INTO course_likes (student_id, course_id)
        VALUES (?, ?)
    ")->execute([$student_id, $course_id]);

    $pdo->prepare("
        UPDATE mentor_course SET likes = likes + 1
        WHERE course_id = ?
    ")->execute([$course_id]);

    echo json_encode(["status" => "liked"]);

} catch (PDOException $e) {
    echo json_encode(["status" => "error"]);
}
