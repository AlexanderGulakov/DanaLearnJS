
// 16. З клавіатури поступово вводяться символи поки не буде введено символ «а». 
// Вивести рядок символів у зворотному порядку.


// do
// {
//    оператор ;
// }
// while ( умова );

let userSymbol;
let sumString = ``;
do {
    userSymbol = prompt("Enter a symbol")              // ЧЕРЕЗ вайл
    console.log('symbol', userSymbol)
    sumString = userSymbol + sumString ;
    console.log('sumstring', sumString)
    // if (userSymbol === `a`) {}
       
}
while (userSymbol !== `a`);
 document.write(sumString)






// while( умова )
//    оператор ;






