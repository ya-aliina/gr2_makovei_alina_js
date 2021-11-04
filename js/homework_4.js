/*==================================Задача №1=============================================
Напишите функцию get_min( arr ), которая находит минимальное значение в заданном массиве.
==========================================================================================*/

let array_1 = [12, 23, 24, 456, -35, 748, -354, -50, 0, 92, 99, 74, -77, 49,]

function get_min (arr) {
    // function compare_number(a, b) {
    //     return a - b;
    // }
    // console.log (arr.sort(compare_number));
    console.log (arr.sort( (a, b) => a - b) );
    return arr[0];
}

console.log(`Минимальное значение массива: ${get_min(array_1)}.`);

/*==================================Задача №2=============================================
Создайте массив с четными числами в диапазоне от 500 до 888 включительно.
==========================================================================================*/
let min = 500;
let max = 888;

let array2 = [];

min = Number(min);
max = Number(max);

function get_even (arr) {

    for (let i = min; i <= max; i++) { // или можно вместо i++  написать i += 2
        if (i % 2 !== 0) {
            i++;
        } else {
            arr.push(i);
            i++
        }
    }
    return arr;
}

console.log(get_even(array2))

/*==================================Задача №3=============================================
Необходимо написать функцию, которая принимает слово в виде строки,
функция будет возвращать слово с буквами в обратном порядке,
например в функцию передаем слово “ТЕЛЕФОН”, на выходе имеем слово «НОФЕЛЕТ».
==========================================================================================*/

let word = prompt('Введите слово:');

function show_reverse_word(word) {
    let split_word = word.split('');
    let reverse_word = split_word.reverse();
    return reverse_word.join('');
}

alert(`Ваше слово в обратном порядке: ${show_reverse_word(word)}`);

/*==================================Задача №4=============================================
Необходимо написать мини-игру «Города». Нужно бесконечно запрашивать у пользователя ввод города.
Проверять если последняя буква предыдущего слова совпадает с первой буквой следующего слова – засчитываем +1 очко.
Если не совпадает выдаем сообщение «Игра окончена. Ваши очки: {кол-во очков}».
==========================================================================================*/

let city = prompt('Введите название города:');
let last_letter = get_last_letter(city);
let new_city;
let first_letter;
let score = 0;

console.log(city);

function get_last_letter (arr) { // Если 'ь' возвращаем букву, которая перед ним
    let last_letter = arr[arr.length - 1];
    let prev_letter;

    if (last_letter === 'ь') {
        prev_letter = arr[arr.length - 2];
        return prev_letter;
    } else {
        return last_letter;
    }
}

do {
    new_city = prompt(`Введите название города на букву "${last_letter}":`);
    first_letter = new_city[0];
    console.log(new_city);

    if (first_letter === last_letter) {
        score ++;
        last_letter = get_last_letter(new_city);
    } else {
        break
    }
    
} while (first_letter !== last_letter) {
    alert(`Игра окончена. Ваши очки: ${score}`);
}
