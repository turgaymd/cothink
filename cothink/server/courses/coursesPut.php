<?php
require_once "../db.php";

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: POST");

$course_id    = $_POST['course_id'] ?? null;
$course_title = $_POST['course_title'] ?? null;
$category_id  = $_POST['category_id'] ?? null;
$subcategory  = $_POST['subcategory'] ?? null;

if (!$course_id) {
    echo json_encode(["status" => "error", "message" => "course_id tələb olunur"]);
    exit;
}


// =======================
// KURSU YENİLƏ  (PDO)
// =======================
$sql = "UPDATE mentor_course SET course_title=?, category_id=?, subcategory=? WHERE course_id=?";
$stmt = $conn->prepare($sql);
$stmt->execute([$course_title, $category_id, $subcategory, $course_id]);


// =======================
// DƏRSLƏRİ YENİLƏ  (PDO)
// =======================
$lessons = json_decode($_POST['lessons'], true);

foreach ($lessons as $index => $lesson) {

    $lesson_id    = $lesson['video_id'] ?? null;
    $lesson_title = $lesson['lesson_title'];
    $video_link   = $lesson['video_link'];

    // ------- Fayl yükləmə -------
    $file_name = null;

    if (isset($_FILES['lesson_files']['name'][$index])) {
        $tmp  = $_FILES["lesson_files"]["tmp_name"][$index];
        $name = time() . "_" . $_FILES["lesson_files"]["name"][$index];
        move_uploaded_file($tmp, "../uploads/course_files/" . $name);
        $file_name = $name;
    }

    // 1) UPDATE
    if ($lesson_id) {

        // Fayl varsa
        if ($file_name) {
            $sqlL = "UPDATE course_video 
                     SET lesson_title=?, video_link=?, course_files=? 
                     WHERE video_id=?";
            $stmtL = $conn->prepare($sqlL);
            $stmtL->execute([$lesson_title, $video_link, $file_name, $lesson_id]);
        }
        // Fayl YOXDUR
        else {
            $sqlL = "UPDATE course_video 
                     SET lesson_title=?, video_link=? 
                     WHERE video_id=?";
            $stmtL = $conn->prepare($sqlL);
            $stmtL->execute([$lesson_title, $video_link, $lesson_id]);
        }
    }

    // 2) INSERT
    else {
        $sqlL = "INSERT INTO course_video (course_id, lesson_title, video_link, course_files)
                 VALUES (?, ?, ?, ?)";

        $stmtL = $conn->prepare($sqlL);
        $stmtL->execute([$course_id, $lesson_title, $video_link, $file_name]);
    }
}

echo json_encode(["status" => "success", "message" => "Kurs və dərslər yeniləndi"]);
?>
