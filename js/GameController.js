class GameController{
    constructor(){
        this.bgMusic = document.createElement('audio');
        document.body.appendChild(this.bgMusic);
        this.bgMusic.src = 'music/bgMusic.mp3';
        this.bgMusic.loop = 'true';
            
        this.data_json = localStorage.getItem('snakeMusic');
        this.data = true;
        if (this.data_json != null)
            this.data = JSON.parse(this.data_json);
        if (this.data){
            console.log(1);
            this.bgMusic.addEventListener('canplay', this.bgMusic.play(), false);
        }

        this.SCREEN_WIDTH = window.innerWidth;
        this.SCREEN_HEIGHT = window.innerHeight - 0.1;

        this.openScene('s');
    }

    openScene(sceneName){
        if (sceneName == 's'){
            if (this.playController != null){
                this.playController.canvas = null;
                this.playController = null;
            }
            this.startController = new StartController(this);
        }
        else {
            this.startController.name = null;
            this.startController.playBtn = null;
            this.startController.score = null;
            this.startController.settingBtn = null;
            this.startController.settingDialog = null;
            this.startController = null;
            this.playController = new PlayController(this);
        }
    }
}

var g = new GameController();