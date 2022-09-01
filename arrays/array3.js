// Задача 3. Дано послідовність цін товарів та назв (у окремих масивах).
//  Вивести на екран ті, які може собі дозволити користувач (кількість грошей задається).


let goods = ["Яблуко", "Груша", "Апельсин", "Слива", "Малина"]
let price = [10, 30, 50, 70, 100]

let countmoney = parseInt(prompt(" Count of money  =", " ")) // кількість грошей   100 

for(let i = 0; i <  ; i++) {

if(i === 1){
    document.write(`${goods[0]}`)
   
}
if(i === 2){
    document.write(`${goods[1]}`)
   
}


}









// let countmoney = parseInt(prompt(" Count of money  =", " ")) // кількість грошей    100 
// let apple = 10
// let pear = 30
// let orange = 50
// let plum = 70
// let raspberry = 100

// for (let i = 0; i < goods.length; i++) {
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
   



// let goods = ["Яблуко", "Груша", "Апельсин", "Слива", "Малина"]
// let price = [10, 30, 50, 70, 100]
// let countmoney = parseInt(prompt(" Count of money  =", " ")) // кількість грошей    100
// let apple = 10
// let pear = 30
// let orange = 50
// let plum = 70
// let raspberry = 100
// for (let i = 0; i < countmoney; i++) {            // 0 < 50          0<10
//     if (countmoney >= apple) {                    // 50>10           10 = 10
//         countmoney = countmoney - apple          //  50-10= 40       10-10=0
//         document.write(`${goods[0]}`)           // Яблуко            Яблуко
//         document.write(`<br>`)
//         console.log(`countmoney= ${countmoney}`)
//         console.log(`goods = ${goods[0]}`)
//     }
//     if (countmoney >= pear) {                  // 40 > 30
//         countmoney = countmoney - pear        // 40-30= 10
//         document.write(`${goods[1]}`)        // Груша
//         document.write(`<br>`)
//         console.log(`countmoney2= ${countmoney}`)
//         console.log(`goods = ${goods[1]}`)
//     }
//     if (countmoney >= orange) {
//         countmoney = countmoney - orange
//         document.write(`${goods[2]}`)
//         document.write(`<br>`)
//         console.log(`countmoney3= ${countmoney}`)
//         console.log(`goods = ${goods[2]}`)
//     }
//     if (countmoney >= plum) {
//         countmoney = countmoney - plum
//         document.write(`${goods[3]}`)
//         document.write(`<br>`)
//         console.log(`countmoney4= ${countmoney}`)
//         console.log(`goods = ${goods[3]}`)
//     }
//     if (countmoney >= raspberry) {
//         countmoney = countmoney - raspberry
//         document.write(`${goods[4]}`)
//         document.write(`<br>`)
//         console.log(`countmoney5= ${countmoney}`)
//         console.log(`goods = ${goods[4]}`)
//     }
// }
