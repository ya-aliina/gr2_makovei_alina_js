/*-----------------------------------------------------------
Напишите функцию, которая сравнивает два массива и возвращает
true, если они идентичны.
------------------------------------------------------------*/
function compare_arrays (array1, array2) {
    if (Array.isArray(array1) === false || Array.isArray(array1) === false ) {
        alert('Это не массив');
        return null;
    }

    if (array_1.length !== array_2.length ) {
        return false;
    } else {
        for (let i = 0; i <= array_1.length - 1; i++ ) {
            element1 = array1[i];
            element2 = array2[i];

            if (element1 !== element2) {
                return false;
            }
        }
    }
    return true;
}
let result = compare_arrays (array_1, array_2);
console.log (result);

/*-----------------------------------------------------------
Напишите функцию, возвращает новый массив без предоставленных
значений. Используйте примитивные типы.
------------------------------------------------------------*/
function delete_elements(array, check_array) {
    if (!Array.isArray(array) || !Array.isArray(check_array)) {
        alert('Это не массив');
        return null;
    }

    let new_array = [];

    array.forEach(function(element) {
        if (check_array.indexOf(element) === -1) {
            new_array.push(element);
        }
    });
    return new_array;
}

let first_array = [1, 2, 2, 34, 45, 34, 3, 7, 8, 7];
let second_array = [1, 7];

console.log( delete_elements(first_array, second_array) );
