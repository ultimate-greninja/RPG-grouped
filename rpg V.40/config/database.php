<?php

    $dotenv = parse_ini_file('.env');

    define("DB_HOST", $dotenv['DB_HOST']);
    define("DB_USER", $dotenv['DB_USER']);
    define("DB_PASS", $dotenv['DB_PASS']);
    define("DB_NAME", $dotenv['DB_NAME']);

    $conn;

    try {
        $conn = mysqli_connect(DB_HOST,DB_USER,DB_PASS,DB_NAME);
    } catch (Exception $ex) {
        echo("Connection Fail".$ex);
    }

?>