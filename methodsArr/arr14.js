
//14. Скласти скрипт для знаходження суми всіх елементів та кількості додатних елементів в масиві



const arrOfNumbers = [5, 5, 2, -8, 3, 4, 5, 6, 2, 1, -6]
const amountOfNumbers = arrOfNumbers.reduce((amount, currentValue) => amount += currentValue)
const quantityPositiveElements = arrOfNumbers.reduce((quantity, currentValue) => {
    if (currentValue > 0) {
        quantity++
    }
    return quantity
}, 0
)
console.log(`Amount of numbers = ${amountOfNumbers}`)
console.log(`Quantity of Positive numbers = ${quantityPositiveElements}`)





