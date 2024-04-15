import Apple from './apple.js';
class Move {
  constructor(snake, apple) {
    this.steps = false;
    this.snakeBody = snake.snakeBody;
    this.score = 0;
    this.inputScore = document.querySelector('.input');
    this.BestScore = localStorage.getItem('maxScore') || 0;
    this.interval = null;
    this.direction = 'right';
    this.applePosition = apple.position;
    this.control();

    this.move = () => {
      this.snakeCoordinates = [this.snakeBody[0].getAttribute('posX'), this.snakeBody[0].getAttribute('posY')];
      this.snakeBody[0].classList.remove('snakeHead');
      this.snakeBody[this.snakeBody.length - 1].classList.remove('snakeBody');
      this.snakeBody.pop();
          
      if (this.direction == 'right') {
        if (this.snakeCoordinates[0] < 10){
          this.snakeBody.unshift(document.querySelector('[posX = "' + (+this.snakeCoordinates[0] + 1) + '"][posY = "' + this.snakeCoordinates[1] + '"]'));
        } else {
          this.snakeBody.unshift(document.querySelector('[posX = "1"][posY = "' + this.snakeCoordinates[1] + '"]'));
        }
      } else if (this.direction == 'left') {
        if (this.snakeCoordinates[0] > 1){
          this.snakeBody.unshift(document.querySelector('[posX = "' + (+this.snakeCoordinates[0] - 1) + '"][posY = "' + this.snakeCoordinates[1] + '"]'));
        } else {
          this.snakeBody.unshift(document.querySelector('[posX = "10"][posY = "' + this.snakeCoordinates[1] + '"]'));
        }
      } else if (this.direction == 'up') {
        if (this.snakeCoordinates[1] < 10){
          this.snakeBody.unshift(document.querySelector('[posX = "' + this.snakeCoordinates[0] + '"][posY = "' + (+this.snakeCoordinates[1] + 1) + '"]'));
        } else {
          this.snakeBody.unshift(document.querySelector('[posX = "' + this.snakeCoordinates[0] + '"][posY = "1"]'));
        }
      } else if (this.direction == 'down') {
        if (this.snakeCoordinates[1] > 1){
          this.snakeBody.unshift(document.querySelector('[posX = "' + this.snakeCoordinates[0] + '"][posY = "' + (this.snakeCoordinates[1] - 1) + '"]'));
        } else {
          this.snakeBody.unshift(document.querySelector('[posX = "' + this.snakeCoordinates[0] + '"][posY = "10"]'));
        }
      }

      if (this.snakeBody[0].getAttribute('posX') == this.applePosition[0] && this.snakeBody[0].getAttribute('posY') == this.applePosition[1]) {
        document.querySelector('.apple').classList.remove('apple');
        this.apple = null;
        this.apple = new Apple();
        this.applePosition = this.apple.position;
        this.a = this.snakeBody[this.snakeBody.length - 1].getAttribute('posX');
        this.b = this.snakeBody[this.snakeBody.length - 1].getAttribute('posY');
        this.snakeBody.push(document.querySelector('[posX = "' + this.a +'"][posY = "' + this.b +'"]'));

        this.score++;
        this.inputScore.value = `Очки: ${this.score}`;
      }
      
          
      if (this.snakeBody[0].classList.contains('snakeBody')) {
        if (this.score > this.BestScore) {
          localStorage.setItem('maxScore', this.score)
        }
        clearInterval(this.interval);

        this.newGame = confirm('Начать заново?')
        if (this.newGame == true) {
          window.location.reload();
        }   
      }
          
      this.snakeBody[0].classList.add('snakeHead');
      for (let i = 0; i < this.snakeBody.length; i++) {
        this.snakeBody[i].classList.add('snakeBody');
      }
          
      this.steps = true;
    }
    
    this.init = () => {
     this.interval = setInterval(() => {
        this.move.call(this);
      }, 500);
    }
  }

  createNewApple() {
    let posX = Math.round(Math.random() * (10 - 1) + 1);
    let posY = Math.round(Math.random() * (10 - 1) + 1);

    while (this.snakeBody.some(segment => segment.getAttribute('posX') == posX && segment.getAttribute('posY') == posY)) {
      posX = Math.round(Math.random() * (10 - 1) + 1);
      posY = Math.round(Math.random() * (10 - 1) + 1);
    }

    return [posX, posY];
  }

  control() {
    window.addEventListener('keydown', (e) => {
      if (this.steps == true) {
        if (e.key == 'ArrowLeft' && this.direction != 'right') {
          this.direction = 'left';
          this.steps = false;
        } 
        else if (e.key == 'ArrowUp' && this.direction != 'down') {
          this.direction = 'up';
          this.steps = false;
        } 
        else if (e.key == 'ArrowRight' && this.direction != 'left') {
          this.direction = 'right';
          this.steps = false;
        } 
        else if (e.key == 'ArrowDown' && this.direction != 'up') {
          this.direction = 'down';
          this.steps = false;
        }
      }
    });
  }
}

export default Move;