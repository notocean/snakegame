class StartController{
    constructor(gameController){
        this.gameController = gameController;
        //khởi tạo các hằng
        this.SCREEN_WIDTH = this.gameController.SCREEN_WIDTH;
        this.SCREEN_HEIGHT = this.gameController.SCREEN_HEIGHT;
        //khởi tạo canvas
        this.canvas = document.createElement('canvas');
        this.canvas.width = this.SCREEN_WIDTH;
        this.canvas.height = this.SCREEN_HEIGHT;
        this.canvas.style.position = 'absolute';
        this.canvas.style.left = '0px';
        this.canvas.style.top = '0px';
        //tạo context để vẽ
        this.ctx = this.canvas.getContext('2d');
        document.body.appendChild(this.canvas);

        this.bgStart = new BgStart(this);
        this.name = new Name(this);
        this.score = new Score(this);
        this.settingDialog = new SettingDialog(this);
        this.playBtn = new PlayBtn(this);
        this.settingBtn = new SettingBtn(this);

        this.ctx.fillStyle = '#f2f2f2';
        this.ctx.fillRect(0, 0, this.SCREEN_WIDTH, this.SCREEN_HEIGHT);
        
        this.displayStartScene();
    }

    displayStartScene(){
        this.bgStart.display();
        this.name.display();
        this.score.display();
        this.playBtn.display();
        this.settingBtn.display();
        this.settingDialog.display();
    }
}

//var s = new StartController();