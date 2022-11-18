//Задача 10. Дано рядок тексту. Підрахувати кількість двоцифрових чисел у рядку.
 
const stringOfText = "23 29 Oleksandr 33 111 11 Daniella "
const regular = /(^|[^0-9])[1-9][0-9]($|[^0-9])/g

const newString = stringOfText.match(regular)
console.log(`newString  = ${newString}`)



// const getQuantityTwoDigitNumbers = (string, regular) => {
//     if (string.match(regular)) {
//         quantity++
//     }
//     return quantity
// }

// const newString = getQuantityTwoDigitNumbers(stringOfText, regular)
//     console.log(`quantity  = ${quantity}`)








//const arrOfString = ["123", "29", "22Oleksandr", "33", "111", "11", "Daniella"]
// const regular = /\d{1,2}/g
// const regular = /\[0-9]+/g
 
//  const getQuantityTwoDigitNumbers = (regular, array) => array.reduce((quantity, currentValue) =>{
//     if(regular.test(currentValue)){
//         quantity++
//     }
//     return quantity
//  } , 0

//  )
//  const newString = getQuantityTwoDigitNumbers(regular,arrOfString)
//  console.log(`newString = ${newString}`)




