import Proceso from "./Tabla.js";
import Fifo from "./Fifo.js";
import Probabilidad from "./Probabilidad.js";

let prob = new Probabilidad(39);

class Procesador {
    constructor( cicloLimite = 0 ){
        this._cicloLimite = cicloLimite;
        this._cola = null;
        this._totalProcesos = 0;
        this._procesosT = 0;
        this._ciclosVacios = 0;
    }

    get cola(){
        return this._cola;
    }

    get procesosT(){
        return this._procesosT;
    }

    get totalProcesos(){
        return this._totalProcesos;
    }

    get ciclosVacios(){
        return this._ciclosVacios;
    }

    procesosEspera(){
        return this._totalProcesos - this._procesosT;
    }

    iniciar(){
        this._cola = new Fifo()

        for (let ciclo = 0; ciclo < this._cicloLimite; ciclo++) {
            let primer_proceso = this._cola.peek();

            if ( primer_proceso !== null ) {                
                if ( primer_proceso.ciclos !== 0 ) {
                    //console.log("Ciclo "+ciclo+": ",  primer_proceso.nombre, primer_proceso.ciclos );
                    primer_proceso.atender();
                }else{
                    let proceso_atendido = this._cola.dequeue();
                    //console.log("Ciclo "+ciclo+": ",  proceso_atendido.nombre, proceso_atendido.ciclos );
                    this._procesos_terminados++;
                }
            }else{
                this._ciclos_vacios++;
                //console.log("vacio "+this._ciclos_vacios);
            }

            if ( prob.resultado() ) {
                this._totalProcesos++;           
                let nuevo_proceso = new Proceso( "P"+this._procesos_totales, prob.generar_aleatorio(14, 3));   
                //console.log(nuevo_proceso.ciclos);
                             
                this._cola.enqueue( nuevo_proceso );     
            }   
   
        }
    }

    pendientes(){
        let ciclos = 0;
        let tmp = this._cola.peek();
        console.log(tmp);
        while (tmp !== null) {
            ciclos += tmp.ciclos;
            tmp = tmp.siguiente;
        }
        return ciclos;
    }
}

let procesador = new Procesador(300);
procesador.iniciar();

console.log( "Ciclos Vacios: "+ procesador.ciclosVacios);
console.log( "Procesos Totales: " + procesador.totalProcesos);
console.log( "Procesos Terminados: " + procesador.procesosT);
console.log( "Procesos no Terminados: " + procesador.procesosEspera());
console.log( "Ciclos Pendientes: " + procesador.pendientes());