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
