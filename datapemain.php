<?php

require 'function.php';

$query = "SELECT * FROM pemain";

$rows = query($query);

?>





<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DATA PEMAIN</title>
</head>
<body>
    <h1>Data Pemain </h1>

    <Table border="1px" cellspacing="0" cellpadding="12px">
        <tr>
            <th>No</th>
            <th>Foto</th>
            <th>Nama Pemain</th>
            <th>Nomor Punggung</th>
            <th>Posisi</th>
            <th>Harga Jual</th>
        </tr>
        <?php 
        $i = 1;
        foreach ($rows as $pmn)  {?>
        <tr>
            <td><?= $i?></td>
            <td><img src="image/<?= $pmn["foto"] ?>" width="60px"></td>
            <td><?= $pmn["nama"] ?></td>
            <td><?= $pmn["nomor_punggung"] ?></td>
            <td><?= $pmn["posisi"] ?></td>
            <td><?= $pmn["harga"] ?></td>
        </tr>
        <?php $i++; } ?>
    </Table>
</body>
</html>