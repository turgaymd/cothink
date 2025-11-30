<?php
require_once "../db.php";
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

// GET parametri yoxlanır
$mentor_id = $_GET['mentor_id'] ?? null;

if (!$mentor_id) {
    echo json_encode(['status' => 'error', 'message' => 'mentor_id göndərilməyib']);
    exit;
}

// PDO prepare + execute ilə sorğu
$sql = "SELECT * FROM mentor_post WHERE mentor_id = ?";
$stmt = $conn->prepare($sql);
$stmt->execute([$mentor_id]);

$posts = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode(['status' => 'success', 'data' => $posts]);
?>