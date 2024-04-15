class Snake {
    constructor() {
        this.generateSnake = () => {
            this.posX = Math.round(Math.random() * (10 - 2) + 2);
            this.posY = Math.round(Math.random() * (10 - 1) + 1);
            return [this.posX, this.posY];
        }
          
        this.coordinates = this.generateSnake();
        this.snakeBody = [document.querySelector('[posX = "' + this.coordinates[0] + '"][posY = "' + this.coordinates[1] + '"]'), document.querySelector('[posX = "' + (this.coordinates[0] - 1) + '"][posY = "' + this.coordinates[1] + '"]')];
          
        for (let i = 0; i < this.snakeBody.length; i++) {
            this.snakeBody[i].classList.add('snakeBody');
        }
          
        this.snakeBody[0].classList.add('snakeHead');
    }
}

export default Snake;