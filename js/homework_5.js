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

/*--------------------------------------Задача №4--------------------------------------------
Напишите функцию up_first(str), которая возвращает строку str с заглавным первым символом,
остальные символы должны быть в нижнем регистре (пример: up_first("иванов"), должно вернуть
"Иванов", up_first("ИВАНОВ"), должно вернуть "Иванов")
--------------------------------------------------------------------------------------------*/

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

let string_1 = prompt('Введите слово или предложение:');

let result_4 = up_first(string_1);
if (result_4 !== null) {
    alert(`Ваше предложение: ${result_4}`)
}

/*--------------------------------------Задача №5--------------------------------------------
Напишите функцию search_string(search, string), которая будет проверять наличие подстроки
search в строке string.
Функция должна вернуть булев тип и быть регистронезависимой (использовать метод indexOf)
--------------------------------------------------------------------------------------------*/

function search_string(search, string) {

    if (string.length === 0 || search.length === 0 ) {
        alert('Вы ничего не ввели');
        return null;
    }
    search = search.toLowerCase();
    string = string.toLowerCase();
    console.log({string})

    let search_index = string.indexOf(search);

    if (search_index >= 0) {
        alert('Да, такое значение есть в строке');
        return true;
    }  else {
        alert('Нет, такого значения нет в строке')
        return false;
    }
}

let string_3 = prompt('Введите предложение');
let search = prompt('Введите искомое значение');

let result_5 = search_string(search, string_3);
console.log(result_5);

/*--------------------------------------Задача №6--------------------------------------------
Напишите функцию truncate(str, maxlength), которая проверяет длину строки str, и если она
превосходит maxlength – заменяет конец str на "...", так чтобы ее длина стала равна maxlength.
--------------------------------------------------------------------------------------------*/
function truncate(str, maxlength) {
    if (typeof str !== 'string') {
        console.error('Это не строка!');
        return null;
    }

    if (str.length > maxlength) {
        let symbols = '...';
        let maxlength_without_symbols = maxlength - symbols.length;

        let short_str = str.slice(0, maxlength_without_symbols);

        let result = (`${short_str}${symbols}`);
        return result;
    }
}

let str = 'Гремел гром и ярко сверкала молния';
let max_length = 21;

console.log(truncate(str, max_length));

/*--------------------------------------Задача №7--------------------------------------------
Напишите функцию get_type_file( file_name ), которая получает расширение файла в заданном
имени файла file_name (пример: get_type_file("readme.txt"), функция должна вернуть ".txt")
--------------------------------------------------------------------------------------------*/

function get_type_file( file_name ) {
    if (typeof file_name !== 'string') {
        console.error('Это не строка!');
        return null;
    }

    let new_array = file_name.split('.');
    let index_last_element = new_array.length - 1;
    let last_element = new_array[index_last_element];

    let result = `.${last_element}`;
    return result;
}

let file_name = 'readme.txt';
console.log( get_type_file(file_name) );


/*--------------------------------------Задача №8--------------------------------------------
Напишите функцию get_short_fio(full_fio), которая преобразует полное ФИО full_fio в краткое.
Например: get_short_fio("Иванов Сергей Петрович"), функция должна вернуть "Иванов С.П."
--------------------------------------------------------------------------------------------*/

function get_short_fio(full_fio) {
    let part_fio = full_fio.split(' ');

    if  (part_fio.length !== 3) {
        console.error('Введите Фамилию, Имя и Отчество');
        return null;
    }

    let surname = part_fio[0];
    let name = part_fio[1];
    let patronymic = part_fio[2];

    let surname_first_letter = surname[0].toUpperCase();
    let surname_without_first_letter = surname.slice(1, surname.length).toLowerCase();
    surname = surname_first_letter + surname_without_first_letter;

    let short_name = name.slice(0,1);
    let short_patronymic = patronymic.slice(0,1);

    short_name = short_name.toUpperCase() + '.';
    short_patronymic = short_patronymic.toUpperCase() + '.';

    let result = `${surname} ${short_name} ${short_patronymic} `;
    return result;
}

let full_fio  = 'иванов сергей петрович';
console.log( get_short_fio(full_fio) );

/*--------------------------------------Задача №9--------------------------------------------
Напишите функцию get_order(string), которая отсортирует все слова в заданном предложении string в алфавитном порядке.
Например: get_order("ноты акустика гитара"), функция должна вернуть "акустика гитара ноты"
--------------------------------------------------------------------------------------------*/

function get_order(string) {
    if (typeof string !== 'string') {
        console.error('Это не строка!');
        return null;
    }

    let array = string.split(' ');
    array = array.sort();
    string = array.join(' ');
    return string;
}

let str1 = 'ноты акустика гитара';
console.log( get_order(str1) );
/*--------------------------------------Задача №10--------------------------------------------
Напишите функцию get_random( arr ), которая вернет случайный элемент входящего массива arr.
--------------------------------------------------------------------------------------------*/
function get_random( arr ) {
    if ( !Array.isArray(arr) ) {
        console.error('Это не массив!');
        return null;
    }

    let min = 0;
    let max = arr.length;
    let temp = Math.random();

    let random_index = (max - min) * temp;
    let round_random_index = Math.round(random_index);
    let random_element = arr[round_random_index];

    return random_element;
}

let array_random = [31, 60, 17, 42, 38, 65, 41, 99, 15, 22, 7, 5, 100];
console.log( get_random(array_random) );

/*--------------------------------------Задача №11--------------------------------------------
Напишите функцию get_max( arr ), которая находит максимальное значение в заданном массиве.
--------------------------------------------------------------------------------------------*/
function get_max( arr ) {
    if ( !Array.isArray(arr) ) {
        console.error('Это не массив!');
        return null;
    }

    let result = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];

        if (element > result) {
            result = element;
        }
    }
    return result;
}

let some_array = [23, 12, 9, 62, 25, 95, 99, 34, 96, 74];
console.log( get_max(some_array) );

/*--------------------------------------Задача №12--------------------------------------------
Напишите функцию get_uniq_arr( arr ), которая удаляет из заданного массива arr элементы,
которые дублируются (необходимо использовать цикл)
--------------------------------------------------------------------------------------------*/

function check_uniq_arr( arr ) {
    if ( !Array.isArray(arr) ) {
        console.error('Это не массив!');
        return null;
    }

    result = true;

    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        let next_index_element = i + 1;
        let index = arr.indexOf(element, next_index_element);

        while (index > 0) {
            result = false;
            arr.splice(index, 1);
            index = arr.indexOf(element, next_index_element);
        }
    }
    return result;
}

let some_arr = [34, 74, 7, 93, 33, 54, 32, 7, 64, 19, 98, 7, 34, 54, 34];
console.log( check_uniq_arr(some_arr) );
console.log( some_arr );

/*--------------------------------------Задача №13--------------------------------------------
Задача на синтаксис объектов. Напишите код, по строке на каждое действие.
•  Создайте пустой объект user.
•  Добавьте свойство name со значением Вася.
•  Добавьте свойство surname со значением Петров.
•  Поменяйте значение name на Сергей.
•  Удалите свойство name из объекта.
--------------------------------------------------------------------------------------------*/
let user = {};
    user['name'] = 'Вася';
    user['surname'] = 'Петров';
    user['name'] = 'Сергей';
    delete user['name'];

/*--------------------------------------Задача №14--------------------------------------------
Создайте функцию is_empty(obj), которая возвращает true, если в объекте нет свойств и false –
если хоть одно свойство есть.
Например:
var schedule = {};
isEmpty(schedule) ; // должно вернуть true
schedule["8:30"] = "подъём";
isEmpty(schedule) ; //должно вернуть false
--------------------------------------------------------------------------------------------*/
// 1 вариант решения

// function is_empty(obj) {
//     for (let key in obj) {
//         return false;
//     }
//     return true;
// }

// 2 вариант решения
function is_empty(obj) {
    if (Object.keys(scedule).length === 0) {
        console.warn('Данный объект не содержит элементов');
        return true;
    }
    return false;
}

let scedule = {};
scedule['8:30'] = 'Подъем';
scedule['9:00'] = 'Завтрак';

console.log(is_empty(scedule))

/*--------------------------------------Задача №15--------------------------------------------
Есть объект points с оценками. Напишите код, который выведет сумму всех оценок.
    var points = {
    "Вася": 200,
    "Петя": 300,
    "Даша": 250,
    "Андрей": 150,
    "Сергей": 450,
};
Найти имена тех, кто получает минимальную и максимальную оценку.
--------------------------------------------------------------------------------------------*/

let points = {
    'Вася': 200,
    'Петя': 300,
    'Даша': 250,
    'Андрей': 150,
    'Сергей': 450,
};

function sum(points) {
    if ( Object.keys(points).length === 0 ) {
        console.warn('Данный объект не содержит элементов');
        return null;
    }

    let sum = 0;

    for (let key in points) {
        sum += points[key];
    }
    return sum;
}

console.log(`Сумма оценок составляет: ${sum (points)} баллов.`);

function min_points(points) {
    if ( Object.keys(points).length === 0 ) {
        console.warn('Данный объект не содержит элементов');
        return null;
    }

    let result = Infinity;
    let name;

    for (key in points) {

        if (points[key] < result) {
            result = points[key];
            name = key;
        }
    }
    return name;
}

console.log( min_points(points) );

function max_points(points) {
    if ( Object.keys(points).length === 0 ) {
        console.warn('Данный объект не содержит элементов');
        return null;
    }

    let result = -Infinity;
    let name;

    for (key in points) {

        if (points[key] > result) {
            result = points[key];
            name = key;
        }
    }
    return name;
}

console.log( max_points(points) );