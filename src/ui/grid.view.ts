import { Icon } from "../facades/icon.js";
import { Grid } from "../logic/entities/grid.js";
import { Game } from "../logic/game.js";

// Dessin de la grille
export class GridView {

    readonly grid: Grid;
    readonly cells: HTMLElement[][] = [];

    constructor(grid: Grid) {
        this.grid = grid;
    }

    draw() {

        // Création d'une grille  à l'aide de listes imbriquées
        const htmlMain = document.getElementById("ground")!;
        const htmlGrid = document.createElement("ul")!;
        htmlGrid.className = "ground_grid";
        let w = this.grid.width;
        let h = this.grid.height;

        for (let y = 0; y < h; y++) {
            this.cells.push([]);

            // Dessin d'une ligne
            const htmlRow = document.createElement("li");
            const htmlCells = document.createElement("ul");
            htmlRow.className = "ground_row";
            htmlRow.appendChild(htmlCells);
            htmlGrid.appendChild(htmlRow);

            for (let x = 0; x < w; x++) {
                // Dessin d'une cellule
                const cell = this.grid.cells[y][x];
                const htmlCell = document.createElement("li");
                htmlCell.classList.add("ground_cell", "mask");
                htmlCell.innerHTML = Icon.of(cell);
                htmlCell.onclick = () => Game.INSTANCE.play(cell);
                htmlCells.appendChild(htmlCell);
                this.cells[y].push(htmlCell);
            }
        }

        // Abonnement
        Game.INSTANCE.onHit.listen(cell => this.cells[cell.y][cell.x].classList.remove("mask"));
        Game.INSTANCE.onChange.listen(cell => this.cells[cell.y][cell.x].innerHTML = Icon.of(cell));

        // Insertion du tableau dans la page
        htmlMain.appendChild(htmlGrid);
    }
}
