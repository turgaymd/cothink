<?php
require_once "../db.php";
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization"); 
header("Content-Type: application/json; charset=UTF-8");

$comment_id = $_GET['comment_id'] ?? null;

if(!$comment_id){
    echo json_encode(['status'=>'error','message'=>'comment_id göndərilməyib']);
    exit;
}

// PDO ilə DELETE
$sql = "DELETE FROM comments WHERE comment_id = ?";
$stmt = $conn->prepare($sql);

$success = $stmt->execute([$comment_id]);

if($success){
    echo json_encode(['status'=>'success']);
} else {
    $errorInfo = $stmt->errorInfo();
    echo json_encode(['status'=>'error','message'=>$errorInfo[2]]);
}
?>