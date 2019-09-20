import Articulo from "./articulo.js";

export default class Orden{
    constructor(estrutura = new Array(), articulo){
        this._estructura = estrutura;
        this._articulo = articulo;
        this._contador = 1;
    }

    get estrutura(){
        return this._estructura;
    }

    get contador(){
        return this._contador;
    }

    add(posicion, nombre, precio, cantidad, descripcion){
        if (posicion === '' || posicion === (this._estructura.length + 1).toString()) {
            this._estructura.push(new Articulo(this._contador, nombre, precio, cantidad, descripcion));
            this._contador++;
            alert('Se Agrego Correctamente');
        } else if (parseInt(posicion) > 0 && parseInt(posicion) < this._estructura.length) {
            for (let i = this._estructura.length; i >= parseInt(posicion); i--) {
                this._estructura[i] = this._estructura[i - 1];
            }
            this._estructura[parseInt(posicion) - 1] = new Articulo(this._contador, nombre, precio, cantidad, descripcion);
            this._contador++;
            alert('Se Agrego Correctamente');
        } else
            alert('Esta Posicion NO es Válida');
    }

    busqueda(codigo){
        codigo = parseInt(codigo);
        let encontrado = '';
        if (this._existe(codigo)) {
            this._estructura.forEach(producto => {
                if (producto.codigo === codigo) {
                    encontrado = producto;
                    return;
                }
            });
        } else {
            alert('Producto No Encontrado');
        }

        return encontrado;
    }

    borrar(codigo){
        codigo = parseInt(codigo);
        if (this._existe(codigo)) {
            if (codigo != this.estrutura.length) {
                for (let i = codigo - 1; i < this._estructura.length - 1; i++) {
                    this._estructura[i] = this._estructura[i + 1];
                }
                this._estructura.pop();
            } else
                this._estructura.pop();
            alert('Se ha Eliminado con Exito');
        } else {
            alert('Código no Encontrado, por favor Intentelo de Nuevo');
        }
    }

    _existe(codigo){
        let existe = false;
        for (let i = 0; i < this._estructura.length; i++) {
            if (this._estructura[i].codigo === codigo) {
                existe = true;
                break;
            }
        }

        return existe;
    }

    reporte(){
        this._articulo.innerHTML = '';
        let reporte = new Array();

        for (let i = 0; i < this._estructura.length; i++) {
            reporte[i] = document.createElement('reporte');
        }

        for (let i = 0; i < this._estructura.length; i++) {
            reporte[i].innerHTML = this._estructura[i].toString();
            this._articulo.appendChild(reporte[i]);
        }
    }
}