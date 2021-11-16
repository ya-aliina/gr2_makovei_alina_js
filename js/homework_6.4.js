const MS_SECOND = 1000;
const MS_MINUTE = MS_SECOND * 60;
const MS_HOUR = MS_MINUTE * 60;
const MS_DAY = MS_HOUR * 24;

/*--------------------------------------Задача №4------------------------------------------------
 Напишите функцию get_count_days(date) , которая будет считать количество дней до Нового года
 от date, если оно задано, иначе посчитать количество дней от текущей даты
-----------------------------------------------------------------------------------------------*/

function get_count_days(date = new Date()) {
    if ( !(date instanceof Date) ) {
        console.error('Данные значения не являются датой.');
        return null;
    } else {
        if ( isNaN( Date.parse(date) ) ) {
            console.error('Данные значения не являются датой.');
            return null;
        }
    }

    let date_year = date.getFullYear();
    let new_year = new Date (`${date_year}-12-31`);

    let date_in_ms = date.getTime();
    let new_year_in_ms = new_year.getTime();

    let count_days_in_ms = new_year_in_ms - date_in_ms ;
    let count_days = Math.trunc(count_days_in_ms / MS_DAY) ;

    return count_days;
}

let date_5;
console.log( get_count_days(date_5) );
