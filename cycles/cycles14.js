// 14. З клавіатури вводитяться числа поки не буде введено 0. Знайти суму чисел.

// do
// {
//    оператор ;
// }
// while ( умова );


// let sumOfNumbers = 0;
// let userNumber;
// do {
//     userNumber = +prompt("Enter a number", " ")
//     console.log('user number', userNumber)
//     sumOfNumbers = sumOfNumbers + userNumber;
//     console.log('sum of numbers', sumOfNumbers)
// }
// while (userNumber !== 0);
// document.write('Sum of numbers= ',sumOfNumbers);



// while( умова )
//    оператор ;


let sumOfNumbers = 0;
let userNumber;
while (userNumber !== 0) {
    userNumber = +prompt("Enter a number", " ")
    console.log('user number', userNumber)
    sumOfNumbers = sumOfNumbers + userNumber;
    console.log('sum of numbers', sumOfNumbers)
}
document.write('Sum of numbers= ', sumOfNumbers);

