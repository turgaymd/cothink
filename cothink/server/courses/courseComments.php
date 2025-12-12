<?php
require_once "../db.php";
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization"); 
header("Content-Type: application/json; charset=UTF-8");

if (!isset($_GET['course_id'])) {
    echo json_encode([
        "status" => "error",
        "message" => "course_id is required"
    ]);
    exit;
}

$course_id = intval($_GET['course_id']);

try {
 $sql = "SELECT 
            cc.id,
            cc.course_id,
            cc.comment_text,
            cc.parent_id,
            cc.student_id,
            cc.created_at,
            cc.likes,
            s.student_name,
            s.profile_img
        FROM course_comment cc
        LEFT JOIN student_table s ON cc.student_id = s.student_id
        WHERE cc.course_id = ?
        ORDER BY cc.created_at ASC";


    $stmt = $conn->prepare($sql);
    $stmt->execute([$course_id]);

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
