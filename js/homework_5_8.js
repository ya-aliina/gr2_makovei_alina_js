/*--------------------------------------Задача №8--------------------------------------------
Напишите функцию get_short_fio(full_fio), которая преобразует полное ФИО full_fio в краткое.
Например: get_short_fio("Иванов Сергей Петрович"), функция должна вернуть "Иванов С.П."
--------------------------------------------------------------------------------------------*/

function get_short_fio(full_fio) {
    let part_fio = full_fio.split(' ');

    if  (part_fio.length !== 3) {
        console.error('Введите Фамилию, Имя и Отчество');
        return null;
    }

    let surname = part_fio[0];
    let name = part_fio[1];
    let patronymic = part_fio[2];

    let surname_first_letter = surname[0].toUpperCase();
    let surname_without_first_letter = surname.slice(1, surname.length).toLowerCase();
    surname = surname_first_letter + surname_without_first_letter;

    let short_name = name.slice(0,1);
    let short_patronymic = patronymic.slice(0,1);

    short_name = short_name.toUpperCase() + '.';
    short_patronymic = short_patronymic.toUpperCase() + '.';

    let result = `${surname} ${short_name} ${short_patronymic} `;
    return result;
}

let full_fio  = 'иванов сергей петрович';
console.log( get_short_fio(full_fio) );
