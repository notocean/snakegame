class Enemy{
    constructor(playController){
        this.playController = playController;
        
        this.randomBox = new RandomBox(this.playController);

        this.leftBox = new LeftBox(this.playController);
    }

    update(){
        this.randomBox.update();
        this.leftBox.update();
    }

    draw(){
        this.randomBox.draw();
        this.leftBox.draw();
    }
}