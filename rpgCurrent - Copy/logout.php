<?php
    setcookie("userId",false,time()-(86400 * 30));

    header("location:index.php");
?>