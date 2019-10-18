export default class Lista {
    constructor() {
        this._inicio = null;
    }

    add(nodo) {
        if (this.buscar(nodo.codigo) === null) {
            if (this._inicio != null) {
                let aux = this._inicio;
                while (aux.siguiente != null && nodo.codigo > aux.codigo)
                    aux = aux.siguiente;
                if (nodo.codigo < aux.codigo) {
                    if (aux != this._inicio) {
                        aux.anterior.siguiente = nodo;
                        nodo.anterior = aux.anterior;
                        nodo.siguiente = aux;
                        aux.anterior = nodo;
                    } else {
                        this._inicio = nodo;
                        nodo.siguiente = aux;
                        aux.anterior = nodo;
                    }
                } else {
                    aux.siguiente = nodo;
                    nodo.anterior = aux;
                }
            } else
                this._inicio = nodo;
            return true;
        } else
            return false;
    }

    buscar(codigo) {
        let aux = this._inicio;
        let objectEncontrado = null;
        while (aux != null && objectEncontrado === null) {
            if (aux.codigo === codigo)
                objectEncontrado = aux;
            aux = aux.siguiente;
        }

        return objectEncontrado;
    }

    borrar(codigo) {
        let objectEncontrado = this.buscar(codigo);
        if (objectEncontrado != null) {
            if (objectEncontrado.siguiente != null && objectEncontrado.anterior != null) {
                objectEncontrado.anterior.siguiente = objectEncontrado.siguiente;
                objectEncontrado.siguiente.anterior = objectEncontrado.anterior;
            } else if (objectEncontrado.anterior === null) {
                this._inicio = objectEncontrado.siguiente;
                objectEncontrado.siguiente.anterior = null;
            } else {                  
                objectEncontrado.anterior.siguiente = null;
            }
            return true;
        } else
            return false;
    }

    reporte() {
        let aux = this._inicio;
        let string = '';
        while (aux != null) {
            string = string + '<br>' + aux.toString();
            aux = aux.siguiente;
        }
        return string;
    }

    reporteInverso() {
        let aux = this._inicio;
        let string = '';
        while (aux != null) {
            string = aux.toString() + '<br>' + string;
            aux = aux.siguiente;
        }
        return '<br>' + string;
    }
}