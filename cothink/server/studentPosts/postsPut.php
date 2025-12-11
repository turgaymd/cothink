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

$post_id      = $_POST["post_id"] ?? null;
$student_id   = $_POST['student_id'] ?? null;
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
