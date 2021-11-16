/*--------------------------Задачие №2------------------------------------
Написать код, который будет выполнять 5 действия на странице index.html:
+1. Создать 100 квадратов голубого цвета размером 70*70 пикселей, и
распологает их вертикально.
+2. Изменить цвет каждого квадрата на фиолетовый, и изменить размер 100*100
пикселей.
+3. Вывести на каждом квадрате его порядковый номер.
+4. Изменить цвет каждого 3-го квадрата на красный, каждый 15 квадрат сделать
треугольником цветом хаки и любые 5 сделать желтым.
+5. Удалить все красные квадраты.
+ Каждое действие должно выполниться через 2 секунды от предыдущего, первое
действие также должно иметь задержку 2 секунды.
 -----------------------------------------------------------------------*/
$(document).ready(function() {

    const MS_SECOND = 1000;
 
    function createBlueSquares (numberOfSquares) {
        for (let i = 0; i < numberOfSquares; i++) {
            $('body').append('<div></div>');
        }

        $('div').css({
            'height' : '70px',
            'width' : '70px',
            'background' : '#87ceeb',
            'margin': '0 auto',
            'margin-bottom' : '10px',
        });
        return true;
    }

    function  changeToBiggerAndPurple () {
        $('div').css({
            'height' : '100px',
            'width' : '100px',
            'background' : '#ab99b8',
            'margin': '0 auto',
            'margin-bottom' : '10px',
        });
        return true;
    }

    function  addNumber () {
        $('div').text(function(index, text) {
            text = index + 1;
            return text;
        });

        $('div').css({
            'color' : 'white',
            'display' : 'flex',
            'justify-content' : 'center',
            'align-items' : 'center',
        });
        return true;
    }

    function changeColorAndAddTriangle () {
        let actions = 0;

        $('div').each(function (index, element) {

            if ( (index + 1) % 3 === 0 && (index + 1) % 15 !== 0 ) {
                $(element).css({
                    'background' : 'red',
                });
                $(element).attr('class', 'delete');
            }
            if ( (index + 1) % 15 === 0 ) {
                $(element).css({
                    'background' : 'linear-gradient(to right bottom, transparent 48%, rgb(114, 134, 57) 50%) left / 50.25% 100% no-repeat, linear-gradient(to left bottom, transparent 48%, rgb(114, 134, 57) 50%) right / 50.25% 100% no-repeat',
                });
            }
            if ( (index - 1) % 3 === 0 && actions < 5) {
                $(element).css({
                    'background' : 'yellow',
                    'color' : 'black',
                });
                actions ++;
            }
        });
        return true;
    }

    function deleteRedSquares () {
        $('div').each(function (index, element) {

            if  ($(element).css('background-color') === 'rgb(255, 0, 0)') {
                $(element).remove();
            }
            return true;
        });
    }

    setTimeout(createBlueSquares, 2 * MS_SECOND, 100);
    setTimeout(changeToBiggerAndPurple, 4 * MS_SECOND);
    setTimeout(addNumber, 6 * MS_SECOND );
    setTimeout(changeColorAndAddTriangle, 8 * MS_SECOND );
    setTimeout(deleteRedSquares, 10 * MS_SECOND );
});
