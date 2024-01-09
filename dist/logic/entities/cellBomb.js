import { EIcon } from "../enums/e-icon.js";
import { EItem } from "../enums/e-item.js";
import { Cell } from "./cell.js";
export class CellBomb extends Cell {
    constructor(grid, x, y) {
        super(grid, x, y, EItem.Bomb);
    }
    get icon() {
        return EIcon.Bomb;
    }
}
