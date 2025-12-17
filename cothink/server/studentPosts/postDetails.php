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
            sp.post_id,
            sp.post_title, 
            sp.post_desc, 
            sp.post_img,
            sp.post_tags,
            sp.created_at,
            sp.mentor_id,
            sp.category_id,

            st.student_name,

            c.category AS category

        FROM student_post sp
        LEFT JOIN student_table st ON sp.student_id = st.student_id
        LEFT JOIN categories c ON sp.category_id = c.category_id
        WHERE sp.post_id = ?
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
