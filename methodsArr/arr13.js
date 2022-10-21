
// 13. Скласти скрипт, що формує новий масив збільшуючи кожен елемент масиву на його індекс;


const arrayOfNumbers = [5, 2, 7, 6, 10, 3, 2, 4, 1, 3]
const eachElementPlusIndex = arrayOfNumbers.map((currentValue, index) => currentValue + index)

console.log(`Array = ${eachElementPlusIndex}`)




