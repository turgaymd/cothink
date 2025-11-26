<?php
require_once "../db.php";

header("Content-Type: application/json");

$data = json_decode(file_get_contents("php://input"), true);

$course_id = $data['course_id'] ?? null;

if (!$course_id) {
    echo json_encode(["status" => "error", "message" => "course_id tələb olunur"]);
    exit;
}

// Əvvəlcə dərsləri sil
$sql1 = "DELETE FROM course_video WHERE course_id=?";
$stmt1 = $conn->prepare($sql1);
$stmt1->bind_param("i", $course_id);
$stmt1->execute();

// Sonra kursu sil
$sql2 = "DELETE FROM mentor_course WHERE course_id=?";
$stmt2 = $conn->prepare($sql2);
$stmt2->bind_param("i", $course_id);

if ($stmt2->execute()) {
    echo json_encode(["status" => "success", "message" => "Kurs və bütün dərslər silindi"]);
} else {
    echo json_encode(["status" => "error", "message" => "Silinmədi"]);
}
?>
