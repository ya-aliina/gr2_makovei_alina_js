/*--------------------------------------Задача №2--------------------------------------------
Написать функцию count_symbol( symbol, string ), которая подсчитает количество указанного
символа symbol, в строке string.
Функция должна быть регистронезависимой и вернуть число
--------------------------------------------------------------------------------------------*/

let new_string = prompt('Введите слово или предложение:');
let symbol = prompt('Какой символ будем считать?');

new_string = new_string.toLowerCase();
symbol = symbol.toLowerCase();

let number_of_symbol = 0;

function count_symbol(symbol, string) {
    if (symbol.length > 1) {
        alert('Длина введенного значения не должна превышать 1 символ');
        return null;
    }

    let array = string.split('');

    for (let i = 0; i <= array.length - 1; i++) {
        let element = array[i];
        if (element === symbol) {
            number_of_symbol++;
        }
    }

    return number_of_symbol;
}

let result_2 = count_symbol(symbol, new_string);
if (result_2 !== null) {
    alert(`Количество "${symbol}" в данной строке равно ${result_2}.`);
}
