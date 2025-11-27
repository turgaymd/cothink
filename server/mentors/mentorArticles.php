<?php
require_once "../db.php";
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$mentor_id = $_GET['mentor_id'];

$sql = $conn->query("SELECT * FROM mentor_article WHERE mentor_id=$mentor_id");
$articles = [];

while($row = $sql->fetch_assoc()){
    $articles[] = $row;
}

echo json_encode($articles);
?>