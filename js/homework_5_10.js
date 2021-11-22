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
