class SettingBtn{
    constructor(startController){
        this.startController = startController;
    }

    display(){
        let width = this.startController.SCREEN_HEIGHT / 8;
        let height = this.startController.SCREEN_HEIGHT / 8;
        this.option = document.createElement('button');
        document.body.appendChild(this.option);
        this.option.style.position = "absolute";
        this.option.style.borderStyle = "double";
        this.option.style.borderRadius = width / 4 + "px";
        this.option.style.height = height + "px";
        this.option.style.width = width + "px";
        this.option.style.borderWidth = width / 10 + "px";
        this.option.style.left = this.startController.SCREEN_WIDTH - this.startController.SCREEN_HEIGHT / 8 - this.startController.SCREEN_HEIGHT / 40 + "px";
        this.option.style.top = this.startController.SCREEN_HEIGHT / 30 + "px";
        this.option.innerHTML = "<img src=\"img/setting.png\" width= \'" + this.startController.SCREEN_HEIGHT / 12 + "px\'" + " height=\'" + this.startController.SCREEN_HEIGHT / 12 + "px\'>";

        this.option.addEventListener("click", () => {
            if (this.startController.settingDialog.isOpen){
                this.startController.settingDialog.dialog.style.zIndex = '-1';
                this.startController.settingDialog.isOpen = false;
            }
            else {
                this.startController.settingDialog.dialog.style.zIndex = '0';
                this.startController.settingDialog.isOpen = true;
            }
        });
    }
}