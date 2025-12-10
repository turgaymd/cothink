<?php
require_once "../db.php";

header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json");

// OPTIONS sorğusu üçün
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// JSON body-ni oxu
$data = json_decode(file_get_contents("php://input"), true);
 
 
if (!isset($_GET['mentor_id'])) {
    echo json_encode(["status" => "error", "message" => "mentor_id missing"]);
    exit;
}

$mentor_id = intval($_GET['mentor_id']);

try {

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

            // Kursun dərsləri
            $stmtLesson = $conn->prepare("SELECT * FROM course_video WHERE course_id = ?");
            $stmtLesson->execute([$course['course_id']]);
            $course['lessons'] = $stmtLesson->fetchAll(PDO::FETCH_ASSOC);

            $courses[] = $course;
        }

        echo json_encode($courses);
        exit;
    }

    // --- 2) MENTOR_ID-Ə GÖRƏ KURSLAR ---
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
        $stmtLesson = $conn->prepare("SELECT * FROM course_video WHERE course_id = ?");
        $stmtLesson->execute([$course['course_id']]);
        $course['lessons'] = $stmtLesson->fetchAll(PDO::FETCH_ASSOC);

        $courses[] = $course;
    }

    echo json_encode($courses);

} catch (PDOException $e) {

    echo json_encode([
        "status" => "error",
        "message" => $e->getMessage()
    ]);
}
