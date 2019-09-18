export default class Dice {
    roll() {
        return Math.floor((Math.random() * 100 + 1));
    }
}