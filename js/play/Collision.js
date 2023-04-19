class Collision{
    constructor(playController){
        this.playController = playController;
    }

    update(){
        for(let i = 0; i <= this.playController.snake.snakeLength * this.playController.snake.distanceBody; i++){
            if (i % this.playController.snake.distanceBody == 0){
                //xét va chạm với thân snake
                if (i >= 30 && this.isCollideCircle(this.playController.snake.snakePostition[i], this.playController.rSnake, this.playController.snake.snakePostition[0], this.playController.rSnake))
                    this.playController.isLose = true;
                //xét va chạm với tường
                if (this.isCollideLine(this.playController.snake.snakePostition[i], this.playController.rSnake, {x: 0, y: 0}) || this.isCollideLine(this.playController.snake.snakePostition[i], this.playController.rSnake, {x: 0, y: this.playController.SCREEN_HEIGHT}) || this.isCollideLine(this.playController.snake.snakePostition[i], this.playController.rSnake, {x: this.playController.enemy.leftBox.right, y: 0}))
                    this.playController.isLose = true;
            }
        }
        //xét va chạm với food
        if (this.isCollideCircle(this.playController.snake.snakePostition[0], this.playController.rSnake, {x: this.playController.food.x, y: this.playController.food.y}, this.playController.food.size)){
            this.playController.food.createFood();
            if(this.playController.snake.snakeLength < 12){
                this.playController.snake.addSnakeBody(this.playController.snake.snakePostition.length, 1);
                this.playController.snake.snakeLength += 1;
            }
            this.playController.screen.scoreGame.score += 1;
            if (this.playController.snake.snakeLength == 12 && this.playController.snake.distanceBody > 1 && this.playController.screen.scoreGame.score % 4 == 0)
                this.playController.snake.changeSpeed();
        }
        //xét va chạm với block random
        for(let i = 0; i < 3; i++){
            let x = this.playController.enemy.randomBox.blockPosition[i].x;
            let y = this.playController.enemy.randomBox.blockPosition[i].y;
            let size = this.playController.enemy.randomBox.blockPosition[i].size;
            if (this.isCollideRect(this.playController.snake.snakePostition[0], this.playController.rSnake, {x: x, y: y}, size))
                this.playController.isLose = true;
        }
    }

    //Khoảng cách 2 điểm
    distance2Point(pos1, pos2){
        return Math.sqrt(Math.pow(pos1.x - pos2.x, 2) + Math.pow(pos1.y - pos2.y, 2));
    }

    //va chạm của 2 hình tròn
    isCollideCircle(pos1, r1, pos2, r2){
        if (this.distance2Point(pos1, pos2) <= r1 + r2){
            return true;
        }
        else return false;
    }

    //va chạm của 1 hình tròn và 1 đường dọc/ngang
    isCollideLine(pos1, r, pos2){
        if (Math.abs(pos1.x - pos2.x) <= r || Math.abs(pos1.y - pos2.y) <= r){
            return true;
        }
        else return false;
    }

    //va chạm của 1 hình tròn và 1 hình vuông
    isCollideRect(pos1, r, pos2, size){
        //một nửa size
        let hSize = size / 2;
        //xét va chạm với 2 cạnh bên
        if (Math.abs(pos2.x - pos1.x) <= r + hSize && pos1.y >= pos2.y - hSize && pos1.y <= pos2.y + hSize)
            return true;
        //xét va chạm với 2 cạnh đáy
        if (Math.abs(pos2.y - pos1.y) <= r + hSize && pos1.x >= pos2.x - hSize && pos1.x <= pos2.x + hSize)
            return true;

        //xét va chạm với 4 góc
        if (this.distance2Point({x: pos2.x - hSize, y: pos2.y - hSize}, pos1) <= r)
            return true;
        if (this.distance2Point({x: pos2.x - hSize, y: pos2.y + hSize}, pos1) <= r)
            return true;
        if (this.distance2Point({x: pos2.x + hSize, y: pos2.y - hSize}, pos1) <= r)
            return true;
        if (this.distance2Point({x: pos2.x + hSize, y: pos2.y + hSize}, pos1) <= r)
            return true;
        return false;
    }
}