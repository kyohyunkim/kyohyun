<?php
    @session_start();

    $id = $_GET['id'];
    $pw = $_GET['pw'];

    include_once 'db.php';
    $query = "SELECT * FROM admin
    WHERE id='$id' and pw='$pw'";

    $result = mysqli_query($connect,$query);
    $row = mysqli_num_rows($result);

    if($row){
        //성공

        $_SESSION['id'] = 'rlarygus33';
        echo "<script>
                location.href='list.php';
            </script>";
    }else{
        //실패

        echo"<script>
                alert('관리자 정보가 잘못되었습니다.');
                history.back();
            </script>";
    };
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>