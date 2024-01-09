export class Popup {

    // Singleton
    public static readonly INSTANCE: Popup = new Popup();
    private constructor() { }

    // Popup de fin de partie
    win() {
        this.show("win");
    }

    lose() {
        this.show("lose");
    }

    show(popup: string) {
        const div = document.getElementById(popup);
        div?.classList.remove("hidden");
    }
}