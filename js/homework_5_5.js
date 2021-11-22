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
