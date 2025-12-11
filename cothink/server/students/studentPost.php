<?php
require_once "../db.php";
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json");


if ($_SERVER["REQUEST_METHOD"] !== "GET") {
    http_response_code(405);
    echo json_encode(["status" => "error", "message" => "Method not allowed"]);
    exit;
}

if (!isset($_GET["student_id"])) {
    echo json_encode(["status" => "error", "message" => "student_id is required"]);
    exit;
}

$student_id = intval($_GET["student_id"]);

try {
    $sql = "SELECT sp.*, c.category 
        FROM student_post sp
        LEFT JOIN categories c ON sp.category_id = c.category_id
        INNER JOIN student_table s ON sp.student_id = s.student_id
        WHERE s.student_id = :sid
        ORDER BY sp.post_id DESC";

    $stmt = $conn->prepare($sql);
    $stmt->execute(["sid" => $student_id]);

    $posts = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode(["status" => "success", "data" => $posts]);
} catch (Exception $e) {
    echo json_encode(["status" => "error", "message" => $e->getMessage()]);
}
