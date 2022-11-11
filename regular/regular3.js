
// Задача 3. Дано масив рядків. Вивести ті, у яких є голосні літери.

const arrOfString = ['Dana', 'Alex', 'cd', 'dnk', 'eva', 'fff', 'Lmn']
console.log(`A array of string = ${arrOfString}`)
const regular = /[aeiouy]/g

const getStringsWithVowel = (regular, array) => array.filter((currentValue) => regular.test(currentValue))
const newString = getStringsWithVowel(regular, arrOfString)
console.log(`newString = ${newString}`)



// стара версія
// const arrOfString = ['Dana', 'Alex', 'cd', 'dnk', 'eva', 'fff', 'Lmn']
// console.log(`A array of string = ${arrOfString}`)
// const regular = /[aeiouy]/g
// const isVowel = (re, array) => { // ТЕ САМЕ + НАЗВА ФУНКЦІЇ ТЕЖ ЛАЙНО
//     return array.filter((currentValue) => {
//         if (re.test(currentValue))
//             return currentValue
//     })
// }
// const newString = isVowel(regular, arrOfString)
// console.log(`newString = ${newString}`)







