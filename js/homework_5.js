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

/*--------------------------------------Задача №3--------------------------------------------
Напишите функцию get_string_length(str), которая в качестве аргумента принимает строку str и
возвращает её длину, предварительно удалив из строки все пробелы (для решения данной задачи
обязательно использовать цикл).
--------------------------------------------------------------------------------------------*/
let string = prompt('Введите предложение:');
console.log(string)

function get_string_length(str) {
    if (str.length === 0 ) {
        alert('Вы ничего не ввели');
        return null;
    }

    let array = str.split('');
    console.log(array);
    for (let i = 0; i <= array.length - 1; i++ ) {
        console.log(i)
        console.log(array)
        let element = array[i];
        console.log(`Иттерация пошла. Текущий элемент *${element}*`)
        if (element === ' ') {
            array.splice(i, 1);
            console.log(array);
            i = i - 1;
        }
    }
    let result = array.length;
    console.log(result)
    return result;
}
let result_3 = get_string_length(string);
if (result_3 !== null) {
    alert(`Длина вашей строки (без учета пробелов) составляет ${result_3} символов.`)
}

/*--------------------------------------Задача №4--------------------------------------------
Напишите функцию up_first(str), которая возвращает строку str с заглавным первым символом,
остальные символы должны быть в нижнем регистре (пример: up_first("иванов"), должно вернуть
"Иванов", up_first("ИВАНОВ"), должно вернуть "Иванов")
--------------------------------------------------------------------------------------------*/
let string_1 = prompt('Введите слово или предложение:');

function up_first(str) {
    if (str.length === 0 ) {
        alert('Вы ничего не ввели');
        return null;
    }

    let array = str.split('');
    let new_array = [];

    for (let i = 0; i <= array.length - 1; i++) {
        let element = array[i];

        if (i === 0) {
            let first_letter = element.toUpperCase();
            new_array.push(first_letter)
        } else {
            let other_letters = element.toLowerCase();
            new_array.push(other_letters)
        }

        result = new_array.join('');
    }
    return result;
}

let result_4 = up_first(string_1);
if (result_4 !== null) {
    alert(`Ваше предложение: ${result_4}`)
}

/*--------------------------------------Задача №5--------------------------------------------
Напишите функцию search_string(search, string), которая будет проверять наличие подстроки search
в строке string.
Функция должна вернуть булев тип и быть регистронезависимой (использовать метод indexOf)
--------------------------------------------------------------------------------------------*/

let string_3 = prompt('Введите предложение');
let search = prompt('Введите искомое значение');

function search_string(search, string) {

    if (string.length === 0 || search.length === 0 ) {
        alert('Вы ничего не ввели');
        return null;
    }
    search = search.toLowerCase();
    string = string.toLowerCase();

    let search_index = string.indexOf(search);

    if (search_index >= 0) {
        alert('Да, такое значение есть в строке');
        return true;
    }  else {
        alert('Нет, такого значения нет в строке')
        return false;
    }
}

let result_5 = search_string(search, string_3);
console.log(result_5);





