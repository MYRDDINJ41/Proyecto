function usad(){
for(i=0; i<60; i++){

    var condi = document.getElementById('condi'+i);
    if(condi.textContent == "*NUEVO"){
        condi.closest('#nuevo'+i).remove();
    }
    
} 
}

function nuev(){
for(i=0; i<60; i++){
    var condi = document.getElementById('condi'+i);
    if(condi.textContent == "*USADO"){
        condi.closest('#nuevo'+i).remove();
    }
    
}
}
    

function barato(){
for(i=0; i<60; i++){

    var precio = document.getElementById('precio'+i);
    if(precio.textContent>300){
        precio.closest('#nuevo'+i).remove();
    }
    
}
}

function medio(){
for(i=0; i<60; i++){

    var precio = document.getElementById('precio'+i);
    if(precio.textContent<300 || precio.textContent>600){
        precio.closest('#nuevo'+i).remove();
    }
    
}
}

function caro(){
for(i=0; i<60; i++){

    var precio = document.getElementById('precio'+i);
    if(precio.textContent<600){
        precio.closest('#nuevo'+i).remove();
    }
    
}
}

function bogota(){
for(i=0; i<60; i++){

    var ciudad = document.getElementById('ciudad'+i);
    if(ciudad.textContent !== "Bogotá D.C"){
        ciudad.closest('#nuevo'+i).remove();
    }
    
}
}

function antioquia(){
for(i=0; i<60; i++){

    var ciudad = document.getElementById('ciudad'+i);
    if(ciudad.textContent !== "Antioquia"){
        ciudad.closest('#nuevo'+i).remove();
    }
    
}
}

function santander(){
for(i=0; i<60; i++){

    var ciudad = document.getElementById('ciudad'+i);
    if(ciudad.textContent !== "Santander"){
        ciudad.closest('#nuevo'+i).remove();
    }
    
}
}

function car0(){
    var carr = document.getElementById("carrito").value = +document.getElementById("carrito").value+1;
    console.log(carr);
    var porfin = document.getElementById("nuevo0").innerHTML;
    sessionStorage.setItem('nuevo0',porfin);



}

function car1(){
    var carr = document.getElementById("carrito").value = +document.getElementById("carrito").value+1;
    console.log(carr);
    var porfin = document.getElementById("nuevo1").innerHTML;
    sessionStorage.setItem('nuevo1',porfin);



}

function car2(){
    var carr = document.getElementById("carrito").value = +document.getElementById("carrito").value+1;
    console.log(carr);
    var porfin = document.getElementById("nuevo2").innerHTML;
    sessionStorage.setItem('nuevo2',porfin);

}

function car3(){
    var carr = document.getElementById("carrito").value = +document.getElementById("carrito").value+1;
    console.log(carr);
    var porfin = document.getElementById("nuevo3").innerHTML;
    sessionStorage.setItem('nuevo3',porfin);



}

function car4(){
    var carr = document.getElementById("carrito").value = +document.getElementById("carrito").value+1;
    console.log(carr);
    var porfin = document.getElementById("nuevo4").innerHTML;
    sessionStorage.setItem('nuevo4',porfin);



}

function car5(){
    var carr = document.getElementById("carrito").value = +document.getElementById("carrito").value+1;
    console.log(carr);
    var porfin = document.getElementById("nuevo5").innerHTML;
    sessionStorage.setItem('nuevo5',porfin);



}

function car6(){
    var carr = document.getElementById("carrito").value = +document.getElementById("carrito").value+1;
    console.log(carr);
    var porfin = document.getElementById("nuevo6").innerHTML;
    sessionStorage.setItem('nuevo6',porfin);



}

function car7(){
    var carr = document.getElementById("carrito").value = +document.getElementById("carrito").value+1;
    console.log(carr);
    var porfin = document.getElementById("nuevo7").innerHTML;
    sessionStorage.setItem('nuevo7',porfin);



}

function car8(){
    var carr = document.getElementById("carrito").value = +document.getElementById("carrito").value+1;
    console.log(carr);
    var porfin = document.getElementById("nuevo8").innerHTML;
    sessionStorage.setItem('nuevo8',porfin);



}

function car9(){
    var carr = document.getElementById("carrito").value = +document.getElementById("carrito").value+1;
    console.log(carr);
    var porfin = document.getElementById("nuevo9").innerHTML;
    sessionStorage.setItem('nuevo9',porfin);



}

function car10(){
    var carr = document.getElementById("carrito").value = +document.getElementById("carrito").value+1;
    console.log(carr);
    var porfin = document.getElementById("nuevo10").innerHTML;
    sessionStorage.setItem('nuevo10',porfin);

}

function car11(){
    var carr = document.getElementById("carrito").value = +document.getElementById("carrito").value+1;
    console.log(carr);
    var porfin = document.getElementById("nuevo11").innerHTML;
    sessionStorage.setItem('nuevo11',porfin);

}

function car12(){
    var carr = document.getElementById("carrito").value = +document.getElementById("carrito").value+1;
    console.log(carr);
    var porfin = document.getElementById("nuevo12").innerHTML;
    sessionStorage.setItem('nuevo12',porfin);

}

function car13(){
    var carr = document.getElementById("carrito").value = +document.getElementById("carrito").value+1;
    console.log(carr);
    var porfin = document.getElementById("nuevo13").innerHTML;
    sessionStorage.setItem('nuevo13',porfin);

}

function car14(){
    var carr = document.getElementById("carrito").value = +document.getElementById("carrito").value+1;
    console.log(carr);
    var porfin = document.getElementById("nuevo14").innerHTML;
    sessionStorage.setItem('nuevo14',porfin);

}

function car15(){
    var carr = document.getElementById("carrito").value = +document.getElementById("carrito").value+1;
    console.log(carr);
    var porfin = document.getElementById("nuevo15").innerHTML;
    sessionStorage.setItem('nuevo15',porfin);

}

function car16(){
    var carr = document.getElementById("carrito").value = +document.getElementById("carrito").value+1;
    console.log(carr);
    var porfin = document.getElementById("nuevo16").innerHTML;
    sessionStorage.setItem('nuevo16',porfin);

}

function car17(){
    var carr = document.getElementById("carrito").value = +document.getElementById("carrito").value+1;
    console.log(carr);
    var porfin = document.getElementById("nuevo17").innerHTML;
    sessionStorage.setItem('nuevo17',porfin);

}

function car18(){
    var carr = document.getElementById("carrito").value = +document.getElementById("carrito").value+1;
    console.log(carr);
    var porfin = document.getElementById("nuevo18").innerHTML;
    sessionStorage.setItem('nuevo18',porfin);

}

function car19(){
    var carr = document.getElementById("carrito").value = +document.getElementById("carrito").value+1;
    console.log(carr);
    var porfin = document.getElementById("nuevo19").innerHTML;
    sessionStorage.setItem('nuevo19',porfin);

}

function car20(){
    var carr = document.getElementById("carrito").value = +document.getElementById("carrito").value+1;
    console.log(carr);
    var porfin = document.getElementById("nuevo20").innerHTML;
    sessionStorage.setItem('nuevo20',porfin);

}

function car21(){
    var carr = document.getElementById("carrito").value = +document.getElementById("carrito").value+1;
    console.log(carr);
    var porfin = document.getElementById("nuevo21").innerHTML;
    sessionStorage.setItem('nuevo21',porfin);

}

function car22(){
    var carr = document.getElementById("carrito").value = +document.getElementById("carrito").value+1;
    console.log(carr);
    var porfin = document.getElementById("nuevo22").innerHTML;
    sessionStorage.setItem('nuevo22',porfin);

}

function car23(){
    var carr = document.getElementById("carrito").value = +document.getElementById("carrito").value+1;
    console.log(carr);
    var porfin = document.getElementById("nuevo23").innerHTML;
    sessionStorage.setItem('nuevo23',porfin);

}

function car24(){
    var carr = document.getElementById("carrito").value = +document.getElementById("carrito").value+1;
    console.log(carr);
    var porfin = document.getElementById("nuevo24").innerHTML;
    sessionStorage.setItem('nuevo24',porfin);

}

function car25(){
    var carr = document.getElementById("carrito").value = +document.getElementById("carrito").value+1;
    console.log(carr);
    var porfin = document.getElementById("nuevo25").innerHTML;
    sessionStorage.setItem('nuevo25',porfin);

}

function car26(){
    var carr = document.getElementById("carrito").value = +document.getElementById("carrito").value+1;
    console.log(carr);
    var porfin = document.getElementById("nuevo26").innerHTML;
    sessionStorage.setItem('nuevo26',porfin);

}

function car27(){
    var carr = document.getElementById("carrito").value = +document.getElementById("carrito").value+1;
    console.log(carr);
    var porfin = document.getElementById("nuevo27").innerHTML;
    sessionStorage.setItem('nuevo27',porfin);

}

function car28(){
    var carr = document.getElementById("carrito").value = +document.getElementById("carrito").value+1;
    console.log(carr);
    var porfin = document.getElementById("nuevo28").innerHTML;
    sessionStorage.setItem('nuevo28',porfin);

}

function car29(){
    var carr = document.getElementById("carrito").value = +document.getElementById("carrito").value+1;
    console.log(carr);
    var porfin = document.getElementById("nuevo29").innerHTML;
    sessionStorage.setItem('nuevo29',porfin);

}

function car30(){
    var carr = document.getElementById("carrito").value = +document.getElementById("carrito").value+1;
    console.log(carr);
    var porfin = document.getElementById("nuevo30").innerHTML;
    sessionStorage.setItem('nuevo30',porfin);

}

function car31(){
    var carr = document.getElementById("carrito").value = +document.getElementById("carrito").value+1;
    console.log(carr);
    var porfin = document.getElementById("nuevo31").innerHTML;
    sessionStorage.setItem('nuevo31',porfin);

}

function car32(){
    var carr = document.getElementById("carrito").value = +document.getElementById("carrito").value+1;
    console.log(carr);
    var porfin = document.getElementById("nuevo32").innerHTML;
    sessionStorage.setItem('nuevo32',porfin);

}

function car33(){
    var carr = document.getElementById("carrito").value = +document.getElementById("carrito").value+1;
    console.log(carr);
    var porfin = document.getElementById("nuevo33").innerHTML;
    sessionStorage.setItem('nuevo33',porfin);

}

function car34(){
    var carr = document.getElementById("carrito").value = +document.getElementById("carrito").value+1;
    console.log(carr);
    var porfin = document.getElementById("nuevo34").innerHTML;
    sessionStorage.setItem('nuevo34',porfin);

}

function car35(){
    var carr = document.getElementById("carrito").value = +document.getElementById("carrito").value+1;
    console.log(carr);
    var porfin = document.getElementById("nuevo35").innerHTML;
    sessionStorage.setItem('nuevo35',porfin);

}

function car36(){
    var carr = document.getElementById("carrito").value = +document.getElementById("carrito").value+1;
    console.log(carr);
    var porfin = document.getElementById("nuevo36").innerHTML;
    sessionStorage.setItem('nuevo36',porfin);

}

function car37(){
    var carr = document.getElementById("carrito").value = +document.getElementById("carrito").value+1;
    console.log(carr);
    var porfin = document.getElementById("nuevo37").innerHTML;
    sessionStorage.setItem('nuevo37',porfin);

}

function car38(){
    var carr = document.getElementById("carrito").value = +document.getElementById("carrito").value+1;
    console.log(carr);
    var porfin = document.getElementById("nuevo38").innerHTML;
    sessionStorage.setItem('nuevo38',porfin);

}

function car39(){
    var carr = document.getElementById("carrito").value = +document.getElementById("carrito").value+1;
    console.log(carr);
    var porfin = document.getElementById("nuevo39").innerHTML;
    sessionStorage.setItem('nuevo39',porfin);

}

function car40(){
    var carr = document.getElementById("carrito").value = +document.getElementById("carrito").value+1;
    console.log(carr);
    var porfin = document.getElementById("nuevo40").innerHTML;
    sessionStorage.setItem('nuevo40',porfin);

}

function car41(){
    var carr = document.getElementById("carrito").value = +document.getElementById("carrito").value+1;
    console.log(carr);
    var porfin = document.getElementById("nuevo41").innerHTML;
    sessionStorage.setItem('nuevo41',porfin);

}

function car42(){
    var carr = document.getElementById("carrito").value = +document.getElementById("carrito").value+1;
    console.log(carr);
    var porfin = document.getElementById("nuevo42").innerHTML;
    sessionStorage.setItem('nuevo42',porfin);

}

function car43(){
    var carr = document.getElementById("carrito").value = +document.getElementById("carrito").value+1;
    console.log(carr);
    var porfin = document.getElementById("nuevo43").innerHTML;
    sessionStorage.setItem('nuevo43',porfin);

}

function car44(){
    var carr = document.getElementById("carrito").value = +document.getElementById("carrito").value+1;
    console.log(carr);
    var porfin = document.getElementById("nuevo44").innerHTML;
    sessionStorage.setItem('nuevo44',porfin);

}

function car45(){
    var carr = document.getElementById("carrito").value = +document.getElementById("carrito").value+1;
    console.log(carr);
    var porfin = document.getElementById("nuevo45").innerHTML;
    sessionStorage.setItem('nuevo45',porfin);

}

function car46(){
    var carr = document.getElementById("carrito").value = +document.getElementById("carrito").value+1;
    console.log(carr);
    var porfin = document.getElementById("nuevo46").innerHTML;
    sessionStorage.setItem('nuevo46',porfin);

}

function car47(){
    var carr = document.getElementById("carrito").value = +document.getElementById("carrito").value+1;
    console.log(carr);
    var porfin = document.getElementById("nuevo47").innerHTML;
    sessionStorage.setItem('nuevo47',porfin);

}

function car48(){
    var carr = document.getElementById("carrito").value = +document.getElementById("carrito").value+1;
    console.log(carr);
    var porfin = document.getElementById("nuevo48").innerHTML;
    sessionStorage.setItem('nuevo48',porfin);

}

function car49(){
    var carr = document.getElementById("carrito").value = +document.getElementById("carrito").value+1;
    console.log(carr);
    var porfin = document.getElementById("nuevo49").innerHTML;
    sessionStorage.setItem('nuevo49',porfin);

}

function car50(){
    var carr = document.getElementById("carrito").value = +document.getElementById("carrito").value+1;
    console.log(carr);
    var porfin = document.getElementById("nuevo50").innerHTML;
    sessionStorage.setItem('nuevo50',porfin);

}

function car51(){
    var carr = document.getElementById("carrito").value = +document.getElementById("carrito").value+1;
    console.log(carr);
    var porfin = document.getElementById("nuevo51").innerHTML;
    sessionStorage.setItem('nuevo51',porfin);

}

function car52(){
    var carr = document.getElementById("carrito").value = +document.getElementById("carrito").value+1;
    console.log(carr);
    var porfin = document.getElementById("nuevo52").innerHTML;
    sessionStorage.setItem('nuevo52',porfin);

}

function car53(){
    var carr = document.getElementById("carrito").value = +document.getElementById("carrito").value+1;
    console.log(carr);
    var porfin = document.getElementById("nuevo53").innerHTML;
    sessionStorage.setItem('nuevo53',porfin);

}

function car54(){
    var carr = document.getElementById("carrito").value = +document.getElementById("carrito").value+1;
    console.log(carr);
    var porfin = document.getElementById("nuevo54").innerHTML;
    sessionStorage.setItem('nuevo54',porfin);

}

function car55(){
    var carr = document.getElementById("carrito").value = +document.getElementById("carrito").value+1;
    console.log(carr);
    var porfin = document.getElementById("nuevo55").innerHTML;
    sessionStorage.setItem('nuevo55',porfin);

}

function car56(){
    var carr = document.getElementById("carrito").value = +document.getElementById("carrito").value+1;
    console.log(carr);
    var porfin = document.getElementById("nuevo56").innerHTML;
    sessionStorage.setItem('nuevo56',porfin);

}

function car57(){
    var carr = document.getElementById("carrito").value = +document.getElementById("carrito").value+1;
    console.log(carr);
    var porfin = document.getElementById("nuevo57").innerHTML;
    sessionStorage.setItem('nuevo57',porfin);

}

function car58(){
    var carr = document.getElementById("carrito").value = +document.getElementById("carrito").value+1;
    console.log(carr);
    var porfin = document.getElementById("nuevo58").innerHTML;
    sessionStorage.setItem('nuevo58',porfin);

}

function car59(){
    var carr = document.getElementById("carrito").value = +document.getElementById("carrito").value+1;
    console.log(carr);
    var porfin = document.getElementById("nuevo59").innerHTML;
    sessionStorage.setItem('nuevo59',porfin);

}

function pagar(){
    location.href="index4.html";
}

function borrar(){
    var carr = +document.getElementById("carrito").value;
    carr = 0;
    sessionStorage.clear();
}



function ima1(){
    var imad = document.getElementById("imagen")
    imad.style.transition = ".8s all"
    imad.style.transform ='translate(550px, 250px)'+'scale(3.5)';

}

function imag1(){
    var imad = document.getElementById("imagen");
    imad.style.transform = 'scale(1)';

}

function ima2(){
    var imad = document.getElementById("imagen2")
    imad.style.transform ='translate(300px, 250px)'+'scale(3.5)';

}

function imag2(){
    var imad = document.getElementById("imagen2");
    imad.style.transform = 'scale(1)';

}

function ima3(){
    var imad = document.getElementById("imagen3")
    imad.style.transform ='translate(0px, 250px)'+'scale(3.5)';

}

function imag3(){
    var imad = document.getElementById("imagen3");
    imad.style.transform = 'scale(1)';

}

function ima4(){
    var imad = document.getElementById("imagen4")
    imad.style.transform ='translate(-300px, 250px)'+'scale(3.5)';

}

function imag4(){
    var imad = document.getElementById("imagen4");
    imad.style.transform = 'scale(1)';

}

function ima5(){
    var imad = document.getElementById("imagen5")
    imad.style.transform ='translate(-600px, 250px)'+'scale(3.5)';

}

function imag5(){
    var imad = document.getElementById("imagen5");
    imad.style.transform = 'scale(1)';

}

function ima6(){
    var imad = document.getElementById("imagen6")
    imad.style.transform ='translate(550px, -145px)'+'scale(3.5)';

}

function imag6(){
    var imad = document.getElementById("imagen6");
    imad.style.transform = 'scale(1)';

}

function ima7(){
    var imad = document.getElementById("imagen7")
    imad.style.transform ='translate(300px, -145px)'+'scale(3.5)';

}

function imag7(){
    var imad = document.getElementById("imagen7");
    imad.style.transform = 'scale(1)';

}

function ima8(){
    var imad = document.getElementById("imagen8")
    imad.style.transform ='translate(0px, -145px)'+'scale(3.5)';

}

function imag8(){
    var imad = document.getElementById("imagen8");
    imad.style.transform = 'scale(1)';

}

function ima9(){
    var imad = document.getElementById("imagen9")
    imad.style.transform ='translate(-300px, -145px)'+'scale(3.5)';

}

function imag9(){
    var imad = document.getElementById("imagen9");
    imad.style.transform = 'scale(1)';

}

function ima10(){
    var imad = document.getElementById("imagen10")
    imad.style.transform ='translate(-600px, -145px)'+'scale(3.5)';

}

function imag10(){
    var imad = document.getElementById("imagen10");
    imad.style.transform = 'scale(1)';

}

function ima11(){
    var imad = document.getElementById("imagen11")
    imad.style.transform ='translate(550px, 250px)'+'scale(3.5)';

}

function imag11(){
    var imad = document.getElementById("imagen11");
    imad.style.transform = 'scale(1)';

}

function ima12(){
    var imad = document.getElementById("imagen12")
    imad.style.transform ='translate(300px, 250px)'+'scale(3.5)';

}

function imag12(){
    var imad = document.getElementById("imagen12");
    imad.style.transform = 'scale(1)';

}

function ima13(){
    var imad = document.getElementById("imagen13")
    imad.style.transform ='translate(0px, 250px)'+'scale(3.5)';

}

function imag13(){
    var imad = document.getElementById("imagen13");
    imad.style.transform = 'scale(1)';

}

function ima14(){
    var imad = document.getElementById("imagen14")
    imad.style.transform ='translate(-300px, 250px)'+'scale(3.5)';

}

function imag14(){
    var imad = document.getElementById("imagen14");
    imad.style.transform = 'scale(1)';

}

function ima15(){
    var imad = document.getElementById("imagen15")
    imad.style.transform ='translate(-600px, 250px)'+'scale(3.5)';

}

function imag15(){
    var imad = document.getElementById("imagen15");
    imad.style.transform = 'scale(1)';

}

function ima16(){
    var imad = document.getElementById("imagen16")
    imad.style.transform ='translate(550px, -145px)'+'scale(3.5)';

}

function imag16(){
    var imad = document.getElementById("imagen16");
    imad.style.transform = 'scale(1)';

}

function ima17(){
    var imad = document.getElementById("imagen17")
    imad.style.transform ='translate(300px, -145px)'+'scale(3.5)';

}

function imag17(){
    var imad = document.getElementById("imagen17");
    imad.style.transform = 'scale(1)';

}

function ima18(){
    var imad = document.getElementById("imagen18")
    imad.style.transform ='translate(0px, -145px)'+'scale(3.5)';

}

function imag18(){
    var imad = document.getElementById("imagen18");
    imad.style.transform = 'scale(1)';

}

function ima19(){
    var imad = document.getElementById("imagen19")
    imad.style.transform ='translate(-300px, -145px)'+'scale(3.5)';

}

function imag19(){
    var imad = document.getElementById("imagen19");
    imad.style.transform = 'scale(1)';

}

function ima20(){
    var imad = document.getElementById("imagen20")
    imad.style.transform ='translate(-600px, -145px)'+'scale(3.5)';
}

function imag20(){
    var imad = document.getElementById("imagen20");
    imad.style.transform = 'scale(1)';

}

function ima21(){
    var imad = document.getElementById("imagen21")
    imad.style.transform ='translate(550px, 250px)'+'scale(3.5)';

}

function imag21(){
    var imad = document.getElementById("imagen21");
    imad.style.transform = 'scale(1)';

}

function ima22(){
    var imad = document.getElementById("imagen22")
    imad.style.transform ='translate(300px, 250px)'+'scale(3.5)';

}

function imag22(){
    var imad = document.getElementById("imagen22");
    imad.style.transform = 'scale(1)';

}

function ima23(){
    var imad = document.getElementById("imagen23")
    imad.style.transform ='translate(0px, 250px)'+'scale(3.5)';

}

function imag23(){
    var imad = document.getElementById("imagen23");
    imad.style.transform = 'scale(1)';

}

function ima24(){
    var imad = document.getElementById("imagen24")
    imad.style.transform ='translate(-300px, 250px)'+'scale(3.5)';

}

function imag24(){
    var imad = document.getElementById("imagen24");
    imad.style.transform = 'scale(1)';

}

function ima25(){
    var imad = document.getElementById("imagen25")
    imad.style.transform ='translate(-600px, 250px)'+'scale(3.5)';

}

function imag25(){
    var imad = document.getElementById("imagen25");
    imad.style.transform = 'scale(1)';

}

function ima26(){
    var imad = document.getElementById("imagen26")
    imad.style.transform ='translate(550px, -145px)'+'scale(3.5)';

}

function imag26(){
    var imad = document.getElementById("imagen26");
    imad.style.transform = 'scale(1)';

}

function ima27(){
    var imad = document.getElementById("imagen27")
    imad.style.transform ='translate(300px, -145px)'+'scale(3.5)';

}

function imag27(){
    var imad = document.getElementById("imagen27");
    imad.style.transform = 'scale(1)';

}

function ima28(){
    var imad = document.getElementById("imagen28")
    imad.style.transform ='translate(0px, -145px)'+'scale(3.5)';

}

function imag28(){
    var imad = document.getElementById("imagen28");
    imad.style.transform = 'scale(1)';

}

function ima29(){
    var imad = document.getElementById("imagen29")
    imad.style.transform ='translate(-300px, -145px)'+'scale(3.5)';

}

function imag29(){
    var imad = document.getElementById("imagen29");
    imad.style.transform = 'scale(1)';

}

function ima30(){
    var imad = document.getElementById("imagen30")
    imad.style.transform ='translate(-600px, -145px)'+'scale(3.5)';

}

function imag30(){
    var imad = document.getElementById("imagen30");
    imad.style.transform = 'scale(1)';

}

function ima31(){
    var imad = document.getElementById("imagen31")
    imad.style.transform ='translate(550px, 250px)'+'scale(3.5)';

}

function imag31(){
    var imad = document.getElementById("imagen31");
    imad.style.transform = 'scale(1)';

}

function ima32(){
    var imad = document.getElementById("imagen32")
    imad.style.transform ='translate(300px, 250px)'+'scale(3.5)';

}

function imag32(){
    var imad = document.getElementById("imagen32");
    imad.style.transform = 'scale(1)';

}

function ima33(){
    var imad = document.getElementById("imagen33")
    imad.style.transform ='translate(0px, 250px)'+'scale(3.5)';

}

function imag33(){
    var imad = document.getElementById("imagen33");
    imad.style.transform = 'scale(1)';

}

function ima34(){
    var imad = document.getElementById("imagen34")
    imad.style.transform ='translate(-300px, 250px)'+'scale(3.5)';

}

function imag34(){
    var imad = document.getElementById("imagen34");
    imad.style.transform = 'scale(1)';

}

function ima35(){
    var imad = document.getElementById("imagen35")
    imad.style.transform ='translate(-600px, 250px)'+'scale(3.5)';

}

function imag35(){
    var imad = document.getElementById("imagen35");
    imad.style.transform = 'scale(1)';

}

function ima36(){
    var imad = document.getElementById("imagen36")
    imad.style.transform ='translate(500px, -145px)'+'scale(3.5)';

}

function imag36(){
    var imad = document.getElementById("imagen36");
    imad.style.transform = 'scale(1)';

}

function ima37(){
    var imad = document.getElementById("imagen37")
    imad.style.transform ='translate(300px, -145px)'+'scale(3.5)';

}

function imag37(){
    var imad = document.getElementById("imagen37");
    imad.style.transform = 'scale(1)';

}

function ima38(){
    var imad = document.getElementById("imagen38")
    imad.style.transform ='translate(0px, -145px)'+'scale(3.5)';

}

function imag38(){
    var imad = document.getElementById("imagen38");
    imad.style.transform = 'scale(1)';

}

function ima39(){
    var imad = document.getElementById("imagen39")
    imad.style.transform ='translate(-300px, -145px)'+'scale(3.5)';

}

function imag39(){
    var imad = document.getElementById("imagen39");
    imad.style.transform = 'scale(1)';

}

function ima40(){
    var imad = document.getElementById("imagen40")
    imad.style.transform ='translate(-600px, -145px)'+'scale(3.5)';

}

function imag40(){
    var imad = document.getElementById("imagen40");
    imad.style.transform = 'scale(1)';

}

function ima41(){
    var imad = document.getElementById("imagen41")
    imad.style.transform ='translate(550px, 250px)'+'scale(3.5)';

}

function imag41(){
    var imad = document.getElementById("imagen41");
    imad.style.transform = 'scale(1)';

}

function ima42(){
    var imad = document.getElementById("imagen42")
    imad.style.transform ='translate(300px, 250px)'+'scale(3.5)';

}

function imag42(){
    var imad = document.getElementById("imagen42");
    imad.style.transform = 'scale(1)';

}

function ima43(){
    var imad = document.getElementById("imagen43")
    imad.style.transform ='translate(0px, 250px)'+'scale(3.5)';

}

function imag43(){
    var imad = document.getElementById("imagen43");
    imad.style.transform = 'scale(1)';

}

function ima44(){
    var imad = document.getElementById("imagen44")
    imad.style.transform ='translate(-300px, 250px)'+'scale(3.5)';
}

function imag44(){
    var imad = document.getElementById("imagen44");
    imad.style.transform = 'scale(1)';

}

function ima45(){
    var imad = document.getElementById("imagen45")
    imad.style.transform ='translate(-600px, 250px)'+'scale(3.5)';

}

function imag45(){
    var imad = document.getElementById("imagen45");
    imad.style.transform = 'scale(1)';

}

function ima46(){
    var imad = document.getElementById("imagen46")
    imad.style.transform ='translate(550px, -145px)'+'scale(3.5)';

}

function imag46(){
    var imad = document.getElementById("imagen46");
    imad.style.transform = 'scale(1)';

}

function ima47(){
    var imad = document.getElementById("imagen47")
    imad.style.transform ='translate(300px, -145px)'+'scale(3.5)';

}

function imag47(){
    var imad = document.getElementById("imagen47");
    imad.style.transform = 'scale(1)';

}

function ima48(){
    var imad = document.getElementById("imagen48")
    imad.style.transform ='translate(0px, -145px)'+'scale(3.5)';

}

function imag48(){
    var imad = document.getElementById("imagen48");
    imad.style.transform = 'scale(1)';

}

function ima49(){
    var imad = document.getElementById("imagen49")
    imad.style.transform ='translate(-300px, -145px)'+'scale(3.5)';

}

function imag49(){
    var imad = document.getElementById("imagen49");
    imad.style.transform = 'scale(1)';

}

function ima50(){
    var imad = document.getElementById("imagen50")
    imad.style.transform ='translate(-600px, -145px)'+'scale(3.5)';

}

function imag50(){
    var imad = document.getElementById("imagen50");
    imad.style.transform = 'scale(1)';

}

function ima51(){
    var imad = document.getElementById("imagen51")
    imad.style.transform ='translate(550px, 250px)'+'scale(3.5)';

}

function imag51(){
    var imad = document.getElementById("imagen51");
    imad.style.transform = 'scale(1)';

}

function ima52(){
    var imad = document.getElementById("imagen52")
    imad.style.transform ='translate(300px, 250px)'+'scale(3.5)';

}

function imag52(){
    var imad = document.getElementById("imagen52");
    imad.style.transform = 'scale(1)';

}

function ima53(){
    var imad = document.getElementById("imagen53")
    imad.style.transform ='translate(0px, 250px)'+'scale(3.5)';

}

function imag53(){
    var imad = document.getElementById("imagen53");
    imad.style.transform = 'scale(1)';

}

function ima54(){
    var imad = document.getElementById("imagen54")
    imad.style.transform ='translate(-300px, 250px)'+'scale(3.5)';

}

function imag54(){
    var imad = document.getElementById("imagen54");
    imad.style.transform = 'scale(1)';

}

function ima55(){
    var imad = document.getElementById("imagen55")
    imad.style.transform ='translate(-600px, 250px)'+'scale(3.5)';

}

function imag55(){
    var imad = document.getElementById("imagen55");
    imad.style.transform = 'scale(1)';

}

function ima56(){
    var imad = document.getElementById("imagen56")
    imad.style.transform ='translate(550px, -145px)'+'scale(3.5)';

}

function imag56(){
    var imad = document.getElementById("imagen56");
    imad.style.transform = 'scale(1)';

}

function ima57(){
    var imad = document.getElementById("imagen57")
    imad.style.transform ='translate(300px, -145px)'+'scale(3.5)';

}

function imag57(){
    var imad = document.getElementById("imagen57");
    imad.style.transform = 'scale(1)';

}

function ima58(){
    var imad = document.getElementById("imagen58")
    imad.style.transform ='translate(0px, -145px)'+'scale(3.5)';

}

function imag58(){
    var imad = document.getElementById("imagen58");
    imad.style.transform = 'scale(1)';

}

function ima59(){
    var imad = document.getElementById("imagen59")
    imad.style.transform ='translate(-300px, -145px)'+'scale(3.5)';

}

function imag59(){
    var imad = document.getElementById("imagen59");
    imad.style.transform = 'scale(1)';

}

function ima60(){
    var imad = document.getElementById("imagen60")
    imad.style.transform ='translate(-600px, -145px)'+'scale(3.5)';

}

function imag60(){
    var imad = document.getElementById("imagen60");
    imad.style.transform = 'scale(1)';

}


