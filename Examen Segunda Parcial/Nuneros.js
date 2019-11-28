export default class Numeros {
    constructor(numero) {
        this._numero = numero;
        this._siguiente = null;
    }

    get numero(){
        return this._numero;
    }
    get siguiente(){
        return this._siguiente;
    }
    set siguiente(siguiente) {
        this._siguiente = siguiente;
    }

    toString() {
        return 'Numero: ' + this._numero;
    }
}