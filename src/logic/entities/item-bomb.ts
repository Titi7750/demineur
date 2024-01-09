import { EIcon } from "../enums/e-icon.js";
import { EItem } from "../enums/e-item.js";
import { Item } from "./item.js";

export class ItemBomb extends Item {
    get type(): EItem {
        return EItem.Bomb;
    }

    get icon(): EIcon {
        return EIcon.Bomb;
    }
}