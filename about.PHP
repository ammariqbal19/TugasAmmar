<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ABOUT | PSIS SEMARANG</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
        <h1 align ="center">PSIS SEMARANG</h1>  <!-- align untuk ketengah -->
        <hr size="5px" color="black"> <!-- hr untuk garis -->
        <nav align="center"> <!-- navbar -->
            <a href="index.php"> HOME</a> 
            <a href="profile.php">PROFILE</a> 
            <a href="about.php">ABOUTME</a> 
            <a href="login.php">LOGIN</a>
        </nav>
        <h2>Data PSIS Semarang</h2>
        
        <table border="1px" cellspacing="0" cellpadding="12px">
            <tr>
                <th>Nomor Punggung</th>
                <th>Nama Pemain</th>
                <th>Harga Jual</th>
                <th>Posisi</th>
            </tr>

            <tr>
                <td>10</td>
                <td>Ammar</td>
                <td>10M</td>
                <td>Striker</td>
            </tr>

            <tr>
                <td>14</td>
                <td>Iqbal</td>
                <td>15M</td>
                <td>Gelandang</td>
            </tr>

            <tr>
                <td>7</td>
                <td>David</td>
                <td>12M</td>
                <td>Winger</td>
            </tr>

            <tr>
                <td>8</td>
                <td>Sudi</td>
                <td>7M</td>
                <td>Striker</td>
            </tr>

            <tr>
                <td>19</td>
                <td>Riyan</td>
                <td>11M</td>
                <td>Bek</td>
            </tr>
        </table>


        <h2>Contoh Colspan</h2>
        <table border="1px" cellspacing="0" cellpadding="12px">
            <tr>
                <th colspan="2">Nama</th>
            </tr>
            <tr>
                <td>Ammar</td>
                <td>Iqbal</td>
            </tr>
        </table>

        <h2>Latihan</h2>
        <table border="1px" cellspacing="0" cellpadding="12px">
            <tr>
                <th rowspan="2" >Nama</th>
                <th colspan="3">Nilai</th>
            </tr>
            <tr>
                <td>UTS</td>
                <td>UAS</td>
                <td>Tugas</td>  
            </tr>

            <tr>
                <td>Ammar</td>
                <td>90</td>
                <td>90</td>
                <td>90</td>
            </tr>
        </table>
</body>
</html>