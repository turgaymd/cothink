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

if (!isset($_GET['post_id'])) {
    echo json_encode([
        "status" => "error",
        "message" => "post_id is required"
    ]);
    exit;
}

$post_id = intval($_GET['post_id']);

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
    // Yoxla: post save olunubmu?
    $check = $pdo->prepare("
        SELECT id FROM saved_posts
        WHERE student_id = ? AND post_id = ?
    ");
    $check->execute([$student_id, $post_id]);

    if ($check->rowCount() === 0) {
        echo json_encode([
            "status" => "not_found",
            "message" => "Post is not saved"
        ]);
        exit;
    }

    // Sil
    $stmt = $pdo->prepare("
        DELETE FROM saved_posts
        WHERE student_id = ? AND post_id = ?
    ");
    $stmt->execute([$student_id, $post_id]);

    echo json_encode([
        "status" => "success",
        "message" => "Post unsaved successfully"
    ]);

} catch (PDOException $e) {
    echo json_encode([
        "status" => "error",
        "message" => $e->getMessage()
    ]);
}
?>
