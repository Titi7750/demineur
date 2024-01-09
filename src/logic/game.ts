import { Popup } from "../facades/popup.js";
import { Subject } from "../helpers/subject.js";
import { Cell } from "./entities/cell.js";

export class Game {

    // Singleton
    public static INSTANCE: Game = new Game();
    private constructor() { }

    // Slots de notifications
    onHit = new Subject<Cell>();
    onChange = new Subject<Cell>();
    onTic = new Subject<void>();

    // Démarrage du jeu
    start() {
        setInterval(() => this.onTic.raise(), 1000);
    }

    // Gestion d'un clic sur une cellule
    play(cell: Cell) {
        if (cell.hit)
            return;

        cell.hit = true;
        this.onHit.raise(cell);
        if (cell.bomb) {
            Popup.INSTANCE.lose();
        } else {
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
