// Задача 5. Створити функцію, яка для 3 заданих чисел 
// знаходить кількість парних.


const getQuantityEvenNumbers = (a, b, c) => {
    let quantity = 0
    if (a % 2 === 0) {
        quantity++
    }
    if (b % 2 === 0) {
        quantity++
    }
    if (c % 2 === 0) {
        quantity++
    }
    return quantity
}
let numberFirst = +prompt("Write the first number")
let numberSecond = +prompt("Write the second number")
let numberThird = +prompt("Write the third number")
let quantityEvenNumbers = getQuantityEvenNumbers(numberFirst, numberSecond, numberThird)
alert(`The quantity of even numbers = ${quantityEvenNumbers}`)
