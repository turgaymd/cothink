<?php
require_once "../db.php";
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$sql = $conn->query("SELECT mentor_id, mentor_name, profile_img, category_id, description FROM mentors");
$mentors = [];

while($row = $sql->fetch_assoc()){
    $mentors[] = $row;
}

echo json_encode($mentors);
?>