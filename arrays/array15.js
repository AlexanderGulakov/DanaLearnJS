// 15.	Дано назви та ціни 4 товарів. 
// Вивести назви товарів, ціна яких не перевищує 1000грн


let goods = ["Яблуко", "Груша", "Апельсин", "Слива"]
let price = [10, 30, 100, 1500]
let maxPrice = 1000

for (let i = 0; i < price.length; i++) {  //i= 0       i= 1     i= 2        i= 3

    if(price[i] < maxPrice)              // 10 <1000   30<1000   100<1000    1500>1000
        alert(`goods = ${goods[i]}`)     // "Яблуко"   "Груша"   "Апельсин"     -
}