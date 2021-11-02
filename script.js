// Campos letras y numeros
const letras = document.getElementById("letras");
const numeros = document.getElementById("numeros");

// Botones
const a1 = document.getElementById("a1");
const b2 = document.getElementById("b2");
const c3 = document.getElementById("c3");
const d4 = document.getElementById("d4");
const e5 = document.getElementById("e5");
const f6 = document.getElementById("f6");
const g7 = document.getElementById("g7");
const h8 = document.getElementById("h8");
const i9 = document.getElementById("i9");
const j0 = document.getElementById("j0");
const cl = document.getElementById("cl");
const cn = document.getElementById("cn");

//funciones
const fna1 = () =>{

    let bandera = 0;
    if ( letras.innerHTML == "" ) {
        letras.innerHTML= "A";
    } else {
        if (numeros.innerHTML=="" && letras.innerHTML=="ABCDEFGHIJ") {
            numeros.innerHTML = "1";
            bandera=1;
        } else {
            if (bandera=1) {
                alert("faltan letras")
            }
            else {
                alert("faltan números")
            }
        } 
        
    }
};
const fnb2 = () =>{
    if (letras.innerHTML=="A") {
        letras.innerHTML += "B"; //+= es lo mismo que decir letras.innerHTML=letras.innerHTML + "B"
    } else {
        alert ("Faltan letras");
    }
    if (numeros.innerHTML == "1") {
        numeros.innerHTML += "2";
    }

};
const fnc3 = () =>{
    if (letras.innerHTML == "AB") {
        letras.innerHTML += "C";
    } else {
        alert ("Faltan letras");
    }
};
const fnd4 = () =>{
    if (letras.innerHTML == "ABC") {
        letras.innerHTML += "D";
    } else {
        alert ("Faltan letras");
    }
};
const fne5 = () =>{
    if (letras.innerHTML == "ABCD") {
        letras.innerHTML += "E";
    } else {
        alert ("Faltan letras");
    }
};
const fnf6 = () =>{
    if (letras.innerHTML == "ABCDE") {
        letras.innerHTML += "F";
    } else {
        alert ("Faltan letras");
    }
};
const fng7 = () =>{
    if (letras.innerHTML == "ABCDEF") {
        letras.innerHTML += "G";
    } else {
        alert ("Faltan letras");
    }
};
const fnh8 = () =>{
    if (letras.innerHTML == "ABCDEFG") {
        letras.innerHTML += "H";
    } else {
        alert ("Faltan letras");
    }
};
const fni9 = () =>{
    if (letras.innerHTML == "ABCDEFGH") {
        letras.innerHTML += "I";
    } else {
        alert ("Faltan letras");
    }
};
const fnj0 = () =>{
    if (letras.innerHTML == "ABCDEFGHI") {
        letras.innerHTML += "J";
    } else {
        alert ("Faltan letras");
    }
};
const fncl = () =>{
    letras.innerHTML = "";
};
const fncn = () =>{
    numeros.innerHTML = "";
};

// Eventos
a1.onclick = () => {
    fna1();
}

b2.onclick = () => {
    fnb2();
}

c3.onclick = () => {
    fnc3();
}

d4.onclick = () => {
    fnd4();
}

e5.onclick = () => {
    fne5();
}

f6.onclick = () => {
    fnf6();
}

g7.onclick = () => {
    fng7();
}

h8.onclick = () => {
    fnh8();
}

i9.onclick = () => {
    fni9();
}

j0.onclick = () => {
    fnj0();
}

cl.onclick = () => {
    fncl();
}

cn.onclick = () => {
    fncn();
}