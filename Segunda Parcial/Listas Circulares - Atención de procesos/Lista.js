export default class Lista {
    constructor( nombre, ciclo = 0 ){
        this._nombre = nombre;
        this._ciclo = ciclo;
        this._siguiente = null;
        this._anterior = null;
    }

    get nombre(){
        return this._nombre;
    }

    get ciclo(){
        return this._ciclo;
    }

    get siguiente(){
        return this._siguiente;
    }

    set siguiente( newSiguiente ){
        this._siguiente = newSiguiente;
    }

    get anterior(){
        return this._anterior;
    }

    set anterior( newAnterior ){
        this._anterior = newAnterior;
    }

    atender(){
        this._ciclo--;
    }

    to_string(){
        return "Nombre: "+ this._nombre + ", Ciclos: " + this._ciclo;
    }
    
}