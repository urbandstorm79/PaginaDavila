<?php  
$conexion = mysql_connect("localhost", "root", "");

if (!$conexion) {
	echo 'Error al conectar a la BD';
}else {
	echo 'Conectando a la BD';
}
?>