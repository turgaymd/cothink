<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json");

require_once "../db.php";

// JSON yoxdursa (çünki şəkil gələndə FormData olur) POST-u götür
$data = json_decode(file_get_contents("php://input"), true);
if (!$data) {
    $data = $_POST;
}

$student_id      = $data["student_id"] ?? null;
$student_name    = $data["student_name"] ?? null;
$student_username = $data["studen_username"] ?? null;
$student_email   = $data["student_email"] ?? null;
$description    = $data["description"] ?? null;
$student_password = $data["student_password"] ?? null; 

if (!$student_id) {
    echo json_encode([
        "status" => "error",
        "message" => "student_id göndərilməyib"
    ]);
    exit;
}

// -------------------------------
// ŞƏKİL YÜKLƏMƏ
// -------------------------------
$image_url = null;

if (!empty($_FILES['profile_img']['name'])) {
    $img_name = time() . "_" . basename($_FILES['profile_img']['name']);
    $img_path = "../uploads/" . $img_name;

    if (move_uploaded_file($_FILES["profile_img"]["tmp_name"], $img_path)) {
        $image_url = "../uploads/" . $img_name;
    }
}

// -------------------------------
// SQL UPDATE HAZIRLANMASI
// -------------------------------

$sql = "UPDATE student_table SET 
            student_name = ?, 
            student_username = ?, 
            student_email = ?, 
            description = ?, 
            student_password = ?";

if ($image_url) {
    $sql .= ", profile_img = '" . $image_url . "'";
}

$sql .= " WHERE student_id = ?";

$stmt = $conn->prepare($sql);

$stmt->execute([
    $student_name,
    $student_username,
    $student_email,
    $description,
    $student_password, 
    $student_id
]);

if ($stmt->execute()) {
    echo json_encode([
        "status" => "success",
        "message" => "Student profili yeniləndi",
        "image" => $image_url
    ]);
} else {
    echo json_encode([
        "status" => "error",
        "message" => "Yeniləmə zamanı xəta baş verdi"
    ]);
}
?>