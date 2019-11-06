export default class Fifo {
    constructor(){
        this._principal = null;
    }

    enqueue( newProceso ){        
        if ( this._principal === null ) {
            this._principal = newProceso;
        }else{
            let tmp = this._principal;
            while ( tmp.siguiente !== null ) {
                tmp = tmp.siguiente;
            }
            tmp.siguiente = newProceso;
        }
    }

    dequeue(){
        let tmp = this._principal;
        if ( this._principal !== null) {
            this._principal = this._principal.siguiente;
        }
        return tmp;
    }

    peek(){
        return this._principal;
    }
}