'use strict';

function hideNumber() {
    let x = 50;
    let numberOfAttemp = 10;

    function findNumber() {
        let answer = +prompt('Угадай число от 1 до 100');
        let restart;

        if (isNaN(answer)) {
            alert('Вы ввели не число');
            findNumber();
        }

        switch (true) {
            case answer == null:
                alert('Игра окончена');
                break;

            case numberOfAttemp == 0:
                restart = confirm('Попытки кончились, перезапустить?');

                if (restart == true) {
                    numberOfAttemp = 10;
                    findNumber();
                } else {
                    alert('Спасибо за игру!');
                }
                break;

            case answer <= 0 || answer > 100:
                --numberOfAttemp;
                alert(`Число находится вне промежутка, осталось попыток: ${numberOfAttemp}`);
                findNumber();
                break;

            case answer > x:
                --numberOfAttemp;
                alert(`Загаданное число меньше, осталось попыток: ${numberOfAttemp}`);
                findNumber();
                break;

            case answer < x:
                --numberOfAttemp;
                alert(`Загаданное число больше, осталось попыток: ${numberOfAttemp}`);
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