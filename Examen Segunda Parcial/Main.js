import Lista from "./Lista.js";
import Estacion from "./estaciones.js";

var inventory = new Lista(new Array(20));
var tagArticle = document.querySelector('article');


document.querySelector('#btnAdd').addEventListener('click', () => {
    let nombre = document.querySelector('#nombre').value;
    let minutos = Number(document.querySelector('#minutos').value);
    let posicion = Number(document.querySelector('#posicion').value);

    if (inventory.add(new Estacion(nombre, minutos), posicion))
        alert('Se agrego correctamente');
    else
        alert('Esta Estacion ya existe o la posición no es válida, intente de nuevo');
});

document.querySelector('#btnBuscar').addEventListener('click', () => {
    let tagDiv = document.querySelector('#estacionEncontrada');
    tagDiv.innerHTML = "";
    let nombre = document.querySelector('#buscarNombre').value;
    let objReturned = inventory.buscar(nombre);

    if (objReturned != null)
        tagDiv.innerHTML = objReturned.toString();
    else
        alert('Estación no encontrada, por favor intente de nuevo');
});

document.querySelector('#btnBorrar').addEventListener('click', () => {
    let nombre = document.querySelector('#borrarNombre').value;
    if (inventory.borrar(nombre))
        alert('Se ha eliminado con exito');
    else
        alert('Estación no encontrada');
});

document.querySelector('#btnCrearRuta').addEventListener('click', () => {
    let estacionInicial = document.querySelector('#estacionInicial').value;
    let tiempoInicio = document.querySelector('#tiempoInicio').value;
    let tiempoFin = document.querySelector('#tiempoFin').value;

    if (estacionInicial != '' && tiempoInicio != 0 && tiempoFin != 0) {
        tagArticle.innerHTML = inventory.crearRuta(estacionInicial, tiempoInicio, tiempoFin);
    } else
        alert('Debe llenar todos los campos');
});

//Otras//
import Lista from "./lista.js";
import Producto from "./producto.js";

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
        alert('Código no válido, por favor intente de nuevo');
});

document.querySelector('#btnBuscar').addEventListener('click', () => {
    let tagDiv = document.querySelector('#productoEncontrado');
    tagDiv.innerHTML = "";
    let codigo = Number(document.querySelector('#buscarCodigo').value);
    let objReturned = inventory.buscar(codigo);

    if (objReturned != -1)
        tagDiv.innerHTML = objReturned.toString();
    else
        alert('Producto no encontrado, por favor intente de nuevo');
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