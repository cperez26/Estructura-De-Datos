export default class Nodo {
    constructor(){
        this._principal = null;
    }

    dequeue(){
        let aux = this._principal;
        while(aux !== null && aux.prioridad === 0)
        aux = aux.siguiente;

        if(aux !== null){
            aux.anterior.siguiente = aux.siguiente;
            if(aux.siguiente !== null)
            aux.siguiente.anterior = aux.anterior;
            return aux;
        }
        else{
            aux = this._principal;
            this._principal.siguiente.anterior = null;
            this._principal = this._principal.siguiente;
            return aux;
        }
    }
}