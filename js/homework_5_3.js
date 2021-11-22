/*--------------------------------------Задача №3--------------------------------------------
Напишите функцию get_string_length(str), которая в качестве аргумента принимает строку str и
возвращает её длину, предварительно удалив из строки все пробелы (для решения данной задачи
обязательно использовать цикл).
--------------------------------------------------------------------------------------------*/

function get_string_length(str) {
    if (str.length === 0 ) {
        alert('Вы ничего не ввели');
        return null;
    }

    let array = str.split('');

    for (let i = 0; i <= array.length - 1; i++ ) {
        let element = array[i];
        if (element === ' ') {
            array.splice(i, 1);
            i = i - 1;
        }
    }
    let result = array.length;
    return result;
}

let string = prompt('Введите предложение:');
let result_3 = get_string_length(string);

if (result_3 !== null) {
    alert(`Длина вашей строки (без учета пробелов) составляет ${result_3} символов.`)
}
