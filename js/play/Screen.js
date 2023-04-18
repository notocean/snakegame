class Screen {
    constructor(playController){
        //nhận đối tượng playController truyền vào để truy cập các thuộc tính của playController
        this.playController = playController;
        
        this.top = 0;
        this.left = 0;

        this.bgGame = new BgGame(this.playController);

        this.scoreGame = new ScoreGame(this.playController);
    }

    update(){
        //cập nhật khung nhìn của người chơi
        //thuộc tính top và left dùng để xác định điểm trái trên của màn hình so với điểm trái trên của thế giới game
        this.top = this.playController.snake.y - (this.playController.SCREEN_HEIGHT / 2);
        this.left = this.playController.snake.x - (this.playController.SCREEN_WIDTH / 2);
        this.bgGame.update();
        
    }

    draw(){
        this.bgGame.draw();
        this.scoreGame.draw();
    }
}