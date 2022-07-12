//17. З клавіатури вводиться початкове значення суми. Поки сума є меншою за 100 додавати до неї числа, які вводяться з клавіатури.

let totalValue = 100;

let sum = 0;

let currentValue = 0;

const startingValue = parseInt(prompt('Enter starting value'));


while (totalValue > sum) {

    currentValue = parseInt(prompt('Enter some value to plus until it is less than 100'));
    if (sum === 0) {
        sum = startingValue + currentValue;
    }
    else {
        sum += currentValue;
    }
}

document.write(sum)