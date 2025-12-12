<?php
// CORS header-ləri
require_once "../db.php";

header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// GET-dən mentor_id götür
if (!isset($_GET['mentor_id'])) {
    echo json_encode(["status" => "error", "message" => "mentor_id missing"]);
    exit;
}

$mentor_id = intval($_GET['mentor_id']);

try {

    $stmt = $conn->prepare("
        SELECT 
            b.book_id,
            b.book_title,  
            b.book_img,  
            b.created_at,

            m.mentor_name,
            m.profile_img
        FROM mentor_books AS b
        LEFT JOIN mentors AS m
            ON b.mentor_id = m.mentor_id
        WHERE b.mentor_id = ?
    ");

    $stmt->execute([$mentor_id]);
    $books = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($books);

} catch (PDOException $e) {

    echo json_encode([
        'status' => 'error',
        'message' => $e->getMessage()
    ]);
}
