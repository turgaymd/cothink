<?php
require_once "../db.php";

header("Content-Type: application/json; charset=UTF-8");

$data = json_decode(file_get_contents("php://input"), true);

$course_id    = $data['course_id']   ?? null;
$student_id   = $data['student_id']  ?? null;
$comment_text = $data['comment_text'] ?? null;
$parent_id    = $data['parent_id']    ?? null; // optional

if (!$course_id || !$student_id || !$comment_text) {
    echo json_encode([
        "status" => "error",
        "message" => "course_id, student_id və comment_text tələb olunur"
    ]);
    exit;
}

try {
    $sql = "INSERT INTO course_comment (course_id, comment_text, parent_id, student_id, created_at, likes)
            VALUES (?, ?, ?, ?, NOW(), 0)";

    $stmt = $conn->prepare($sql);
    $stmt->execute([
        $course_id,
        $comment_text,
        $parent_id,
        $student_id
    ]);

    echo json_encode([
        "status" => "success",
        "message" => "Comment added successfully",
        "comment_id" => $conn->lastInsertId()
    ]);

} catch (PDOException $e) {
    echo json_encode([
        "status" => "error",
        "message" => $e->getMessage()
    ]);
}
