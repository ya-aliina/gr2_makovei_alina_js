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
