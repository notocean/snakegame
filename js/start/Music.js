class Music{
    constructor(settingDialog){
        this.settingDialog = settingDialog;

        this.isMute = false;

        this.dialog = this.settingDialog.dialog;

        this.data_json = localStorage.getItem('snakeMusic');
        this.data = true;
        if (this.data_json != null)
            this.data = JSON.parse(this.data_json);
    }

    display(){
        this.music = document.createElement('div');
        this.dialog.appendChild(this.music);
        this.music.innerHTML = "Music";
        this.music.style.boxSizing = "border-box";
        this.music.style.display = "block";
        this.music.style.height = "30%";
        this.music.style.width = "100%";
        this.music.style.fontSize = this.settingDialog.startController.SCREEN_WIDTH / 40 + "px";
        this.music.style.lineHeight = "150%";
        this.music.style.paddingLeft = "10px";
        this.music.style.top = "0px";

        this.musicIcon = document.createElement('button');
        this.music.appendChild(this.musicIcon);
        this.musicIcon.style.display = "inline-block";
        this.musicIcon.style.backgroundColor = "white";
        this.musicIcon.style.boxSizing = "border-box";
        this.musicIcon.style.float = "right";
        this.musicIcon.style.height = "100%";
        this.musicIcon.style.width = "18%";
        this.musicIcon.style.borderStyle = "none";
        this.musicIcon.style.marginRight = "50%";

        if (this.data)
            this.musicIcon.innerHTML = "<img src=\"img/music.png\" width= \'" + "100%\'" + " height=\'"  + "100%\'>";
        else this.musicIcon.innerHTML = "<img src=\"img/mutemusic.png\" width= \'" + "100%\'" + " height=\'"  + "100%\'>";

        this.musicIcon.addEventListener("click", () => {
            if (this.isMute){
                this.musicIcon.innerHTML = "<img src=\"img/music.png\" width= \'" + "100%\'" + " height=\'"  + "100%\'>";
                this.isMute = false;
                this.data = true;
                this.data_json = JSON.stringify(this.data);
                localStorage.setItem('snakeMusic', this.data_json);
            }
            else {
                this.musicIcon.innerHTML = "<img src=\"img/mutemusic.png\" width= \'" + "100%\'" + " height=\'"  + "100%\'>";
                this.isMute = true;
                this.data = false;
                this.data_json = JSON.stringify(this.data);
                localStorage.setItem('snakeMusic', this.data_json);
            }
        });
    }
}