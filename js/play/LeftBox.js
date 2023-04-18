class LeftBox{
    constructor(playController){
        this.playController = playController;

        //khởi tạo tường
        this.left = this.playController.screen.left;
        this.right = this.left + this.playController.SCREEN_WIDTH / 30;
    }

    update(){
        //update tường
        this.left = this.playController.screen.left;
        this.right += this.playController.BLOCK_SPEED;
        if (this.right - this.left < this.playController.SCREEN_WIDTH / 30)
            this.right = this.left + this.playController.SCREEN_WIDTH / 30;
    }

    draw(){
        //vẽ tường
        this.playController.ctx.beginPath();
        this.playController.ctx.fillStyle = 'black';
        this.playController.ctx.fillRect(0, 0, this.right - this.left, this.playController.SCREEN_HEIGHT);
    }
}