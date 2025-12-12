<?php
require_once "../db.php";
session_start();

// CORS
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Credentials: true");
header("Content-Type: application/json");

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(200);
    exit;
}
 

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



// ===============================
//       DB INSERT SORĞUSU
// ===============================

$sql = "
    INSERT INTO student_post 
    (student_id, post_title, post_desc, category_id, post_tags , post_img)
    VALUES (?, ?, ?, ?, ?, ?)
";

$stmt = $conn->prepare($sql);

$success = $stmt->execute([
    $student_id,
    $post_title,
    $post_desc,
    $category_id,
    $post_tags,
    $post_img
]);

// ===============================
//          RESPONSE
// ===============================

if ($success) {
    echo json_encode([
        "status" => "success",
        "message" => "Post yaradıldı"
    ]);
} else {
    echo json_encode([
        "status" => "error",
        "message" => "Insert failed"
    ]);
}
