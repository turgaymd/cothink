<?php
require_once "db.php";
header('Content-Type: application/json');

$data = json_decode(file_get_contents("php://input"), true);

$email = $data['email'] ?? '';
$password = $data['password'] ?? '';

if(!$email || !$password){
    echo json_encode(['status'=>'error','message'=>'Email and password are required']);
    exit;
}

try {
    $user = null;
    $role = '';

    // 1 Mentor table-də yoxla
    $stmt = $conn->prepare("SELECT * FROM mentors WHERE mentor_email = :email");
    $stmt->execute([':email' => $email]);
    $mentor = $stmt->fetch();

    if($mentor){
        $role = 'mentor';
        $user = $mentor;
    } else {
        // 2 Student table-də yoxla
        $stmt = $conn->prepare("SELECT * FROM student_table WHERE student_email = :email");
        $stmt->execute([':email' => $email]);
        $student = $stmt->fetch();

        if($student){
            $role = 'student';
            $user = $student;
        }
    }

    if(!$user){
        echo json_encode(['status'=>'error','message'=>'User not found']);
        exit;
    }

    // 3 Password yoxla
    if(!password_verify($password, $user['password'])){
        echo json_encode(['status'=>'error','message'=>'Invalid password']);
        exit;
    }

    // 4 Uğurlu cavab
    echo json_encode([
        'status' => 'success',
        'user' => [
            'id' => $user['id'],       // hər iki table-də id
            'name' => $user['name'],
            'email' => $user['email'],
            'username' => $user['username'] ?? null,
            'role' => $role
        ]
    ]);

} catch(PDOException $e){
    echo json_encode(['status'=>'error','message'=>$e->getMessage()]);
}
?>