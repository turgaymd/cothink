<?php
require_once "../db.php";
session_start();

header("Content-Type: application/json");

 

// MENTOR ID SESSION-DAN
if (!isset($_SESSION['mentor_id'])) {
    echo json_encode(["status" => "error", "message" => "Mentor not logged in"]);
    exit;
}

$mentor_id = $_SESSION['mentor_id'];

$book_title  = $_POST['book_title'] ?? null;
$description = $_POST['description'] ?? null; 
$catagory_id = $_POST['catagory_id'] ?? null;

if (!$book_title || !$description ) {
    echo json_encode(["status" => "error", "message" => "Required fields missing"]);
    exit;
}

////////////////////
// FILE UPLOAD
////////////////////

$upload_dir = __DIR__ . "../uploads/books";

if (!is_dir($upload_dir)) {
    mkdir($upload_dir, 0777, true);
}

// --- book_img upload ---
$book_img = null;

if (!empty($_FILES['book_img']['name'])) {
    $img_name = time() . "_" . basename($_FILES['book_img']['name']);
    $img_path = $upload_dir . $img_name;

    if (move_uploaded_file($_FILES['book_img']['tmp_name'], $img_path)) {
        $book_img = $img_name;
    }
}

// --- book_file upload ---
$book_file = null;

if (!empty($_FILES['book_file']['name'])) {
    $file_name = time() . "_" . basename($_FILES['book_file']['name']);
    $file_path = $upload_dir . $file_name;

    if (move_uploaded_file($_FILES['book_file']['tmp_name'], $file_path)) {
        $book_file = $file_name;
    }
}

////////////////////
// DATABASE INSERT (PDO)
////////////////////

$sql = "INSERT INTO mentor_books 
        (book_title, description, mentor_id, catagory_id, book_img, book_file)
        VALUES (?, ?, ?, ?, ?, ?)";

$stmt = $conn->prepare($sql);

$success = $stmt->execute([
    $book_title,
    $description,
    $mentor_id,
    $catagory_id,
    $book_img,
    $book_file
]);

if ($success) {
    echo json_encode(["status" => "success", "message" => "Book created"]);
} else {
    echo json_encode(["status" => "error", "message" => "Insert failed"]);
}
?>
