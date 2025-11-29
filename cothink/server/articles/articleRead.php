<?php
require_once "../db.php";

$sql = "SELECT * FROM mentor_article";
$result = $conn->query($sql);

$articles = [];

while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
    $articles[] = $row;
}

echo json_encode($articles);
?>