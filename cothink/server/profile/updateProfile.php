<?php
require_once "../db.php";

header("Content-Type: application/json; charset=UTF-8");
 
if (isset($_GET['student_id'])) {
    $type = "student";
    $id = intval($_GET['student_id']);
    $table = "student_table";
    $idField = "student_id";
} elseif (isset($_GET['mentor_id'])) {
    $type = "mentor";
    $id = intval($_GET['mentor_id']);
    $table = "mentors";
    $idField = "mentor_id";
} else {
    echo json_encode([
        "status" => "error",
        "error" => "ID tapılmadı"
    ]);
    exit;
}
 
$name     = $_POST["{$type}_name"] ?? null;
$username = $_POST["{$type}_username"] ?? null;
$email    = $_POST["{$type}_email"] ?? null;
$password = $_POST["{$type}_password"] ?? null;
$description  = $_POST["description"] ?? null;
$linkedn_link = $_POST["linkedn_link"] ?? null;

$profile_img = null;
 
if (isset($_FILES['profile_img']) && $_FILES['profile_img']['error'] === 0) {

    $uploadDir = "../../uploads/profiles/";
    if (!is_dir($uploadDir)) {
        mkdir($uploadDir, 0777, true);
    }

    $ext = pathinfo($_FILES['profile_img']['name'], PATHINFO_EXTENSION);
    $fileName = $type . "_" . $id . "_" . time() . "." . $ext;

    if (move_uploaded_file($_FILES['profile_img']['tmp_name'], $uploadDir . $fileName)) {
        $profile_img = "/uploads/profiles/" . $fileName;
    }
}
 
$sql = "UPDATE {$table} SET
    {$type}_name = :name,
    {$type}_username = :username,
    {$type}_email = :email,
    description = :description,
    linkedn_link = :linkedn_link";

if ($password) {
    $sql .= ", {$type}_password = :password";
}

if ($profile_img) {
    $sql .= ", profile_img = :profile_img";
}

$sql .= " WHERE {$idField} = :id";

$stmt = $pdo->prepare($sql);
 
$stmt->bindParam(":name", $name);
$stmt->bindParam(":username", $username);
$stmt->bindParam(":email", $email);
$stmt->bindParam(":description", $description);
$stmt->bindParam(":linkedn_link", $linkedn_link);
$stmt->bindParam(":id", $id);

 

if ($profile_img) {
    $stmt->bindParam(":profile_img", $profile_img);
}
 
if ($stmt->execute()) {
    echo json_encode([
        "status" => "success",
        "message" => "Profil uğurla yeniləndi",
        "type" => $type
    ]);
} else {
    echo json_encode([
        "status" => "error",
        "error" => "Profil yenilənmədi"
    ]);
}
