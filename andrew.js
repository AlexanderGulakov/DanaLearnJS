/*Задача 23. З клавіатури вводиться число. Знаходити суму цифр до тих пір. Поки сума не стане більшую за 20.*/

const boundary = 20;

let totalAmount = 0;

do {
    let currentNumber = parseInt(prompt('Enter a number up to 20'));
    
    totalAmount += currentNumber;

} while (boundary > totalAmount)

alert(totalAmount);