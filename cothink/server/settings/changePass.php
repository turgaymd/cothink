<?php
require_once "../db.php";
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json");

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    echo json_encode(["status"=>"error","message"=>"Method not allowed"]);
    exit;
}

$data = json_decode(file_get_contents("php://input"), true);

$userId = $data["user_id"] ?? null;
$userType = $data["user_type"] ?? null;   
$currentPass = $data["current_password"] ?? null;
$newPass = $data["new_password"] ?? null;
$confirmPass = $data["confirm_password"] ?? null;

if (!$userId || !$userType || !$currentPass || !$newPass || !$confirmPass) {
    echo json_encode(["status"=>"error", "message"=>"All fields required"]);
    exit;
}

if ($newPass !== $confirmPass) {
    echo json_encode(["status"=>"error","message"=>"New passwords do not match"]);
    exit;
}

try {

    if ($userType === "mentor") {
 
        $stmt = $conn->prepare("SELECT mentor_password FROM mentors WHERE mentor_id = :id");
        $stmt->execute(["id" => $userId]);
        $row = $stmt->fetch(PDO::FETCH_ASSOC);

        if (!$row) {
            echo json_encode(["status"=>"error","message"=>"Mentor not found"]);
            exit;
        }
 
        if ($currentPass !== $row["mentor_password"]) {
            echo json_encode(["status"=>"error","message"=>"Current password is incorrect"]);
            exit;
        }
 
        $update = $conn->prepare("UPDATE mentors SET mentor_password = :newpass WHERE mentor_id = :id");
        $update->execute(["newpass" => $newPass, "id" => $userId]);

    } else {
 
        $stmt = $conn->prepare("SELECT student_password FROM student_table WHERE student_id = :id");
        $stmt->execute(["id" => $userId]);
        $row = $stmt->fetch(PDO::FETCH_ASSOC);

        if (!$row) {
            echo json_encode(["status"=>"error","message"=>"Student not found"]);
            exit;
        }
 
        if ($currentPass !== $row["student_password"]) {
            echo json_encode(["status"=>"error","message"=>"Current password is incorrect"]);
            exit;
        }
 
        $update = $conn->prepare("UPDATE student_table SET student_password = :newpass WHERE student_id = :id");
        $update->execute(["newpass" => $newPass, "id" => $userId]);
    }

    echo json_encode(["status"=>"success","message"=>"Password changed successfully"]);

} catch (Exception $e) {
    echo json_encode(["status"=>"error", "message"=>$e->getMessage()]);
}
