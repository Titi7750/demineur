import { GridBuilder } from "../../helpers/grid.builder.js";
import { Game } from "../game.js";
export class Grid {
    // Nombre de cellules saines non découvertes
    get remaining() {
        let n = 0;
        for (let row of this.cells)
            for (let cell of row)
                if (!cell.bomb && !cell.hit)
                    n += 1;
        return n;
    }
    // Création d'une grille
    constructor(width, height, density) {
        this.cells = [];
        this.width = width;
        this.height = height;
        const builder = new GridBuilder(this);
        builder.width = width;
        builder.height = height;
        builder.density = density;
        this.cells = builder.build();
    }
    // Explore le voisinage d'une cellule
    explore(cell, visit) {
        const xmin = Math.max(cell.x - 1, 0);
        const xmax = Math.min(cell.x + 1, this.width - 1);
        const ymin = Math.max(cell.y - 1, 0);
        const ymax = Math.min(cell.y + 1, this.height - 1);
        for (let x = xmin; x <= xmax; x++)
            for (let y = ymin; y <= ymax; y++)
                if (x != cell.x || y != cell.y)
                    visit(this.cells[y][x]);
    }
    swap(cell1, cell2) {
        const item1 = cell1.item;
        const item2 = cell2.item;
        cell2.item = item1;
        cell1.item = item2;
        Game.INSTANCE.onChange.raise(cell1);
        Game.INSTANCE.onChange.raise(cell2);
    }
}
