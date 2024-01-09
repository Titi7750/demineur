import { EIcon } from "../enums/e-icon.js";
import { EItem } from "../enums/e-item.js";
import { Item } from "./item.js";
export class ItemBomb extends Item {
    get type() {
        return EItem.Bomb;
    }
    get icon() {
        return EIcon.Bomb;
    }
}
