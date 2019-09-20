import Orden from "./orden.js";

var inventory = new Orden(new Array(), document.querySelector('#reporte'));

document.querySelector('#btnAdd').addEventListener('click', () => {
    let posicion = document.querySelector('#posicion').value;
    let nombre = document.querySelector('#nombre').value;
    let precio = document.querySelector('#precio').value;
    let cantidad = document.querySelector('#cantidad').value;
    let descripcion = document.querySelector('#descripcion').value;

    inventory.add(posicion, nombre, precio, cantidad, descripcion);
    document.querySelector('#codigo').value = inventory.contador;
});

document.querySelector('#btnBuscar').addEventListener('click', () => {
    let product = inventory.busqueda(document.querySelector('#buscarCodigo').value);
    document.querySelector('#productoEncontrado').innerHTML = product;
});

document.querySelector('#btnDelete').addEventListener('click', () => {
    inventory.borrar(document.querySelector('#borrarCodigo').value);
    document.querySelector('#codigo').value = inventory.counterID;
});

document.querySelector('#btn').addEventListener('click', () => {
    inventory.reporte();
});