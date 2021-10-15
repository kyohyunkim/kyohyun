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
    
    
    echo "<script>location.href='write-ok.php';</script>"
?>