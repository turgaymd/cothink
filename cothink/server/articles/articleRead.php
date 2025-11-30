<?php
// CORS header-ləri
header("Access-Control-Allow-Origin: http://localhost:5173"); // frontend URL
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json");

// Preflight request üçün
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

require_once "../db.php"; // PDO connection

try {
    $stmt = $conn->query("SELECT article_id, article_title, article_topic, category_id FROM mentor_article");
    $articles = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($articles);

} catch (PDOException $e) {
    echo json_encode([
        'status' => 'error',
        'message' => $e->getMessage()
    ]);
}