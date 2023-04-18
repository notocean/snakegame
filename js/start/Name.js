class Name{
    constructor(startController){
        this.startController = startController;

        this.data_json = localStorage.getItem('snakeName');
        this.data = "";
        if (this.data_json != null)
            this.data = JSON.parse(this.data_json);
    }

    display(){
        let width = this.startController.SCREEN_WIDTH / 5;
        let height = this.startController.SCREEN_HEIGHT / 12;
        this.input = document.createElement('input');
        document.body.appendChild(this.input);
        this.input.value = this.data;
        this.input.style.position = "absolute";
        this.input.style.boxSizing = "border-box";
        this.input.style.height =  height + "px";
        this.input.style.width = width + "px";
        this.input.style.border = "double";
        this.input.style.borderWidth = width / 40 + "px";
        this.input.style.borderRadius = height / 2.5 + "px";
        this.input.style.fontSize = height / 2 + "px";
        this.input.style.textAlign = "center";
        this.input.style.left = this.startController.SCREEN_WIDTH / 2 - width / 2 + "px";
        this.input.style.top = this.startController.SCREEN_HEIGHT / 2 + "px";

        this.input.addEventListener('change', () => {
            this.data = this.input.value;
            this.data_json = JSON.stringify(this.data);
            localStorage.setItem('snakeName', this.data_json);
        });
    }
}