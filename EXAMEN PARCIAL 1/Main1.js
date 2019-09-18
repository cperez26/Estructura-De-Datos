class Amigos{
    constructor(){
        this._limite = 3000;
        this.numerosA = [];
}

Encontrar(){
    let numeros;
    for(var i = 1; i <= this._limite; i++) {
        numeros = 0;
        for(var a = 1; a < i; a++) {
            if(i%a === 0){
            numeros = numeros + a;
            }
        }

    this.numerosA[i] = numeros;
}
        for(var i = 1; i < this._limite; i++) {
            for(var a = 2; a < this._limite; a++){
                if(this.numerosA[i] === a){
                    if(this.numerosA[a] === i) {
                        if (i < a){

console.log("Los Numeros Amigos Son: " + i + " " + a);
                                        }
                                }
                        }
                    }
            }
    }
}

document.querySelector("#btn").addEventListener("click", ()=>{
    let A = new Amigos();
    A.Encontrar();
    });