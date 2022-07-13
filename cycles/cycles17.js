// 17. З клавіатури вводиться початкове знчення суми.
//  Поки сума є меншою за 100 додавати до неї числа, 
//  які вводяться з клавіатури.

// while( умова )
//    оператор ;
//---------------
// do
// {
//    оператор ;
// }
// while ( умова );

let initialValueOfSum;
let sum;
let userNumber;
initialValueOfSum = prompt("Enter the initial value of the amount ")
while (initialValueOfSum < 100) {
    console.log('initial Value Of The Sum', initialValueOfSum)
    userNumber = prompt("Enter the number")
    while  (userNumber !== null ) {
        console.log('user number === null', userNumber)
        sum = initialValueOfSum + userNumber
        console.log('sum', sum)
        document.write('Products  of numbers= ', sum);
    }
}

