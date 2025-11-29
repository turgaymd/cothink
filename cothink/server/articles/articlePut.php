<?php
require_once "../db.php";

$data = json_decode(file_get_contents("php://input"), true);

$article_id = $data['article_id'] ?? null;

if (!$article_id) {
    echo json_encode(["status" => "error", "message" => "article_id required"]);
    exit;
}

$sql = "DELETE FROM mentor_article WHERE article_id=?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $article_id);

if ($stmt->execute()) {
    echo json_encode(["status" => "success", "message" => "Article deleted"]);
} else {
    echo json_encode(["status" => "error", "message" => "Delete failed"]);
}
?>