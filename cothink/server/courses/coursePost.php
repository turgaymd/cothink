<?php
require_once "../db.php";

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: *");

// 1) Kurs məlumatlarını al
$course_title = $_POST['course_title'] ?? '';
$category_id  = (int) ($_POST['category_id'] ?? 0);
$subcategory  = $_POST['subcategory'] ?? '';

if (!$course_title || !$category_id) {
    echo json_encode(["status" => "error", "message" => "Kurs məlumatları boş ola bilməz"]);
    exit;
}

// 2) Əvvəlcə kursu mentor_course cədvəlinə əlavə edirik
$sql = "INSERT INTO mentor_course (course_title, category_id, subcategory)
        VALUES (?, ?, ?)";

$stmt = $conn->prepare($sql);
$stmt->bind_param("sis", $course_title, $category_id, $subcategory);

if (!$stmt->execute()) {
    echo json_encode(["status"=>"error","message"=>"Kurs əlavə olunmadı"]);
    exit;
}

// Yeni kurs id
$course_id = $stmt->insert_id;

// =============================
// 3) DƏRSLƏRİ ƏLAVƏ ETMƏK
// =============================

if (!isset($_POST['course_video'])) {
    echo json_encode(["status"=>"success","message"=>"Kurs yaradıldı, amma dərs yoxdur", "course_id" => $course_id]);
    exit;
}

$lessons = json_decode($_POST['course_video'], true);

foreach ($lessons as $index => $lesson) {

    $lesson_title = $lesson['lesson_title'] ?? '';
    $video_link   = $lesson['video_link'] ?? '';
    $file_name    = null;

    // Fayl upload
    if (isset($_FILES["course_files"]["name"][$index]) && $_FILES["course_files"]["name"][$index] != '') {

        $tmp  = $_FILES["course_files"]["tmp_name"][$index];
        $name = time() . "_" . basename($_FILES["course_files"]["name"][$index]);

       $upload_path = "../client/public/uploads/course_files/" . $name;

        if (move_uploaded_file($tmp, $upload_path)) {
            $file_name = $name;
        }
    }

    // Null-safe
    $file_name = $file_name ?? '';

    // Dərsi course_video cədvəlinə əlavə et
    $sqlL = "INSERT INTO course_video (course_id, lesson_title, video_link, course_files)
             VALUES (?, ?, ?, ?)";

    $stmtL = $conn->prepare($sqlL);
    $stmtL->bind_param("isss", $course_id, $lesson_title, $video_link, $file_name);
    $stmtL->execute();
}

echo json_encode([
    "status" => "success",
    "message" => "Kurs və dərslər uğurla əlavə edildi",
    "course_id" => $course_id
]);
?>
