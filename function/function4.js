// Задача 4. Створити окремі функції, які для 4 чисел знаходять:
// 1)суму;
// 2)добуток;
// 3)середнє арифметичне;
// 4)мінімальне значення. 


// function getSum(a, b, c, d) {
const getSum = (a, b, c, d) => a + b + c + d
// let totalSum = a + b + c + d
// return totalSum

// function getProduct(a, b, c, d) {
const getProduct = (a, b, c, d) => a * b * c * d

// function getArithmeticMean(a, b, c, d) {
const getArithmeticMean = (a, b, c, d) => {
    let quantityOfNumbers = 4
    return (a + b + c + d) / quantityOfNumbers
}
// function getMinimumValue(a, b, c, d) {
const getMinimumValue = (a, b, c, d) => {
    let minimumValue = a
    if (b < minimumValue) {
        minimumValue = b
    }
    else if (c < minimumValue) {
        minimumValue = c
    }
    else if (d < minimumValue) {
        minimumValue = d
    }
    return minimumValue
}
let numberFirst = +prompt("Write the first number")
let numberSecond = +prompt("Write the second number")
let numberThird = +prompt("Write the third number")
let numberFourth = +prompt("Write the fourth number")
let totalSum = getSum(numberFirst, numberSecond, numberThird, numberFourth)
let totalProduct = getProduct(numberFirst, numberSecond, numberThird, numberFourth)
let arithmeticMean = getArithmeticMean(numberFirst, numberSecond, numberThird, numberFourth)
let minValue = getMinimumValue(numberFirst, numberSecond, numberThird, numberFourth)
alert(`Sum of numbers = ${totalSum}
Product of numbers ${totalProduct} 
Arithmetic mean of numbers = ${arithmeticMean} 
The smallest number = ${minValue}`)