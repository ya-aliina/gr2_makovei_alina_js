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
