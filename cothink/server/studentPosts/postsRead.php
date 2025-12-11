<?php
require_once "../db.php";
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

// GET metodu yoxlanması
if ($_SERVER["REQUEST_METHOD"] !== "GET") {
    http_response_code(405);
    echo json_encode(["status"=>"error", "message"=>"Method not allowed"]);
    exit;
}

try {
    $stmt = $conn->query("SELECT sp.*, c.category 
                          FROM student_post sp 
                          LEFT JOIN categories c ON sp.category_id = c.category_id");
    $posts = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode(["status"=>"success", "data"=>$posts]);
} catch (Exception $e) {
    echo json_encode(["status"=>"error","message"=>$e->getMessage()]);
}
?>