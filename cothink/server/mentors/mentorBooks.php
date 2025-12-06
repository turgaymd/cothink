<?php
<<<<<<< HEAD
// CORS header-ləri
require_once "../db.php";

header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json");

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
            b.book_id,
            b.book_title,
            b.book_author,
            b.book_price,
            b.created_at,

            m.mentor_name
        FROM mentor_books AS b
        LEFT JOIN mentors AS m
            ON b.mentor_id = m.mentor_id
        WHERE b.mentor_id = ?
    ");

    $stmt->execute([$mentor_id]);
    $books = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($books);

} catch (PDOException $e) {

    echo json_encode([
        'status' => 'error',
        'message' => $e->getMessage()
    ]);
}
=======
require_once "../db.php";
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
$sql = "SELECT * FROM mentor_books WHERE mentor_id = ?";
$stmt = $conn->prepare($sql);
$stmt->execute([$mentor_id]);

$books = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode(['status' => 'success', 'data' => $books]);
?>
>>>>>>> 93ce575b66fa678a15fc6a8d8735e8c0f67daffd
