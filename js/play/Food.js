class Food{
    constructor(playController){
        this.playController = playController;
        //khởi tạo giá trị ban đầu
        this.size = this.playController.SCREEN_HEIGHT / 30;
        this.x = 0;
        this.y = 0;
        this.createFood();
    }

    createFood(){
        //tạo ngẫu nhiên food
        let check = true;
        let dem = 0;
        while (check){
            dem = 0;
            this.y = Math.floor(Math.random() * (this.playController.SCREEN_HEIGHT - this.size)) + this.size / 2;
            this.x = this.playController.screen.left + this.playController.SCREEN_WIDTH * 4 / 3 + this.size;
            for (let i = 0; i < 4; i++){
                let x = this.playController.enemy.randomBox.blockPosition[i].x;
                let y = this.playController.enemy.randomBox.blockPosition[i].y;
                let size = this.playController.enemy.randomBox.blockPosition[i].size;
                if (!this.playController.collision.isCollideRect({x: this.x, y: this.y}, this.size, {x: x, y: y}, size))
                    dem++;
                if (dem == 4)
                    check = false;
            }
                
        }
    }

    update(){
        if (this.x < this.playController.screen.left)
            this.createFood();
    }

    draw(){
        //vẽ food
        this.playController.ctx.beginPath();
        this.playController.ctx.arc(
            this.x - this.playController.screen.left,
            this.y - this.playController.screen.top,
            this.size,
            0,
            Math.PI * 2
        );
        this.playController.ctx.fillStyle = 'red';
        this.playController.ctx.fill();
    }
}