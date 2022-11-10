//Задача 1. Дано масив рядків. Вивести ті, у яких є цифри (використати метод test та регулярні вирази).

const arrOfString = ["Oleksander", "Daniella29", "Oleksander33", "Daniella"]
const regular = /\d/g
const getStringsWithNumber = (regular, array) => array.filter((currentValue) => regular.test(currentValue))
// console.log(`currentValue =  ${currentValue}`)
const newString = getStringsWithNumber(regular, arrOfString)
console.log(`newString =  ${newString}`)





// стара версія:
// const arrOfString = ["Oleksander", "Daniella29", "Oleksander33", "Daniella"]
// const regular = /\d/g
// const getStringsWithNumber = (regular, array) => { // ЩО ЦЕ ЗА НАЗВИ ПАРАМЕТРІВ І ЗМІННИХ? РОЗСЛАБИЛИСЬ БАЧУ!
//   return array.filter((currentValue) => {
//     if (regular.test(currentValue)) { // ЦЕ МОЖНА СПРОСТИТИ, ЯКЩО УВАЖНО ПОЧИТАТИ ЯК ПРАЦЮЄ ФІЛЬТЕР(АБО ЗГАДАТИ ЯК ЦЕ РОБИЛИ В ПОПЕРЕДНІЙ ТЕМІ)
//       return currentValue
//     }
//     // console.log(`currentValue =  ${currentValue}`)
//   }
//   )
// }
// const newString = getStringsWithNumber(regular, arrOfString)
// console.log(`newString =  ${newString}`)




// версія зі змінною.
// const arrOfString = ["Oleksander", "Daniella29", "Oleksander33", "Daniella"]
// const regular = /\d/g
// const getResult = (re,array) => {
//    const result = array.filter((currentValue) => {
//        if(re.test(currentValue)) {
//              return currentValue
//       }
//       // console.log(`currentValue =  ${currentValue}`)
//     }
//     )
//     return result
// }
// const newString = getResult(regular,arrOfString)
// console.log(`newString =  ${newString}`)


//приклад
//  let str = "Daniella29!"
//  let result = /\d/g.test(str)
//  console.log(result); // true





