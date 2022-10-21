
// 12. Скласти скрипт, що знаходить всі парні елементи на непарних місцях.


const arrayOfNumbers = [5, 2, 7, 6, 10, 3, 2, 4, 1, 3]
const evenElementsInOddPlaces = arrayOfNumbers.filter((currentValue, index,) => (index % 2 != 0) && (currentValue % 2 == 0))

console.log(`Array = ${evenElementsInOddPlaces}`)






