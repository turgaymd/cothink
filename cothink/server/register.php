<?php
session_start();
require_once "db.php";

// CORS headers
header("Access-Control-Allow-Origin: http://localhost:5173");
<<<<<<< HEAD
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
header("Content-Type: application/json");

=======
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
header("Content-Type: application/json");

// Handle preflight OPTIONS request
>>>>>>> 93ce575b66fa678a15fc6a8d8735e8c0f67daffd
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

<<<<<<< HEAD
$data = json_decode(file_get_contents("php://input"), true);

$type = trim($data["type"] ?? "");
$email = trim($data["email"] ?? "");
$password = trim($data["password"] ?? "");

if (!$type || !$email || !$password) {
=======
// Get JSON body
$data = json_decode(file_get_contents("php://input"), true);

$username = trim($data["username"] ?? '');
$email    = trim($data["email"] ?? '');
$password = trim($data["password"] ?? '');

// Validation
if (!$username || !$email || !$password) {
>>>>>>> 93ce575b66fa678a15fc6a8d8735e8c0f67daffd
    echo json_encode(["error" => "Bütün xanalar doldurulmalıdır"]);
    exit;
}

if (strlen($password) < 8) {
    echo json_encode(["error" => "Şifrə ən azı 8 simvol olmalıdır"]);
    exit;
}

<<<<<<< HEAD
if ($type === "student") {
    $username = trim($data["username"] ?? "");
    if (!$username) {
        echo json_encode(["error" => "Ad tələb olunur"]);
        exit;
    }

    // Email yoxla
    $check = $pdo->prepare("SELECT student_id FROM student_table WHERE student_email = ?");
    $check->execute([$email]);
    if ($check->rowCount() > 0) {
        echo json_encode(["error" => "Bu email ilə artıq student qeydiyyatı var"]);
        exit;
    }

    // $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

    $query = $pdo->prepare("INSERT INTO student_table (student_name, student_email, student_password) VALUES (?, ?, ?)");
    $query->execute([$username, $email, $password]);

    $student_id = $pdo->lastInsertId();
    $_SESSION["student_id"] = $student_id;
    $token = bin2hex(random_bytes(32));

    echo json_encode([
        "success" => true,
        "type" => "student",
        "message" => "Student uğurla qeydiyyatdan keçdi",
        "student_id" => $student_id,
        "username" => $username,
        "email" => $email,
        "token" => $token
    ]);
    exit;
}

if ($type === "mentor") {
    $name = trim($data["name"] ?? "");
    $linkedinLink = trim($data["linkedinLink"] ?? "");
    $category = intval($data["category"] ?? 0);
    $position = "Teacher"; // default

    if (!$name || !$email) {
        echo json_encode(["error" => "Ad və email boş ola bilməz"]);
        exit;
    }

    // Email yoxla
    $check = $pdo->prepare("SELECT mentor_id FROM mentors WHERE mentor_email = ?");
    $check->execute([$email]);
    if ($check->rowCount() > 0) {
        echo json_encode(["error" => "Bu email ilə artıq mentor qeydiyyatı var"]);
        exit;
    }

    // $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

    $query = $pdo->prepare("INSERT INTO mentors (mentor_name, mentor_email, linkedn_link, category_id, mentor_password) VALUES (?, ?, ?, ?, ?)");
    $query->execute([$name, $email, $linkedinLink, $category, $password]);

    $mentor_id = $pdo->lastInsertId();
    $_SESSION["mentor_id"] = $mentor_id;
    $token = bin2hex(random_bytes(32));

    echo json_encode([
        "success" => true,
        "type" => "mentor",
        "message" => "Mentor uğurla qeydiyyatdan keçdi",
        "mentor_id" => $mentor_id,
        "name" => $name,
        "email" => $email,
        "linkedinLink" => $linkedinLink,
        "category" => $category,
        "position" => $position,
        "token" => $token
    ]);
    exit;
}

// Wrong type
echo json_encode(["error" => "Düzgün qeydiyyat tipi seçilməyib (student | mentor)"]);
exit;
?>
=======
// Check if email exists
$check = $pdo->prepare("SELECT student_id FROM student_table WHERE student_email = ?");
$check->execute([$email]);

if ($check->rowCount() > 0) {
    echo json_encode(["error" => "Bu email ilə artıq qeydiyyat var"]);
    exit;
}
 

// Insert user
$query = $pdo->prepare("
    INSERT INTO student_table (student_name, student_email, student_password)
    VALUES (?, ?, ?)
");

try {
    $query->execute([$username, $email, $password]);
} catch (Exception $e) {
    echo json_encode(["error" => "DB error: " . $e->getMessage()]);
    exit;
}

// Get inserted ID
$student_id = $pdo->lastInsertId();

// Save to session
$_SESSION["student_id"] = $student_id;

// Generate token
$token = bin2hex(random_bytes(32));

// Successful response
echo json_encode([
    "success" => true,
    "message" => "User registered successfully",
    "student_id" => $student_id,
    "username" => $username,
    "email" => $email,
    "token" => $token
]);

exit;
?>
>>>>>>> 93ce575b66fa678a15fc6a8d8735e8c0f67daffd
