<?php
require_once "../db.php";
<<<<<<< HEAD

header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json");

// OPTIONS sorğusu üçün
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// FRONTEND-DƏN mentor_id QƏBUL ET
$data = json_decode(file_get_contents("php://input"), true);

if (!isset($data['mentor_id'])) {
    echo json_encode(["status" => "error", "message" => "mentor_id missing"]);
    exit;
}

$mentor_id = intval($data['mentor_id']);

try {

    $stmt = $conn->prepare("
        SELECT 
            p.post_id,
            p.post_title,
            p.post_content,
            p.created_at,

            m.mentor_name,
            m.profile_img
        FROM mentor_post AS p
        LEFT JOIN mentors AS m
            ON p.mentor_id = m.mentor_id
        WHERE p.mentor_id = ?
    ");

    $stmt->execute([$mentor_id]);
    $posts = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($posts);

} catch (PDOException $e) {

    echo json_encode([
        "status" => "error",
        "message" => $e->getMessage()
    ]);
}
=======
session_start();
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");


// MENTOR ID SESSION-DAN
if (!isset($_SESSION['mentor_id'])) {
    echo json_encode(["status" => "error", "message" => "Mentor not logged in"]);
    exit;
}

$mentor_id = $_SESSION['mentor_id'];

// PDO prepare + execute ilə sorğu
$sql = "SELECT * FROM mentor_post WHERE mentor_id = ?";
$stmt = $conn->prepare($sql);
$stmt->execute([$mentor_id]);

$posts = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode(['status' => 'success', 'data' => $posts]);
?>
>>>>>>> 93ce575b66fa678a15fc6a8d8735e8c0f67daffd
