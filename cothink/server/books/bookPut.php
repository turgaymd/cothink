<?php
require_once "../db.php";

header("Content-Type: application/json");

$id = $_POST['id'] ?? null;

if (!$id) {
    echo json_encode(["status" => "error", "message" => "ID required"]);
    exit;
}

// --- Köhnə faylları götür ---
$sql = "SELECT book_img, book_file FROM mentor_books WHERE id = ?";
$stmt = $conn->prepare($sql);
$stmt->execute([$id]);
$old = $stmt->fetch(PDO::FETCH_ASSOC);

if (!$old) {
    echo json_encode(["status" => "error", "message" => "Book not found"]);
    exit;
}

$book_title  = $_POST['book_title'] ?? null;
$description = $_POST['description'] ?? null;
$mentor_id   = $_POST['mentor_id'] ?? null;
$catagory_id = $_POST['catagory_id'] ?? null;

$upload_dir = __DIR__ . "/../../client/uploads/";

// ---------- Image update ----------
$book_img = $old['book_img'];

if (!empty($_FILES['book_img']['name'])) {

    if ($book_img && file_exists($upload_dir . $book_img)) {
        unlink($upload_dir . $book_img);
    }

    $img_name = time() . "_" . basename($_FILES['book_img']['name']);
    move_uploaded_file($_FILES['book_img']['tmp_name'], $upload_dir . $img_name);
    $book_img = $img_name;
}

// ---------- File update ----------
$book_file = $old['book_file'];

if (!empty($_FILES['book_file']['name'])) {

    if ($book_file && file_exists($upload_dir . $book_file)) {
        unlink($upload_dir . $book_file);
    }

    $file_name = time() . "_" . basename($_FILES['book_file']['name']);
    move_uploaded_file($_FILES['book_file']['tmp_name'], $upload_dir . $file_name);
    $book_file = $file_name;
}


// ----------- YENİLƏMƏ (PDO versiyası) -----------
$sql = "UPDATE mentor_books 
        SET book_title = ?, description = ?, mentor_id = ?, catagory_id = ?,
            book_img = ?, book_file = ?
        WHERE id = ?";

$stmt = $conn->prepare($sql);

$success = $stmt->execute([
    $book_title,
    $description,
    $mentor_id,
    $catagory_id,
    $book_img,
    $book_file,
    $id
]);

if ($success) {
    echo json_encode(["status" => "success", "message" => "Book updated"]);
} else {
    echo json_encode(["status" => "error", "message" => "Update failed"]);
}
?>
