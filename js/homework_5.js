/*--------------------------------------Задача №1--------------------------------------------
Напишите функцию random(min, max), которая будет возвращать случае целое число от min до max
--------------------------------------------------------------------------------------------*/
let min = prompt('Введите минимальное значение:');
let max = prompt('Введите максимальное значение:');

min = Number(min);
max = Number(max);

function random(min, max) {

    if ( isNaN(min) || isNaN(max) ) {
        alert('Введенное значение не число');
        return null;
    }

    let temp = Math.random();
    let result = min + ((max - min) * temp );
    return Math.round(result);
}

let  result_1 = random(min, max);

if ( result_1 !== null)  {
    alert(`Ваше случайное число от ${min} до ${max}: ${result_1}`);
}
