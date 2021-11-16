/*--------------------------Задание №1---------------------------------------
Написать код с помощью JQuery, который создаст на странице 2 прямоугольника
разного цвета и размера.
При наведении курсора мыши на прямоугольник вывести в консоль размер этого
прямоугольника.
При клике на прямоугольник - выдать уведомление, в котором будет русское название
цвета этого прямоугольника.
----------------------------------------------------------------------------*/
$(document).ready(function() {
    $('body').css('display','flex');

    for (let i = 0; i < 2; i++) {
        $('body').append('<div></div>');
    }

    $('div:first').attr('rusColor', 'розовый');
    $('div:first').css({
        'height' : '150px',
        'width' : '300px',
        'background' : 'pink',
        'marginRight' : '50px',
    });

    $('div:last').attr('rusColor', 'бирюзовый');
    $('div:last').css({
        'height' : '100px',
        'width' : '200px',
        'background' : '#30d5c8',
    });

   $('div').on('click', function (event) {
       alert(`${ $(this).attr('rusColor') }`);
   });

    $('div').on('mouseover', function (event) {
        console.log(`${ $(this).width() }, ${ $(this).height() }`);
    })
});




