<?php
require_once "../db.php";
session_start();
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

// MENTOR ID SESSION-DAN
if (!isset($_SESSION['mentor_id'])) {
    echo json_encode(["status" => "error", "message" => "Mentor not logged in"]);
    exit;
}

$mentor_id = $_SESSION['mentor_id'];

$sql = $conn->query("SELECT * FROM mentors WHERE mentor_id=$id");
$mentor = $sql->fetch(PDO::FETCH_ASSOC);

echo json_encode($mentor);
?>