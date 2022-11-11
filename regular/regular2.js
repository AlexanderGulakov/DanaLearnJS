
//Задача 2. Дано масив рядків. Вивести ті, у яких немає цифр.

const arrOfString = ["Oleksander", "Daniella29", "Oleksander33", "Daniella"]
const regular = /\d/g

const getStringsWithNumber = (regular, array) => array.filter((currentValue) => !regular.test(currentValue))
const newString = getStringsWithNumber(regular, arrOfString)
console.log(`newString =  ${newString}`)






// стара версія
// const arrOfString = ["Oleksander", "Daniella29", "Oleksander33", "Daniella"]
// const regular = /\d/g
// const getResult = (re, array) => { // ТЕ САМЕ
//   return array.filter((currentValue) => {
//     if (!re.test(currentValue)) {
//       return currentValue
//     }
//     // console.log(`currentValue =  ${currentValue}`)
//   }
//   )
// }
// const newString = getResult(regular, arrOfString)
// console.log(`newString =  ${newString}`)


