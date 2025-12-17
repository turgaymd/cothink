<?php
require_once "../db.php";
session_start();

// CORS
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Credentials: true");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// ===============================
//    POST DATA OXUMAQ
// ===============================
$course_title = $_POST['course_title'] ?? null;
$category_id  = $_POST['category_id'] ?? null;
$lesson_title = $_POST['lesson_title'] ?? null;
$video_link   = $_POST['video_link'] ?? null; 

// Mentor ID (localStorage-dən gələcək)
$mentor_id = $_POST['mentor_id'] ?? null;

// Fayl upload
$course_img = null;
if (isset($_FILES['course_img'])) {
    $file = $_FILES['course_img'];
    $ext = pathinfo($file['name'], PATHINFO_EXTENSION);
    $filename = time() . "_course." . $ext;
    $upload_dir = "cothinke.az/server/uploads/course_img/";
    if (!file_exists($upload_dir)) mkdir($upload_dir, 0777, true);

    if (move_uploaded_file($file['tmp_name'], $upload_dir . $filename)) {
        $course_img = "cothinke.az/server/uploads/course_img/" . $filename;
    }
}

 

// ===============================
//    DB INSERT
// ===============================
// Əvvəl mentor_course cədvəlinə kurs əlavə et
$sql = "INSERT INTO mentor_course (mentor_id, course_title, category_id, course_img) VALUES (?, ?, ?, ?)";
$stmt = $conn->prepare($sql);
$success = $stmt->execute([ $mentor_id,  $course_title, $category_id, $course_img]);

if (!$success) {
    echo json_encode(["status" => "error", "message" => "Kurs əlavə olunmadı"]);
    exit;
}

// Yeni course id
$course_id = $conn->lastInsertId();

// Dərsi course_video cədvəlinə əlavə et
$sql2 = "INSERT INTO course_video (course_id, category_id, lesson_title, video_link) VALUES (?, ?, ?, ?)";
$stmt2 = $conn->prepare($sql2);
$success2 = $stmt2->execute([ $course_id, $category_id, $lesson_title, $video_link]);

if ($success2) {
    echo json_encode([
        "status" => "success",
        "message" => "Kurs və dərs uğurla əlavə edildi",
        "course_id" => $course_id
    ]);
} else {
    echo json_encode(["status" => "error", "message" => "Dərs əlavə olunmadı"]);
}
?>
