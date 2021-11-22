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
