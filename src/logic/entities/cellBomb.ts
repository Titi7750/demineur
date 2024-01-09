import { EIcon } from "../enums/e-icon.js";
import { EItem } from "../enums/e-item.js";
import { Cell } from "./cell.js";
import { Grid } from "./grid.js";

export class CellBomb extends Cell {
    constructor(grid: Grid, x: number, y: number) {
        super(grid, x, y, EItem.Bomb);
    }

    get icon(): EIcon {
        return EIcon.Bomb;
    }
}