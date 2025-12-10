<?php
require_once "../db.php";

header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json");

// OPTIONS sorğusu üçün
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// FRONTEND-DƏN mentor_id QƏBUL ET
$data = json_decode(file_get_contents("php://input"), true);

// GET-dən mentor_id götür
if (!isset($_GET['mentor_id'])) {
    echo json_encode(["status" => "error", "message" => "mentor_id missing"]);
    exit;
}

$mentor_id = intval($_GET['mentor_id']);

try {

    $stmt = $conn->prepare("
        SELECT 
            p.*,

            m.mentor_name,
            m.profile_img
        FROM mentor_post AS p
        LEFT JOIN mentors AS m
            ON p.mentor_id = m.mentor_id
        WHERE p.mentor_id = ?
    ");

    $stmt->execute([$mentor_id]);
    $posts = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($posts);

} catch (PDOException $e) {

    echo json_encode([
        "status" => "error",
        "message" => $e->getMessage()
    ]);
}
