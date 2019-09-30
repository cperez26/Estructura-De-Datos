import Estructura from "./orden.js";
import Articulo from "./articulo.js";

var inventory = new Estructura(new Array(20));
var tagArticle = document.querySelector('#articleReport');


document.querySelector('#btnAdd').addEventListener('click', () => {
    if (inventory.top < 19) {
        let codigo = Number(document.querySelector('#codigo').value);
        let nombre = document.querySelector('#nombre').value;
        let precio = Number(document.querySelector('#precio').value);
        let cantidad = Number(document.querySelector('#cantidad').value);
        let descripcion = document.querySelector('#descripcion').value;

        if (inventory.add(new Articulo(codigo, nombre, precio, cantidad, descripcion)))
            alert('El Producto se agrego correctamente');
        else
            alert('Este código ya existe, ingrese uno nuevo');
    } else
        alert('no se ha podido agregar, el inventario esta lleno');
});

document.querySelector('#btnBuscar').addEventListener('click', () => {
    let tagDiv = document.querySelector('#productoEncontrado');
    let codigo = Number(document.querySelector('#buscarCodigo').value);
    let objReturned = inventory.query(codigo).toString();

    tagDiv.innerHTML = "";
    if (objReturned != "-1")
        tagDiv.innerHTML = objReturned;
    else
        alert('No se ha podido encontrar el producto');
});

document.querySelector('#btnBorrar').addEventListener('click', () => {
    let codigo = Number(document.querySelector('#borrarCodigo').value);
    if (inventory.delete(codigo))
        alert('El producto se elimino correctamente');
    else
        alert('No se encontro el producto');
});

document.querySelector('#btnReporte').addEventListener('click', () => {
    tagArticle.innerHTML = '';
    for (let i = 0; i < inventory.top + 1; i++) {
        let tagP = document.createElement('p');
        tagP.innerHTML = inventory.structure[i].toString();
        tagArticle.appendChild(tagP);
    }
});