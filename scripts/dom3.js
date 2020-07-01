function total(){

    var container = document.getElementById("container");
    for(var i = 0; i<60; i++){
        var data = sessionStorage.getItem('nuevo'+i);
        console.log(data);
        if (data != null){
            var produ = document.createElement("td");
            produ.innerHTML = data;
            container.appendChild(produ);
        }
    }

    var suma = 0;
    for(var i = 0; i<60; i++){
        if(document.getElementById('precio'+i) != null){
        var precio = document.getElementById('precio'+i);
        suma = suma+parseInt(precio.textContent);
        }  
     }
     var total = document.getElementById('total');
     total.innerHTML = suma+" dolares";
     console.log(suma);
}


function pagar(){
    location.href="index2.html";
}