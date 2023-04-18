class BgGame{
    constructor(playController){
        this.playController = playController;

        //khởi tạo đối tượng lưu background để vẽ nền 
        this.bg = document.createElement('img');
        this.bg.src = "img/bg.png";
    }

    update(){
        //nhân với tỉ số để được tốc độ đọc ảnh
        this.left = this.playController.screen.left * this.playController.BG_WIDTH / this.playController.SCREEN_WIDTH % (this.playController.BG_WIDTH - 41);
        this.top = this.playController.screen.top * this.playController.BG_HEIGHT / this.playController.SCREEN_HEIGHT;
    }

    draw(){
        this.playController.ctx.drawImage(
            //ảnh
            this.bg,
            //vị trí cắt của ảnh
            this.left + this.playController.BG_WIDTH - 41,
            this.top,
            //cắt ảnh với chiều rộng và dài
            this.playController.BG_WIDTH,
            this.playController.BG_HEIGHT,
            //vị trí x, y vẽ ảnh trên canvas
            0,
            0,
            //vẽ ảnh với chiều rộng và dài
            this.playController.SCREEN_WIDTH,
            this.playController.SCREEN_HEIGHT
        );
        this.playController.ctx.drawImage(
            //ảnh
            this.bg,
            //vị trí cắt của ảnh
            this.left,
            this.top,
            //cắt ảnh với chiều rộng và dài
            this.playController.BG_WIDTH,
            this.playController.BG_HEIGHT,
            //vị trí x, y vẽ ảnh trên canvas
            0,
            0,
            //vẽ ảnh với chiều rộng và dài
            this.playController.SCREEN_WIDTH,
            this.playController.SCREEN_HEIGHT
        );
        this.playController.ctx.drawImage(
            //ảnh
            this.bg,
            //vị trí cắt của ảnh
            this.left - this.playController.BG_WIDTH + 41,
            this.top,
            //cắt ảnh với chiều rộng và dài
            this.playController.BG_WIDTH,
            this.playController.BG_HEIGHT,
            //vị trí x, y vẽ ảnh trên canvas
            0,
            0,
            //vẽ ảnh với chiều rộng và dài
            this.playController.SCREEN_WIDTH,
            this.playController.SCREEN_HEIGHT
        );
    }
}