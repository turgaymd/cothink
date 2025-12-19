<?php
require_once "../db.php";
session_start();
 
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Credentials: true");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit;
}
 
$course_title = $_POST['course_title'] ?? null;
$category_id  = $_POST['category_id'] ?? null;
$mentor_id    = $_POST['mentor_id'] ?? null;
 
$lessons = isset($_POST['lessons'])
    ? json_decode($_POST['lessons'], true)
    : [];
 
$course_img = null;
if (!empty($_FILES['course_img'])) {
    $file = $_FILES['course_img'];
    $ext = pathinfo($file['name'], PATHINFO_EXTENSION);
    $filename = time() . "_course." . $ext;

    $upload_dir = "../uploads/courses/";
    if (!file_exists($upload_dir)) {
        mkdir($upload_dir, 0777, true);
    }

    if (move_uploaded_file($file['tmp_name'], $upload_dir . $filename)) {
        $course_img = $upload_dir . $filename;
    }
}
 
try {
    $conn->beginTransaction();
 
    $sql = "INSERT INTO mentor_course (mentor_id, course_title, category_id, course_img)
            VALUES (?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->execute([$mentor_id, $course_title, $category_id, $course_img]);

    $course_id = $conn->lastInsertId();
 
    $sql2 = "INSERT INTO course_video (course_id, category_id, lesson_title, video_link)
             VALUES (?, ?, ?, ?)";
    $stmt2 = $conn->prepare($sql2);

    foreach ($lessons as $lesson) {
        if (
            empty($lesson['lesson_title']) ||
            empty($lesson['video_link'])
        ) {
            continue;
        }

        $stmt2->execute([
            $course_id,
            $category_id,
            $lesson['lesson_title'],
            $lesson['video_link']
        ]);
    }

    $conn->commit();

    echo json_encode([
        "status" => "success",
        "message" => "Kurs və dərslər uğurla əlavə edildi",
        "course_id" => $course_id
    ]);

} catch (Exception $e) {
    $conn->rollBack();

    echo json_encode([
        "status" => "error",
        "message" => "Xəta baş verdi",
        "error" => $e->getMessage()
    ]);
}
