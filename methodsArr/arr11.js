// 11. Скласти скрипт для сортування масиву arr в порядку,
//  коли спочатку йдуть всі парні чила, потім – непарні.


const arrayOfNumbers = [5, 5, -4, 2, 3, 4, 5, 6, 2, 1]
const arraySort = arrayOfNumbers.sort((a, b) => {

    if (a % 2 === b % 2) {
        return a - b
    }
    if (a % 2 === 0) {
        return -1
    }
    else {
        return 1
    }
})
console.log(`A sorted array = ${arraySort}`)

