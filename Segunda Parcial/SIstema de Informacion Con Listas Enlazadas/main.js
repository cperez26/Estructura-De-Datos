import Lista from "./Lista.js";
import Producto from "./Producto.js";

var inventory = new Lista(new Array(20));
var rArticulo = document.querySelector('#reporte');


document.querySelector('#btnAdd').addEventListener('click', () => {
    let codigo = Number(document.querySelector('#codigo').value);
    let nombre = document.querySelector('#nombre').value;
    let precio = Number(document.querySelector('#precio').value);
    let cantidad = Number(document.querySelector('#cantidad').value);
    let descripcion = document.querySelector('#descripcion').value;
    let posicion = Number(document.querySelector('#posicion').value);

    if (inventory.add(new Producto(codigo, nombre, precio, cantidad, descripcion), posicion))
        alert('el Producto se agrego correctamente');
    else
        alert('Posición o código no válido, por favor intente de nuevo');

});

document.querySelector('#btnBuscar').addEventListener('click', () => {
    let tagDiv = document.querySelector('#productoEncontrado');
    tagDiv.innerHTML = "";
    let codigo = Number(document.querySelector('#buscarCodigo').value);
    let objReturned = inventory.buscar(codigo);

    if (objReturned != -1)
        tagDiv.innerHTML = objReturned.toString();
    else
        alert('No se ha podido encontrar el producto, por favor intente de nuevo');
});

document.querySelector('#btnEliminar').addEventListener('click', () => {
    let codigo = Number(document.querySelector('#eliminarCodigo').value);
    if (inventory.borrar(codigo))
        alert('El Producto a sido eliminado correctamente');
    else
        alert('Producto no encontrado');
});

document.querySelector('#crearReporte').addEventListener('click', () => {
    rArticulo.innerHTML = inventory.reporte();
});

document.querySelector('#CrearReporteInverso').addEventListener('click', () => {
    rArticulo.innerHTML = inventory.reporteInverso();
});




