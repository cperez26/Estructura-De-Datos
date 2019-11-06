export default class Probabilidad {
    constructor( porcentage = 50 ){
        this._porcentage = porcentage;
        this._opciones = null;
    }

    resultado(){
        return this.generar_aleatorio(100, 0) <= this._porcentage;
    }

    generar_aleatorio(min, max){
        return Math.trunc( Math.random() * (max-min)+min)+1;
    }
}