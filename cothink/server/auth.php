<?php
session_start();
header('Content-Type: application/json');

if(!isset($_SESSION['user'])){
    echo json_encode(['status'=>'error','message'=>'Unauthorized']);
    exit;
}

// User məlumatı
$user = $_SESSION['user'];
echo json_encode(['status'=>'success','user'=>$user]);
?>