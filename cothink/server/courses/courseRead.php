<?php
require_once "../db.php";
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}


$course_id = $_GET['course_id'] ?? null;

// --- 1) BÜTÜN KURSLAR ---
if (!$course_id) {

    $sql = "
        SELECT 
            mc.*,
            m.mentor_name,
            m.profile_img,
            c.category
        FROM mentor_course mc
        LEFT JOIN mentors m ON mc.mentor_id = m.mentor_id
        LEFT JOIN categories c ON mc.category_id = c.category_id
    ";

    $result = $conn->query($sql);

    $courses = [];

    while ($course = $result->fetch(PDO::FETCH_ASSOC)) {

        // --- Kursun dərsləri ---
        $stmt = $conn->prepare("SELECT * FROM course_video WHERE course_id = ?");
        $stmt->execute([$course['course_id']]);
        $lessons = $stmt->fetchAll(PDO::FETCH_ASSOC);

        $course['lessons'] = $lessons;

        $courses[] = $course;
    }

    echo json_encode($courses);
    exit;
}