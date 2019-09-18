class Ruta{
    constructor(nombre, tiempoD){

        this._nombre = nombre;
        this._tiempoD= tiempoD;
    }

    get Nombre(){
        return this._nombre;
    }

    get tiempoD(){
        return this._tiempoD;
    }
}

class Base{
    constructor(nombreB, referencia,Latitud, longitud){

        this._nombreB = nombreB;
        this._referencia = referencia;
        this._latitud = [99.99, 11,11];
        this._longitud = [99.99,11.11];
    }

    get Nombre(){
        return this._NonbreB;
    }

    get Referencia(){
        return this._referencia;
    }

    get Latitud(){
        this._latitud = Math.trunc(Math.random() * (this._latitud[99.99] - this._latitud[0]) + this._latitud[0]);
        return this._latitud;
    }
    
    get Longitud(){
        this.longitud = Math.trunc(Math.random() * (this._longitud[99.99] - this._longitud[0]) + this._longitud[0]);
        return this._longitud;
    }

    Base1 = new Base;
    Base2 = new Base;
    Base3 = new Base;
    Base4 = new Base;
    Base5 = new Base;
}

class salida{
    constructor(salida, baseI, horaI, finT){
        this._salida = salida;
        this._baseI = baseI;
        this._horaI = horaI;
        this._finT = finT;
        this._numero = [1,2,3,4,5,6,7,8,9,10];
    }

    get salida(){
        salida = new Ruta;
        this._salida + salida;
        return this._salida;
    }

    get baseI(){
        this._baseI = new Base;
        return this._baseI;
    }

    get horaI(){
        return this._horaI;
    }

    get finT(){
        return this._finT;
    }

    numero(){
        this._numero = Math.trunc(Math.random() * (this._numero[11] - this._numero[0]) + this._numero[0]);
        return this._numero;
    }
}
