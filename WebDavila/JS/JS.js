//JS
function openModal(){

	var modal = document.getElementById('my-modal');
	var contenido = document.getElementById("info");
	var btn = document.getElementById("btnSubmit");
	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];


	btn.onclick = function () {
		modal.style.display = "block";
	}

	span.onclick= function(){
		modal.style.display="none";
	}
	contenido.innerHTML = "<p>Llena todos lo campos </p>";


	window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

}