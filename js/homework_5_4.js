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
