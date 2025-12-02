<?php
require_once "../db.php";

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");

try {
    $sql = "SELECT category_id, category FROM categories";
    $stmt = $conn->prepare($sql);
    $stmt->execute();

    $categories = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode([
        "status" => "success",
        "data" => $categories
    ]);
    
} catch (Exception $e) {
    echo json_encode([
        "status" => "error",
        "message" => $e->getMessage()
    ]);
}
?>