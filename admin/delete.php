<?php
    $num = $_GET['num'];
    include_once 'db.php';
    $query = "delete from portfolio_kyo where num = '$num'";
    mysqli_query($connect,$query);
?>
<script>
    location.href='list.php';
</script>