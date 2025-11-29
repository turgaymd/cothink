<?php
require_once "../db.php";

header("Content-Type: application/json");

// get all or get by id
$id = $_GET['id'] ?? null;

if ($id) {
    $sql = "SELECT * FROM mentor_book WHERE id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $id);
} else {
    $sql = "SELECT * FROM mentor_book";
    $stmt = $conn->prepare($sql);
}

$stmt->execute();
$result = $stmt->get_result();

$data = ($id) ? $result->fetch_assoc() : $result->fetch_all(MYSQLI_ASSOC);

echo json_encode(["status" => "success", "data" => $data]);
?>
