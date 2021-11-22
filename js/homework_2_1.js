/*================================= Задача №1=========================================
Ввести с помощью функции prompt любое число и вывести в уведомление в таком формате:
1 день
2 дня
5 дней
17 дней
35 дней
1532 дня. 
=======================================================================================*/
let number_of_days = prompt ('Введите число','0');
number_of_days = Number (number_of_days);

// Проверка
if (isNaN(number_of_days)) {
    alert('Введенное значение не является числом.');
} else if (number_of_days<0) {
    alert('Введенное значение не может быть отрицательным).');
}
//от 0 до 19 в каждой сотне
else if ((number_of_days % 100 >= 0) && (number_of_days % 100 <= 19)) {
    if (number_of_days % 100 === 0) {
        alert (`${number_of_days} дней`);
    } else if (number_of_days % 100 === 1) {
        alert (`${number_of_days} день`);
    } else if ((number_of_days % 100 >= 2) && (number_of_days % 100 <= 4)) {
        alert (`${number_of_days} дня`);
    } else {
        alert (`${number_of_days} дней`);
    }
}
//от 20 до 99 в каждой сотне
else if (number_of_days % 10 === 0) {
    alert (`${number_of_days} дней`);
} else if (number_of_days % 10 === 1) {
    alert (`${number_of_days} день`);
} else if ((number_of_days % 10 >= 2) && (number_of_days % 10 <= 4)) {
    alert (`${number_of_days} дня`);
} else {
    alert (`${number_of_days} дней`);
}
