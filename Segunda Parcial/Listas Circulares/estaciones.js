export default class Estacion {
    constructor(nombre, minutos) {
        this._nombre = nombre;
        this._minutos = minutos;
        this._siguiente = null;
        this._anterior = null;
    }

    get nombre() {
        return this._nombre;
    }

    get minutos(){
        return this._minutos;
    }

    get siguiente() {
        return this._siguiente;
    }

    get anterior() {
        return this._anterior;
    }

    set siguiente(siguiente) {
        this._siguiente = siguiente;
    }

    set anterior(anterior) {
        this._anterior = anterior;
    }

    toString() {
        return 'Estación: ' + this._nombre + 'Minutos: ' + this._minutos;
    }
}