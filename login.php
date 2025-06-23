<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LOGIN | PSIS </title>
    <link rel="stylesheet" href="CSS/style.css">
</head>
<body>
    <div class="login-container">
        <div class="psis-badge">
            <img src="image/bubu.jpg" alt="Logo PSIS">
        </div>
        <h1>LOGIN</h1>
        <form action="login.php" method="post" enctype="multipart/form-data">
            <label for="email">Email</label>
            <input type="email" name="email" required>
            <label for="password">Password</label>
            <input type="password" name="password" required>
            <div style="display:flex;align-items:center;gap:8px;">
                <input type="checkbox" name="ingat" id="ingat" value="1">
                <label for="ingat" class="remember-label">Ingatkan Saya!</label>
            </div>
            <input type="submit" value="Login">
        </form>
        <p>Belum Punya Akun? <a href="register.html">Daftar</a></p>
    </div>
</body>
</html>