export default class Proceso {
    constructor( nombre, ciclo = 0 ){
        this._nombre = nombre;
        this._ciclo = ciclo;
        this._siguiente = null;
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

    set siguiente( nuevo_siguiente ){
        this._siguiente = nuevo_siguiente;
    }

    atender(){
        this._ciclo--;
    }

    to_string(){
        return this._nombre
    }
    
}