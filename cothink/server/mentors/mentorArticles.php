<?php
// CORS header-ləri
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

require_once "../db.php";

try {
    $stmt = $conn->query("
        SELECT 
            ma.article_id,
            ma.article_title,
            ma.article_topic,
            ma.created_at,
            ma.category_id,

            m.mentor_name,
            c.category

        FROM mentor_article AS ma
        LEFT JOIN mentors AS m 
            ON ma.mentor_id = m.mentor_id
        LEFT JOIN categories AS c
            ON ma.category_id = c.category_id
    ");

    $articles = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($articles);

} catch (PDOException $e) {
    echo json_encode([
        'status' => 'error',
        'message' => $e->getMessage()
    ]);
}