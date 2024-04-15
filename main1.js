import GameField from './gameField.js';
import Inputs from './inputs.js';
import Snake from './snake.js';
import Apple from './apple.js';
import Move from './move.js';

class Main {
    constructor() {
        this.Inputs = new Inputs();
        this.GameField = new GameField();
        this.Snake = new Snake();
        this.Apple = new Apple();
        this.Move = new Move(this.Snake, this.Apple);
        this.Move.init();
        this.Move.control();   
    }
}

const main = new Main();
export default Main;