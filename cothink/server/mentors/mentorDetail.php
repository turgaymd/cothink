<?php
require_once "../db.php";

// CORS
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit;
}

$id = $_GET['id'] ?? null;

if (!$id) {
    echo json_encode([
        "status" => "error",
        "message" => "Mentor ID göndərilməyib"
    ]);
    exit;
}

try {
    $sql = "SELECT * FROM mentors WHERE mentor_id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->execute([$id]);

    $mentor = $stmt->fetch(PDO::FETCH_ASSOC);

    if (!$mentor) {
        echo json_encode([
            "status" => "error",
            "message" => "Mentor tapılmadı"
        ]);
        exit;
    }

    echo json_encode([
        "status" => "success",
        "data" => $mentor
    ]);

} catch (PDOException $e) {
    echo json_encode([
        "status" => "error",
        "message" => $e->getMessage()
    ]);
}
?>
