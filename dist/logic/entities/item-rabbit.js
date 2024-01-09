import { EIcon } from "../enums/e-icon.js";
import { EItem } from "../enums/e-item.js";
import { Item } from "./item.js";
export class ItemRabbit extends Item {
    get type() {
        return EItem.Rabbit;
    }
    get icon() {
        return EIcon.Rabbit;
    }
    wakeUp(cell) {
        if (Math.random() < 0.2)
            this.move(cell);
    }
    move(cell) {
        const grid = cell.grid;
        const moves = [];
        grid.explore(cell, near => {
            if (!near.bomb)
                moves.push(near);
        });
        if (moves.length == 0)
            return;
        const i = Math.floor(Math.random() * moves.length);
        grid.swap(cell, moves[i]);
    }
}
