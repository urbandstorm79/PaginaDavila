<?php  
$conexion = new mysqli_connect("localhost", "root", "", "usuarios");

if (!$conexion) {
	echo 'Error al conectar a la BD';
}else {
	echo 'Conectando a la BD';
} 

?>