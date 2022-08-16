'use strict';

const guessNumber = function () {
  const randomNumber = Math.round(Math.random() * 100);
  console.log(randomNumber);
  let guess = +prompt('Какое число от 1 до 100 я загадал?');


    while (guess !== randomNumber) {
      if (!(Number.isInteger(guess))) {
        guess = +prompt('Введи число!');
      }

      if (String(guess) === '0') {
        return alert('Конец!');
      }

      switch (true) {
        case guess > randomNumber:
          guess = +prompt('Меньше!');
          break;

        case guess < randomNumber:
          guess = +prompt('Больше!');
          break;

        default:
          break;
      }
    }

    if (guess === randomNumber) {
      alert('Правильно!');
    }

}

guessNumber();
