// Задача10. Дано назви та ціни 4 товарів. 
// Вивести назви товарів, ціна яких не перевищує 1000грн.

const showProductName = (product1, product2, product3, product4) => {
    const maxPrice = 1000
    if (product1 < maxPrice) {
        trueProduct = product1
    }
    else if (product2 < maxPrice) {
        trueProduct = product2
    }
    else if (product3 < maxPrice) {
        trueProduct = product3
    }
    else {
        trueProduct = product4
    }
    return trueProduct
}
let priceProductFirst = +prompt("Raspberry.How many price?")
let priceProductSecond = +prompt("Blueberry.How many price?")
let priceProductThird = +prompt("Bilberry.How many price?")
let priceProductFourth = +prompt("Blackberry.How many price?")
const productName = showProductName(priceProductFirst,priceProductSecond,priceProductThird,priceProductFourth)
 
alert(  )