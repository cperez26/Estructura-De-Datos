import Expresiones from "./Expresiones.js";

var expresiones = new Expresiones();

document.querySelector('#btn').addEventListener('click', () => {
    let Resultado = document.querySelector('#resultado');
    let Operaciones = document.querySelector('#operaciones').value;
    console.log(expresiones);
    Resultado.innerHTML = expresiones.resolver(Operaciones);
});