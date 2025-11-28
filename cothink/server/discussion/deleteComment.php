<?php
require_once "db.php";
header('Content-Type: application/json');

$comment_id = $_GET['comment_id'] ?? null;

if(!$comment_id){
    echo json_encode(['status'=>'error','message'=>'comment_id göndərilməyib']);
    exit;
}

$sql = "DELETE FROM comments WHERE comment_id = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $comment_id);

if($stmt->execute()){
    echo json_encode(['status'=>'success']);
} else {
    echo json_encode(['status'=>'error','message'=>$stmt->error]);
}
?>