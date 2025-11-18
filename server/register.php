<?php
require_once "db.php";
header('Content-Type: application/json');

$data = json_decode(file_get_contents("php://input"), true);

$name = $data['name'] ?? '';
$username = $data['username'] ?? '';
$email = $data['email'] ?? '';
$password = $data['password'] ?? '';
$role = $data['role'] ?? '';

if(!$name || !$username || !$email || !$role){
    echo json_encode(['status'=>'error','message'=>'All fields required']);
    exit;
}

// Password hash et
$hashedPassword = $password ? password_hash($password, PASSWORD_DEFAULT) : null;

try {
    if($role === 'mentor'){
        // Mentor table-a insert
        $stmt = $conn->prepare("
            INSERT INTO mentors (mentor_name, mentor_username, mentor_email, mentor_password) 
            VALUES (:name, :username, :email, :password)
        ");
        $stmt->execute([
            ':name'     => $name,
            ':username' => $username,
            ':email'    => $email,
            ':password' => $hashedPassword
        ]);
        $userId = $conn->lastInsertId();

    } else if($role === 'student'){
        // Student table-a insert
        $stmt = $conn->prepare("
            INSERT INTO student_table (student_name, student_username, student_email, student_password) 
            VALUES (:name, :username, :email, :password)
        ");
        $stmt->execute([
            ':name'     => $name,
            ':username' => $username,
            ':email'    => $email,
            ':password' => $hashedPassword
        ]);
        $userId = $conn->lastInsertId();
    } else {
        echo json_encode(['status'=>'error','message'=>'Invalid role']);
        exit;
    }

    // Uğurlu cavab
    echo json_encode(['status'=>'success', 'user_id'=>$userId, 'role'=>$role]);

} catch(PDOException $e){
    echo json_encode(['status'=>'error','message'=>$e->getMessage()]);
}
?>