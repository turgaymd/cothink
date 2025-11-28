<?php
require_once "../db.php";
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$id = $_GET['id'];

$sql = $conn->query("SELECT * FROM mentors WHERE mentor_id=$id");
$mentor = $sql->fetch_assoc();

echo json_encode($mentor);
?>