<?php
    setcookie("userId",false,time()-3600);

    header("location:index.php");
?>