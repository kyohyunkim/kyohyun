<?php
    include_once "db.php";

    $query = "CREATE TABLE portfolio_kyo(
        num INT NOT NULL AUTO_INCREMENT,
        title VARCHAR(100),
        detail VARCHAR(100),
        thum VARCHAR(100),
        contents TEXT,
        screen VARCHAR(100),
        pctype VARCHAR(100),
        PRIMARY KEY(num)
    )";
    mysqli_query($connect, $query);


    $title = $_POST['title'];
    $detail = $_POST['detail'];
    $thum = $_FILES['thum'];
    $contents = $_POST['contents'];
    $screen = $_FILES['screen'];
    $pctype = $_POST['pctype'];

    @mkdir('./files',0777,false);
    $fileName = $thum['name'];
    $tmpName = $thum['tmp_name'];
    $fileName1 = $screen['name'];
    $tmpName1 = $screen['tmp_name'];
    move_uploaded_file($tmpName, './files/'.$fileName);
    move_uploaded_file($tmpName1, './files/'.$fileName1);

    $query = "INSERT INTO portfolio_kyo(
            title, detail, thum, contents, screen, pctype
        ) values (
            '$title','$detail','$fileName','$contents','$fileName1','$pctype'
        )";
    
    mysqli_query($connect, $query);
    

        echo "<script>location.href='list.php';</script>"
?>
