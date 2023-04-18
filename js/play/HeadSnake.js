class HeadSnake{
    constructor(playController){
        this.playController = playController;
    }

    draw(pos, radian){
        //lưu lại trạng thái ctx
        this.playController.ctx.save();
        //di chuyển điểm trái trên của ctx đến giữa màn hình
        this.playController.ctx.translate(this.playController.SCREEN_WIDTH / 2, this.playController.SCREEN_HEIGHT / 2);
        //xoay ctx 1 góc, phải di chuyển vì ctx xoay theo điểm trái trên
        this.playController.ctx.rotate(radian + Math.PI / 2);
        //vẽ hình border
        this.playController.ctx.beginPath();
        this.playController.ctx.arc(
            0,
            0,
            this.playController.rSnake,
            0,
            Math.PI * 2
        );
        this.playController.ctx.fillStyle = 'black';
        this.playController.ctx.fill();
        //vẽ màu trắng bên trong
        this.playController.ctx.beginPath();
        this.playController.ctx.arc(
            0,
            0,
            this.playController.SCREEN_HEIGHT / 26,
            0,
            Math.PI * 2
        );
        this.playController.ctx.fillStyle = this.playController.snake.snakeColor;
        this.playController.ctx.fill();
        //vẽ mắt phải
        this.playController.ctx.beginPath();
        this.playController.ctx.arc(
            0,
            0,
            this.playController.SCREEN_HEIGHT / 40,
            1.5 * Math.PI + Math.PI / 10,
            -Math.PI / 10
        );
        this.playController.ctx.lineWidth = this.playController.SCREEN_HEIGHT / 22 - this.playController.SCREEN_HEIGHT / 26;
        this.playController.ctx.strokeStyle = 'black';
        this.playController.ctx.stroke();
        //vẽ mắt trái
        this.playController.ctx.beginPath();
        this.playController.ctx.arc(
            0,
            0,
            this.playController.SCREEN_HEIGHT / 40,
            Math.PI + Math.PI / 10,
            1.5 * Math.PI - Math.PI / 10
        );
        this.playController.ctx.lineWidth = this.playController.SCREEN_HEIGHT / 22 - this.playController.SCREEN_HEIGHT / 26;
        this.playController.ctx.strokeStyle = 'black';
        this.playController.ctx.stroke();
        //trả lại trạng thái ctx
        this.playController.ctx.restore();
    }
}