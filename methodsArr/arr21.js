
// //21.	Задача. Дано масив цін товарів. Знайти сумарну вартість тих, які знаходяться в межах від 1000 до 2000.

const arrayPrices = [1500, 220, 1028, 4490, 1000, 2400, 150]
const priceMore = 1000
const priceLess = 2000
const getAmountOfNumbers = (array,more,less) =>
 array.reduce((amount, currentValue) => {
 if (currentValue > more && currentValue < less) {
      amount += currentValue
       }
    return amount
}
)
const amountOfNumbers = getAmountOfNumbers(arrayPrices,priceMore,priceLess)

console.log(`Array of Prices = ${arrayPrices}`)
console.log(`Amount of numbers = ${amountOfNumbers}`)















// const arrayPrices = [1500, 220, 1028, 4490, 1000, 2400, 150]
// const priceMore = 1000
// const priceLess = 2000

// const amountOfNumbers = arrayPrices.reduce((amount, currentValue) => {
    
//  if (currentValue > priceMore && currentValue < priceLess) {
//       amount += currentValue
//        }
//     return amount
// }
// )
// console.log(`Array of Prices = ${arrayPrices}`)
// console.log(`Amount of numbers = ${amountOfNumbers}`)










 