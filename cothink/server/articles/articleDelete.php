<?php
require_once "../db.php";

$data = json_decode(file_get_contents("php://input"), true);

$article_id    = $data['article_id'] ?? null;
$article_title = $data['article_title'] ?? null;
$description   = $data['description'] ?? null;
$mentor_id     = $data['mentor_id'] ?? null;
$catagory_id   = $data['catagory_id'] ?? null;
$tags          = $data['tags'] ?? null;
$article_img   = $data['article_img'] ?? null;
$article_topic = $data['article_topic'] ?? null;

if (!$article_id) {
    echo json_encode(["status" => "error", "message" => "article_id required"]);
    exit;
}

$sql = "UPDATE mentor_article SET
    article_title=?, description=?, mentor_id=?, catagory_id=?, tags=?, article_img=?, article_topic=?
    WHERE article_id=?";

$stmt = $conn->prepare($sql);
$stmt->bind_param("ssiisssi", 
    $article_title, $description, $mentor_id, 
    $catagory_id, $tags, $article_img, $article_topic, $article_id
);

if ($stmt->execute()) {
    echo json_encode(["status" => "success", "message" => "Article updated"]);
} else {
    echo json_encode(["status" => "error", "message" => "Update failed"]);
}
?>
