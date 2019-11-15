export default class BusquedaBinaria {
    constructor() {
        this._raiz = null;
        this._nodos = "";
    }

    add(nodo) {
        if (this._raiz != null) {
            this._addRecursivo(this._raiz, nodo);
        } else
            this._raiz = nodo;
    }

    _addRecursivo(raiz, nodo) {
        if (nodo < raiz) {
            if (raiz.left != null)
                this._addRecursivo(raiz.left, nodo);
            else
                raiz.left = nodo;
        } else {
            if (raiz.right != null)
                this._addRecursivo(raiz.right, nodo);
            else
                raiz.right = nodo;
        }
    }

    Buscar(codigo) {
        let productFound = '';
        if (this._root != null) {
            let root = this._root;
            while (productFound === '') {
                if (code < root.code) {
                    if (root.left != null)
                        root = root.left
                    else
                        break;
                } else if (code > root.code) {
                    if (root.right != null)
                        root = root.right;
                    else
                        break;
                } else
                    productFound = root.toString();
            }
        }

        return productFound;
    }

    reporteInOrder() {
        this._nodos = '';
        if(this._raiz != null){
            this._izquierdaRecursiva(this._raiz);
        }

        return this._nodos;
    }

    _izquierdaRecursiva(raiz){

    }

    _InOrderRecursiva(raiz){

    }

    reportePreOrder() {

    }

    reportePostOrder() {
        
    }
}

    _inOrderRecursive(root) {
        if (root != null) {
            this._inOrderRecursive(root.left);
            this._allNodes += root.toString() + '<br>';
            this._inOrderRecursive(root.right);
        }
    }

    preOrder() {
        this._allNodes = '';

        if (this._root != null)
            this._preOrderRecursive(this._root);

        return this._allNodes;
    }

    _preOrderRecursive(root) {
        if (root != null) {
            this._allNodes += root.toString() + '<br>';
            this._preOrderRecursive(root.left);
            this._preOrderRecursive(root.right);
        }
    }

    postOrder() {
        this._allNodes = '';

        if (this._root != null)
            this._postOrderRecursive(this._root);

        return this._allNodes;
    }

    _postOrderRecursive(root) {
        if (root != null) {
            this._postOrderRecursive(root.left);
            this._postOrderRecursive(root.right);
            this._allNodes += root.toString() + '<br>';
        }
    }
}