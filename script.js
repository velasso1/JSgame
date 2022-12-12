'use strict';

function hideNumber() {
    let x = 50;

    function findNumber() {
        let answer = +prompt('Угадай число от 1 до 100');
        if (isNaN(answer)) {
            alert('Вы ввели не число');
            findNumber();
        }

        switch (true) {
            case answer == null:
                alert('Игра окончена');
                break;

            case answer <= 0 || answer > 100:
                alert('Число находится вне промежутка');
                findNumber();
                break;

            case answer > y:
                alert('Загаданное число меньше');
                findNumber();
                break;

            case answer < x:
                alert('Загаданное число больше');
                findNumber();
                break;

            case answer == x:
                alert('Поздравляю, ты выиграл!');
                break;
        }

    }
    return findNumber();
}

console.log(hideNumber());