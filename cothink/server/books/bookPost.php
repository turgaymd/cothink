<?php
require_once "../db.php";

$book_title  = $_POST['book_title'] ?? null;
$description = $_POST['description'] ?? null;
$mentor_id   = $_POST['mentor_id'] ?? null;
$catagory_id = $_POST['catagory_id'] ?? null;

if (!$book_title || !$description || !$mentor_id) {
    echo json_encode(["status" => "error", "message" => "Required fields missing"]);
    exit;
}

////////////////////
// FILE UPLOAD
////////////////////

// uploads folder inside client
$upload_dir = __DIR__ . "/../../client/uploads/";

// Create if not exists
if (!is_dir($upload_dir)) {
    mkdir($upload_dir, 0777, true);
}

// --- book_img ---
$book_img = null;
if (!empty($_FILES['book_img']['name'])) {
    $img_name = time() . "_" . basename($_FILES['book_img']['name']);
    $img_path = $upload_dir . $img_name;

    if (move_uploaded_file($_FILES['book_img']['tmp_name'], $img_path)) {
        $book_img = $img_name;
    }
}

// --- book_file ---
$book_file = null;
if (!empty($_FILES['book_file']['name'])) {
    $file_name = time() . "_" . basename($_FILES['book_file']['name']);
    $file_path = $upload_dir . $file_name;

    if (move_uploaded_file($_FILES['book_file']['tmp_name'], $file_path)) {
        $book_file = $file_name;
    }
}

////////////////////
// DATABASE INSERT
////////////////////

$sql = "INSERT INTO mentor_book 
        (book_title, description, mentor_id, catagory_id, book_img, book_file)
        VALUES (?, ?, ?, ?, ?, ?)";

$stmt = $conn->prepare($sql);
$stmt->bind_param("ssiiss", 
    $book_title, $description, $mentor_id, $catagory_id, $book_img, $book_file
);

if ($stmt->execute()) {
    echo json_encode(["status" => "success", "message" => "Book created"]);
} else {
    echo json_encode(["status" => "error", "message" => "Insert failed"]);
}
?>
