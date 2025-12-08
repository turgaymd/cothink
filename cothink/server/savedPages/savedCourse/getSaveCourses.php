<?php
require_once "../../db.php";
header("Content-Type: application/json; charset=UTF-8");

if (!isset($_GET['student_id'])) {
    echo json_encode(["status" => "error", "message" => "student_id is required"]);
    exit;
}

$student_id = intval($_GET['student_id']);

try {

    $sql = "
        SELECT 
            sp.id AS saved_id,
            sp.student_id,
            sp.post_id,
            sp.saved_at,

            mp.post_title,
            mp.post_desc,
            mp.post_img,
            mp.likes,
            mp.saved,
            mp.category_id,
            c.category,
            'mentor' AS post_type

        FROM saved_posts sp
        JOIN mentor_post mp ON sp.post_id = mp.post_id
        LEFT JOIN categories c ON mp.category_id = c.category_id
        WHERE sp.student_id = ?

        UNION ALL

        SELECT 
            sp.id AS saved_id,
            sp.student_id,
            sp.post_id,
            sp.saved_at,

            st.post_title,
            st.post_desc,
            st.post_img,
            st.likes,
            st.saved,
            st.category_id,
            c.category,
            'student' AS post_type

        FROM saved_posts sp
        JOIN student_post st ON sp.post_id = st.post_id
        LEFT JOIN categories c ON st.category_id = c.category_id
        WHERE sp.student_id = ?

        ORDER BY saved_at DESC
    ";

    $stmt = $conn->prepare($sql);
    $stmt->execute([$student_id, $student_id]);
    $saved = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode(["status" => "success", "saved_posts" => $saved]);

} catch (PDOException $e) {
    echo json_encode(["status" => "error", "message" => $e->getMessage()]);
}
