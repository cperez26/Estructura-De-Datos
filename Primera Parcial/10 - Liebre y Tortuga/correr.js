  
import Dice from "./dice.js";

export default class Runner {
    constructor(position=0) {
        this._position = position;
        this._dice = new Dice();
    }

    get position() {
        return this._position;
    }

    set position(value) {
        this._position = value;
    }
}