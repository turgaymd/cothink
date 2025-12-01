<?php
require_once "../db.php";
session_start();

header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json");

// OPTIONS sorğusu üçün
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
} 
// MENTOR ID SESSION-DAN
if (!isset($_SESSION['mentor_id'])) {
    echo json_encode(["status" => "error", "message" => "Mentor not logged in"]);
    exit;
}

$mentor_id = $_SESSION['mentor_id'];
// --- 1) BÜTÜN KURSLAR (mentor_id göndərilməyibsə) ---
if (!$mentor_id) {

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

        // Kurs üzrə dərslər
        $stmt = $conn->prepare("SELECT * FROM course_video WHERE course_id = ?");
        $stmt->execute([$course['course_id']]);
        $course['lessons'] = $stmt->fetchAll(PDO::FETCH_ASSOC);

        $courses[] = $course;
    }

    echo json_encode($courses);
    exit;
}


// --- 2) MENTOR_ID-Ə GÖRƏ KURSLAR (filtrli versiya) ---

$sql = "
    SELECT 
        mc.*,
        m.mentor_name,
        m.profile_img,
        c.category
    FROM mentor_course mc
    LEFT JOIN mentors m ON mc.mentor_id = m.mentor_id
    LEFT JOIN categories c ON mc.category_id = c.category_id
    WHERE mc.mentor_id = ?
";

$stmt = $conn->prepare($sql);
$stmt->execute([$mentor_id]);

$courses = [];

while ($course = $stmt->fetch(PDO::FETCH_ASSOC)) {

    // Kursun dərsləri
    $stmt2 = $conn->prepare("SELECT * FROM course_video WHERE course_id = ?");
    $stmt2->execute([$course['course_id']]);
    $course['lessons'] = $stmt2->fetchAll(PDO::FETCH_ASSOC);

    $courses[] = $course;
}

echo json_encode($courses);