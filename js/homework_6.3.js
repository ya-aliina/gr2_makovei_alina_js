const MS_SECOND = 1000;
const MS_MINUTE = MS_SECOND * 60;
const MS_HOUR = MS_MINUTE * 60;
const MS_DAY = MS_HOUR * 24;

/*--------------------------------------Задача №3------------------------------------------------
 Напишите функцию get_count_work_days(date1, date2), которая будет считать количество рабочих
 дней между двумя заданными датами.
-----------------------------------------------------------------------------------------------*/
function get_count_work_days(date_1, date_2) {
    if ( !(date_1 instanceof Date) || !(date_2 instanceof Date) ) {
        console.error('Данные значения не являются датой.');
        return null;
    } else {
        if ( isNaN( Date.parse(date_1) ) || isNaN( Date.parse(date_2) ) ) { //Проверяем на валидность
            console.error('Данные значения не являются датой.');
            return null;
        }
    }

    let date_1_ms = date_1.getTime();
    let date_2_ms = date_2.getTime();
    let work_days = 0;

    for (let i = date_1_ms; i <= date_2_ms; i = i + MS_DAY) {
        let date_i = new Date(i);
        let day_of_week = date_i.getDay();

        if (day_of_week >= 1 && day_of_week < 6) {
            work_days++;
        }
    }
    return work_days;
}

let date_1 = new Date('2021-11-08');
let date_2 = new Date('2021-11-21');

console.log( get_count_work_days(date_1, date_2) );
