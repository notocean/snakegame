class ScoreGame{
    constructor(playController){
        this.playController = playController;

        this.score = 0;

        this.data_json = localStorage.getItem('snakeScore');
        this.data = 0;
        if (this.data_json != null)
            this.data = JSON.parse(this.data_json);
    }

    update(){
        if (this.score > this.data){
            this.data = this.score;
            this.data_json = JSON.stringify(this.data);
            localStorage.setItem('snakeScore', this.data_json);
        }
    }

    draw(){
        this.playController.ctx.font = this.playController.SCREEN_HEIGHT / 15 + "px Arial";
        this.playController.ctx.fillStyle = 'white';
        this.playController.ctx.textAlign = 'center';
        this.playController.ctx.fillText(this.score.toString(), this.playController.SCREEN_WIDTH / 2, this.playController.SCREEN_HEIGHT / 15);
    }
}