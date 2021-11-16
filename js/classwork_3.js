/*-------------------------Самостоятельная работа-----------------------------
Написать код, который будет выполнять 5 действия на странице index.html:
+1. Создать 1000 квадратов голубого цвета размером 70*70 пикселей, и распологает
их горизонтально. 
+2. Изменить цвет каждого квадрата на фиолетовый, и изменить размер 10*10 пикселей.
+3. Вывести на каждом квадрате его порядковый номер.
+4. Изменить цвет каждого 3-го квадрата на красный, каждый 15 квадрат сделать
треугольником цветом хаки.
+5. Удалить все красные квадраты.
Каждое действие должно выполниться через 2 секунды от предыдущего, первое
действие также должно иметь задержку 2 секунды.
------------------------------------------------------------------------------*/
const MS_SECOND = 1000;
let squares = document.getElementsByTagName('div');

function createBlueSquare (numberOfSquares) {
    document.body.style.display = 'flex';

    for (let i = 0; i < numberOfSquares; i++) {
        let square = document.createElement('div');
        document.body.prepend(square);

        square.style.minHeight = '70px';
        square.style.minWidth = '70px';
        square.style.background = 'aqua';
        square.style.marginRight = '10px'
    }
    return true;
}

function changeSquareToSmallerAndPurple (numberOfSquares) {

    for (let i = 0; i < numberOfSquares; i++) {
        let oneOfSquares = squares[i];

        oneOfSquares.style.minHeight = '10px';
        oneOfSquares.style.minWidth = '10px';
        oneOfSquares.style.maxHeight = '10px';
        oneOfSquares.style.background = '#a840ff';
        oneOfSquares.style.margin = '0 auto';
        oneOfSquares.style.marginRight = '10px';
    }
    return true;
}

function addNumber (ourCollection) {

    for (let i = 0; i < ourCollection.length; i++) {
        let oneOfSquares = ourCollection[i];

        oneOfSquares.style.fontSize = '6px';
        oneOfSquares.style.color = 'white';
        oneOfSquares.style.display = 'flex';
        oneOfSquares.style.alignItems = 'center';
        oneOfSquares.style.justifyContent = 'center';

        oneOfSquares.innerText = `${i + 1}`;
    }
    return true;
}

function changeColorAndAddTriangle (ourCollection) {
    for (let i = 0; i < ourCollection.length; i++) {
        let oneOfSquares = ourCollection[i];

        if ((i + 1) % 3 === 0 && (i + 1) % 15 !== 0) {
            oneOfSquares.style.background = 'red'
        } 
        if ((i + 1) % 15 === 0) {
            oneOfSquares.style.background = 'linear-gradient(to right bottom, transparent 48%, rgb(114, 134, 57) 50%) left / 50.25% 100% no-repeat, linear-gradient(to left bottom, transparent 48%, rgb(114, 134, 57) 50%) right / 50.25% 100% no-repeat';
            oneOfSquares.style.alignItems = 'flex-end';
            oneOfSquares.style.fontSize = '5px';
           
        }
    }
    return true;
}

function deleteRedSquares (ourCollection) {
    for (let i = 0; i >= ourCollection.length; i++) {
        let oneOfSquares = ourCollection[i];

        if ( oneOfSquares.style.background === 'red') {
            oneOfSquares.remove();
        }
    }
    return true;
}

setTimeout(createBlueSquare, 2 * MS_SECOND, 1000);
setTimeout(changeSquareToSmallerAndPurple, 4 * MS_SECOND, 1000);
setTimeout(addNumber, 6 * MS_SECOND, squares);
setTimeout(changeColorAndAddTriangle, 8 * MS_SECOND, squares);
setTimeout(deleteRedSquares, 10 * MS_SECOND, squares);
