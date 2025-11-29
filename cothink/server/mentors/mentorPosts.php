<?php
require_once "../db.php";
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$mentor_id = $_GET['mentor_id'];

$sql = $conn->query("SELECT * FROM mentor_post WHERE mentor_id=$mentor_id");
$posts = [];

while($row = $sql->fetch(PDO::FETCH_ASSOC)){
    $posts[] = $row;
}

echo json_encode($posts);
?>