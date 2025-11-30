<?php
require_once "../db.php";

header('Content-Type: application/json');

// bütün postlar + commentları ilə
$sql = "SELECT p.*, 
               c.comment_id, c.comment_text, c.parent_id, c.mentor_id AS comment_mentor_id, c.created_at
        FROM mentor_post p
        LEFT JOIN comments c ON p.post_id = c.post_id
        ORDER BY p.post_id DESC, c.created_at ASC";

$result = $conn->query($sql);

$posts = [];
while($row = $result->fetch(PDO::FETCH_ASSOC)){
    $post_id = $row['post_id'];
    if(!isset($posts[$post_id])){
        $posts[$post_id] = [
            'post_id' => $row['post_id'],
            'post_title' => $row['post_title'],
            'mentor_id' => $row['mentor_id'],
            'category_id' => $row['category_id'],
            'post_img' => $row['post_img'],
            'post_tags' => $row['post_tags'],
            'post_decs' => $row['post_decs'],
            'comments' => []
        ];
    }

    if($row['comment_id']){
        $posts[$post_id]['comments'][] = [
            'comment_id' => $row['comment_id'],
            'parent_id' => $row['parent_id'],
            'mentor_id' => $row['comment_mentor_id'],
            'comment_text' => $row['comment_text'],
            'created_at' => $row['created_at']
        ];
    }
}

echo json_encode(array_values($posts));
?>