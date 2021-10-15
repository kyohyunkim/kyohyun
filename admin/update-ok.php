<?php
        $num = $_POST['num'];
        $title = $_POST['title'];
        $detail = $_POST['detail'];
        $screen = $_FILES['screen'];
        $contents = $_POST['contents'];
        $pctype = $_POST['pctype'];

        $fileName1 = $screen['name'];
        $tmpName1 = $screen['tmp_name'];
        echo $fileName1;

        include_once "db.php";

        if( !empty($fileName1) ){
            echo "파일이 있습니다.";

            $query = "SELECT * FROM portfolio_kyo WHERE num='$num'";
            $result = mysqli_query($connect,$query);
            $row = mysqli_fetch_array($result);

            @unlink('./files/'.$row['screen']); //파일삭제
            move_uploaded_file($tmpName1, './files/'.$fileName1);

            $query = "UPDATE portfolio_kyo SET
            screen='$fileName1' WHERE num='$num'";
            mysqli_query($connect,$query);

        }
        

        $query = "UPDATE portfolio_kyo SET
                title='$title', detail='$detail', contents='$contents', pctype='$pctype'
                WHERE num='$num'";
        mysqli_query($connect,$query);

?>

<script>
    location.href = 'list.php'; 
</script>