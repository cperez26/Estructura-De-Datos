export default class Lista {
    constructor() {
        this._inicio = null;
    }

    add(nodo, posicion) {
        if (this.buscar(nodo.codigo) === -1) {
            if (this._PosicionValida(posicion)) {
                let auxiliar = this._inicio;

                if (posicion === 0)
                    posicion = this._totalNodos() + 1;

                if (posicion != 1) {
                    while (posicion > 2) {
                        auxiliar = auxiliar.siguiente;
                        posicion--;
                    }
                    nodo.siguiente = auxiliar.siguiente;
                    auxiliar.siguiente = nodo;
                } else {
                    nodo.siguiente = this._inicio;
                    this._inicio = nodo;
                }

                return true;
            } else
                return false;
        } else {
            return false;
        }
    }

    buscar(codigo) {
        let auxiliar = this._inicio;
        let objectFound = -1;
        while (auxiliar != null && objectFound === -1) {
            if (auxiliar.codigo === codigo)
                objectFound = auxiliar;
            auxiliar = auxiliar.siguiente;
        }

        return objectFound;
    }

    borrar(codigo) {
        let isDeleted = false;
        if (this.buscar(codigo) != -1) {
            if (this._inicio.codigo != codigo) {
                let auxiliar = this._inicio;
                while (auxiliar.siguiente != null && isDeleted === false) {
                    if (auxiliar.siguiente.codigo === codigo) {
                        auxiliar.siguiente = auxiliar.siguiente.siguiente;
                        isDeleted = true;
                    } else
                        auxiliar = auxiliar.siguiente;
                }
            } else {
                if (this._inicio.siguiente != null)
                    this._inicio = this._inicio.siguiente
                else
                    this._inicio = null;
                return true;
            }
        }
        return isDeleted;
    }

    reporte() {
        let auxiliar = this._inicio;
        let string = '';
        while (auxiliar != null) {
            string = string + '<br>' + auxiliar.toString();
            auxiliar = auxiliar.siguiente;
        }
        return string;
    }

    reporteInverso() {
        let auxiliar = this._inicio;
        let string = '';
        while (auxiliar != null) {
            string = auxiliar.toString() + '<br>' + string;
            auxiliar = auxiliar.siguiente;
        }
        return '<br>' + string;
    }
    _totalNodos() {
        let totalNodos = 0;
        let auxiliar = this._inicio;
        while (auxiliar != null) {
            totalNodos++;
            auxiliar = auxiliar.siguiente;
        }

        return totalNodos;
    }
    _PosicionValida(posicion) {
        if (posicion >= 0) {
            if (posicion <= this._totalNodos() + 1)
                return true;
            else
                return false;
        } else
            return false;
    }


}