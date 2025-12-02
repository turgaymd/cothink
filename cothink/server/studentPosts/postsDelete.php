<?php
require_once "../db.php";
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(200);
    exit;
}

$data = json_decode(file_get_contents("php://input"), true);
$post_id = $data["post_id"] ?? null;

if (!$post_id) {
    echo json_encode(["status"=>"error","message"=>"Post ID required"]);
    exit;
}

$sql = "DELETE FROM student_post WHERE post_id=?";
$stmt = $conn->prepare($sql);
$success = $stmt->execute([$post_id]);

echo json_encode([
    "status" => $success ? "success" : "error",
    "message" => $success ? "Post deleted" : "Delete failed"
]);
?>
