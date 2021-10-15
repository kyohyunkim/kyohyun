<?php
session_start();
if($_SESSION['id'] != 'rlarygus33'){
    
    echo"<script>
            alert('관리자 로그인 후 이용하세요.');
            location.href='login.php';
        </script>";
}
    
?>