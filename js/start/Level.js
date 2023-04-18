class Level{
    constructor(settingDialog){
        this.settingDialog = settingDialog;

        this.dialog = this.settingDialog.dialog;

        this.data_json = localStorage.getItem('snakeLevel');
        this.data = "1";
        if (this.data_json != null)
            this.data = JSON.parse(this.data_json);

        this.currLevel = this.data;
    }

    display(){
        this.level = document.createElement('div');
        this.dialog.appendChild(this.level);
        this.level.innerHTML = "Level";
        this.level.style.boxSizing = "border-box";
        this.level.style.paddingTop = "2.5%";
        this.level.style.paddingBottom = "2.5%";
        this.level.style.display = "block";
        this.level.style.width = "100%";
        this.level.style.fontSize = this.settingDialog.startController.SCREEN_HEIGHT / 20 + "px";
        this.level.style.lineHeight = "150%";
        this.level.style.paddingLeft = "10px";
        this.level.style.height = "40%";

        this.level3 = document.createElement('span');
        this.level.appendChild(this.level3);
        this.level3.style.boxSizing = "border-box";
        this.level3.style.display = "inline-block";
        this.level3.style.float = 'right';
        this.level3.innerHTML = "3";
        this.level3.style.width = '10%';

        this.radioInput3 = document.createElement('input');
        this.level.appendChild(this.radioInput3);
        this.radioInput3.style.boxSizing = "border-box";
        this.radioInput3.style.display = "inline-block";
        this.radioInput3.style.float = 'right';
        this.radioInput3.type = 'radio';
        this.radioInput3.name = 'radio';
        this.radioInput3.value = 'male';
        this.radioInput3.style.height = "50%";
        this.radioInput3.style.width = "12%";
        this.radioInput3.style.marginTop = '3.5%';

        this.level2 = document.createElement('span');
        this.level.appendChild(this.level2);
        this.level2.style.boxSizing = "border-box";
        this.level2.style.display = "inline-block";
        this.level2.style.float = 'right';
        this.level2.innerHTML = "2";
        this.level2.style.width = '10%';

        this.radioInput2 = document.createElement('input');
        this.level.appendChild(this.radioInput2);
        this.radioInput2.style.boxSizing = "border-box";
        this.radioInput2.style.display = "inline-block";
        this.radioInput2.style.float = 'right';
        this.radioInput2.type = 'radio';
        this.radioInput2.name = 'radio';
        this.radioInput2.value = 'male';
        this.radioInput2.style.height = "50%";
        this.radioInput2.style.width = "12%";
        this.radioInput2.style.marginTop = '3.5%';

        this.level1 = document.createElement('span');
        this.level.appendChild(this.level1);
        this.level1.style.boxSizing = "border-box";
        this.level1.style.display = "inline-block";
        this.level1.style.float = 'right';
        this.level1.innerHTML = "1";
        this.level1.style.width = '10%';

        this.radioInput1 = document.createElement('input');
        this.level.appendChild(this.radioInput1);
        this.radioInput1.style.boxSizing = "border-box";
        this.radioInput1.style.display = "inline-block";
        this.radioInput1.style.float = 'right';
        this.radioInput1.type = 'radio';
        this.radioInput1.name = 'radio';
        this.radioInput1.value = 'male';
        this.radioInput1.style.height = "50%";
        this.radioInput1.style.width = "12%";
        this.radioInput1.style.marginTop = '3.5%';

        if (this.data == "1")
            this.radioInput1.checked = 'true';
        else if (this.data == "2")
            this.radioInput2.checked = 'true';
        else this.radioInput3.checked = 'true';

        this.radioInput1.addEventListener('click', ()=>{
            if (this.currLevel != "1"){
                this.currLevel = "1";
                this.data = "1";
                this.data_json = JSON.stringify(this.data);
                localStorage.setItem('snakeLevel', this.data_json);
            }
        });

        this.radioInput2.addEventListener('click', ()=>{
            if (this.currLevel != "2"){
                this.currLevel = "2";
                this.data = "2";
                this.data_json = JSON.stringify(this.data);
                localStorage.setItem('snakeLevel', this.data_json);
            }
        });

        this.radioInput3.addEventListener('click', ()=>{
            if (this.currLevel != "3"){
                this.currLevel = "3";
                this.data = "3";
                this.data_json = JSON.stringify(this.data);
                localStorage.setItem('snakeLevel', this.data_json);
            }
        });
    }
}