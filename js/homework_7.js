/*---------------------------------------------------------------------
Ч1 С помощью функции-конструктора, написать создание объекта Калькулятор.
Функция конструктор принимает в качестве единственного параметра
название калькулятора.

Ч2 Объект калькулятор должен уметь выполнять такие действия: сложение,
вычитаение, умножение и деление.
В действия сложение/умножение возможно передать произвольное количество
слогаемых/множителей.
Действия вычитаение/деление принимают только 2 аргумента. Первый
параметр вычитаемое/делимое, второй параметр вычитатель/делитель.

Ч3 Калькулятор должен хранить историю действий в виде строки в таком
формате: Имя калькулятора (Дата Время): действие, результат, (параметры).
Например после действия сумма в истории должна появится такая запись:
"Мой калькулятор (8.11.2021 20:30): сумма = 10, (5, 5)"

Калькулятор должен уметь вывести историю действий в консоль и уметь
очищать историю действий.
----------------------------------------------------------------------*/

function Calculator (calculatorName) {
    this.name = calculatorName;
    
    this.history = [];

    // Проверка входящих параметров
    this.checkTwoElementsIsNan = function (element1, element2) {
        if ( isNaN(element1) || isNaN(element2) ) {
            console.error('Введенное значение не число!');
            return true;
        }
    };

    this.checkArrayElementsIsNan = function (array) {
        for (let i = 0; i < array.length; i++) {
            if (typeof (array[i]) !== 'number') {
                console.error('Введенное значение не число!');
                return true;
            }
        }
    };

    //сложение
    this.doAddition = function (...arg) {
        if ( this.checkArrayElementsIsNan(arg) ) {
            return null;
        }

        let result = 0;

        for (let i = 0; i < arg.length; i++) {
            result += arg[i];
        }

        let historyItem = `${ this.name } (${ this.getDate( Date.now()) }): сумма = ${ result }, (${ arg.join(', ') })`;
        history.push(historyItem);

        return result;
    };

    //вычитание
    this.doSubtraction = function (subtrahend, subtractor) {
        if ( this.checkTwoElementsIsNan(subtrahend, subtractor) ) {
            return null;
        }

        result = subtrahend - subtractor;

        let historyItem = `${this.name} (${ this.getDate( Date.now()) }): разница = ${result}, (${subtrahend}, ${subtractor})`;
        history.push(historyItem);

        return result;
    };

    //умножение
    this.doMultiplication = function (...arg) {
        if ( this.checkArrayElementsIsNan(arg) ) {
            return null;
        }

        let result = 1;

        for (let i = 0; i < arg.length; i++) {
            result *= arg[i];
        }

        let historyItem = `${ this.name } (${ this.getDate( Date.now()) }): произведение = ${ result }, (${ arg.join(', ') })`;
        history.push(historyItem);

        return result;
    };

    //деление
    this.doDivision = function (dividend, divider) {
        if ( this.checkTwoElementsIsNan(dividend, divider) ) {
            return null;
        }

        result = dividend / divider;
        let historyItem = `${this.name} (${ this.getDate( Date.now()) }): частное = ${result}, (${dividend}, ${divider})`;
        history.push(historyItem);

        return result;
    };

    //Создаем дату
    this.getDate = function (date) {
        let now = new Date(date);

        let day = now.getDate();
        let month = now.getMonth();
        month += 1;
        let year = now.getFullYear();

        let hours = now.getHours();
        let minutes = now.getMinutes();

        if (minutes < 10) {
            minutes = `0${minutes}`;
        }

        return `${day}.${month}.${year} ${hours}:${minutes}`;
    };

    // Добавляем в историю
    this.callHistory = function (history) {
        for (let i = 0; i < this.history.length; i++) {
            let string = this.history[i];
            console.log(string);
        }

        if (this.history.length < 1) {
            console.log(`История пуста`)
            return null;
        } else { return history; }
    };

    //Удаляем историю
    this.deleteHistory = function () {
        return this.history = [];
    };
}

let Calculator1 = new Calculator('Мой калькулятор');
let Calculator2= new Calculator('Еще один калькулятор');
let Calculator3 = new Calculator('И еще один калькулятор');

console.log(Calculator1.doAddition(2, 3, 5, 6, 8));
console.log(Calculator2.doSubtraction(100, 30,));
console.log(Calculator3.doDivision(100, 4));
console.log(Calculator1.doMultiplication(2, 3, 5, 6, 8));










