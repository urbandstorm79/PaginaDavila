/*var modal = document.getElementById("my-modal");
var contenido = document.getElementById("info");
var btn = document.getElementById("btnSubmit");
var span = document.getElementsByClassName("close")[0];

btn.onclick= openModal();
span.onclick= closeModal();
window.onclick = closeModal();

function closeModal(){
	modal.style.display = "none";
}


function openModal(){
	modal.style.display = "block";
}*/


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
	
	var producto, tipo, cantidad, correoE, nombre, nomEmpresa, telefono, expresion , precio, alto, largo, ancho;
	producto = document.getElementById("producto").value;
	tipo = document.getElementById("tipoMaterial").value;
	alto = document.getElementById("altoM").value;
	largo = document.getElementById("largoM").value;
	ancho = document.getElementById("anchoM");
	cantidad = document.getElementById("cantidad").value;
	correoE = document.getElementById("correoE").value;
	nombre = document.getElementById("nombre").value;
	nomEmpresa = document.getElementById("nomEmpresa").value;
	telefono = document.getElementById("telefono").value;
	

	expresion = /\w+@\w+\.+[a-z]/;
	alert(tipo);

	if (cantidad === ""|| correoE === ""|| nombre ==="" || alto==="" || largo===""||ancho==="") {
		alert("Los campos obligatorios no deben quedar en blanco");
		return false;
	}else if(telefono.length !== 10){
		alert("El Telefono debe de ser de 10 digitos");
		return false;
	}


	
}


