<?php
require_once "../../db.php";
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization"); 
header("Content-Type: application/json; charset=UTF-8");

if (!isset($_GET['student_id'])) {
    echo json_encode([
        "status" => "error",
        "message" => "student_id is required"
    ]);
    exit;
}

$student_id = intval($_GET['student_id']);

try {
    $sql = "SELECT 
                sb.id AS saved_id,
                sb.student_id,
                sb.book_id,
                sb.saved_at,

                mb.book_title,
                mb.description,
                mb.book_img,
                mb.likes,
                mb.saved,
                mb.category_id, 
                c.category

            FROM saved_books sb
            JOIN mentor_books mb ON sb.book_id = mb.book_id
            JOIN categories c ON mb.category_id = c.category_id
            WHERE sb.student_id = ?
            ORDER BY sb.saved_at DESC";

    $stmt = $conn->prepare($sql);
    $stmt->execute([$student_id]);

    $saved = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode([
        "status" => "success",
        "saved_books" => $saved
    ]);

} catch (PDOException $e) {
    echo json_encode(["status" => "error", "message" => $e->getMessage()]);
}
