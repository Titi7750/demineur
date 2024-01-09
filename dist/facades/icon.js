import { EIcon } from "../logic/enums/e-icon.js";
export class Icon {
    static of(cell) {
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
