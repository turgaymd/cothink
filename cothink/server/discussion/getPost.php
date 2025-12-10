<?php
require_once "../db.php";

header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json; charset=UTF-8");

// bütün postlar + commentları ilə
$sql = "SELECT 
    p.*, 
    c.id AS comment_id, 
    c.comment_text, 
    c.parent_id, 
    c.student_id AS comment_student_id, 
    c.created_at AS comment_created_at,
    s.profile_img AS comment_student_img,
    s.student_name  
FROM mentor_post p
LEFT JOIN commentss c ON p.post_id = c.post_id
LEFT JOIN student_table s ON c.student_id = s.student_id
ORDER BY p.post_id DESC, c.created_at ASC";

$stmt = $conn->query($sql);

$posts = [];
while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
    $post_id = $row['post_id'];
    if (!isset($posts[$post_id])) {
        $posts[$post_id] = [
            'post_id' => $row['post_id'],
            'post_title' => $row['post_title'],
            'mentor_id' => $row['mentor_id'],
            'category_id' => $row['category_id'],
            'post_img' => $row['post_img'],
            'post_tags' => $row['post_tags'],
            'post_desc' => $row['post_desc'],
            'comments' => []
        ];
    }

    // comment varsa əlavə et
    if ($row['comment_id'] !== null) {
        $posts[$post_id]['comments'][] = [
            'comment_id' => $row['comment_id'],
            'parent_id' => $row['parent_id'],
            'student_id' => $row['comment_student_id'],
            'comment_text' => $row['comment_text'],
            'profile_img' => $row['comment_student_img'],
            'student_name' => $row['student_name'],
            'created_at' => $row['comment_created_at']
        ];
    }
}

echo json_encode(array_values($posts));
