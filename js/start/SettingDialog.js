class SettingDialog{
    constructor(startController){
        this.startController = startController;

        this.isOpen = false;

        this.dialog = document.createElement('div');

        this.music = new Music(this);
        this.color = new Color(this);
        this.level = new Level(this);
    }

    display(){
        document.body.appendChild(this.dialog);
        this.dialog.style.display = "block";
        this.dialog.style.position = "absolute";
        this.dialog.style.boxSizing = "border-box";
        this.dialog.style.backgroundColor = "white";
        this.dialog.style.borderWidth = this.startController.SCREEN_HEIGHT / 80 + "px";
        this.dialog.style.borderRadius = this.startController.SCREEN_HEIGHT / 40 + "px";
        this.dialog.style.borderStyle = "double";
        this.dialog.style.height = this.startController.SCREEN_HEIGHT / 10 * 3 + "px";
        this.dialog.style.width = this.startController.SCREEN_WIDTH / 4 + "px";
        this.dialog.style.left = this.startController.SCREEN_WIDTH - this.startController.SCREEN_WIDTH / 4 - this.startController.SCREEN_HEIGHT / 30 + "px";
        this.dialog.style.top = this.startController.SCREEN_HEIGHT / 6 + "px";

        this.music.display();
        this.level.display();
        this.color.display();

        this.dialog.style.zIndex = '-1';
    }
}