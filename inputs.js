class Inputs {
    constructor() {
        this.inputScore = document.createElement('input');
        document.body.appendChild(this.inputScore);
        this.inputScore.classList.add('input');

        this.score = 0;
        this.inputScore.value = `Очки: ${this.score}`;

        this.inputBestScore = document.createElement('input');
        document.body.appendChild(this.inputBestScore);
        this.inputBestScore.classList.add('input');

        this.BestScore = localStorage.getItem('maxScore');
        if (this.BestScore == null) {
        this.inputBestScore.classList.add('none');
        } else {
        this.inputBestScore.value = `Рекорд: ${this.BestScore}`;
        }
    }
}

export default Inputs;