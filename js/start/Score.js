class Score{
    constructor(startController){
        this.startController = startController;

        this.data_json = localStorage.getItem('snakeScore');
        this.data = 0;
        if (this.data_json != null)
            this.data = JSON.parse(this.data_json);
        
        this.maxScore = this.data;
    }

    display(){
        let width = this.startController.SCREEN_WIDTH / 12;
        let height = this.startController.SCREEN_HEIGHT / 16;
        this.score = document.createElement('button');
        document.body.appendChild(this.score);
        this.score.innerHTML = this.data;
        this.score.style.fontSize = width / 5 + "px";
        this.score.style.fontWeight = "bold";
        this.score.style.boxSizing = "border-box";
        this.score.style.border = "double";
        this.score.style.borderWidth = width / 30 + "px";
        this.score.style.position = "absolute";
        this.score.style.borderRadius = this.startController.SCREEN_HEIGHT / 40 + "px";
        this.score.style.height = height + "px";
        this.score.style.width = width + "px";
        this.score.style.left = this.startController.SCREEN_WIDTH / 2 - width / 2 + "px";
        this.score.style.top = this.startController.SCREEN_HEIGHT / 2 + height * 1.5 + "px";

        this.score.addEventListener("click", () => {
            if (this.startController.settingDialog.isOpen){
                this.startController.settingDialog.dialog.style.zIndex = '-1';
                this.startController.settingDialog.isOpen = false;
            }
        });
    }
}