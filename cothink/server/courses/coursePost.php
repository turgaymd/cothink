<?php
require_once "../db.php";
session_start();

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: *");



// MENTOR ID SESSION-DAN
if (!isset($_SESSION['mentor_id'])) {
    echo json_encode(["status" => "error", "message" => "Mentor not logged in"]);
    exit;
}

$mentor_id = $_SESSION['mentor_id'];

// 1) Kurs məlumatlarını al
$course_title = $_POST['course_title'] ?? null;
$category_id  = $_POST['category_id'] ?? null;
$subcategory  = $_POST['subcategory'] ?? null;

if (!$course_title || !$category_id) {
    echo json_encode(["status" => "error", "message" => "Kurs məlumatları boş ola bilməz"]);
    exit;
}

// 2) Əvvəlcə kursu mentor_course cədvəlinə əlavə edirik
$sql = "INSERT INTO mentor_course (course_title, category_id, subcategory)
        VALUES (?, ?, ?)";

$stmt = $conn->prepare($sql);
$stmt->execute([$course_title, $mentor_id, $category_id, $subcategory]);

if (!$stmt->execute()) {
    echo json_encode(["status"=>"error","message"=>"Kurs əlavə olunmadı"]);
    exit;
}

// Yeni kurs id
$course_id = $conn->lastInsertId();


// =============================
// 3) DƏRSLƏRİ ƏLAVƏ ETMƏK
// =============================

if (!isset($_POST['lessons'])) {
    echo json_encode(["status"=>"success","message"=>"Kurs yaradıldı, amma dərs yoxdur"]);
    exit;
}

$lessons = json_decode($_POST['lessons'], true);

foreach ($lessons as $index => $lesson) {

    $lesson_title = $lesson['lesson_title'] ?? null;
    $video_link   = $lesson['video_link'] ?? null;

    // Fayl upload
    $file_name = null;

    if (isset($_FILES["course_files"]["name"][$index])) {

        $tmp = $_FILES["course_files"]["tmp_name"][$index];
        $name = time() . "_" . $_FILES["course_files"]["name"][$index];

        $upload_path = "../../client/uploads/course_files/" . $name;

        if (move_uploaded_file($tmp, $upload_path)) {
            $file_name = $name;
        }
    }

    // Dərsi course_video cədvəlinə əlavə et
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