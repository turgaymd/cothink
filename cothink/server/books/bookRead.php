<?php
require_once "../db.php";

// CORS header-ləri
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}


header("Content-Type: application/json");

// get all or get by id
$id = $_GET['id'] ?? null;

if ($id) {
    $sql = "SELECT book_title, book_img FROM mentor_books WHERE id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->execute([$id]);

    $data = $stmt->fetch(PDO::FETCH_ASSOC);
} else {
    $sql = "SELECT * FROM mentor_books";
    $stmt = $conn->prepare($sql);
    $stmt->execute();

    $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
}

echo json_encode(["status" => "success", "data" => $data]);
?>
