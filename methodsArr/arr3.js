// 3. Дано масив цін.
//  Сформувати новий масив, який містить тільки ті ціни, які менші за задану.
// Задано 50 

// 1 варіант :
// const arrayPrices = [50, 22, 28, 44, 100, 24, 90, 150, 20]
// const maximumPrice = 50
// const getNewArr = (currentValue) => currentValue < maximumPrice
// const newArr = arrayPrices.filter(getNewArr)
// console.log(`newArr = ${newArr}`)



// 2 варіант :
const arrayPrices = [50, 22, 28, 44, 100, 24, 90, 150, 20]
const maximumPrice = 50
const newArr = arrayPrices.filter((currentValue) => currentValue < maximumPrice) //для чого фігурні дужки і ретурн?
console.log(`newArr = ${newArr}`)



