<?php
    require "config/database.php";
    if (isset($_COOKIE["emailAlreadyInUse"])) {
        setcookie("emailAlreadyInUse","",time()-(86400*30));
    }
    if (isset($_POST["btnLogin"])) {
        $fail = true;
        $email = $_POST["txtEmail"];
        $pass = $_POST["txtPassword"];
        $username =$_POST["txtUsername"];
        $sql = "SELECT * FROM user WHERE email = '$email' AND username = '$username'";
        $result = mysqli_query($conn,$sql);
        while ($row = mysqli_fetch_assoc($result)) {
            
            $passHash = $row["passwordText"];
            if (password_verify($pass,$passHash)) {
                $userId = $row["userId"];
                setcookie("userId", $userId, time() + (86400 * 30), "/"); // 86400 = 1 day
                header("location:index.php");
                $fail = false;
            }
            else{
                setcookie("passwordIncorrect","", time() + (86400 * 30), "/"); // 86400 = 1 day
                mysqli_close($conn);
                header("location:titleScreen.php");
                $fail = false;
            }
        if ($fail = true){
            setcookie("AccountDontExist","", time() + (86400 * 30), "/"); // 86400 = 1 day
            mysqli_close($conn);
            header("location:titleScreen.php");
        }
        echo "$fail";
        }
    }
    if (isset($_POST["btnReturn"])) {
        mysqli_close($conn);
        header("location:titleScreen.php");
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <link rel="stylesheet" href="css/mystyles.css">
    <title>LOGIN</title>
</head>
<body>
    <div id = "all">
        <form action = "<?php echo $_SERVER['PHP_SELF']?>" method = "POST">
            <img id = "town_img" src="img/town.jpg" alt="pixel town">
            <div id = "title">
                <p></p>
                <p id = "login">LOG IN</p>
            </div>
            <div id = "boxes">
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">Username</span>
                    <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" name = "txtUsername" required >
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">Email</span>
                    <input type="text" class="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1" name = "txtEmail" required>
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">Password</span>
                    <input type="password" class="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1" name = "txtPassword" required>
                </div>
                <div id = "button" class = "d-grid gap-2">
                    <input type = "submit" class = "btn btn-primary" value = "Log in" name = "btnLogin"/>
                </div>
        </div>
        </form>
        <form action = "<?php echo $_SERVER['PHP_SELF']?>" method = "POST">
            <input id = "backButton"  type = "submit" class = "btn btn-danger" value = "return to menu" name = "btnReturn"/>
        </form>
    </div>   
</body>
</html>