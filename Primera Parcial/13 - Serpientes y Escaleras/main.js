class Ruleta{
    constructor(resultados = 0){
        this._resultados = resultados;
        this._contador = [1,2,3,4,5,6,7];
        
    }

    get resultados(){
        return this._resultados;
    }
    set resultados(resultados){
        this._resultados = resultados;
    }

    lanzar(){
        this._resultados = Math.trunc(Math.random() * (this._contador[6] - this._contador[0]) + this._contador[0]);
         return this._resultados;
     }

}

class Jugador{
    constructor(posicion = 0){
        this._posicion = posicion;
        this._ruleta = new Ruleta();
    }

    get posicion(){ return this._posicion; }

    Escalera(){
        let resultados = this._ruleta.lanzar();
        this._posicion = (this._posicion + resultados) + resultados;
        return this._posicion;
    }    

    Serpiente(){
        let resultados = this._ruleta.lanzar();
        this._posicion = (this._posicion - resultados) - resultados;
        return this._posicion;
    }

    Avanzar(){
        let resultados = this._ruleta.lanzar();
        this._posicion = this._posicion + resultados;
        return this._posicion;
    }
}


class Tabla{
    constructor(){
        let casillas = new Array(100);
        casillas.fill(" ");
        casillas[6]=1;
        casillas[11]=1;
        casillas[24]=1;
        casillas[39]=1;
        casillas[44]=1;
        casillas[52]=1;
        casillas[68]=1;
        casillas[79]=1;

        casillas[99]=0;
        casillas[87]=0;
        casillas[72]=0;
        casillas[64]=0;
        casillas[58]=0;
        casillas[46]=0;
        casillas[31]=0;
        casillas[20]=0;

        console.log(casillas)

        let jugador1 = new Jugador();
        let jugador2 = new Jugador();
        do {
        console.log("Jugador1: " + jugador1.Avanzar());
        console.log("Jugador2: "+ jugador2.Avanzar());

        //jugador1
        if (casillas[jugador1.posicion] === 1) {
            jugador1.Escalera();
            console.log("Caiste en una Escalera: " + jugador1.posicion);            
        }
        if (casillas[jugador1.posicion] === 0) {
            jugador1.Serpiente();
            console.log("Caiste en una Serpiente: " + jugador1.posicion);
        }
        //Jugador2
        if (casillas[jugador2.posicion] === 1) {
            jugador2.Escalera();
            console.log("Caiste en una Escalera: " + jugador2.posicion);            
        }
        if (casillas[jugador2.posicion] === 0) {
            jugador2.Serpiente();
            console.log("Caieste en una Serpiente: " + jugador2.posicion);
        }

        } while (jugador1.posicion <100 && jugador2.posicion <100);

        if (jugador1.posicion > jugador2.posicion) {
            return console.log("Jugador1 wins");
        } else{
            return console.log("Jugador2 wins");
        }
    }
}

let play = new Tabla();