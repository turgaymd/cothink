<?php
require_once "../db.php";
require_once "../auth.php";

$user = require_auth();

$student_id = $user["student_id"] ?? null;
$mentor_id  = $user["mentor_id"] ?? null;

if (!$student_id && !$mentor_id) {
    echo json_encode(["error" => "User tipi tapılmadı"]);
    exit;
}

$user_id   = $student_id ?: $mentor_id;
$user_type = $student_id ? "student" : "mentor";

// Bütün saved contentləri götür
$stmt = $pdo->prepare("
    SELECT s.content_id, s.content_type, s.saved_at
    FROM saved_items s
    WHERE s.user_id = ? AND s.user_type = ?
    ORDER BY s.saved_at DESC
");
$stmt->execute([$user_id, $user_type]);
$saved_items = $stmt->fetchAll(PDO::FETCH_ASSOC);

// Hər bir content üçün ayrıca məlumatları join edə bilərik
$full_list = [];

foreach ($saved_items as $item) {
    $table = $user_type . "_" . $item['content_type'] . "s"; // student_books / mentor_courses
    $q = $pdo->prepare("SELECT * FROM $table WHERE id = ?");
    $q->execute([$item['content_id']]);
    $content = $q->fetch(PDO::FETCH_ASSOC);
    if ($content) {
        $content['content_type'] = $item['content_type'];
        $content['saved_at'] = $item['saved_at'];
        $full_list[] = $content;
    }
}

echo json_encode([
    "success" => true,
    "saved_items" => $full_list
]);
?>