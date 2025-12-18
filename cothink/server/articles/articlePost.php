<?php
require_once "../db.php";
session_start();

// CORS
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type,Authorization");
header("Access-Control-Allow-Credentials: true");
header("Content-Type: application/json");

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(200);
    exit;
}

// ===============================
//   JSON REQUEST OXUMAQ
// ===============================
$data = json_decode(file_get_contents("php://input"), true);

$mentor_id     = $_POST['mentor_id'] ?? null;
$article_title = $_POST['article_title'] ?? null;
$article_topic = $_POST['article_topic'] ?? null;
$article_desc  = $_POST['article_desc'] ?? null;
$category_id   = $_POST['category_id'] ?? null;
$article_tags  = $_POST['article_tags'] ?? null;

// Şəkil üçün
$article_img = null;
if (isset($_FILES['article_img'])) {
    $file = $_FILES['article_img'];
    $ext = pathinfo($file['name'], PATHINFO_EXTENSION);
    $filename = time() . "_article." . $ext;
    $upload_dir = "../uploads/articles";
    if (!file_exists($upload_dir)) mkdir($upload_dir, 0777, true);
    if (move_uploaded_file($file['tmp_name'], $upload_dir . $filename)) {
        $article_img = "../uploads/articles" . $filename;
    }
}
 

$sql = "
    INSERT INTO mentor_article 
    ( article_title, article_topic,  mentor_id, article_desc, article_img, category_id, article_tags)
    VALUES ( ?, ?, ?, ?, ?, ?, ?)
";

$stmt = $conn->prepare($sql);

$success = $stmt->execute([
    $mentor_id,
    $article_title,
    $article_topic,
    $article_desc,
    $article_img,
    $category_id,
    $article_tags
]);

// ===============================
//          RESPONSE
// ===============================

if ($success) {
    echo json_encode([
        "status" => "success",
        "message" => "Post yaradıldı"
    ]);
} else {
    echo json_encode([
        "status" => "error",
        "message" => "Insert failed"
    ]);
}
