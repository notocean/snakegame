class Snake {
    constructor(playController){
        //nhận đối tượng playController truyền vào để truy cập các thuộc tính của playController
        this.playController = playController;
        //khởi tạo độ dài cho snake
        this.snakeLength = 5;
        //vị trí snake ở trung tâm thế giới game
        this.x = this.playController.SCREEN_WIDTH / 2 + this.playController.BG_WIDTH / 2;
        this.y = this.playController.SCREEN_HEIGHT / 2;
        //khởi tạo thân snake
        this.snakePostition = [];
        //khởi tạo góc quay của snake head
        this.beforeAngle = 0;
        this.currentAngle = 0;

        //khởi tạo giá trị hiện tại và cập nhật cho vận tốc snake
        this.currentSpeed = this.playController.SNAKE_SPEED;
        this.updateSpeed = this.currentSpeed;

        //đối tượng kiểm tra phím bấm
        this.isPress = {press: false};
        //tạo thân snake
        this.createSnakeBody();

        this.listenMouseEvent();
        this.listenKeyEvent();

        this.headSnake = new HeadSnake(this.playController);

        this.data_json = localStorage.getItem('snakeColor');
        this.data = "w";
        if (this.data_json != null)
            this.data = JSON.parse(this.data_json);
        if (this.data == 'w')
            this.snakeColor = 'white';
        else if (this.data == 'b')
            this.snakeColor = '#00FFF8';
        else this.snakeColor = 'yellow';
    }

    listenMouseEvent(){
        //canvas lắng nghe sự kiện di chuyển chuột trên nó
        this.playController.canvas.addEventListener('mousemove', (event) => {
            var rect = this.playController.canvas.getBoundingClientRect();
            //truyền vị trí chuột vào hàm
            this.processMouseMove({
                x: event.clientX - rect.left,
                y: event.clientY - rect.top
            });
        });
    }

    processMouseMove(mousePos){
        //tính góc theo radian bằng atan
        this.currentAngle = Math.atan2(
            mousePos.y - (this.playController.SCREEN_HEIGHT / 2),
            mousePos.x - (this.playController.SCREEN_WIDTH / 2)
        );
    }

    //lắng nghe sự kiện nhấn phím
    listenKeyEvent(){
        document.addEventListener('keydown', (event) => {
            this.processKeyDown(event.code);
        });
        document.addEventListener('keyup', (event) => {
            this.processKeyUp(event.code);
        });
    }

    //xử lí sự kiện nhấn xuống
    processKeyDown(code){
        if (this.isPress.press)
            return;
        switch(code){
            case 'Space':
                this.updateSpeed += 1;
                break;
        }
        this.isPress.press = true;
    }

    processKeyUp(code){
        if (!this.isPress.press)
            return;
        switch(code){
            case 'Space':
                this.updateSpeed = this.playController.SNAKE_SPEED;
                break;
        }
        this.isPress.press = false;
    }

    //tạo body bạn đầu
    createSnakeBody(){
        for (let i = 0; i <= this.snakeLength * 10; i++){
            this.snakePostition.push({
                x: this.x - (i * this.playController.SNAKE_SPEED),
                y: this.y
            })
        }
    }

    //thêm body sau khi ăn food
    addSnakeBody(start, length){
        for (let i = start; i <= start + length * 10; i++){
            this.snakePostition.push({
                x: this.snakePostition[i-1].x,
                y: this.snakePostition[i-1].y
            })
        }
    }

    update(){
        //tính toán lại vận tốc hiện tại
        if (this.currentSpeed < this.updateSpeed)
            this.currentSpeed += 0.1;
        if (this.currentSpeed > this.updateSpeed)
            this.currentSpeed -= 0.1;
        //tính vị trí tiếp theo của snake theo góc và tốc độ
        let newSnakePosition = {
            x: this.x + Math.cos(this.currentAngle) * this.currentSpeed,
            y: this.y + Math.sin(this.currentAngle) * this.currentSpeed
        }
        
        //thêm vị trí mới vào đầu mảng vị trí snake
        this.snakePostition.unshift(newSnakePosition);
        //bỏ đi phần tử cuối mảng
        this.snakePostition.pop();

        //cập nhật lại vị trí của snake (đầu)
        this.x = newSnakePosition.x;
        this.y = newSnakePosition.y;
    }

    draw(){
        //vẽ snake
        for (let i = this.snakeLength * 10; i >= 1; i--){
            if (i % 5 == 0){
                this.drawSnakeBody({
                    x: this.snakePostition[i].x,
                    y: this.snakePostition[i].y
                });
            }
        }
        this.headSnake.draw({
            x: this.snakePostition[0].x,
            y: this.snakePostition[0].y
        }, this.currentAngle);
    }

    drawSnakeBody(pos){
        //bắt đầu 1 lần vẽ
        this.playController.ctx.beginPath();
        //xác định chỉ số của hình tròn border
        this.playController.ctx.arc(
            pos.x - this.playController.screen.left,
            pos.y - this.playController.screen.top,
            this.playController.rSnake,
            0,
            Math.PI * 2
        );

        //xác định màu
        this.playController.ctx.fillStyle = 'black';
        //đổ màu
        this.playController.ctx.fill();
        //bắt đầu 1 lần vẽ
        this.playController.ctx.beginPath();
        //xác định chỉ số của hình tròn border
        this.playController.ctx.arc(
            pos.x - this.playController.screen.left,
            pos.y - this.playController.screen.top,
            this.playController.SCREEN_HEIGHT / 26,
            0,
            Math.PI * 2
        );
        //xác định màu
        this.playController.ctx.fillStyle = this.snakeColor;
        //đổ màu
        this.playController.ctx.fill();
    }
}