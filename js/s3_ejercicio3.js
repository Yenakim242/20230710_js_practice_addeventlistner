// Ejercicio 3 -> Crear una página con div. Al mantener presionado el botón del ratón dentro cambiar color y al soltar (놓다) cambiar de nuevo a otro color.
// Ej03: toggle(), keyup

// // aleatorio numero de color
// let colorcode = Math.floor((Math.random()*999999)+ 111111);
// // console.log(colorcode);
// // click
// let btnDiv = document.querySelector("div");
// btnDiv.addEventListener("click",(e) => {
//     console.log(e.target);
//     btnDiv.style.backgroundColor = "#"+colorcode;
// })

let div = document.querySelector("div");
div.addEventListener("click", () => {
    // resetear();
    div.classList.toggle("cambiaColor1");
})
div.addEventListener("dblclick", () => {
    div.classList.toggle("cambiaColor2");
})




// function resetear() {
//     btnDiv.removeEventListener(addEventListener)
// }