<?php
// CORS header-ləri
require_once "../db.php";
<<<<<<< HEAD
=======
session_start();
>>>>>>> 93ce575b66fa678a15fc6a8d8735e8c0f67daffd

header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

<<<<<<< HEAD
// FRONTEND-DƏN mentor_id QƏBUL ET
$data = json_decode(file_get_contents("php://input"), true);

if (!isset($data['mentor_id'])) {
    echo json_encode(["status" => "error", "message" => "mentor_id missing"]);
    exit;
}

$mentor_id = intval($data['mentor_id']);

try {
    $stmt = $conn->prepare("
=======

// MENTOR ID SESSION-DAN
if (!isset($_SESSION['mentor_id'])) {
    echo json_encode(["status" => "error", "message" => "Mentor not logged in"]);
    exit;
}

$mentor_id = $_SESSION['mentor_id'];


try {
    $stmt = $conn->query("
>>>>>>> 93ce575b66fa678a15fc6a8d8735e8c0f67daffd
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
<<<<<<< HEAD
        WHERE ma.mentor_id = ?
    ");

    $stmt->execute([$mentor_id]);

=======
    ");

>>>>>>> 93ce575b66fa678a15fc6a8d8735e8c0f67daffd
    $articles = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($articles);

} catch (PDOException $e) {
<<<<<<< HEAD

=======
>>>>>>> 93ce575b66fa678a15fc6a8d8735e8c0f67daffd
    echo json_encode([
        'status' => 'error',
        'message' => $e->getMessage()
    ]);
<<<<<<< HEAD
}
=======
}
>>>>>>> 93ce575b66fa678a15fc6a8d8735e8c0f67daffd
