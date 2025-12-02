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
 
// ===============================
//   JSON REQUEST OXUMAQ
// ===============================
$data = json_decode(file_get_contents("php://input"), true);

$student_id = $data["student_id"] ?? null;
$post_title   = $data["post_title"] ?? null;
$post_desc    = $data["post_desc"] ?? null;
$post_img     = $data["post_img"] ?? null;       
$category_id  = $data["category_id"] ?? null;
$post_tags    = $data["post_tags"] ?? null;

// ===============================
//     VALIDATION
// ===============================

if (!$post_title || !$post_desc) {
    echo json_encode([
        "status" => "error",
        "message" => "Title və description tələb olunur"
    ]);
    exit;
}

if (!$category_id) {
    echo json_encode([
        "status" => "error",
        "message" => "Category seçilməlidir"
    ]);
    exit;
}

// ===============================
//       DB INSERT SORĞUSU
// ===============================

$sql = "
    INSERT INTO student_post 
    (student_id, post_title, post_desc, post_img, category_id, post_tags)
    VALUES (?, ?, ?, ?, ?, ?)
";

$stmt = $conn->prepare($sql);

$success = $stmt->execute([
    $student_id,
    $post_title,
    $post_desc,
    $post_img,
    $category_id,
    $post_tags
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
?>
