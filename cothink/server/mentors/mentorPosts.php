<?php
require_once "../db.php";
session_start();
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");


// MENTOR ID SESSION-DAN
if (!isset($_SESSION['mentor_id'])) {
    echo json_encode(["status" => "error", "message" => "Mentor not logged in"]);
    exit;
}

$mentor_id = $_SESSION['mentor_id'];

// PDO prepare + execute ilə sorğu
$sql = "SELECT * FROM mentor_post WHERE mentor_id = ?";
$stmt = $conn->prepare($sql);
$stmt->execute([$mentor_id]);

$posts = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode(['status' => 'success', 'data' => $posts]);
?>