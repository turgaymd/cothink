<?php
require_once "../db.php";
header('Content-Type: application/json');

$mentor_id = $_GET['mentor_id'] ?? null;

if (!$mentor_id) {
    echo json_encode(['status'=>'error','message'=>'mentor_id göndərilməyib']);
    exit;
}

// Mentor-a aid bütün artikllar
$sql = "SELECT * FROM mentor_articles WHERE mentor_id = ?";
$stmt = $conn->prepare($sql);
$stmt->execute([$mentor_id]);

$articles = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode(['status'=>'success','data'=>$articles]);
?>