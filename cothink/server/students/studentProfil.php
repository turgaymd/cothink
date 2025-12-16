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
        "message" => "Student ID göndərilməyib"
    ]);
    exit;
}

try {
    $sql = "SELECT 
                student_id,
                student_name,
                student_email, 
                student_username, 
                student_password, 
                profile_img, 
                description,
                rating,  
            FROM student_table 
            WHERE student_id = ?";
    
    $stmt = $conn->prepare($sql);
    $stmt->execute([$id]);

    $student = $stmt->fetch(PDO::FETCH_ASSOC);

    if (!$student) {
        echo json_encode([
            "status" => "error",
            "message" => "Student tapılmadı"
        ]);
        exit;
    }

    echo json_encode([
        "status" => "success",
        "data" => $student
    ]);

} catch (PDOException $e) {
    echo json_encode([
        "status" => "error",
        "message" => $e->getMessage()
    ]);
}
?>
