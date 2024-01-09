import { Grid } from "./logic/entities/grid.js";
import { Game } from "./logic/game.js";
import { GridView } from "./ui/grid.view.js";

window.addEventListener("load", (_) => {
    let grid = new Grid(20, 20, 0.1);
    let view = new GridView(grid);
    view.draw();
    Game.INSTANCE.start();
});