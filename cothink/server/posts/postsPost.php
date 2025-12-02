<?php
require_once "../db.php";
session_start();
// CORS header
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

$data = json_decode(file_get_contents("php://input"), true);


// MENTOR ID SESSION-DAN
if (!isset($_SESSION['student_id'])) {
    echo json_encode(["status" => "error", "message" => "Mentor not logged in"]);
    exit;
}

$mentor_id = $_SESSION['student_id'];
 
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
$stmt->execute([$mentor_id, $category_id, $post_title, $post_desc, $post_img, $post_tags]);

if($stmt->execute()){
    echo json_encode(["status" => "success", "message" => "Post created successfully"]);
} else {
    echo json_encode(["status" => "error", "message" => "Error creating post"]);
}
