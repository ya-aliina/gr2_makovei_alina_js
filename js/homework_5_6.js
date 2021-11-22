/*--------------------------------------Задача №6--------------------------------------------
Напишите функцию truncate(str, maxlength), которая проверяет длину строки str, и если она
превосходит maxlength – заменяет конец str на "...", так чтобы ее длина стала равна maxlength.
--------------------------------------------------------------------------------------------*/
function truncate(str, maxlength) {
    if (typeof str !== 'string') {
        console.error('Это не строка!');
        return null;
    }

    if (str.length > maxlength) {
        let symbols = '...';
        let maxlength_without_symbols = maxlength - symbols.length;

        let short_str = str.slice(0, maxlength_without_symbols);

        let result = (`${short_str}${symbols}`);
        return result;
    }
}

let str = 'Гремел гром и ярко сверкала молния';
let max_length = 21;

console.log(truncate(str, max_length));
