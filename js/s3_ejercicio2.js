// EJ02: div dentro un dos, elemento cualquier
// Ejercicio 2 -> Crear una página con un div que contenga un número. Asociar un evento que cuando se haga clic dos veces multiplique el número por dos.
let div = document.querySelector("div"); // Con query se puede seleccionar tipo CSS o ID.
// let num = Number(document.getElementById("ej02").textContent);
div.addEventListener("dblclick", () =>{
    // num = num*2; 
    // document.getElementById("ej02").innerHTML = num;
    // console.log(num);
    div.innerHTML *= 2;
});

