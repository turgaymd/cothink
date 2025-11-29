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

$mentor_id      = $data["mentor_id"] ?? null;
$mentor_name    = $data["mentor_name"] ?? null;
$mentor_username = $data["mentor_username"] ?? null;
$mentor_email   = $data["mentor_email"] ?? null;
$description    = $data["description"] ?? null;
$mentor_password = $data["mentor_password"] ?? null;
$linkedin_link  = $data["linkedin_link"] ?? null;

if (!$mentor_id) {
    echo json_encode([
        "status" => "error",
        "message" => "mentor_id göndərilməyib"
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
        $image_url = "uploads/" . $img_name;
    }
}

// -------------------------------
// SQL UPDATE HAZIRLANMASI
// -------------------------------

$sql = "UPDATE mentors SET 
            mentor_name = ?, 
            mentor_username = ?, 
            mentor_email = ?, 
            description = ?, 
            mentor_password = ?, 
            linkedin_link = ?";

if ($image_url) {
    $sql .= ", profile_img = '" . $image_url . "'";
}

$sql .= " WHERE mentor_id = ?";

$stmt = $conn->prepare($sql);

$stmt->bind_param(
    "ssssssi",
    $mentor_name,
    $mentor_username,
    $mentor_email,
    $description,
    $mentor_password,
    $linkedin_link,
    $mentor_id
);

if ($stmt->execute()) {
    echo json_encode([
        "status" => "success",
        "message" => "Mentor profili yeniləndi",
        "image" => $image_url
    ]);
} else {
    echo json_encode([
        "status" => "error",
        "message" => "Yeniləmə zamanı xəta baş verdi"
    ]);
}
?>