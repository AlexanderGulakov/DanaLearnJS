// 17.	Дано ціни 4 товарів. 
// Визначити, скільки кожного виду товарів може купити користувач 
// за наявну у нього кількість грошей.


let goods = ["Яблуко", "Груша", "Апельсин", "Слива"]
let price = [50.50, 20.30, 100.25, 150]
let countQoods = 0
let countMoney = parseInt(prompt(" Count of money  =", " ")) // кількість грошей  100.50 // де копійки? )

for (let i = 0; i < price.length; i++) {  // i= 0                              
    console.log(`i=${i}`)
    if (countMoney >= price[i]) {     // 100>50     
        countQoods = countMoney / price[i]           // 100/50 = 2                     
        console.log(`countQoods=${countQoods}`)
        alert(`The count goods ${goods[i]} = ${Math.floor(countQoods)}`)
    }
}











// if (countmoney >= apple) {
    //     document.write(`${goods[0]}`)
    //     // document.write(`<br>`)
    //     console.log(`goods = ${goods[0]}`)
    // }
    // if (countmoney >= pear) {
    //     document.write(`${goods[1]}`)
    //     // document.write(`<br>`)
    //     console.log(`goods = ${goods[1]}`)
    // }
    // if (countmoney >= orange) {
    //     document.write(`${goods[2]}`)
    //     // document.write(`<br>`)
    //     console.log(`goods = ${goods[2]}`)
    // }
    // if (countmoney >= plum) {
    //     document.write(`${goods[3]}`)
    //     // document.write(`<br>`)
    //     console.log(`goods = ${goods[3]}`)
    // }
    // if (countmoney >= raspberry) {
    //     document.write(`${goods[4]}`)
    //     // document.write(`<br>`)
    //     console.log(`goods = ${goods[4]}`)
    // }
