// 2. Створити функцію, яка у масиві 0 заміняє на 1.
//  array=[5,22,0,28,44,100,0,28,27,0,24];

// 1 варіант :
const array = [5, 22, 0, 28, 44, 100, 0, 28, 27, 0, 24]
const newArr = array.map((currentValue) => currentValue === 0 ? 1 : currentValue)
console.log(`newArr = ${newArr}`)


// 2 варіант :
// const getResult = (currentValue) => { //достатно ВЕРТАТИ 1(якщо 0) і currentValue в іншому випадку
//     //для чого перезаписувати currentValue?
//     if (currentValue === 0) {
//         return 1
//     }
//     return currentValue
// }
// const array = [5, 22, 0, 28, 44, 100, 0, 28, 27, 0, 24]
// const newArr = array.map(getResult)
// console.log(` arr = ${array}`)
// console.log(`newArr = ${newArr}`)


