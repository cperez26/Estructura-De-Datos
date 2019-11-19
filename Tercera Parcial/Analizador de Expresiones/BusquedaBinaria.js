export default class BusquedaBinaria {
    constructor() {
        this._raiz = null;
        this._nodos = "";
    }

    Add(nodo) {
        if (this._raiz != null) {
            this._addRecursivo(this._raiz, nodo);
        } else
            this._raiz = nodo;
    }

    _addRecursivo(raiz, nodo) {
        if (nodo < raiz) {
            if (raiz.izquierda != null)
                this._addRecursivo(raiz.izquierda, nodo);
            else
                raiz.izquierda = nodo;
        } else {
            if (raiz.derecha != null)
                this._addRecursivo(raiz.derecha, nodo);
            else
                raiz.derecha = nodo;
        }
    }

    Buscar(codigo) {
        let productoEncontrado = '';
        if (this._raiz != null) {
            let raiz = this._raiz;
            while (productoEncontrado === '') {
                if (codigo < raiz.codigo) {
                    if (raiz.izquierda != null)
                        raiz = raiz.izquierda
                    else
                        break;
                } else if (codigo > raiz.codigo) {
                    if (raiz.derecha != null)
                        raiz = raiz.derecha;
                    else
                        break;
                } else
                    productoEncontrado = raiz.toString();
            }
        }

        return productoEncontrado;
    }

    reporteInOrder() {
        this._nodos = '';
        if(this._raiz != null){
            this._izquierdaRecursiva(this._raiz);
        }

        return this._nodos;
    }

    _InOrderRecursiva(raiz){
        if (root != null) {
            this._InOrderRecursiva(raiz.izquierda);
            this._nodes += raiz.toString() + '<br>';
            this._inOrderRecursiva(raiz.derecha);
        }

    }

    reportePreOrder() {
        this._nodos = '';

        if (this._raiz != null)
            this._preOrderRecursiva(this._raiz);

        return this._nodos;

    }

    _preOrderRecursiva(raiz) {
        if (raiz != null) {
            this._nodos += raiz.toString() + '<br>';
            this._preOrderRecursiva(raiz.izquierda);
            this._preOrderRecursiva(raiz.derecha);
        }
    }

    reportePostOrder() {
        this._nodos = '';

        if (this._raiz != null)
            this._postOrderRecursiva(this._raiz);

        return this._nodos;
        
    }

    _postOrderRecursiva(raiz) {
        if (raiz != null) {
            this._postOrderRecursiva(raiz.izquierda);
            this._postOrderRecursive(raiz.derecha);
            this._nodos += raiz.toString() + '<br>';
        }
    }
}
