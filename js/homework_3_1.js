/*================================Задача №1============================================

Последовательно ввести 2 числа.
На отрезке из введенных чисел подсчитать количество чисел кратных 6 и сумму этих чисел.
Вывести ответ одним уведомлением.

=======================================================================================*/

let i = prompt('Введите число №1');
let d = prompt('Введите число №2');

i = Number(i);
d = Number(d);

let sum = 0;
let amount_of_numbers = 0;

if (isNaN(i) || isNaN(d)) {
    alert(`Значение не является числом`);
}
while (i <= d) {
    if ((i % 6 !== 0) || (i === 0)) {
        i += 1;
        continue;
    }
    console.log(i);
    sum += i;
    amount_of_numbers += 1;
    i += 1;
}
while (i >= d) {
    if ((d % 6 !== 0) || (d === 0)) {
        d += 1;
        continue;
    }
    console.log(d);
    sum += d;
    amount_of_numbers += 1;
    d += 1;
}
alert(`Количество чисел кратных 6 в данном диапазоне равно ${amount_of_numbers}, а их сумма составляет ${sum}.`)
