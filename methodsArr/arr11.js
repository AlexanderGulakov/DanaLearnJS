// 11. Скласти скрипт для сортування масиву arr в порядку,
//  коли спочатку йдуть всі парні чила, потім – непарні.


const arrayOfNumbers = [5, 5, 2, 3, 4, 5, 6, 2, 1]
const getTypeNumbers =






    Приклад.Скласти скрипт для сортування масиву arr в порядку, коли спочатку йдуть всі парні чила, потім – непарні.
function evenCompare
var arr = [5, 2, 1, -10, 8];
arr.sort((a, b) {
    // Числа однієї парності - сортуються звичайним чином
    if (a % 2 == b % 2) return a - b;
    // Інакше, якщо a - парне, то воно менше
    if (a % 2 == 0) return -1;
    // Лишився один варіант: a - непарне, і b – парне
    return 1;
});
alert(arr); / / - 10, 2, 8, 1, 5
