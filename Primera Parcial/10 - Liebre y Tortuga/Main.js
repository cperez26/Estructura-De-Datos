import Hare from "./Liebre.js";
import Turtle from "./Tortuga.js";
import Race from "./Carrera";

class Main {
    constructor() {
        this.makeRace();
    }

    makeRace() {
        let hare = new Hare(),
            turtle = new Turtle(),
            race = new Race();

        console.log(race.startRace(hare, turtle));
    }
}

let m = new Main(); 