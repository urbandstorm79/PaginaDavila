function validar() {
	var nombre, correo, contra, expresion;
	nombre= document.getElementById("nombreUsuario").value;
	correo = document.getElementById("correoUsuario").value;
	contra = document.getElementById("pass").value;
	expresion = /\w+@\w+\.+[a-z]/;

	if (nombre === "" || correo == "" || contra == "") {
		alert("Todos los campos son obligatorios");
		return false;
		
	} else if (nombre.length>20) {
		alert("El ususario debe tener menos de 20 caracteres");
		return false;
	} else if (correo.length>100) {
		alert("El correo es demasiado extenso");
	}else if (contra.length>20) {
		alert("La contraseña debe tener 20 caracteres como maximo");
	}else if (!expresion.test(correo)) {
		alert("El correo no es valido");
	}
}

function validaCotizacion() {
	var producto, tipo, cantidad, correoE, expresion;
	producto = document.getElementById("producto").value;
	tipo = document.getElementById("tipoMaterial").value;
	cantidad = document.getElementById("cantidad").value;
	correoE = document.getElementById("correoE").value;
	expresion = = /\w+@\w+\.+[a-z]/;
}