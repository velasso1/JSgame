'use strict';

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function hideNumber() {
    let x = getRandomInt(0, 100);
    let numberOfAttemp = 10;

    function findNumber() {
        let answer = prompt('Угадай число от 1 до 100');
        let restart;

        if (isNaN(answer)) {
            alert('Вы ввели не число');
            findNumber();
        }

        console.log(answer, typeof answer);

        switch (true) {
            case answer == null:
                alert('Игра окончена');
                break;

            case numberOfAttemp == 0:
                restart = confirm('Попытки кончились, перезапустить?');

                if (restart == true) {
                    numberOfAttemp = 10;
                    x = getRandomInt(0, 100);
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
                restart = confirm('Поздравляю, ты выиграл! Хочешь сыграть еще раз?');

                if (restart == true) {
                    numberOfAttemp = 10;
                    x = getRandomInt(0, 100);
                    findNumber();
                } else {
                    alert('Спасибо за игру!');
                }
                break;
        }

    }
    return findNumber();
}

console.log(hideNumber()); 