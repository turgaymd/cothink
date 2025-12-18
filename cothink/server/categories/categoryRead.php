<?php
require_once "../db.php";

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");

$baseURL = "http://cothink.az/cothink1/cothink/server/uploads/"; 
// Öz server yoluna uyğun dəyiş

try {
    $sql = "SELECT category_id, category, category_img FROM categories";
    $stmt = $conn->prepare($sql);
    $stmt->execute();

    $categories = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Şəkil URL-lərini tam şəkildə qaytarmaq
    foreach ($categories as &$cat) {
        if (!empty($cat['category_img'])) {
            $cat['category_img'] = $baseURL . $cat['category_img'];
        } else {
            $cat['category_img'] = null;
        }
    }

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