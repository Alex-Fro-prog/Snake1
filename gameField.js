class GameField {
    constructor() {
        this.field = document.createElement('div'); //создаем поле
        document.body.appendChild(this.field); //добавляем поле в body
        this.field.classList.add('field'); //добавляем полю из css класс

        for (let i = 1; i < 101; i++) {
            let excel = document.createElement('div');
            this.field.appendChild(excel);
            excel.classList.add('excel');
        }

        this.excel = document.getElementsByClassName('excel');
        this.x = 1, 
        this.y = 10;

        for (let i = 0; i < this.excel.length; i++) {
            if (this.x > 10) {
            this.x = 1;
            this.y--;
            }
            this.excel[i].setAttribute('posX', this.x);
            this.excel[i].setAttribute('posY', this.y);
            this.x++;
        }
    }
}

export default GameField;