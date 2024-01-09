import { Popup } from "../facades/popup.js";
import { Subject } from "../helpers/subject.js";
export class Game {
    constructor() {
        // Slots de notifications
        this.onHit = new Subject();
        this.onChange = new Subject();
        this.onTic = new Subject();
    }
    // Démarrage du jeu
    start() {
        setInterval(() => this.onTic.raise(), 1000);
    }
    // Gestion d'un clic sur une cellule
    play(cell) {
        if (cell.hit)
            return;
        cell.hit = true;
        this.onHit.raise(cell);
        if (cell.bomb) {
            Popup.INSTANCE.lose();
        }
        else {
            let n = cell.risk;
            this.onChange.raise(cell);
            let grid = cell.grid;
            if (grid.remaining == 0) {
                Popup.INSTANCE.win();
                return;
            }
            if (n === 0)
                grid.explore(cell, near => this.play(near));
        }
    }
}
// Singleton
Game.INSTANCE = new Game();
