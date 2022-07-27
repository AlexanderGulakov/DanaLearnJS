// 25.З клавіатури вводиться вартість одиниці товару. Поки користувач не введе суму грошей,
//  яка достатня для купівлі товару або не відмовиться від купівлі 
// давати можливість вводити суму грошей.


let costUnitsOfGoods = parseFloat(prompt("Write the unit cost of the goods "))   // 100 uah   Копійи
console.log(" cost Units Of Goods", costUnitsOfGoods)
let userMoney;      // введені гроші   
let amountOfMoney = 0   // сума грошей  

while (costUnitsOfGoods > amountOfMoney && userMoney !== null) {
    userMoney = parseFloat(prompt("Enter your money"))   // введені кошти 
    console.log(" user Money ", userMoney)
    amountOfMoney = amountOfMoney + userMoney // підрахунок суми
    console.log(" amount Of Money ", amountOfMoney)
    if (costUnitsOfGoods <= amountOfMoney) {
        alert(' Thank you for your purchase ')
    }
}



  // if (userMoney === null) {
    //     break;
    // }