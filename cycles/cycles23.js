// 23. З клавіатури вводиться число. 
// Знаходити суму цифр до тих пір. Поки сума не стане більшую за 20.

let userNumber;
let sumUserNumber = 0;
const maxNumber = 20
do {

    userNumber = +prompt("Enter the number")             //| введені числа
    console.log('userNumber  ', userNumber)
    sumUserNumber +=  userNumber                        //| сума введених чисел  (sumUserNumber = sumUserNumber + userNumber)
    console.log('sumUserNumber  ', sumUserNumber)        
}

while( sumUserNumber <= maxNumber)
document.write(' Sum  of numbers = ', sumUserNumber)

     
 