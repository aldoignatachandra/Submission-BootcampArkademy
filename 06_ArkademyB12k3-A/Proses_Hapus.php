<?php

    require "Connection.php";

    $idemployee = $_GET['idemployee'];
    $name = $_GET['name'];
    $idwork = $_GET['idwork'];
    $idsalary = $_GET['idsalary'];

    $query = "DELETE FROM tb_name WHERE id_employee = '$idemployee'";
    $save = mysqli_query($conn, $query);
  
    if($save)
        header("location:06_Arkademyb12k3-A.php");
    else
        echo "Data Tidak Berhasil Dihapus";

?>