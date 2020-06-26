function usad(){
for(i=0; i<60; i++){
    var preciobara = "preciobara"+i;
    var porfin = preciobara;
    var porfin = document.getElementById('condi'+i);
    if(porfin.textContent == "*NUEVO"){
        porfin.closest('#nuevo').remove();
    }
    
} 
}

function nuev(){
for(i=0; i<60; i++){
    var preciobara = "preciobara"+i;
    var porfin = preciobara;
    var porfin = document.getElementById('condi'+i);
    if(porfin.textContent == "*USADO"){
        porfin.closest('#nuevo').remove();
    }
    
}
}
    

function barato(){
for(i=0; i<60; i++){
    var preciobara = "preciobara"+i;
    var porfin = preciobara;
    var porfin = document.getElementById('precio'+i);
    if(porfin.textContent>300){
        porfin.closest('#nuevo').remove();
    }
    
}
}

function medio(){
for(i=0; i<60; i++){
    var preciobara = "preciobara"+i;
    var porfin = preciobara;
    var porfin = document.getElementById('precio'+i);
    if(porfin.textContent<300 || porfin.textContent>=600){
        porfin.closest('#nuevo').remove();
    }
    
}
}

function caro(){
for(i=0; i<60; i++){
    var preciobara = "preciobara"+i;
    var porfin = preciobara;
    var porfin = document.getElementById('precio'+i);
    if(porfin.textContent<600){
        porfin.closest('#nuevo').remove();
    }
    
}
}

function bogota(){
for(i=0; i<60; i++){
    var preciobara = "preciobara"+i;
    var porfin = preciobara;
    console.log(porfin);
    var porfin = document.getElementById('ciudad'+i);
    if(porfin.textContent !== "Bogotá D.C"){
        porfin.closest('#nuevo').remove();
    }
    
}
}

function antioquia(){
for(i=0; i<60; i++){
    var preciobara = "preciobara"+i;
    var porfin = preciobara;
    console.log(porfin);
    var porfin = document.getElementById('ciudad'+i);
    if(porfin.textContent !== "Antioquia"){
        porfin.closest('#nuevo').remove();
    }
    
}
}

function santander(){
for(i=0; i<60; i++){
    var preciobara = "preciobara"+i;
    var porfin = preciobara;
    console.log(porfin);
    var porfin = document.getElementById('ciudad'+i);
    if(porfin.textContent !== "Santander"){
        porfin.closest('#nuevo').remove();
    }
    
}
}

function car(){
    var carrito = document.getElementById('carrito');
    carrito = carrito + 1;
    carrito.appendChild('carrito');
    console.log(carrito);
}




function ima1(){
    var imad = document.getElementById("imagen")
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


