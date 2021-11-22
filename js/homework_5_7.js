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
