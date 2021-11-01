/*=======================Задача №2=============================

Написать программу, которая должна за минимальное количество
попыток отгадать задуманное пользователем число от 0 до 100

==============================================================*/
const MAX_ATTEMPTS = 15;

let min = 0;
let max = 100;

let attempt = 0;
let result;

alert(`Загадайте число от 0 до 100.`);
do {
    let n = min + (max - min) / 2;
    let question = confirm(`Ваше число больше ${n}?`);
    attempt += 1;
    if (question) {
        min = n;
    } else {
        max = n;
    }
    result = max - min < 1;
} while (!result && attempt <= MAX_ATTEMPTS);

let your_number = Math.round(min + (max - min) / 2 );
alert(`Ваше число: ${your_number}.`)
