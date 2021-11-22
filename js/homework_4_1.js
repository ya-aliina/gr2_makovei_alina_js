/*==================================Задача №1=============================================
Напишите функцию get_min( arr ), которая находит минимальное значение в заданном массиве.
==========================================================================================*/

// 1 вариант решения
let array = [12, 23, 24, 456, -35, 748, -354, -50, 0, 92, 99, 74, -77, 49,]

function get_min (arr) {
    // function compare_number(a, b) {
    //     return a - b;
    // }
    // console.log (arr.sort(compare_number));
    console.log (arr.sort( (a, b) => a - b) );
    return arr[0];
}

// 2 вариант решения

function get_min(arr) {
    let min;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < arr[i+1]) {
            min = arr[i];
        }
    }
    return min;
}

console.log(`Минимальное значение массива: ${get_min(array)}.`);
