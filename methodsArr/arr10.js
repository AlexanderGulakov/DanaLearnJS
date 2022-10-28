// 1) Math.Max + деструктуризація
// 2) forEach
// 3) reduce
// 4) reduce + Math.Max
// // 10. Розробити функцію, яка би для довільної кількості чисел знаходила максимальне.


//   0 варіант  Math.Max + деструктуризація :  ++++++++++++++++
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Function/apply
// const arrayOfNumbers = [4, 5, 2, 3, 4, 5, 6, 2, 1]
// const getMaxOfArray = (array) => {
//     return Math.max(...array)
// }

// const maxNumber = getMaxOfArray(arrayOfNumbers)
// console.log(`max = ${maxNumber}`)


// 1 варіант  Math.Max  : ++++++++++++++++++++++++++
// const arrayOfNumbers = [4, 5, 2, 3, 4, 5, 6, 2, 1]
// const getMaxOfArray = (array) => {
//     return Math.max.apply(null, array)
// }

// const maxNumber = getMaxOfArray(arrayOfNumbers)
// console.log(`max = ${maxNumber}`)




// 2 варіант forEach :
// const arrayOfNumbers = [4, 5, 2, 3, 4, 5, 6, 2, 1]
// let max = arrayOfNumbers[0]

// const getMaxOfArray = (array, max) => {
//     array.forEach((currentValue) => {
//         if (currentValue > max) {
//             max = currentValue
//             return max
//         }
//     }
//     )
//     return max
// }
// const maxNumber = getMaxOfArray (arrayOfNumbers, max)
// console.log(`maxNumber = ${maxNumber}`)


// 3 варіант reduce
const arrayOfNumbers = [4, 5, 2, 3, 4, 5, 6, 2, 1]

const getMaxOfArray = (array) =>
    array.reduce((max, currentValue) => {
        if (currentValue > max) {
            max = currentValue        
        }
        return max
    }, array[0]
    )


const maxNumber = getMaxOfArray(arrayOfNumbers)
console.log(`maxNumber = ${maxNumber}`)









// 4 варіант reduce + Math.Max   ++++++++++++++++++++++++++
// const arrayOfNumbers = [4, 5, 2, 3, 4, 5, 6, 2, 1]
// const getMaxOfArray = (array) =>
// arrayOfNumbers.reduce((max, currentValue ) => {
//     return Math.max.apply(null, array)
// }
// )
// const maxNumber = getMaxOfArray(arrayOfNumbers)
// console.log(`max = ${maxNumber}`)



























