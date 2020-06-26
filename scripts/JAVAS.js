
function getData(){

	x1 = document.getElementById("x1").value;
	x2 = document.getElementById("x2").value;
	sessionStorage.setItem('x1',x1);
	sessionStorage.setItem('x2',x2);

	console.log(x1);
}

