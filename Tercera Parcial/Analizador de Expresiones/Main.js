import Expresiones from "./Expresiones.js";

var expresiones = new Expresiones();

document.querySelector('#btn').addEventListener('click', () => {
    let operaciones = document.querySelector('#operaciones').value;
    expresiones.resolve(operaciones);
});