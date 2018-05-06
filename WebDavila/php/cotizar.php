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
	echo '
	<!DOCTYPE html>
	<html>
	<head>
		<title>Peticion Recibida</title>

	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="shortcut icon" href="IMG/tree.png" type=”image/x-icon”  />
	<link rel="stylesheet" href="../Css/estilos.css">

	<link href="https://fonts.googleapis.com/css?family=Oswald|Roboto" rel="stylesheet" />
	<link href="https://fonts.googleapis.com/css?family=Roboto+Condensed" rel="stylesheet"/>
	</head>
	<body>
	<div class="cuerpo wrapper">
		<h2>Hemos recibido tu peticion</h2>
		<p>En unos dias nos pondremos en contacto para enviarte la cotizacion de tu pedido.</p>
		<a href="../index.html" class="btn-link">Regresar</a>
	</div>
	</body>
	</html>
	';
}

 ?>
