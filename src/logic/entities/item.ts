import { EIcon } from "../enums/e-icon.js";
import { EItem } from "../enums/e-item.js";
import { Cell } from "./cell.js";

export abstract class Item {
    abstract get type(): EItem;
    abstract get icon(): EIcon;

    wakeUp(cell: Cell) { }
}