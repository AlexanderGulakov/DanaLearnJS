//Задача 10. Дано рядок тексту. Підрахувати кількість двоцифрових чисел у рядку.

const arrOfString = ["123", "29", "Oleksandr", "33", "111", "11", "Daniella"]
const regular = /\d{2}/g
 const getQuantityTwoDigitNumbers = (regular, array) => array.reduce((quantity, currentValue) =>{
    if(regular.test(currentValue)){
        quantity++
    }
    return quantity
 } , 0

 )
 const newString = getQuantityTwoDigitNumbers(regular,arrOfString)
 console.log(`newString = ${newString}`)




