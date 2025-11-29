<?php
require_once "../db.php";
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$mentor_id = $_GET['mentor_id'];

$sql = $conn->query("SELECT * FROM mentor_course WHERE mentor_id=$mentor_id");
$courses = [];

while($row = $sql->fetch_assoc()){
    $courses[] = $row;
}

echo json_encode($courses);
?>