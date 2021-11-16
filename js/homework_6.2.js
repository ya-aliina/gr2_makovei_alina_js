/*--------------------------------------Задача №2------------------------------------------------
 Написать функцию, которая находит разницу в днях между двумя заданными датами.  Например,
 заданные даты «20/01/2010» и «15/01/2010», функция должна вернуть число 5.
 Разницу в днях необходимо считать по модулю.
-----------------------------------------------------------------------------------------------*/
const MS_DAY = MS_HOUR * 24;

function find_dates_difference (date_1, date_2) {
    if ( !(date_1 instanceof Date) || !(date_2 instanceof Date) ) {
        console.error('Данные значения не являются датой.');
        return null;
    } else {
        if ( isNaN( Date.parse(date_1) ) || isNaN( Date.parse(date_2) ) ) {   //Проверяет дату на валидность
            console.error('Данные значения не являются датой.');
            return null;
        }
    }

    let difference_in_ms = Math.abs( date_1 - date_2);
    let difference_in_day = difference_in_ms / MS_DAY;

    return difference_in_day;
}
let date_1 = new Date('2010-01-20');
let date_2 = new Date('2010-01-15');

console.log( find_dates_difference(date_1, date_2) );
