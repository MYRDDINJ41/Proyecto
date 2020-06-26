function getData2(){
    x3 = document.getElementById("x3").value;
	x4 = document.getElementById("x4").value;
    var data = sessionStorage.getItem('x1');
    var data2 = sessionStorage.getItem('x2');
    console.log(data);
    console.log(data2);
    if(x3 == data){
        if(x4 == data2){
            alert("Datos correctos");
            location.href="index.html";
        }else{
            alert("Datos incorrectos, por favor vuelva a ingresarlos");
        }
    }
}