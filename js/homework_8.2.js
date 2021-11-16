/*------------------------------Задание №2----------------------------------------
Написать код, который создаст на странице 2 прямоугольника разного цвета и размера.
При наведении курсора мыши на прямоугольник вывести в консоль размер этого
прямоугольника.
При клике на прямоугольник - выдать уведомление, в котором будет русское название
цвета этого прямоугольника.
---------------------------------------------------------------------------------*/
document.body.style.display = 'flex';

//--------------Первый прямоугольник--------------
let firstRectangle = document.createElement('div');
firstRectangle.setAttribute('rusСolor', 'розовый');
document.body.prepend(firstRectangle);

firstRectangle.style.height = '150px';
firstRectangle.style.width = '300px';
firstRectangle.style.background = 'pink';
firstRectangle.style.marginRight = '50px'

//--------------Второй прямоугольник--------------
let secondRectangle = document.createElement('div');
secondRectangle.setAttribute('rusСolor', 'бирюзовый');
document.body.append(secondRectangle);

secondRectangle.style.height = '100px';
secondRectangle.style.width = '200px';
secondRectangle.style.background = '#30d5c8';

//-------------------События------------------------
let rectangles = document.getElementsByTagName('div');

for (let i = 0; i < rectangles.length; i++ ) {
    let rectangle = rectangles[i];

    rectangle.onmouseover = function () {
        console.log( `${this.style.height}, ${this.style.width}` );
    }

    rectangle.onclick = function () {
        alert( this.getAttribute('rusСolor') );
    }
}
