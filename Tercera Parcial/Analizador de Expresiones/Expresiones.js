import Producto from "./Producto.js";

export default class Expresion {
    constructor() {
        this._root = null;
        this._nodos = null;
    }

    resolver(string) {
        let atributos = new Array();

        for (let i = 0; i < string.length; i++) {
            atributos.push(new Producto(string.charAt(i)));
        }
        for (let i = 1; i < atributos.length - 1; i++) {
            if (atributos[i].value === '*' || atributos[i].value === '/') {
                atributos[i].izquierda = atributos[i - 1];
                atributos[i].derecha = atributos[i + 1];
                atributos.splice(i - 1, 1);
                atributos.splice(i, 1);
                i--;
            }
        }

        for (let i = 1; i < atributos.length - 1; i++) {
            if (atributos[i].value === '+' || atributos[i].value === '-') {
                atributos[i].izquierda = atributos[i - 1];
                atributos[i].derecha = atributos[i + 1];
                atributos.splice(i - 1, 1);
                atributos.splice(i, 1);
                i--;
            }
        }


        this._stack = new Array();
        this._preOrderRecursive(atributos[0]);


        let stack = new Array();
        let aux = 0;
        for (let i = this._stack.length - 1; i >= 0; i--) {
            switch (this._stack[i]) {
                case '/':
                    aux = stack.pop();
                    aux = aux/stack.pop();
                    stack.push(aux);
                    break;
                case '*':
                        aux = stack.pop();
                        aux = aux*stack.pop();
                        stack.push(aux);
                    break;
                case '-':
                        aux = stack.pop();
                        aux = aux-stack.pop();
                        stack.push(aux);
                    break;
                case '+':
                        aux = stack.pop();
                        aux = aux+stack.pop();
                        stack.push(aux);
                    break;
                default:
                    stack.push(Number(this._stack[i]));
            }
        }
        return stack[0];
    }

    _preOrderRecursive(root) {
        if (root != null) {
            this._stack.push(root.value);
            this._preOrderRecursive(root.izquierda);
            this._preOrderRecursive(root.derecha);
        }
    }
}