class Apple {
    constructor() {
        this.position = this.createApple();
    }

    createApple() {
        // Генерация координат яблока
        let posX = Math.round(Math.random() * (10 - 1) + 1);
        let posY = Math.round(Math.random() * (10 - 1) + 1);

        // Поиск элемента с соответствующими координатами
        let appleElement = document.querySelector(`[posX="${posX}"][posY="${posY}"]`);

        // Проверка на наличие яблока в теле змеи
        while (appleElement.classList.contains('snakeBody')) {
        posX = Math.round(Math.random() * (10 - 1) + 1);
        posY = Math.round(Math.random() * (10 - 1) + 1);
        appleElement = document.querySelector(`[posX="${posX}"][posY="${posY}"]`);
        }

        // Добавление класса 'apple' к найденному элементу
        appleElement.classList.add('apple');

        // Возвращаем координаты яблока
        return [posX, posY];
    }
}

export default Apple;
