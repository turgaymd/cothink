<?php
require_once "db.php";
header("Content-Type: application/json");

$sql = "SELECT p.*, m.mentor_name, c.category_name 
        FROM mentor_post p
        LEFT JOIN mentors m ON p.mentor_id = m.mentor_id
        LEFT JOIN category c ON p.category_id = c.category_id";

$result = $conn->query($sql);

$posts = [];

while($row = $result->fetch(PDO::FETCH_ASSOC)){
    $posts[] = $row;
}

echo json_encode($posts);
