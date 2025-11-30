<?php
require_once "../db.php";

header("Content-Type: application/json");

$id = $_GET['id'] ?? null;

if (!$id) {
    echo json_encode(["status" => "error", "message" => "ID required"]);
    exit;
}

// Get book files
$sql = "SELECT book_img, book_file FROM mentor_book WHERE id = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $id);
$stmt->execute();
$data = $stmt->get_result()->fetch_assoc();

if (!$data) {
    echo json_encode(["status" => "error", "message" => "Book not found"]);
    exit;
}

$upload_dir = __DIR__ . "/../../client/uploads/";

// Delete files
if ($data['book_img'] && file_exists($upload_dir . $data['book_img'])) {
    unlink($upload_dir . $data['book_img']);
}

if ($data['book_file'] && file_exists($upload_dir . $data['book_file'])) {
    unlink($upload_dir . $data['book_file']);
}

// Delete record
$sql = "DELETE FROM mentor_book WHERE id = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $id);

if ($stmt->execute()) {
    echo json_encode(["status" => "success", "message" => "Book deleted"]);
} else {
    echo json_encode(["status" => "error", "message" => "Delete failed"]);
}
?>
