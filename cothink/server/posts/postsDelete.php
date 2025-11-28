<?php
require_once "db.php";
header("Content-Type: application/json");

$data = json_decode(file_get_contents("php://input"), true);
$post_id = $data["post_id"] ?? null;

if(!$post_id){
    echo json_encode(["status"=>"error","message"=>"post_id required"]);
    exit;
}

$sql = "DELETE FROM mentor_post WHERE post_id = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $post_id);

if($stmt->execute()){
    echo json_encode(["status"=>"success","message"=>"Post deleted"]);
} else {
    echo json_encode(["status"=>"error","message"=>"Delete failed"]);
}