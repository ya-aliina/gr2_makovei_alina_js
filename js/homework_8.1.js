/*-------------------------------------------------------------------------------
    Написать код, который будет выполнять 4 действия на странице index.html:
1. Создать 10 квадратов голубого цвета размером 50 на 50 пикселей, и распологает
их вертикально.

2. Изменить цвет каждого квадрата на зеленый, и увеличить размер до 100 на 100
пикселей.

3. Изменить цвет каждого 3-го квадрата на красный, остальных на желтый.

4. Удалить все квадраты, и сделать фон страницы черным.
Каждое действие должно выполниться через 3 секунды от предыдущего, первое действие
также должно иметь задержку 3 секунды.

----------------------------------------------------------------------------------*/
const MS_SECOND = 1000;
let squares = document.getElementsByTagName('div');

function createBlueSquare (numberOfSquares) {
    for (let i = 0; i < numberOfSquares; i++) {
        let square = document.createElement('div');
        document.body.prepend(square);

        square.style.height = '50px';
        square.style.width = '50px';
        square.style.background = 'aqua';
        square.style.margin = '0 auto';
        square.style.marginBottom = '10px'
    }
    return true;
}

function changeSquareToBiggerAndGreen (ourCollection) {

    for (let i = 0; i < ourCollection.length; i++) {
        let oneOfSquares = ourCollection[i];

        oneOfSquares.style.height = '100px';
        oneOfSquares.style.width = '100px';
        oneOfSquares.style.background = 'green';
        oneOfSquares.style.margin = '0 auto';
        oneOfSquares.style.marginBottom = '10px';
    }
    return true;
}

function changeSquaresToRedAndYellow (ourCollection) {

    for (let i = 0; i < ourCollection.length; i++) {
        let oneOfSquares = ourCollection[i];

        if ( (i + 1) % 3 === 0 ) {
            oneOfSquares.style.background = 'red';
        } else {
            oneOfSquares.style.background = 'yellow';
        }
    }
    return true;
}

function deleteSquaresChangeBackground (ourCollection) {

    for (let i = ourCollection.length - 1; i >= 0; i -= 1) {
        let oneOfSquares = ourCollection[i];
        oneOfSquares.remove();
    }

    document.documentElement.style.background = 'black';
    return true;
}

setTimeout(createBlueSquare, 3 * MS_SECOND, 10);
setTimeout(changeSquareToBiggerAndGreen, 6 * MS_SECOND, squares);
setTimeout(changeSquaresToRedAndYellow, 9 * MS_SECOND, squares);
setTimeout(deleteSquaresChangeBackground, 12 * MS_SECOND, squares);
