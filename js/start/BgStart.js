class BgStart{
    constructor(startController){
        this.startController = startController;

        this.bg = document.createElement('img');
        this.bg.src = "img/bgstart.png";
    }

    display(){
        //đợi cho ảnh được load
        if (this.bg.complete){
            this.startController.ctx.drawImage(
                this.bg,
                0,
                0,
                1440,
                810,
                0,
                -20,
                this.startController.SCREEN_WIDTH,
                this.startController.SCREEN_HEIGHT + 40
            );
        }
        else {
            setTimeout(() => this.display(), 10);
        }
    }
}