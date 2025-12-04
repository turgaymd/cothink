<?php
require_once "db.php";

function require_auth() {
    // Header-dən token götür
    $headers = getallheaders();
    if (!isset($headers["Authorization"])) {
        echo json_encode(["error" => "No Authorization header"]);
        exit;
    }

    // "Bearer TOKEN" formatından tokeni çıxar
    $authHeader = $headers["Authorization"];
    $token = str_replace("Bearer ", "", $authHeader);

    if (!$token) {
        echo json_encode(["error" => "Token empty"]);
        exit;
    }

    global $pdo;

    // Token DB-də varsa user-i götür
    $query = $pdo->prepare("
        SELECT s.student_id, s.student_name, s.student_email
        FROM auth_tokens t
        JOIN student_table s ON s.student_id = t.student_id
        WHERE t.token = ?
    ");
    $query->execute([$token]);
    $user = $query->fetch();

    if (!$user) {
        echo json_encode(["error" => "Invalid token"]);
        exit;
    }

    return $user; // user məlumatı API-lərə geri gedir
}
?>
