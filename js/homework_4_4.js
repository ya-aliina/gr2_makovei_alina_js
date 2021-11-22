/*==================================Задача №4=============================================
Необходимо написать мини-игру «Города». Нужно бесконечно запрашивать у пользователя ввод города.
Проверять если последняя буква предыдущего слова совпадает с первой буквой следующего слова – засчитываем +1 очко.
Если не совпадает выдаем сообщение «Игра окончена. Ваши очки: {кол-во очков}».
==========================================================================================*/
//изначальный вариант
let city = prompt('Введите название города:');
let last_letter = get_last_letter(city);
let new_city;
let first_letter;
let score = 0;

console.log(city);

function get_last_letter (arr) { // Если 'ь' возвращаем букву, которая перед ним
    let last_letter = arr[arr.length - 1];
    let prev_letter;

    if (last_letter === 'ь') {
        prev_letter = arr[arr.length - 2];
        return prev_letter;
    } else {
        return last_letter;
    }
}

do {
    new_city = prompt(Введите название города на букву "${last_letter}":);
    first_letter = new_city[0];
    console.log(new_city);

    if (first_letter === last_letter) {
        score ++;
        last_letter = get_last_letter(new_city);
    }
    else {
        break;
    }

} while (first_letter !== last_letter) {
    alert(Игра окончена. Ваши очки: ${score});
}


// ----------------------------Новый вариант--------------------------------------
function startGameCities () {
    let firstCity = prompt('Игра началась! Введите любое название города.', '')

    if (firstCity.length < 0) {
        firstCity = 'Краматорск';
        alert(`Вы ничего не ввели. Первый город ${firstCity}`);
    } else if (typeof(firstCity) !== 'string') {
        console.error('Введенное значение не является строкой');
        return null;
    }

    let result = 0;
    let previousCity = [];

    addToHistory(firstCity, previousCity);

    function addToHistory (city) {
        previousCity.push(city.toLowerCase());
    }

    while(true) {
        let prevCity = previousCity[previousCity.length - 1];
        let lastLetter = prevCity[prevCity.length - 1]
        
        if (lastLetter === 'ь' || lastLetter === 'ы') {
            lastLetter = prevCity[prevCity.length - 2];
        }
        
        let newCity = prompt(`Введите город а букву ${lastLetter}`);
        newCity = newCity.toLowerCase();

        if (previousCity.indexOf(newCity) !== -1) {
            alert('Этот город уже вводился!');
            continue;
        }
        
        let firstLetter = newCity[0];
        firstLetter = firstLetter.toLowerCase();

        if (lastLetter === firstLetter) {
            result++;
        } else {
            alert(`Игра окончена. Ваши очки: ${result}`);
            return result;
        }
        addToHistory(newCity);
    }
    return result;
}

startGameCities();
