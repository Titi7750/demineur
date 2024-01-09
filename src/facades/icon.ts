import { Cell } from "../logic/entities/cell.js";
import { EIcon } from "../logic/enums/e-icon.js";

export class Icon {

    public static of(cell: Cell): string {
        switch (cell.icon) {
            case EIcon.Bomb:
                return '<span class="icon material-symbols-outlined">bomb</span>';
            case EIcon.Rabbit:
                return '<span class="icon material-symbols-outlined">cruelty_free</span>';
            default:
                if (cell.hit) {
                    let n = cell.risk;
                    return n > 0 ? `${n}` : "";
                }
                return "";
        }
    }
}