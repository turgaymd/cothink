<?php
require_once "../db.php";
header('Content-Type: application/json');

$data = json_decode(file_get_contents("php://input"), true);

$post_id = $data['post_id'] ?? null;
$mentor_id = $data['mentor_id'] ?? null;
$parent_id = $data['parent_id'] ?? null;
$comment_text = $data['comment_text'] ?? '';

if(!$post_id || !$mentor_id || !$comment_text){
    echo json_encode(['status'=>'error','message'=>'Bütün məlumatları doldurun']);
    exit;
}

// PDO ilə insert
$sql = "INSERT INTO comments (post_id, mentor_id, parent_id, comment_text) VALUES (?, ?, ?, ?)";
$stmt = $conn->prepare($sql);

$success = $stmt->execute([$post_id, $mentor_id, $parent_id, $comment_text]);

if($success){
    // PDO-da son əlavə olunan ID
    $comment_id = $conn->lastInsertId();
    echo json_encode(['status'=>'success','comment_id'=>$comment_id]);
} else {
    $errorInfo = $stmt->errorInfo();
    echo json_encode(['status'=>'error','message'=>$errorInfo[2]]);
}
?>