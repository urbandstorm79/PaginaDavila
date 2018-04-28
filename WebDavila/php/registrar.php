<?php 
include 'conexion.php';
//recibir datos y alamcenar
$nombre = $_POST["nombreUsuario"];
$correo = $_POST["correoUsuario"];
$pass = $_POST["pass"];
//Consulta para insertar
$insertar = "INSERT INTO registrousuarios(usuario, email, pass) VALUES ('$nombre', '$correo', '$pass')";
$resultado = mysqli_query($conexion, $insertar);
if (!$resultado) {
	echo 'Error al registrarse';
}else {
	echo 'Registro exitoso';
}
 //cerrrar conexion

mysqli_close($conexion);
 