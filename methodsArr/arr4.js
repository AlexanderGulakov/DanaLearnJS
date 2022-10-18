// 4. Дано масив цін товарів. Для цін, які менші за 1000грн. 
// додати 20% ціни, для тих, які більші за 1000 грн. відняти 30%.


// 1 варіант :
// const getNewArr = (currentValue) => {
//     const fixedPrice = 1000
//     if (currentValue < fixedPrice) {
//         return (currentValue * 1.2).toFixed(2)
//     }
//     if (currentValue > fixedPrice) {
//         return (currentValue * 0.7).toFixed(2)
//     }
//     return currentValue.toFixed(2)
// }
// const arrayPrices = [500, 220, 1028, 449, 1000, 2400, 150]
// const newArr = arrayPrices.map(getNewArr)
// console.log(`arrayPrices = ${arrayPrices}`)
// console.log(`newArr = ${newArr}`)



// 2 варіант :
const arrayPrices = [500, 220, 1028, 449, 1000, 2400, 150]
const fixedPrice = 1000
const newArr = arrayPrices.map((currentValue) => {
    if (currentValue < fixedPrice) {
        return (currentValue * 1.2).toFixed(2)
    }
    else if (currentValue > fixedPrice) {
        return (currentValue * 0.7).toFixed(2)
    }
    return currentValue.toFixed(2)
}
)
console.log(`arrayPrices = ${arrayPrices}`)
console.log(`newArr = ${newArr}`)




