<?php
require_once "../db.php";

// CORS
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// GET course_id
$course_id = $_GET['id'] ?? null;

if (!$course_id) {
    echo json_encode([
        "status" => "error",
        "message" => "course_id göndərilməyib"
    ]);
    exit;
}

try {

    // --- 1) Kursun öz məlumatı ---
    $sql = "
        SELECT 
            mc.*,
            m.mentor_name,
            m.profile_img,
            c.category AS category_name
        FROM mentor_course mc
        LEFT JOIN mentors m ON mc.mentor_id = m.mentor_id
        LEFT JOIN categories c ON mc.category_id = c.category_id
        WHERE mc.course_id = ?
    ";

    $stmt = $conn->prepare($sql);
    $stmt->execute([$course_id]);
    $course = $stmt->fetch(PDO::FETCH_ASSOC);



    if (!$course) {
        echo json_encode([
            "status" => "error",
            "message" => "Kurs tapılmadı"
        ]);
        exit;
    }

    // --- 2) Kursun bütün dərsləri ---
    $stmt2 = $conn->prepare("
        SELECT * 
        FROM course_video 
        WHERE course_id = ? 
        ORDER BY video_id ASC
    ");
    $stmt2->execute([$course_id]);
    $lessons = $stmt2->fetchAll(PDO::FETCH_ASSOC);

    $course["lessons"] = $lessons;

    // --- 3) İlk dərsi default olaraq seç ---
    $course["first_lesson"] = $lessons[0] ?? null;

    echo json_encode([
        "status" => "success",
        "data" => $course
    ]);

} catch (PDOException $e) {
    echo json_encode([
        "status" => "error",
        "message" => $e->getMessage()
    ]);
}
?>
