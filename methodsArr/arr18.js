
//18Задача. Дано масив цін. Для усіх товарів, які дорожчі за 1000грн дати знижку 20%
// (помножити на 0.8), а для усіх інших товарів – надати 5 % знижки (помножити на 0.95).


const arrayPrices = [500, 220, 1028, 449, 1000, 2400, 150]
const fixedPrice = 1000

const newArr = arrayPrices.map((currentValue) => {
    if (currentValue > fixedPrice) {
        return (currentValue * 0.8).toFixed(2)
    }
    return (currentValue * 0.95).toFixed(2)
})

console.log(`newArr = ${newArr}`)

