<?php
$koneksi = mysqli_connect("localhost:3307", "root", "", "webpsis"); // ganti sesuai database Anda

function query($query) {
    global $koneksi;
    $result = mysqli_query($koneksi, $query);
    $rows = [];
    while ($row = mysqli_fetch_assoc($result)) {
        $rows[] = $row;
    }
    return $rows;
}

function tambahdata($data) {
    global $koneksi;
    $nama = $data["nama"];
    $nomor_punggung = $data["nomor_punggung"];
    $posisi = $data["posisi"];
    $harga = $data["harga"];

    // Proses upload foto
    $foto = upload();
    if (!$foto) {
        return 0; // upload gagal
    }

    $query = "INSERT INTO pemain (nama, nomor_punggung, posisi, harga, foto) 
              VALUES ('$nama', '$nomor_punggung', '$posisi', '$harga', '$foto')";
    mysqli_query($koneksi, $query);

    return mysqli_affected_rows($koneksi);
}

function upload() {
    $namaFile = $_FILES['foto']['name'];
    $tmpName = $_FILES['foto']['tmp_name'];
    $error = $_FILES['foto']['error'];
    $ukuran = $_FILES['foto']['size'];

    // cek apakah tidak ada gambar yang diupload
    if ($error === 4) {
        echo "<script>alert('Pilih gambar terlebih dahulu!');</script>";
        return false;
    }

    // cek ekstensi file
    $ekstensiGambarValid = ['jpg', 'jpeg', 'png'];
    $ekstensiGambar = strtolower(pathinfo($namaFile, PATHINFO_EXTENSION));
    if (!in_array($ekstensiGambar, $ekstensiGambarValid)) {
        echo "<script>alert('Yang diupload bukan gambar!');</script>";
        return false;
    }

    // cek ukuran file (misal max 2MB)
    if ($ukuran > 2 * 1024 * 1024) {
        echo "<script>alert('Ukuran gambar terlalu besar!');</script>";
        return false;
    }

    // generate nama file unik
    $namaFileBaru = uniqid() . '.' . $ekstensiGambar;
    move_uploaded_file($tmpName, 'image/' . $namaFileBaru);

    return $namaFileBaru;
}

function hapusdata($id) {
    global $koneksi;
    mysqli_query($koneksi, "DELETE FROM pemain WHERE id = $id");
    return mysqli_affected_rows($koneksi);
}
?>