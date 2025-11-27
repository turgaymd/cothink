<?php
require_once "db.php";
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

$sql = "INSERT INTO comments (post_id, mentor_id, parent_id, comment_text) VALUES (?, ?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("iiis", $post_id, $mentor_id, $parent_id, $comment_text);

if($stmt->execute()){
    echo json_encode(['status'=>'success','comment_id'=>$stmt->insert_id]);
} else {
    echo json_encode(['status'=>'error','message'=>$stmt->error]);
}
?>