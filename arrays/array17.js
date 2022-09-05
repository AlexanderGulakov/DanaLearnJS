// 17.	Дано ціни 4 товарів. 
// Визначити, скільки кожного виду товарів може купити користувач 
// за наявну у нього кількість грошей.


let goods = ["Яблуко", "Груша", "Апельсин", "Слива"]
let price = [50, 20, 100, 150]
let countQoods = 0
let countMoney = parseInt(prompt(" Count of money  =", " ")) // кількість грошей  100 

for (let i = 0; i < price.length; i++) {  // i= 0                               i= 1
    console.log(`i=${i}`)
    for(let j = 0; countMoney > 0 ; j++)  // j= 0               j= 1             j= 0 
    if (countMoney >= price[i]) {     //    100 >=50            50>= 50         100>= 20
        console.log(`i=${i}`)
        console.log(`price[i]${price[i]}`)  
        countQoods++                      //   1                   2               
        console.log(`countQoods=${countQoods}`)
        countMoney = countMoney - price[i]   // 100 -50 = 50       50-50 = 0
        alert(`The count goods ${goods[i]} = ${countQoods}`) // "Яблуко" - 2
        // console.log(`goods ${goods[i]}`)
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
