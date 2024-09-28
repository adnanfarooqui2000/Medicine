<!-- login.php -->
<?php
session_start();

// Hardcoded credentials for demonstration purposes
$admin_username = 'admin';
$admin_password = 'password123';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];

    if ($username === $admin_username && $password === $admin_password) {
        // Set session variables
        $_SESSION['loggedin'] = true;
        $_SESSION['username'] = $username;
        // Redirect to the admin dashboard
        header('Location: admin_dashboard.php');
        exit;
    } else {
        // Invalid credentials
        $error_message = "Invalid username or password";
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Login</title>
    <style>
        /* Same CSS as login.html for styling consistency */
    </style>
</head>
<body>
    <div class="login-container">
        <h1>Admin Login</h1>
        <?php
        if (isset($error_message)) {
            echo "<p style='color:red;'>$error_message</p>";
        }
        ?>
        <form action="login.php" method="post">
            <input type="text" name="username" placeholder="Username" required>
            <input type="password" name="password" placeholder="Password" required>
            <input type="submit" value="Login">
        </form>
    </div>
</body>
</html>

<?php
session_start();

// Check if the user is logged in
if (!isset($_SESSION['loggedin']) || $_SESSION['loggedin'] !== true) {
    header('Location: login.html');
    exit;
}
?>
<!-- logout.php -->
<?php
session_start();
session_destroy();
header('Location: login.html');
exit;
?>
