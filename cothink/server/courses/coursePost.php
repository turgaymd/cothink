<?php
require_once "../db.php";
session_start();

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: *");
 
$data = json_decode(file_get_contents("php://input"), true);

// $mentor_id     = $data['mentor_id'] ?? null;    
$course_title  = $data['course_title'] ?? null;
$course_img  = $data['course_img'] ?? null; 

// ===============================
// VALIDATION
// ===============================
// if (!$mentor_id) {
//     echo json_encode(["status" => "error", "message" => "Mentor ID tapılmadı"]);
//     exit;
// }

// if (!$course_title || !$category_id) {
//     echo json_encode(["status" => "error", "message" => "Kurs məlumatları boş ola bilməz"]);
//     exit;
// }

// ===============================
// KURS ƏLAVƏ ET
// ===============================
$sql = "INSERT INTO mentor_course ( course_title, course_img )
        VALUES ( ?, ?)";

$stmt = $conn->prepare($sql);
$success = $stmt->execute([  $course_title,  $course_img ]);

if (!$success) {
    echo json_encode(["status"=>"error","message"=>"Kurs əlavə olunmadı"]);
    exit;
}

$course_id = $conn->lastInsertId();

// ===============================
// DƏRSLƏRƏ GÖTÜR
// ===============================
$lessons = $data['lessons'] ?? [];

foreach ($lessons as $index => $lesson) {
    $lesson_title = $lesson['lesson_title'] ?? null;
    $video_link   = $lesson['video_link'] ?? null;

    $file_name = $lesson['course_files'] ?? null; // frontend fayl link göndərirsə

    $sqlL = "INSERT INTO course_video (course_id, lesson_title, video_link, course_files)
             VALUES (?, ?, ?, ?)";

    $stmtL = $conn->prepare($sqlL);
    $stmtL->execute([$course_id, $lesson_title, $video_link, $file_name]);
}

echo json_encode([
    "status" => "success",
    "message" => "Kurs və dərslər uğurla əlavə edildi",
    "course_id" => $course_id
]);
?>