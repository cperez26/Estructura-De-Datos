import Runner from "./correr.js"

export default class Turtle extends Runner {
    constructor(position, dice) {
        super(position, dice);
    }

    move() {
        let number = this._dice.roll();
        if (number <= 50) {
            this._position += 3;
        } else if (number <= 70) {
            this._position -= 6;
        } else {
            this._position += 1;
        }
    }
}