// // // 15. З клавіатури вводитяться числа поки не буде введено 0.
// // //  Знайти добуток чисел.

// // // do
// // // {
// // //    оператор ;
// // // }
// // // while ( умова );

let userNumber;
let productsOfNumbers = 0;
do {
    userNumber = +prompt("Enter a number", " ")
    console.log('user number', userNumber)
    if (userNumber === 0) break;
    if (productsOfNumbers === 0){
        productsOfNumbers = 1
    }
    productsOfNumbers = productsOfNumbers * userNumber
    console.log('products numbers', productsOfNumbers)
}
while (userNumber !== 0)
document.write('Products  of numbers= ',productsOfNumbers);


// while( умова )
//    оператор ;

let userNumber;
let productsOfNumbers = 0;
while (userNumber !== 0)
{
    userNumber = +prompt("Enter a number", " ")
    console.log('user number', userNumber)
    if (userNumber === 0) break;
    if (productsOfNumbers === 0){
        productsOfNumbers = 1
    }
    productsOfNumbers = productsOfNumbers * userNumber
    console.log('products numbers', productsOfNumbers)
}
document.write('Products  of numbers= ',productsOfNumbers);

