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

// URL-dən id götür
$id = $_GET['post_id'] ?? null;

if (!$id) {
    echo json_encode([
        "status" => "error",
        "message" => "Post ID göndərilməyib"
    ]);
    exit;
}

try {

    $sql = "
        SELECT 
            p.post_id,
            p.post_title, 
            p.post_desc, 
            p.post_img,
            p.post_tags,
            p.created_at,
            p.mentor_id,
            p.category_id,

            m.mentor_name,

            c.category AS category

        FROM mentor_post p
        LEFT JOIN mentors m ON p.mentor_id = m.mentor_id
        LEFT JOIN categories c ON p.category_id = c.category_id
        WHERE p.post_id = ?
    ";

    $stmt = $conn->prepare($sql);
    $stmt->execute([$id]);

    $post = $stmt->fetch(PDO::FETCH_ASSOC);

    if (!$post) {
        echo json_encode([
            "status" => "error",
            "message" => "Post tapılmadı"
        ]);
        exit;
    }

    echo json_encode([
        "status" => "success",
        "data" => $post
    ]);

} catch (PDOException $e) {
    echo json_encode([
        "status" => "error",
        "message" => $e->getMessage()
    ]);
}
?>
