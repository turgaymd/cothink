<?php
require_once "../db.php";

header("Content-Type: application/json");

$course_id = $_GET['course_id'] ?? null;

// 1) Bütün kurslar + hərəsinin dərsləri
if (!$course_id) {

    $sql = "SELECT * FROM mentor_course";
    $result = $conn->query($sql);

    $courses = [];

    while ($course = $result->fetch(PDO::FETCH_ASSOC)) {

        // Kursun dərslərini çəkirik (PDO versiyası)
        $sqlLessons = "SELECT * FROM course_video WHERE course_id = ?";
        $stmt = $conn->prepare($sqlLessons);
        $stmt->execute([$course['course_id']]);
        $lessons = $stmt->fetchAll(PDO::FETCH_ASSOC);

        $course['lessons'] = $lessons;
        $courses[] = $course;
    }

    echo json_encode($courses);
    exit;
}


// 2) Tək kurs + dərslər
$sql = "SELECT * FROM mentor_course WHERE course_id = ?";
$stmt = $conn->prepare($sql);
$stmt->execute([$course_id]);
$course = $stmt->fetch(PDO::FETCH_ASSOC);

if (!$course) {
    echo json_encode(["status" => "error", "message" => "Kurs tapılmadı"]);
    exit;
}

$sqlLessons = "SELECT * FROM course_video WHERE course_id = ?";
$stmt2 = $conn->prepare($sqlLessons);
$stmt2->execute([$course_id]);
$lessons = $stmt2->fetchAll(PDO::FETCH_ASSOC);

$course['lessons'] = $lessons;

echo json_encode($course);
?>