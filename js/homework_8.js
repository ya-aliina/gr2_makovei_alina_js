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

function createBlueSquare (numberOfSquares) {
    for (let i = 0; i < numberOfSquares; i++) {

        let square = document.createElement('div');
        square.setAttribute('class', 'square')
        document.body.prepend(square);

        square.style.height = '50px';
        square.style.width = '50px';
        square.style.background = 'blue';
        square.style.margin = '0 auto';
        square.style.marginBottom = '10px'
    }
    return true;
}

setTimeout(createBlueSquare, 3000, 10);

function changeSquareToBiggerAndGreen (numberOfSquares) {
    let arrayOfSquares = document.getElementsByClassName('square');

    for (let i = 0; i < numberOfSquares; i++) {

        let elementArrayOfSquares = arrayOfSquares[i];

        elementArrayOfSquares.style.height = '100px';
        elementArrayOfSquares.style.width = '100px';
        elementArrayOfSquares.style.background = 'green';
        elementArrayOfSquares.style.margin = '0 auto';
        elementArrayOfSquares.style.marginBottom = '10px';
    }
    return true;
}

setTimeout(changeSquareToBiggerAndGreen, 6000, 10);

function changeSquaresToRedAndYellow (numberOfSquares) {
    let arrayOfSquares = document.getElementsByClassName('square');

    for (let i = 0; i < numberOfSquares; i++) {

        let elementArrayOfSquares = arrayOfSquares[i];

        if (i % 3 === 0) { //или i % 3 - 2 === 0 ?
            elementArrayOfSquares.style.background = 'red';
        } else {
            elementArrayOfSquares.style.background = 'yellow';
        }
    }
    return true;
}

setTimeout(changeSquaresToRedAndYellow, 9000, 10);

function deleteSquaresChangeBackground (numberOfSquares) {
    let arrayOfSquares = document.getElementsByClassName('square');
    let page = document.documentElement;

    for (let i = numberOfSquares - 1; i >= 0; i -= 1) {
        let elementArrayOfSquares = arrayOfSquares[i];
        elementArrayOfSquares.remove();
    }
    page.style.background = 'black'

    return true;
}

setTimeout(deleteSquaresChangeBackground, 12000, 10);