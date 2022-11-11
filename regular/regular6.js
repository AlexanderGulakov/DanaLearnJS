//Задача 6. Дано рядок тексту, вивести усі числа, які є у тексті.

const stringOfText = "Oleksander1  Oleksander Daniella29 Daniella Oleksander333 Daniella4444" // ТУТ ЧИСЛО 29, А НЕ 2 І 9
console.log(`A string of text = ${stringOfText}`)
const regular = /\d{1,4}/g

const numbersInTheText = stringOfText.match(regular)
console.log(`Numbers in the text = ${numbersInTheText}`)




//приклад
// const arrOfString = "Oleksander Daniella29 Oleksander33 Daniella"
// alert(arrOfString.match(/\d/g))
