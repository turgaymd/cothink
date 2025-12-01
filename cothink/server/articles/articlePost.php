<?php
require_once "../db.php";
session_start(); // Mütləq əlavə olunmalıdır

header("Content-Type: application/json");

$data = json_decode(file_get_contents("php://input"), true);

$article_title = $data['article_title'] ?? null;
$description   = $data['description'] ?? null;
$catagory_id   = $data['catagory_id'] ?? null;
$tags          = $data['tags'] ?? null;
$article_img   = $data['article_img'] ?? null;
$article_topic = $data['article_topic'] ?? null;

// mentor_id artıq SESSION-dan gəlir
$mentor_id = $_SESSION["mentor_id"] ?? null;

if (!$mentor_id) {
    echo json_encode(["status" => "error", "message" => "Mentor not logged in"]);
    exit;
}

if (!$article_title || !$description) {
    echo json_encode(["status" => "error", "message" => "Required fields missing"]);
    exit;
}

$sql = "INSERT INTO mentor_article 
(article_title, description, mentor_id, catagory_id, tags, article_img, article_topic)
VALUES (?, ?, ?, ?, ?, ?, ?)";

$stmt = $conn->prepare($sql);
$success = $stmt->execute([
    $article_title,
    $description,
    $mentor_id,       // ✨ Artıq avtomatik gəlir
    $catagory_id,
    $tags,
    $article_img,
    $article_topic
]);

if ($success) {
    echo json_encode(["status" => "success", "message" => "Article created"]);
} else {
    echo json_encode(["status" => "error", "message" => "Insert failed"]);
}
?>
