<?php
require_once "../../db.php";

header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if (!isset($_GET['course_id'])) {
    echo json_encode([
        "status" => "error",
        "message" => "course_id is required"
    ]);
    exit;
}

$course_id = intval($_GET['course_id']);

$data = json_decode(file_get_contents("php://input"), true);

if (!isset($data['student_id'])) {
    echo json_encode([
        "status" => "error",
        "message" => "student_id is required"
    ]);
    exit;
}

$student_id = intval($data['student_id']);

try {
    // Yoxla: course save olunubmu?
    $check = $pdo->prepare("
        SELECT id FROM saved_course
        WHERE student_id = ? AND course_id = ?
    ");
    $check->execute([$student_id, $course_id]);

    if ($check->rowCount() === 0) {
        echo json_encode([
            "status" => "not_found",
            "message" => "Course is not saved"
        ]);
        exit;
    }

    // Sil
    $stmt = $pdo->prepare("
        DELETE FROM saved_course
        WHERE student_id = ? AND course_id = ?
    ");
    $stmt->execute([$student_id, $course_id]);

    echo json_encode([
        "status" => "success",
        "message" => "Course unsaved successfully"
    ]);

} catch (PDOException $e) {
    echo json_encode([
        "status" => "error",
        "message" => $e->getMessage()
    ]);
}
?>
