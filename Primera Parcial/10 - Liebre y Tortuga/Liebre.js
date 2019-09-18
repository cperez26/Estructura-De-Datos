import Runner from "./correr.js";

export default class Hare extends Runner {
    constructor(position, dice) {
        super(position, dice);
    }

    move() {
        let number = this._dice.roll();
        if (number <= 20) {
            this._position += 9;
        } else if (number <= 30) {
            this._position -= 12;
        } else if (number <= 65) {
            this._position += 1;
        } else if (number <= 80) {
            this._position -= 2;
        }
    }
}