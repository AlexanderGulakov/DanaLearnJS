// 18. З клавіатури поступово вводяться числа. 
// Знайти суму перших N парних чисел.


// let userNumber;
// let quantityEvenNumbers = 0;
// let sumEvenNumbers = 0;
// let guessedQuantityEvenNumbers = +prompt("Enter the quantity of even number")    // загадана кількість парних чисел
// console.log(' guessedQuantityEvenNumbers ', guessedQuantityEvenNumbers)

// do {
//     userNumber = +prompt("Enter the number")           // введені числа
//     console.log('user number', userNumber)
//     if (userNumber % 2 === 0) {
//         quantityEvenNumbers = quantityEvenNumbers + 1     //  визначення кількості парних введених чисел
//         console.log('quantityEvenNumbers ', quantityEvenNumbers)
//         sumEvenNumbers = sumEvenNumbers + userNumber    // визначення суми парних чисел
//         console.log('sumEvenNumbers ', sumEvenNumbers)
//     }
// }
// while (guessedQuantityEvenNumbers !== quantityEvenNumbers)
// document.write('Sum of Even numbers= ', sumEvenNumbers);



let guessedQuantityEvenNumbers = +prompt("Enter the quantity of even number")
let sumEvenNumbers = 0
let userNumber;
do {
    userNumber = +prompt("Enter the number")
    if (userNumber % 2 === 0) {
        sumEvenNumbers = sumEvenNumbers + userNumber
        guessedQuantityEvenNumbers--;
    }
} 
while (guessedQuantityEvenNumbers !== 0)
document.write(`Sum of Even numbers =${sumEvenNumbers}`);


