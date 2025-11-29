<?php
require_once "db.php";
header("Content-Type: application/json");

$data = json_decode(file_get_contents("php://input"), true);

$post_id     = $data["post_id"];
$mentor_id   = $data["mentor_id"];
$category_id = $data["category_id"];
$post_title  = $data["post_title"];
$post_desc   = $data["post_desc"];
$post_img    = $data["post_img"];
$post_tags   = $data["post_tags"];

$sql = "UPDATE mentor_post 
        SET mentor_id=?, category_id=?, post_title=?, post_desc=?, post_img=?, post_tags=?
        WHERE post_id=?";

$stmt = $conn->prepare($sql);
$stmt->bind_param("iissssi", $mentor_id, $category_id, $post_title, $post_desc, $post_img, $post_tags, $post_id);

if($stmt->execute()){
    echo json_encode(["status" => "success", "message" => "Post updated"]);
} else {
    echo json_encode(["status" => "error", "message" => "Update failed"]);
}