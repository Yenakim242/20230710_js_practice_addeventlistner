// Ejercicio 1: Crear una página donde se pueda cambiar el tamaño de letra de un párrafo a través de dos botones (más y menos).
// onclick - addEventListner - submit()
// referenciar el parrafo
let parrafo = document.querySelector("p");
let botones = document.querySelectorAll("button");
let letraSize = 10;
// función para el tamaño más grande
letraSize++; 
botones[0].addEventListener("click", (e) => {
    letraSize++;
    document.querySelector("span").setAttribute("style", `font-size: ${letraSize}px`);
    return letraSize;
});

// función para el tamaño más pequeño
botones[1].addEventListener("click", (e) => {
    letraSize--;
    document.querySelector("span").setAttribute("style", `font-size: ${letraSize}px`);
    return letraSize;
});


// soluciín
let pa01 = document.getElementById("parra");
let granBtn = document.getElementById("gran");
let peqBtn = document.getElementById("peq");
let fontsizeInicialtext = window.getComputedStyle(pa01).fontSize; // Solo sirve para tamaño de fuente de dos digitos.
let fontsizeInicialtextSizePx = fontsizeInicialtext.substring(0,2);
let fontsizeInicialnumero = parseInt(fontsizeInicialtextSizePx);
console.log(fontsizeInicialnumero);
granBtn.addEventListener("click", ()=>{
    // parrafo.style.fontSize : Devuelve vacío pero puede gestionar para ir sumando px al fontsize.
    fontsizeInicialnumero += 2;
    pa01.style.fontSize = fontsizeInicialnumero + "px";
});
peqBtn.addEventListener("click", ()=>{
    // parrafo.style.fontSize : Devuelve vacío pero puede gestionar para ir sumando px al fontsize.
    fontsizeInicialnumero -= 2;
    pa01.style.fontSize = fontsizeInicialnumero + "px";
});


