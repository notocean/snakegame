class Color{
    constructor(settingDialog){
        this.settingDialog = settingDialog;

        this.dialog = this.settingDialog.dialog;

        this.data_json = localStorage.getItem('snakeColor');
        this.data = "w";
        if (this.data_json != null)
            this.data = JSON.parse(this.data_json);

        this.currColor = this.data;
    }

    display(){
        this.color = document.createElement('div');
        this.dialog.appendChild(this.color);
        this.color.innerHTML = "Color";
        this.color.style.boxSizing = "border-box";
        this.color.style.display = "inline-block";
        this.color.style.height = "30%";
        this.color.style.width = "100%";
        this.color.style.fontSize = this.settingDialog.startController.SCREEN_HEIGHT / 20 + "px";
        this.color.style.lineHeight = "150%";
        this.color.style.paddingLeft = "10px";

        this.blue = document.createElement('button');
        this.color.appendChild(this.blue);
        this.blue.innerHTML = "<img src=\"img/blue.png\" width= \'" + "100%\'" + " height=\'"  + "100%\'>";
        this.blue.style.display = "inline-block";
        this.blue.style.backgroundColor = "white";
        this.blue.style.boxSizing = "border-box";
        this.blue.style.float = "right";
        this.blue.style.height = "90%";
        this.blue.style.width = "18%";
        this.blue.style.borderStyle = "none";
        this.blue.style.margin = '0 2.5%';

        this.yellow = document.createElement('button');
        this.color.appendChild(this.yellow);
        this.yellow.innerHTML = "<img src=\"img/yellow.png\" width= \'" + "100%\'" + " height=\'"  + "100%\'>";
        this.yellow.style.display = "inline-block";
        this.yellow.style.backgroundColor = "white";
        this.yellow.style.boxSizing = "border-box";
        this.yellow.style.float = "right";
        this.yellow.style.height = "90%";
        this.yellow.style.width = "18%";
        this.yellow.style.borderStyle = "none";
        this.yellow.style.margin = '0 2.5%';
        
        this.white = document.createElement('button');
        this.color.appendChild(this.white);
        this.white.innerHTML = "<img src=\"img/white.png\" width= \'" + "100%\'" + " height=\'"  + "100%\'>";
        this.white.style.display = "inline-block";
        this.white.style.backgroundColor = "white";
        this.white.style.boxSizing = "border-box";
        this.white.style.float = "right";
        this.white.style.height = "90%";
        this.white.style.width = "18%";
        this.white.style.borderStyle = "none";
        this.white.style.margin = '0 2.5%';

        if (this.data == "w")
            this.white.innerHTML = "<img src=\"img/whiteSelect.png\" width= \'" + "100%\'" + " height=\'"  + "100%\'>";
        else if (this.data == "b")
            this.blue.innerHTML = "<img src=\"img/blueSelect.png\" width= \'" + "100%\'" + " height=\'"  + "100%\'>";
        else this.yellow.innerHTML = "<img src=\"img/yellowSelect.png\" width= \'" + "100%\'" + " height=\'"  + "100%\'>";

        this.blue.addEventListener("click", () => {
            if (this.currColor != "b"){
                this.blue.innerHTML = "<img src=\"img/blueSelect.png\" width= \'" + "100%\'" + " height=\'"  + "100%\'>";
                this.yellow.innerHTML = "<img src=\"img/yellow.png\" width= \'" + "100%\'" + " height=\'"  + "100%\'>";
                this.white.innerHTML = "<img src=\"img/white.png\" width= \'" + "100%\'" + " height=\'"  + "100%\'>";
                this.currColor = "b";
                this.data = "b";
                this.data_json = JSON.stringify(this.data);
                localStorage.setItem('snakeColor', this.data_json);
            }
        });

        this.yellow.addEventListener("click", () => {
            if (this.currColor != 'y'){
                this.blue.innerHTML = "<img src=\"img/blue.png\" width= \'" + "100%\'" + " height=\'"  + "100%\'>";
                this.yellow.innerHTML = "<img src=\"img/yellowSelect.png\" width= \'" + "100%\'" + " height=\'"  + "100%\'>";
                this.white.innerHTML = "<img src=\"img/white.png\" width= \'" + "100%\'" + " height=\'"  + "100%\'>";
                this.currColor = "y";
                this.data = "y";
                this.data_json = JSON.stringify(this.data);
                localStorage.setItem('snakeColor', this.data_json);
            }
        });

        this.white.addEventListener("click", () => {
            if (this.currColor != 'w'){
                this.blue.innerHTML = "<img src=\"img/blue.png\" width= \'" + "100%\'" + " height=\'"  + "100%\'>";
                this.yellow.innerHTML = "<img src=\"img/yellow.png\" width= \'" + "100%\'" + " height=\'"  + "100%\'>";
                this.white.innerHTML = "<img src=\"img/whiteSelect.png\" width= \'" + "100%\'" + " height=\'"  + "100%\'>";
                this.currColor = "w";
                this.data = "w";
                this.data_json = JSON.stringify(this.data);
                localStorage.setItem('snakeColor', this.data_json);
            }
        });
    }
}