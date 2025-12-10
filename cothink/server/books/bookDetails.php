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

// ?id=5 gəlir
$id = $_GET['book_id'] ?? null;

if (!$id) {
    echo json_encode([
        "status" => "error",
        "message" => "Book ID göndərilməyib"
    ]);
    exit;
}

try {
    $sql = "
        SELECT 
            b. *,
            m.mentor_name, 

            c.category AS category 

        FROM mentor_books AS b
        LEFT JOIN mentors AS m
            ON b.mentor_id = m.mentor_id
        LEFT JOIN categories AS c
            ON b.category_id = c.category_id
        WHERE b.book_id = ?
    ";

    $stmt = $conn->prepare($sql);
    $stmt->execute([$id]);

    $book = $stmt->fetch(PDO::FETCH_ASSOC);

    if (!$book) {
        echo json_encode([
            "status" => "error",
            "message" => "Kitab tapılmadı"
        ]);
        exit;
    }

    echo json_encode([
        "status" => "success",
        "data" => $book
    ]);
    
} catch (PDOException $e) {
    echo json_encode([
        "status" => "error",
        "message" => $e->getMessage()
    ]);
}
?>
