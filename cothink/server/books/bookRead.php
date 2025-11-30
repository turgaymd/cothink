<?php
require_once "../db.php";

header("Content-Type: application/json");

// get all or get by id
$id = $_GET['id'] ?? null;

if ($id) {
    $sql = "SELECT * FROM mentor_books WHERE id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->execute([$id]);

    $data = $stmt->fetch(PDO::FETCH_ASSOC);
} else {
    $sql = "SELECT * FROM mentor_books";
    $stmt = $conn->prepare($sql);
    $stmt->execute();

    $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
}

echo json_encode(["status" => "success", "data" => $data]);
?>
