<?php
require_once "../db.php";
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization"); 
header("Content-Type: application/json; charset=UTF-8");

// Sadəcə POST icazəlidir
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode([
        "status" => "error",
        "message" => "Only POST method allowed"
    ]);
    exit;
}

// URL-dən post_id alma
if (!isset($_GET['post_id'])) {
    echo json_encode([
        "status" => "error",
        "message" => "post_id is required (from URL)"
    ]);
    exit;
}

$post_id = intval($_GET['post_id']);

// POST body-ni oxu
$data = json_decode(file_get_contents("php://input"), true);

// Lazımi məlumatları yoxla
if (
    !isset($data['student_id']) ||
    !isset($data['comment_text'])
) {
    echo json_encode([
        "status" => "error",
        "message" => "Required fields: student_id, comment_text"
    ]);
    exit;
}

$student_id   = intval($data['student_id']);
$comment_text = trim($data['comment_text']);
$parent_id    = $data['parent_id'] ?? null;

try {
    $sql = "INSERT INTO comments
            ( post_id, student_id, comment_text, parent_id, created_at)
            VALUES (?, ?, ?, ?, NOW())";

    $stmt = $pdo->prepare($sql);
    $stmt->execute([
        $post_id,
        $student_id,
        $comment_text,
        $parent_id
    ]);

    echo json_encode([
        "status" => "success",
        "message" => "Comment added successfully",
        "comment_id" => $pdo->lastInsertId()
    ]);

} catch (PDOException $e) {
    echo json_encode([
        "status" => "error",
        "message" => $e->getMessage()
    ]);
}
