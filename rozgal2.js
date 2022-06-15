
// З клавіатури вводиться ціна товару і кількість грошей. Якщо грошей не вистачає то відмовляємо у покупці, 
// інакше, якщо ще залишаються гроші, то пропонуємо купити лотерею за 4 грн.

let price = parseFloat(prompt("Enter your price"));
let AmountOfMoney = parseFloat(prompt("Enter amount of money"));
let priceOfLottery = 4;
if (AmountOfMoney < price) {
    alert(`The order failed. Not enough money.`) 
}

else if (((AmountOfMoney - price) < priceOfLottery)) {
    alert(`Congratulations on your purchase`);

}

else {
    (!confirm('Want to buy a lottery?'));
    alert(`Thankyou.`);
    let sum = AmountOfMoney - price
    alert(`Thankyou.Your balance = ${sum}`);
}







