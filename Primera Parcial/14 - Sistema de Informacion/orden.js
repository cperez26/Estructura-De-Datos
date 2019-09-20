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
    }
}