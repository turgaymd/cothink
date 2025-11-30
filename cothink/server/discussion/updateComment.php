<?php
require_once "../db.php";
header('Content-Type: application/json');

$data = json_decode(file_get_contents("php://input"), true);

$comment_id = $data['comment_id'] ?? null;
$comment_text = $data['comment_text'] ?? '';

if(!$comment_id || !$comment_text){
    echo json_encode(['status'=>'error','message'=>'comment_id və text lazımdır']);
    exit;
}

$sql = "UPDATE comments SET comment_text = ? WHERE comment_id = ?";
$stmt = $conn->prepare($sql);

// Yalnız bir dəfə execute çağırılır
$success = $stmt->execute([$comment_text, $comment_id]);

if($success){
    echo json_encode(['status'=>'success']);
} else {
    $errorInfo = $stmt->errorInfo();  
    echo json_encode(['status'=>'error','message'=>$errorInfo[2]]);
}
?>