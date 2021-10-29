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
/*==================================== Задача №2==========================================
Машина проехала N км без поворотов. Диаметр колеса машины составляет D дюймов.
Сколько оборотов сделало каждое колесо, и сколько оборотов сделали все колеса вместе?
Значение N и D нужно ввести с помощью функции prompt.
Ошибки по вводу значений вывести в консоль.
Результат вывести с помощью функции alert.
===========================================================================================*/
//проверка 1 переменной
let n = prompt ('Укажите расстояние (км)','0');
n = Number (n);
if (isNaN(n)) {
    console.error ('Введенное значение не является числом');
} else if (n<0) {
    console.error ('Введенное значение не может быть отрицательным');
}
//проверка 2 переменной
let d = prompt ('Укажите диаметр колеса (дюйм)','0');
d = Number (d);
if (isNaN(d)) {
    console.error ('Введенное значение не является числом');
} else if (d<0) {
    console.error ('Введенное значение не может быть отрицательным');
} else {
    const PI = 3.141592653589793238462643;
    let n_inches = n * 39370.1; // расстояние в дюймах
    let c = PI * d; // длина одного оборота
    let one_wheel_turn = n_inches/c; // количество оборотов 1 колеса
    let all_wheels_turn = one_wheel_turn*4; // количество оборотов всех колес
    let result_one_wheel = parseInt(one_wheel_turn); 
    let result_all_wheels = parseInt(all_wheels_turn);
    alert (`Количество оборотов 1 колеса при расстоянии ${n} км = ${result_one_wheel}, а всех колес = ${result_all_wheels}.`)
}
