export default class Producto{
    constructor(codigo, nombre, precio, cantidad, descripcion){
        this._codigo = codigo;
        this._nombre = nombre;
        this._precio = precio;
        this._cantidad = cantidad;
        this._descripcion = descripcion;
        this._left = null;
        this._right = null;
    }

    get codigo(){
        return this._codigo;
    }

    get nombre(){
        return this._nombre;
    }

    get precio(){
        return this._precio;
    }

    get cantidad(){
        return this._cantidad;
    }

    get descripcion(){
        return this._descripcion;
    }

    get left(){
        return this._left;
    }

    get right(){
        return this._right
    }

    set left(left){
        this._left = left;
    }
    
    set right(right){
        this._right = right;
    }

    toString(){
        return 'Código: ' + this._codigo + '' + 'Nombre: ' + this._nombre + '' + 'Precio: $' + this._precio + '' +  'Cantidad: ' + this._cantidad + '' + 'Descripción: ' + this._descripcion;
    }
}