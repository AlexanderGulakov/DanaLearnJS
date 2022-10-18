// 9. Розробити функцію, 
// яка би для довільної кількості чисел знаходила добуток чисел.



// 1 варіант :
// const arrOfNumbers = [5, 5, 2, 3, 4, 5, 6, 2, 1]
// const getAmount = (amount, currentValue) => amount += currentValue
// const amountOfNumbers = arrOfNumbers.reduce(getAmount,0)
//  console.log(`Amount of numbers = ${amountOfNumbers}`)



// 2 варіант :
const arrOfNumbers = [5, 5, 2, 3, 4, 5, 6, 2, 1]
const amountOfNumbers = arrOfNumbers.reduce((amount, currentValue) => amount *= currentValue)
 console.log(`Amount of numbers = ${amountOfNumbers}`)




