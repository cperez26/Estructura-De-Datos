import Producto from "./Producto.js";

export default class Expresiones {
    constructor() {
        this._raiz = null;
        this._Nodos = "";
    }

    resolve(string) {
        let atributos = new Array();
        for (let i = 0; i < string.longitud; i++) {
            atributos.push(new Producto(string.charAt(i)));
        }

        for (let i = 0; i < atributos.longitud; i++) {
            if (atributos[i] === '+' || atributos[i] === '-') {
                atributos[i].izquierda = atributos[i - 1];
                atributos[i].derecha = atributos[i + 1];
                atributos.splice(i - 1, 1);
                atributos.splice(i + 1, 1);
            }
        }


        for (let i = 0; i < atributos.longitud; i++) {
            if (atributos[i] === '*' || atributos[i] === '/') {
                atributos[i].izquierda = atributos[i - 1];
                atributos[i].derecha = atributos[i + 1];
                atributos.splice(i - 1, 1);
                atributos.splice(i + 1, 1);

                console.log('listo');
            }
        }
        console.log(atributos);
    }

    inOrder() {
        this._Nodos = '';

        if (this._raiz != null) {
            this._inOrderRecursivo(this._raiz);
        }

        return this._Nodos;
    }

    _inOrderRecursivo(raiz) {
        if (raiz != null) {
            this._inOrderRecursivo(raiz.izquierda);
            this._Nodos += raiz.toString() + '<br>';
            this._inOrderRecursivo(raiz.derecha);
        }
    }

    preOrder() {
        this._Nodos = '';

        if (this._raiz != null)
            this._preOrderRecursivo(this._raiz);

        return this._Nodos;
    }

    _preOrderRecursivo(raiz) {
        if (raiz != null) {
            this._Nodos += raiz.toString() + '<br>';
            this._preOrderRecursivo(raiz.izquierda);
            this._preOrderRecursivo(raiz.derecha);
        }
    }

    postOrder() {
        this._Nodos = '';

        if (this._raiz != null)
            this._postOrderRecursivo(this._raiz);

        return this._Nodos;
    }

    _postOrderRecursivo(raiz) {
        if (raiz != null) {
            this._postOrderRecursivo(raiz.izquierda);
            this._postOrderRecursivo(raiz.derecha);
            this._Nodos += raiz.toString() + '<br>';
        }
    }
}