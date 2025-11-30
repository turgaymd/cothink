<?php
require_once "../db.php";

header("Content-Type: application/json");

$id = $_GET['id'] ?? null;

if (!$id) {
    echo json_encode(["status" => "error", "message" => "ID required"]);
    exit;
}

// 1. Kitab fayllarını seç
$sql = "SELECT book_img, book_file FROM mentor_books WHERE id = ?";
$stmt = $conn->prepare($sql);
$stmt->execute([$id]);

$data = $stmt->fetch(PDO::FETCH_ASSOC);

if (!$data) {
    echo json_encode(["status" => "error", "message" => "Book not found"]);
    exit;
}

// Upload qovluğunun dəqiq yolu
$upload_dir = realpath(__DIR__ . "/../../client/uploads") . "/";

// 2. Şəkili sil
if (!empty($data['book_img']) && file_exists($upload_dir . $data['book_img'])) {
    unlink($upload_dir . $data['book_img']);
}

// 3. Kitab faylını sil
if (!empty($data['book_file']) && file_exists($upload_dir . $data['book_file'])) {
    unlink($upload_dir . $data['book_file']);
}

// 4. Database-dən sil
$sql = "DELETE FROM mentor_books WHERE id = ?";
$stmt = $conn->prepare($sql);

$success = $stmt->execute([$id]);

if ($success) {
    echo json_encode(["status" => "success", "message" => "Book deleted"]);
} else {
    echo json_encode(["status" => "error", "message" => "Delete failed"]);
}
?>
