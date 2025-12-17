<?php
require_once "../../db.php";

header("Content-Type: application/json; charset=UTF-8");

$book_id = intval($_GET['book_id']);
$data = json_decode(file_get_contents("php://input"), true);
$student_id = intval($data['student_id']);

try { 
    $check = $pdo->prepare("
        SELECT id FROM book_likes
        WHERE student_id = ? AND book_id = ?
    ");
    $check->execute([$student_id, $book_id]);

    if ($check->rowCount() === 0) {
        echo json_encode(["status" => "not_liked"]);
        exit;
    }
 
    $pdo->prepare("
        DELETE FROM book_likes
        WHERE student_id = ? AND book_id = ?
    ")->execute([$student_id, $book_id]);
 
    $pdo->prepare("
        UPDATE mentor_books
        SET likes = GREATEST(likes - 1, 0)
        WHERE book_id = ?
    ")->execute([$book_id]);

    echo json_encode(["status" => "unliked"]);

} catch (PDOException $e) {
    echo json_encode(["status" => "error"]);
}
