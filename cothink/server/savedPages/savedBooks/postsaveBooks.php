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
 
if (!isset($_GET['book_id'])) {
    echo json_encode([
        "status" => "error",
        "message" => "book_id is required"
    ]);
    exit;
}

$book_id = intval($_GET['book_id']);
 
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
    $check = $pdo->prepare("
        SELECT id FROM saved_books 
        WHERE student_id = ? AND book_id = ?
    ");
    $check->execute([$student_id, $book_id]);

    if ($check->rowCount() > 0) {
        echo json_encode([
            "status" => "exists",
            "message" => "Book already saved"
        ]);
        exit;
    }
 
    $sql = "
        INSERT INTO saved_books (student_id, book_id, saved_at)
        VALUES (?, ?, NOW())
    ";

    $stmt = $pdo->prepare($sql);
    $stmt->execute([$student_id, $book_id]);

    echo json_encode([
        "status" => "success",
        "message" => "Book saved successfully",
        "saved_id" => $pdo->lastInsertId()
    ]);

} catch (PDOException $e) {
    echo json_encode([
        "status" => "error",
        "message" => $e->getMessage()
    ]);
}
?>
