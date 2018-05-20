<?php 
include 'conexionBD.php';

$tipo = $_POST["producto"];
$material = $_POST["tipoMaterial"];
$alto = $_POST["alto"];
$largo = $_POST["largo"];
$ancho = $_POST["ancho"];
$cantidad = $_POST["cantidad"];
$nombreUs = $_POST["nombre"];
$empresa = $_POST["nomEmpresa"];
$tel = $_POST["telefono"];
$email = $_POST["correoE"];

$query = "INSERT INTO pedidos(Id, Tipo, Material, Alto, Largo, Ancho, Cantidad, Nombre, Empresa, Telefono, Email) VALUES (null, '$tipo', '$material', '$alto', '$largo', '$ancho', '$cantidad', '$nombreUs', '$empresa', '$tel', '$email')";

$insertar = mysqli_query($conn, $query);

if (!$insertar) {
	echo 'Error al insertar';
}else{
	echo 'Éxito!!';
	mysqli_close($conn);
}

echo '<script>window.location="btwn.php";</script>';
 ?>
