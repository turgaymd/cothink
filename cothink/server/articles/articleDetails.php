<?php
// CORS
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

require_once "../db.php";

// URL-də ?id=23 kimi gəlir
$article_id = $_GET['article_id'] ?? null;

if (!$article_id) {
    echo json_encode([
        'status' => 'error',
        'message' => 'Article ID göndərilməyib'
    ]);
    exit;
}

try {

    $stmt = $conn->prepare("
        SELECT 
            ma.article_id,
            ma.article_title,
            ma.article_topic, 
            ma.article_desc, 
            ma.article_img,
            ma.article_tags,
            ma.created_at,
            ma.mentor_id,
            ma.category_id,
            ma.likes,
            ma.saved,

            m.mentor_name, 
            m.profile_img, 

            c.category

        FROM mentor_article AS ma
        LEFT JOIN mentors AS m ON ma.mentor_id = m.mentor_id
        LEFT JOIN categories AS c ON ma.category_id = c.category_id
        WHERE ma.article_id = :article_id
    ");

    $stmt->execute([':article_id' => $article_id]);
    $article = $stmt->fetch(PDO::FETCH_ASSOC);

    if (!$article) {
        echo json_encode([
            'status' => 'error',
            'message' => 'Məqalə tapılmadı'
        ]);
        exit;
    }

    echo json_encode([
        'status' => 'success',
        'data' => $article
    ]);

} catch (PDOException $e) {
    echo json_encode([
        'status' => 'error',
        'message' => $e->getMessage()
    ]);
}