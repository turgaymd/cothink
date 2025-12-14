<?php
require_once "../db.php";

// CORS header
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// SELECT query
$sql = "SELECT p.*, m.mentor_name, m.profile_img, c.category
        FROM mentor_post p
        LEFT JOIN mentors m ON p.mentor_id = m.mentor_id
        LEFT JOIN categories c ON p.category_id = c.category_id"; 

$result = $conn->query($sql);

$posts = [];
while($row = $result->fetch(PDO::FETCH_ASSOC)){
    $posts[] = $row;
}

echo json_encode($posts);
?>