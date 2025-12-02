<?php
require_once "../db.php";
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(200);
    exit;
}

$data = json_decode(file_get_contents("php://input"), true);

$post_id      = $data["post_id"] ?? null;
$post_title   = $data["post_title"] ?? null;
$post_desc    = $data["post_desc"] ?? null;
$post_img     = $data["post_img"] ?? null;
$category_id  = $data["category_id"] ?? null;
$post_tags    = $data["post_tags"] ?? null;

if (!$post_id) {
    echo json_encode(["status"=>"error","message"=>"Post ID required"]);
    exit;
}

$sql = "UPDATE student_post 
        SET post_title=?, post_desc=?, post_img=?, category_id=?, post_tags=? 
        WHERE post_id=?";

$stmt = $conn->prepare($sql);
$success = $stmt->execute([$post_title, $post_desc, $post_img, $category_id, $post_tags, $post_id]);

echo json_encode([
    "status" => $success ? "success" : "error",
    "message" => $success ? "Post updated" : "Update failed"
]);
?>
