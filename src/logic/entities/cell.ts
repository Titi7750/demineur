import { EIcon } from "../enums/e-icon.js";
import { EItem } from "../enums/e-item.js";
import { Game } from "../game.js";
import { Grid } from "./grid.js";
import { Item } from "./item.js";

export class Cell {
    readonly grid: Grid;
    readonly x: number;
    readonly y: number;
    item?: Item;
    hit = false;

    constructor(grid: Grid, x: number, y: number, item?: EItem) {
        this.grid = grid;
        this.x = x;
        this.y = y;
        Game.INSTANCE.onTic.listen(() => this.item?.wakeUp(this));
    }

    get icon(): EIcon {
        return this.item?.icon ?? EIcon._;
    }

    get bomb(): boolean {
        return this.item?.type == EItem.Bomb;
    }

    get ground(): boolean {
        return this.item == null;
    }

    // Gestion d'un clic d'une cellule
    get risk(): number {
        let n = 0;
        this.grid.explore(this, (near) => n += near.bomb ? 1 : 0);
        return n;
    }
}