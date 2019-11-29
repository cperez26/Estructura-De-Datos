export default class Producto{
    constructor(value){
        this._value = value;
        this._izquierda = null;
        this._derecha = null;
    }

    get value(){
        return this._value;
    }

    get izquierda(){
        return this._izquierda;
    }

    get derecha(){
        return this._derecha;
    }

    set value(value){
        this._value = value;
    }

    set izquierda(izquierda){
        this._izquierda = izquierda;
    }

    set derecha(derecha){
        this._derecha = derecha;
    }
}