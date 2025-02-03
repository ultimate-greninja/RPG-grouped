<!-- login and register -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>RPG CLICKER</title>
</head>
<body>

<?php
    // Check if the form is submitted
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Check which button is clicked
        if (isset($_POST["register"])) {
            register();
        } elseif (isset($_POST["login"])) {
            login();
        }
    }

    // Define the PHP functions
    function register() {
        echo "register";
        setcookie("user_id","id goes here (WIP)",time()+ (86400 * 30), "/");
        header("location:register.php");    }

    function login() {
        echo "login";
        setcookie("user_id","id goes here (WIP)",time()+ (86400 * 30), "/");
        header("location:login.php");    }
    ?>

    <!-- HTML form with two buttons -->
    <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
        <input type="submit" name="register" value="Option 1">
        <input type="submit" name="login" value="Option 2">
    </form>
</body>
</html>