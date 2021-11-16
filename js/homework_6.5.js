const MS_SECOND = 1000;
const MS_MINUTE = MS_SECOND * 60;
const MS_HOUR = MS_MINUTE * 60;
const MS_DAY = MS_HOUR * 24;

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

let date = new Date('1999-04-22');
console.log( get_day(date) );
