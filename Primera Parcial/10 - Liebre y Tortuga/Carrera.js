export default class Race {
    constructor() {
        this._raceFinished = false;
        this._champion = "";
    }

    get raceFinished() {
        return this._raceFinished;
    }

    set raceFinished(value) {
        this._raceFinished = value;
    }

    startRace(hare, turtle) {
        do {
            hare.move();
            turtle.move();
            console.log(`Hare's position: ${hare.position}`);
            console.log(`Turtle's position: ${turtle.position}`);
        } while (this.checkStatus(hare.position, turtle.position) === false);

        return this.getChampion();
    }

    checkStatus(hareP, turtleP) {
        if(hareP >= 90) {
            this._raceFinished = true;
            this._champion = "hare";
            return this._raceFinished;
        } else if (turtleP >= 90) {
            this._raceFinished = true;
            this._champion = "turtle";
            return this._raceFinished;
        } else {
            return this._raceFinished;
        }
    } 

    getChampion() {
        return `The champion of the race is the ${this._champion}!`;
    }
}