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

    $sql = "
        SELECT 
            sc.id AS saved_id,
            sc.student_id,
            sc.course_id,
            sc.saved_at,

            mc.course_title,
            mc.description AS course_desc,
            mc.thumbnail AS course_img,
            mc.category_id,
            cat.category,
            mc.duration,
            mc.level,
            mc.price,
            'course' AS type

        FROM saved_courses sc
        JOIN mentor_course mc ON sc.course_id = mc.course_id
        LEFT JOIN categories cat ON c.category_id = cat.category_id
        WHERE sc.student_id = ?
        ORDER BY sc.saved_at DESC
    ";

    $stmt = $conn->prepare($sql);
    $stmt->execute([$student_id]);
    $saved = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode([
        "status" => "success",
        "saved_courses" => $saved
    ]);

} catch (PDOException $e) {
    echo json_encode([
        "status" => "error",
        "message" => $e->getMessage()
    ]);
}
