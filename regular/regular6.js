//Задача 6. Дано рядок тексту, вивести усі числа, які є у тексті.

const stringOfText = "Oleksander Daniella29 Oleksander33 Daniella" // ТУТ ЧИСЛО 29, А НЕ 2 І 9
console.log(`A string of text = ${stringOfText}`)
const regular = /\d/g
const numbersInTheText = stringOfText.match(regular)
console.log(`Numbers in the text = ${numbersInTheText}`)




//приклад
// const arrOfString = "Oleksander Daniella29 Oleksander33 Daniella"
// alert(arrOfString.match(/\d/g))
