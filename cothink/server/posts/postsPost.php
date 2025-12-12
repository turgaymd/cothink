<?php
require_once "../db.php";
session_start();
 
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}
 
$mentor_id   = $_POST['mentor_id'] ?? null;
$category_id = $_POST['category_id'] ?? null;
$post_title  = $_POST['post_title'] ?? null;
$post_desc   = $_POST['post_desc'] ?? null;
$post_tags   = $_POST['post_tags'] ?? null;
 
$post_img = null;
if (isset($_FILES['post_img']) && $_FILES['post_img']['error'] === 0) {
    $targetDir = "../uploads/posts/";
    if (!is_dir($targetDir)) mkdir($targetDir, 0777, true);

    $filename = time() . "_" . basename($_FILES['post_img']['name']);
    $targetFile = $targetDir . $filename;

    if (move_uploaded_file($_FILES['post_img']['tmp_name'], $targetFile)) {
        $post_img = $filename; 
    }
}
 
$sql = "INSERT INTO mentor_post (mentor_id, category_id, post_title, post_desc, post_img, post_tags)
        VALUES (?,?,?,?,?,?)";
$stmt = $conn->prepare($sql);
$success = $stmt->execute([$mentor_id, $category_id, $post_title, $post_desc, $post_img, $post_tags]);

if ($success) {
    echo json_encode(["status" => "success", "message" => "Post created successfully"]);
} else {
    echo json_encode(["status" => "error", "message" => "Error creating post"]);
}
