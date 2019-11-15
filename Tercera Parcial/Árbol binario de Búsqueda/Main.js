import BusquedaBinaria from "./BusquedaBinaria.js";
import Producto from "./Producto.js";

var inventory = new BinarySearchTree();
var tagArticle = document.querySelector('#articleReport');

document.querySelector('#btnAdd').addEventListener('click', () => {

    let codigo = Number(document.querySelector('#codigo').value);
    let nombre = document.querySelector('#nombre').value;
    let precio = Number(document.querySelector('#precio').value);
    let cantidad = Number(document.querySelector('#cantidad').value);
    let descripcion = document.querySelector('#descripcion').value;

    inventory.add(new Producto(codigo, nombre, precio, cantidad, descripcion));
});

document.querySelector('#btnBuscar').addEventListener('click', () => {

});

document.querySelector('#btnReporteInOrder').addEventListener('click', () => {

});

document.querySelector('#btnReportePreOrder').addEventListener('click', () => {

});

document.querySelector('#btnReportePostOrder').addEventListener('click', () => {

});