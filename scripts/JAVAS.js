$(document).ready(function(){

	$('#x2').keyup(function(){

		var contra = $('#contra').val();
		var contra2 = $('#x2').val();

		
		if (contra == contra2){
			$('#error2').text("Coinciden!").css("color","green");
		}else{
			$('#error2').text("No coinciden!").css("color","red");
		}

		if (contra2 == ""){
			$('#error2').text("No se puede dejar en blanco!").css("color","red");
		}
	
	});
});



function Mayor(){
	var edad = document.getElementById("edad").value;
	sessionStorage.setItem("edad", edad)
	console.log(edad);
}

function Menor(){
	var edad = document.getElementById("edad").value;
	sessionStorage.setItem("edad2", edad)
	console.log(edad);
}


function getData(){
	x1 = document.getElementById("x1").value;
	x2 = document.getElementById("x2").value;
	sessionStorage.setItem('x1',x1);
	sessionStorage.setItem('x2',x2);

	console.log(x1);

}


