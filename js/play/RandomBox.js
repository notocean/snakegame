class RandomBox{
    constructor(playController){
        this.playController = playController;

        //khởi tạo mảng các block ngẫu nhiên
        this.blockPosition = [];
        this.createBlocks();
    }

    createBlocks(){
        for(let i = 0; i < 4; i++){
            //kích thước block từ 1/5 đến 3/5 chiều cao màn hình
            let size = Math.floor(Math.random() * this.playController.SCREEN_HEIGHT * 2 / 5) + this.playController.SCREEN_HEIGHT / 5;
            //vị trí
            let y = Math.floor(Math.random() * (this.playController.SCREEN_HEIGHT - size)) + size / 2;
            let x = this.playController.screen.left + this.playController.SCREEN_WIDTH + size;
            if(i != 0){
                x = this.blockPosition[i-1].x;
                x += (this.blockPosition[i-1].size + size) * 3 / 2;
            }
            //thêm phần tử block vào cuối mảng
            this.blockPosition.push({
                size: size,
                x: x,
                y: y
            });
        }
    }

    update(){
        if (this.blockPosition[0].x + this.blockPosition[0].size / 2 < this.playController.screen.left){
            //kích thước block từ 1/5 đến 3/5 chiều cao màn hình
            let size = Math.floor(Math.random() * this.playController.SCREEN_HEIGHT * 2 / 5) + this.playController.SCREEN_HEIGHT / 5;
            //vị trí
            let y = Math.floor(Math.random() * (this.playController.SCREEN_HEIGHT - size)) + size / 2;
            let x = this.blockPosition[3].x + (this.blockPosition[3].size + size) * 3 / 2;
            //thêm vào cuối
            this.blockPosition.push({
                size: size,
                x: x,
                y: y
            });
            //bỏ đầu
            this.blockPosition.shift();
        }
    }

    draw(){
        //vẽ block random
        for(let i = 0; i < 4; i++)
            this.drawBlock(this.blockPosition[i]);
    }

    //vẽ hình khối với chiều dài, rộng và size
    drawBlock(block){
        this.playController.ctx.beginPath();
        this.playController.ctx.fillStyle = 'black';
        this.playController.ctx.fillRect(block.x - block.size / 2 - this.playController.screen.left, block.y - block.size / 2 - this.playController.screen.top, block.size, block.size);
    }
}