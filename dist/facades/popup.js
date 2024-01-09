export class Popup {
    constructor() { }
    // Popup de fin de partie
    win() {
        this.show("win");
    }
    lose() {
        this.show("lose");
    }
    show(popup) {
        const div = document.getElementById(popup);
        div === null || div === void 0 ? void 0 : div.classList.remove("hidden");
    }
}
// Singleton
Popup.INSTANCE = new Popup();
