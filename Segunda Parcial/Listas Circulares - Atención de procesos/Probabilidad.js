export default class Probabilidad {
    constructor( porcentage = 50 ){
        this._porcentage = porcentage;
    }

    resultado(){
        return this.generar_aleatorio(0, 100) <= this._porcentage;
    }

    generar_aleatorio(min, max){
        return Math.trunc( Math.random() * (max-min)+min)+1;
    }
}