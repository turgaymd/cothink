<?php
require_once "../db.php";
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$mentor_id = $_GET['mentor_id'];

$sql = $conn->query("SELECT * FROM mentor_book WHERE mentor_id=$mentor_id");
$books = [];

while($row = $sql->fetch_assoc()){
    $books[] = $row;
}

echo json_encode($books);
?>