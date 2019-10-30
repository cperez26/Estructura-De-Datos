export default class Nodo{
    constructor(){
        this._inicio = null;
    }

    AddOrdenadoD(nodo, posicion){
        if(this.buscar(nodo.codigo) == -1){
            if(this._PosicionValida(posicion)){
                let auxiliar = this._inicio;

                if(posicion === 0)
                posicion = this._totalNodos() + 1;

                if(posicion != 1){
                    while(posicion > 2){
                        auxiliar = auxiliar.siguiente;
                        posicion--;
                    }

                    nodo.siguiente = auxiliar.siguiente;
                    auxiliar.siguiente = nodo;
                }

                else{
                    nodo.siguiente = this._inicio;
                    this._inicio = nodo;
                }

                return true;
            }

            else{
                return false;
            }
        }

        else{
            return false;
        }
    }
}
