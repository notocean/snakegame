class PlayController {
    constructor(gameController){
        this.gameController = gameController;
        //khởi tạo các hằng
        this.SCREEN_WIDTH = this.gameController.SCREEN_WIDTH;
        this.SCREEN_HEIGHT = this.gameController.SCREEN_HEIGHT;

        this.SNAKE_SPEED = this.SCREEN_WIDTH / 300;
        this.BLOCK_SPEED = this.SCREEN_WIDTH / 400;

        this.BG_WIDTH = 480;
        this.BG_HEIGHT = 270;

        this.rSnake = this.SCREEN_HEIGHT / 22;

        //khởi tạo canvas
        this.canvas = document.createElement('canvas');
        this.canvas.width = this.SCREEN_WIDTH;
        this.canvas.height = this.SCREEN_HEIGHT;
        this.canvas.style.position = 'absolute';
        this.canvas.style.left = '0px';
        this.canvas.style.top = '0px';
        //tạo context để vẽ
        this.ctx = this.canvas.getContext('2d');
        document.body.appendChild(this.canvas);
        
        //tạo các đối tượng snake và screen
        this.snake = new Snake(this);
        this.screen = new Screen(this);
        this.collision = new Collision(this);
        this.enemy = new Enemy(this);
        this.food = new Food(this);
        this.isLose = false;
        //vòng lặp tạo nên game
        this.loop();
        
    }
    
    loop(){
        if (!this.isLose){
            this.update();
            this.draw();
            setTimeout(() => this.loop(), 20);
        }
        else setTimeout(() => {
            //window.location = "start.html"
            this.gameController.openScene('s');
        }, 1000);
    }

    //update các thực thể và logic của game
    update(){
        this.snake.update();
        this.screen.update();
        this.enemy.update();
        this.food.update();
        this.collision.update();
        this.screen.scoreGame.update();
    }

    //xóa màn hình
    clearScreen(){
        this.ctx.fillStyle = '#000000';
        this.ctx.fillRect(0, 0, this.SCREEN_WIDTH, this.SCREEN_HEIGHT);
    }

    //vẽ các thực thể của game
    draw(){
        this.clearScreen();
        this.screen.draw();
        this.food.draw();
        this.snake.draw();
        this.enemy.draw();
        this.screen.scoreGame.draw();
    }
}

//var g = new PlayController();