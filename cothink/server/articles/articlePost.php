<?php
require_once "../db.php";

$data = json_decode(file_get_contents("php://input"), true);

$article_title = $data['article_title'] ?? null;
$description   = $data['description'] ?? null;
$mentor_id     = $data['mentor_id'] ?? null;
$catagory_id   = $data['catagory_id'] ?? null;
$tags          = $data['tags'] ?? null;
$article_img   = $data['article_img'] ?? null;
$article_topic = $data['article_topic'] ?? null;

if (!$article_title || !$description || !$mentor_id) {
    echo json_encode(["status" => "error", "message" => "Required fields missing"]);
    exit;
}

$sql = "INSERT INTO mentor_article 
(article_title, description, mentor_id, catagory_id, tags, article_img, article_topic)
VALUES (?, ?, ?, ?, ?, ?, ?)";

$stmt = $conn->prepare($sql);
$stmt->bind_param("ssiisss", 
    $article_title, $description, $mentor_id, 
    $catagory_id, $tags, $article_img, $article_topic
);

if ($stmt->execute()) {
    echo json_encode(["status" => "success", "message" => "Article created"]);
} else {
    echo json_encode(["status" => "error", "message" => "Insert failed"]);
}
?>