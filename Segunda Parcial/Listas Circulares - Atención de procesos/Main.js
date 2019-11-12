import Proceso from "./Lista.js";
import Probabilidad from "./Probabilidad.js";

let prob = new Probabilidad(39);

class Procesador {
    constructor(){
        this._procesos = new Lista();
        this._ciclosVacios = 0;
        this._totalProcesos = 0;
        this._procesosT = 0;
    }

    get procesos(){
        return this._procesos;
    }

    get procesosT(){
        return this._procesosT;
    }

    get _totalProcesos(){
        return this._totalProcesos;
    }

    get ciclosVacios(){
        return this._ciclosVacios;
    }

    procesosEspera(){
        return this._totalProcesos - this._procesosT;
    }

    _atenderCiclo(ciclo){
        if ( this._procesos.inicio !== null ) {
            console.log(this._procesos.inicio.to_string());
            this._procesos.inicio.atender();

            if ( this._procesos.inicio.ciclos === 0 ) {
                console.log(this._procesos.inicio.to_string(), "--------------------");                    
                this._procesos.eliminar(this._procesos.inicio.nombre);
                this._procesosT++;
            }
            
        }else{
            this._ciclosVacios++;
            console.log("vacio "+ciclo);
        }

        if ( this._procesos.inicio !== null && this._procesos.inicio.siguiente !== null) {
            this._procesos.inicio = this._procesos.inicio.siguiente;
        }else{
            console.log("No hay un siguiente aun");
            
        }
    }

    iniciar( ciclosLimite ){
        let ciclo = 0;
        while (ciclo < ciclosLimite) {
            this._atenderCiclo(ciclo);
               
            if ( prob.resultado() ) {
                this._procesos_totales++;
                let nuevo_proceso = new Probabilidad( "P"+this._procesos_totales, prob.generar_aleatorio(3, 14) );
                this._procesos.agregar_inicio( nuevo_proceso );
                console.log(nuevo_proceso.nombre, nuevo_proceso.ciclos); 
            }   

            ciclo++;
        }
    }

    ciclosPendientes(){
        let ciclos = 0;
        let tmp = this._procesos.inicio;
        do {
            ciclos += tmp.ciclos;
            tmp = tmp.siguiente;

        } while (tmp !== this._procesos.inicio );
        
        return ciclos;
    }
}

let procesador = new Procesador();
procesador.iniciar(300);

console.log( procesador._procesos.inicio );

console.log( "CiclosVacios: "+ procesador.ciclosVacios);
console.log( "Procesos Totales: " + procesador._totalProcesos);
console.log( "Procesos Termindaos: " + procesador.procesosT);
console.log( "Procesos no Terminados: " + procesador.procesosEspera());
console.log( "Ciclos Pendientes: " + procesador.ciclosPendientes());