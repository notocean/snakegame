class PlayBtn{
    constructor(startController){
        this.startController = startController;
    }

    display(){
        let width = this.startController.SCREEN_WIDTH / 10;
        let height = this.startController.SCREEN_HEIGHT / 16;
        this.btn = document.createElement('button');
        document.body.appendChild(this.btn);
        this.btn.innerHTML = "PLAY";
        this.btn.style.fontSize = width / 5 + "px";
        this.btn.style.fontWeight = "bold";
        this.btn.style.boxSizing = "border-box";
        this.btn.style.border = "double";
        this.btn.style.borderWidth = width / 30 + "px";
        this.btn.style.position = "absolute";
        this.btn.style.borderRadius = this.startController.SCREEN_HEIGHT / 40 + "px";
        this.btn.style.height = height + "px";
        this.btn.style.width = width + "px";
        this.btn.style.left = this.startController.SCREEN_WIDTH / 2 - width / 2 + "px";
        this.btn.style.top = this.startController.SCREEN_HEIGHT / 2 + height * 3 + "px";

        this.btn.addEventListener("click", () => {
            this.startController.gameController.openScene('p');
        });

        this.btn.addEventListener("click", () => {
            if (this.startController.settingDialog.isOpen){
                this.startController.settingDialog.dialog.style.zIndex = '-1';
                this.startController.settingDialog.isOpen = false;
            }
        });
    }
}