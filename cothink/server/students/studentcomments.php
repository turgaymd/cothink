<?php
require_once "../db.php";
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json");
 
if (!isset($_GET["student_id"])) {
    echo json_encode(["status"=>"error", "message"=>"student_id is required"]);
    exit;
}

$student_id = intval($_GET["student_id"]);

try { 
    $sql = "SELECT post_id, post_title, post_desc, created_at
            FROM student_post 
            WHERE student_id = :sid  
            ORDER BY post_id DESC";

    $stmt = $conn->prepare($sql);
    $stmt->execute(["sid" => $student_id]);
    $posts = $stmt->fetchAll(PDO::FETCH_ASSOC);
 
    foreach ($posts as &$post) {
 
        $sql2 = "SELECT 
                    c.id,
                    c.comment_text,
                    c.created_at,
                    c.likes,
                    s.student_name,
                    s.profile_img
                 FROM comments c
                 LEFT JOIN student_table s ON s.student_id = c.student_id
                 WHERE c.post_id = :pid
                 ORDER BY c.id DESC";

        $stm2 = $conn->prepare($sql2);
        $stm2->execute(["pid" => $post["post_id"]]);
        $post["comments"] = $stm2->fetchAll(PDO::FETCH_ASSOC);
 
        $sqlCount = "SELECT COUNT(*) FROM comments WHERE post_id = :pid";
        $stmCount = $conn->prepare($sqlCount);
        $stmCount->execute(["pid" => $post["post_id"]]);
        $post["comment_count"] = $stmCount->fetchColumn();
    }

    echo json_encode(["status" => "success", "posts" => $posts]);

} catch (Exception $e) {
    echo json_encode(["status"=>"error", "message"=>$e->getMessage()]);
}