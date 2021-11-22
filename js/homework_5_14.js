/*--------------------------------------Задача №14--------------------------------------------
Создайте функцию is_empty(obj), которая возвращает true, если в объекте нет свойств и false –
если хоть одно свойство есть.
Например:
var schedule = {};
isEmpty(schedule) ; // должно вернуть true
schedule["8:30"] = "подъём";
isEmpty(schedule) ; //должно вернуть false
--------------------------------------------------------------------------------------------*/
// 1 вариант решения

// function is_empty(obj) {
//     for (let key in obj) {
//         return false;
//     }
//     return true;
// }

// 2 вариант решения
function is_empty(obj) {
    if (Object.keys(scedule).length === 0) {
        console.warn('Данный объект не содержит элементов');
        return true;
    }
    return false;
}

let scedule = {};
scedule['8:30'] = 'Подъем';
scedule['9:00'] = 'Завтрак';

console.log(is_empty(scedule))
