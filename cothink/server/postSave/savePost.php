<?php
require_once "../db.php";
require_once "../auth.php";

// Token əsasında user məlumatını götür
$user = require_auth();

$data = json_decode(file_get_contents("php://input"), true);
$post_id = $data["post_id"] ?? null;
$user_type = $data["user_type"] ?? null; 
// user_type = "student" və ya "mentor"

if (!$post_id || !$user_type) {
    echo json_encode(["error" => "Məlumat tam deyil"]);
    exit;
}

// Hansı userdir?
if ($user_type === "student") {
    $user_id = $user["student_id"];
    $post_table = "student_posts";
} elseif ($user_type === "mentor") {
    $user_id = $user["mentor_id"];
    $post_table = "mentor_posts";
} else {
    echo json_encode(["error" => "Yanlış user_type"]);
    exit;
}

// Post həqiqətən mövcuddurmu?
$check = $pdo->prepare("SELECT id FROM $post_table WHERE id = ?");
$check->execute([$post_id]);

if ($check->rowCount() == 0) {
    echo json_encode(["error" => "Belə post yoxdur"]);
    exit;
}

// Save et
$query = $pdo->prepare("
    INSERT IGNORE INTO saved_posts (user_id, user_type, post_id)
    VALUES (?, ?, ?)
");
$query->execute([$user_id, $user_type, $post_id]);

echo json_encode([
    "success" => true,
    "message" => "Post saved",
    "user_type" => $user_type
]);
?>