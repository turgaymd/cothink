<?php
require_once "db.php";
header("Content-Type: application/json");

$data = json_decode(file_get_contents("php://input"), true);

$mentor_id   = $data["mentor_id"] ?? null;
$category_id = $data["category_id"] ?? null;
$post_title  = $data["post_title"] ?? null;
$post_desc   = $data["post_desc"] ?? null;
$post_img    = $data["post_img"] ?? null;
$post_tags   = $data["post_tags"] ?? null;

if(!$mentor_id || !$post_title){
    echo json_encode(["status" => "error", "message" => "Required fields empty"]);
    exit;
}

$sql = "INSERT INTO mentor_post (mentor_id, category_id, post_title, post_desc, post_img, post_tags)
        VALUES (?,?,?,?,?,?)";

$stmt = $conn->prepare($sql);
$stmt->bind_param("iissss", $mentor_id, $category_id, $post_title, $post_desc, $post_img, $post_tags);

if($stmt->execute()){
    echo json_encode(["status" => "success", "message" => "Post created successfully"]);
} else {
    echo json_encode(["status" => "error", "message" => "Error creating post"]);
}
