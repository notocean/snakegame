class RandomBox{
    constructor(playController){
        this.playController = playController;

        this.iAnim = 1;
        this.incPoint = 1;

        this.number = 6;

        //đọc level
        this.data_json = localStorage.getItem('snakeLevel');
        this.data = "1";
        if (this.data_json != null)
            this.data = JSON.parse(this.data_json);

        if (this.data == "1"){
            this.minSizeRatio = 0.6 / 5;
            this.maxSizeRatio = 1.2 / 5;
        }
        else if (this.data == "2"){
            this.minSizeRatio = 1.2 / 5;
            this.maxSizeRatio = 2 / 5;
        }
        else {
            this.minSizeRatio = 2 / 5;
            this.maxSizeRatio = 3 / 5;
        }

        //khởi tạo mảng các block ngẫu nhiên
        this.blockPosition = [];
        this.createBlocks();
    }

    createBlocks(){
        for(let i = 0; i < this.number; i++){
            //kích thước block từ min đến max
            let size = Math.floor(Math.random() * this.playController.SCREEN_HEIGHT * (this.maxSizeRatio - this.minSizeRatio)) + this.playController.SCREEN_HEIGHT * this.minSizeRatio;
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
            let size, x, y;
            while(true){
                //kích thước block từ min đến max
            size = Math.floor(Math.random() * this.playController.SCREEN_HEIGHT * (this.maxSizeRatio - this.minSizeRatio)) + this.playController.SCREEN_HEIGHT * this.minSizeRatio;
            //vị trí
            y = Math.floor(Math.random() * (this.playController.SCREEN_HEIGHT - size)) + size / 2;
            x = this.blockPosition[this.number-1].x + (this.blockPosition[this.number-1].size + size) * 3 / 2;
            if (!this.playController.collision.isCollideRect({x: this.playController.food.x, y: this.playController.food.y}, this.playController.food.size, {x: x, y: y}, size))
                break;
            }
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
        for(let i = 0; i < this.number; i++)
            this.drawBlock(this.blockPosition[i], this.iAnim);
        this.iAnim += 0.5 * this.incPoint;
        if (this.iAnim > 9.5){
            this.incPoint = -1;
        }
        else if (this.iAnim < 1){
            this.incPoint = 1;
        }
    }

    //vẽ hình khối với chiều dài, rộng và size
    drawBlock(block, iAnim){
        this.playController.ctx.beginPath();
        this.playController.ctx.fillStyle = 'black';
        this.playController.ctx.fillRect(block.x - block.size / 2 - this.playController.screen.left, block.y - block.size / 2 - this.playController.screen.top, block.size, block.size);
        let size = block.size / (4 * iAnim);
        this.playController.ctx.lineWidth = block.size / 20;
        this.playController.ctx.strokeStyle = '#00A39E';
        this.playController.ctx.strokeRect(block.x - block.size / 2 + size - this.playController.screen.left, block.y - block.size / 2 + size - this.playController.screen.top, block.size - size * 2, block.size - size * 2);
    }
}