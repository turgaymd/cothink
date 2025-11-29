<?php
require_once "../db.php";

header("Content-Type: application/json");

$course_id = $_GET['course_id'] ?? null;

// 1) Bütün kurslar + hərəsinin dərsləri
if (!$course_id) {

    $sql = "SELECT * FROM mentor_course";
    $result = $conn->query($sql);

    $courses = [];

    while($course = $result->fetch_assoc()) {

        // Kursun dərslərini çəkirik
        $sqlLessons = "SELECT * FROM course_video WHERE course_id=?";
        $stmt = $conn->prepare($sqlLessons);
        $stmt->bind_param("i", $course['course_id']);
        $stmt->execute();
        $lessons = $stmt->get_result()->fetch_all(MYSQLI_ASSOC);

        $course['lessons'] = $lessons;
        $courses[] = $course;
    }

    echo json_encode($courses);
    exit;
}


// 2) Tək kurs + dərslər
$sql = "SELECT * FROM mentor_course WHERE course_id=?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $course_id);
$stmt->execute();
$course = $stmt->get_result()->fetch_assoc();

if (!$course) {
    echo json_encode(["status" => "error", "message" => "Kurs tapılmadı"]);
    exit;
}

$sqlLessons = "SELECT * FROM course_video WHERE course_id=?";
$stmt2 = $conn->prepare($sqlLessons);
$stmt2->bind_param("i", $course_id);
$stmt2->execute();
$lessons = $stmt2->get_result()->fetch_all(MYSQLI_ASSOC);

$course['lessons'] = $lessons;

echo json_encode($course);
?>