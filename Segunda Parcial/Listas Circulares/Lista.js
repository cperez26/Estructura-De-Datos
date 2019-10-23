export default class Lista {
    constructor() {
        this._inicio = null;
        this._fin = null;
        this._totalElementos = 0;
    }

    add(nodo, posicion){
        if (posicion >= 0 && posicion <= this._totalElementos + 1 && this.buscar(nombre) === null){
            if (this._inicio != null){
                if (posicion != 1 && posicion != 0 && posicion != this._totalElementos + 1){
                    let aux = this._inicio;
                    for (let i = 1; i <= posicion; i++)
                        aux = aux.siguiente;
                    aux.anterior.siguiente = nodo;
                    nodo.anterior = aux.anterior;
                    nodo.siguiente = aux;
                    aux.anterior = nodo;
                } else if (posicion === 0 || posicion === this._totalElementos){
                    this._fin.siguiente = nodo;
                    nodo.anterior = this._fin;
                    this._fin = nodo;
                    this._fin.siguiente = this._inicio;
                } else {
                    nodo.siguiente = this._inicio;
                    nodo.anterior = this._fin;
                    this._inicio.anterior = nodo;
                    this._inicio = nodo;
                }
            } else {
                nodo.anterior = nodo;
                nodo.siguiente = nodo;
                this._inicio = nodo;
                this._fin = nodo;
            }
            this._totalElementos++;
            return true;
        } else
            return false;
    }

    buscar(nombre){
        let aux = this._inicio;
        let objectFound = null;
        for (let i = 1; i <= this._totalElementos && objectFound === null && this._inicio != null; i++){
            if (aux.nombre === nombre)
                objectFound = aux;
            aux = aux.siguiente;
        }

        return objectFound;
    }

    borrar(nombre){
        let objectFound = this.buscar(nombre);
        if (objectFound != null) {
            if (objectFound != this._inicio && objectFound != this._fin){
                objectFound.anterior.siguiente = objectFound.siguiente;
                objectFound.siguiente.anterior = objectFound.anterior;
            } else if (objectFound === this._inicio){
                if (this._totalElementos != 1){
                    this._fin.siguiente = this._inicio.siguiente;
                    this._inicio.siguiente.anterior = this._fin;
                    this._inicio = this._inicio.siguiente;
                } else {
                    this._inicio = null;
                }
            } else {
                this._inicio.anterior = this._fin.anterior;
                this._fin.anterior.siguiente = this._inicio;
                this._fin = this._fin.anterior;
            }

            this._totalElementos--;
            return true;
        } else
            return false;
    }

    crearRuta(estacionInicial, tiempoInicio, tiempoFin){
        let totalMinutos = (tiempoFin - tiempoInicio) * 60;
        let minutosTranscurridos = 0;
        let aux = this.buscar(estacionInicial);
        let string = '';
        if (aux != null) {
            do {
                string = string + 'Minutos Transcurridos: ' + minutosTranscurridos + aux.toString() + '<br>';
                aux = aux.siguiente;
                minutosTranscurridos += aux.minutos;
            } while (minutosTranscurridos <= totalMinutos);
        }

        return string;
    }
}