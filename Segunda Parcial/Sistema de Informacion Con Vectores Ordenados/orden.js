import Articulo from "./articulo.js";

export default class Estructura {
    constructor(estructura = new Array()) {
        this._estructura = estructura;
        this._limite = -1;
    }

    get estructura() {
        return this._estructura;
    }

    get limite() {
        return this._limite;
    }

    add(objArticulo) {
        if (this._buscarPorCodigo(objArticulo.codigo) === -1) {
            this._estructura[this._limite + 1] = objArticulo;
            this._limite++;
            this._sortArray(this._estructura);
            return true;
        } else
            return false;
    }

    buscar(codigo) {
        let index = this._buscarPorCodigo(codigo);
        if (index != -1)
            return this._estructura[index];
        else
            return -1;
    }

    borrar(codigo) {
        let posicion = this._buscarPorCodigo(codigo);
        if (posicion != -1) {
            for (let i = posicion; i < this._limite; i++) {
                this._estructura[i] = this._estructura[i + 1];
            }
            this._estructura[this._limite] = undefined;
            this._limite--;
            this._sortArray(this._estructura);
            return true;
        } else
            return false;
    }

    _buscarPorCodigo(codigo) {
        if (this._limite > 0) {
            let min = 0, max = this._limite, posicion = -1, mediumPosicion;
            let contador = 0;
            while (posicion === -1 && contador < 15 && mediumPosicion != 0) {
                mediumPosicion = Math.trunc((max + min) / 2);
                if (mediumPosicion != 0) {
                    if (codigo < this._estructura[mediumPosicion].codigo)
                        max = mediumPosicion - 1;
                    else if (codigo > this._estructura[mediumPosicion].codigo)
                        min = mediumPosicion + 1;
                    else
                        posicion = mediumPosicion;
                } else {
                    if (this._estructura[max].codigo === codigo)
                        posicion = max;
                    else if (this._estructura[min].codigo === codigo)
                        posicion = min;
                }
                contador++;
            }
            return posicion;

        } else if (this._limite === 0) {
            if (this._estructura[0].codigo === codigo)
                return 0;
            else
                return -1;
        } else
            return -1;
    }

    _sortArray(array){
        array.sort(function (elemento1, elemento2){
            return (elemento1.codigo - elemento2.codigo)
        })
    }
}