// 17. З клавіатури вводиться початкове знчення суми.
//  Поки сума є меншою за 100 додавати до неї числа, 
//  які вводяться з клавіатури.

// while( умова )
//    оператор ;
//---------------


let userNumber;
let sumUserNumber = 0;
do {
    userNumber = +prompt("Enter the number")             //| введені числа
    console.log('userNumber  ', userNumber)
    sumUserNumber = sumUserNumber + userNumber           //| сума введених чисел
    console.log('sumUserNumber  ', sumUserNumber)
}

while (sumUserNumber < 100)                              //| сума < 100
document.write(' Sum  of numbers = ', sumUserNumber)





// let userNumber;
// let totalSum = 0;  // ЗАЙВІ ЗМІННІ, ТРЕБА СПРОСТИТИ
// let sumUserNumber = 0;
// let initialValueOfSum = +prompt("Enter the initial value of the amount ")     //початкове знчення суми.
// console.log('initialValueOfSum  ', initialValueOfSum)
// do {
//     userNumber = +prompt("Enter the number")                                 // введені числа
//     console.log('userNumber  ', userNumber)
//     sumUserNumber = sumUserNumber + userNumber                              // сума введених чисел
//     console.log('sumUserNumber  ', sumUserNumber)
//     totalSum = initialValueOfSum + sumUserNumber                            // загальна сума= початкове значення + сума  введених чисел
//     console.log('totalSum  ', totalSum)
// }

// while (totalSum < 100)
// document.write(' Sum  of numbers = ', totalSum)











