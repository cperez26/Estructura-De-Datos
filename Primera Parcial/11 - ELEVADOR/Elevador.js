class Elevador {
    constructor( capacidad, pisosTotales ){
        this._pisoActual = 1;
        this._estadoPuerta = true;
        this._capacidad = capacidad;
        this._pisosTotales = pisosTotales;
    }

    abrirPuerta(){
        if( !this._estadoPuerta ){
            this._estadoPuerta = true;
        }
    }

    cerrarPuerta(){
        if( this._estadoPuerta ){
            this._estadoPuerta = false;
        }
    }

    _subir(){
        if (!this._estadoPuerta && this._pisoActual < this._pisosTotales) {
            this._pisoActual++;
        }
    }

    _bajar(){
        if (!this._estadoPuerta && this._pisoActual > 0) {
            this._pisoActual--;
        }
    }

    get pisoActual(){
        return this._pisoActual;
    }

    get estadoPuerta(){
        return "Abierta" ? "Cerrada" : this._estadoPuerta;
    }

    get capacidad(){
        return this._capacidad;
    }
    
    get pisosTotales(){
        return this._pisosTotales;
	}
	
	moverse( pisoDestino ){
        
        if(pisoDestino <= this._pisosTotales && pisoDestino >= 0 ){
            if (this._pisoActual < pisoDestino) {

            this.cerrarPuerta();
            while (this._pisoActual < pisoDestino) {
                console.log( this.toString() );
                this._subir();

            }
                this.abrirPuerta();
            }else{

                this.cerrarPuerta();
                while (this._pisoActual > pisoDestino) {
                    console.log( this.toString() );
                    this._bajar();
                }
                this.abrirPuerta();
            }
        }
        console.log( this.toString() );
    }
    
    toString(){
        return `Elevador con: ${ this._pisosTotales } pisos; Con una capacidad de ${ this._capacidad } Kg; Se encuentra actualmente en el piso: ${ this._pisoActual }`;
    }

}


let elevador = new Elevador( 400, 6 );
elevador.moverse(6);
elevador.moverse(1);