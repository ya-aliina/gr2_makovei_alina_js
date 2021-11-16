const MS_SECOND = 1000;
const MS_MINUTE = MS_SECOND * 60;
const MS_HOUR = MS_MINUTE * 60;
const MS_DAY = MS_HOUR * 24;

/*--------------------------------------Задача №1------------------------------------------------
 Напишите функцию get_tomorrow(), которая возвращает завтрашнее число в формате 26 ноября 2019г
-----------------------------------------------------------------------------------------------*/
function get_new_date () {
    const MONTHS_NAMES = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

    let today = new Date();
    let tomorrow = today.getTime() + MS_DAY;
    let result_date = new Date (tomorrow);

    let year = result_date.getFullYear();
    let day_number = result_date.getDate();
    let month = result_date.getMonth();

    for (let i = 0; i <= MONTHS_NAMES.length; i++) {
        if (i === month) {
            month = MONTHS_NAMES[i];
        }
    }
    return  `${day_number} ${month} ${year}г `;
}
console.log( get_new_date() );

/*--------------------------------------Задача №2------------------------------------------------
 Написать функцию, которая находит разницу в днях между двумя заданными датами.  Например,
 заданные даты «20/01/2010» и «15/01/2010», функция должна вернуть число 5.
 Разницу в днях необходимо считать по модулю.
-----------------------------------------------------------------------------------------------*/
function find_dates_difference (date_1, date_2) {
    if ( !(date_1 instanceof Date) || !(date_2 instanceof Date) ) {
        console.error('Данные значения не являются датой.');
        return null;
    } else {
        if ( isNaN( Date.parse(date_1) ) || isNaN( Date.parse(date_2) ) ) {
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

/*--------------------------------------Задача №3------------------------------------------------
 Напишите функцию get_count_work_days(date1, date2), которая будет считать количество рабочих
 дней между двумя заданными датами.
-----------------------------------------------------------------------------------------------*/
function get_count_work_days(date1, date2) {
    if ( !(date1 instanceof Date) || !(date2 instanceof Date) ) {
        console.error('Данные значения не являются датой.');
        return null;
    } else {
        if ( isNaN( Date.parse(date1) ) || isNaN( Date.parse(date2) ) ) {
            console.error('Данные значения не являются датой.');
            return null;
        }
    }

    let date1_ms = date1.getTime();
    let date2_ms = date2.getTime();
    let work_days = 0;

    for (let i = date1_ms; i <= date2_ms; i = i + MS_DAY) {
        let date_i = new Date(i);
        let day_of_week = date_i.getDay();

        if (day_of_week >= 1 && day_of_week < 6) {
            work_days++;
        }
    }
    return work_days;
}

let date_3 = new Date('2021-11-08');
let date_4 = new Date('2021-11-21');

console.log(get_count_work_days(date_3, date_4));

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

/*--------------------------------------Задача №5------------------------------------------------
Напишите функцию get_day(date), которая возвращает день недели от задан-ной даты. Например:
get_day(’27-11-1988’) должно вернуть «воскресенье»
-----------------------------------------------------------------------------------------------*/
function get_day(date) {
    if ( !(date instanceof Date) ) {
        console.error('Данные значения не являются датой.');
        return null;
    } else {
        if ( isNaN( Date.parse(date) ) ) {
            console.error('Данные значения не являются датой.');
            return null;
        }
    }

    const NAME_DAY_OF_WEEK = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    let day_of_week = date.getDay();

    for (let i = 0; i < NAME_DAY_OF_WEEK.length; i++ ) {
        let element_day_of_week = NAME_DAY_OF_WEEK[i];
        if (i === day_of_week) {
            day_of_week = element_day_of_week;
        }
    }
    return day_of_week;
}
let date_6 = new Date('1999-04-22');
console.log( get_day(date_6) );
