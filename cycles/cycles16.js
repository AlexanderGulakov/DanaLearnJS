
// 16. З клавіатури поступово вводяться символи поки не буде введено символ «а». 
// Вивести рядок символів у зворотному порядку.


// do
// {
//    оператор ;
// }
// while ( умова );

// let userSymbol;
// let sumString = ``;
// do {
//     userSymbol = prompt("Enter a symbol")              // ЧЕРЕЗ вайл
//     console.log('symbol', userSymbol)
//     sumString = userSymbol + sumString ;
//     console.log('sumstring', sumString)

// }
// while (userSymbol !== `a`);
//  document.write(sumString)






// while( умова )
//    оператор ;

let userSymbol = ``
let sumString = ``


while (userSymbol !== `a`) { // 0 ітерація= невизначено . 1 ітерація = ! . 2 і = ? 3 i = b
    // userSymbol = prompt("Enter a symbol")  // ввівся символ ! / ? / b/ a
    console.log('symbol', userSymbol)
    // if (userSymbol === `a`) break; 
    sumString = userSymbol + sumString;   // sumstring = ! + '  '  = ! ' ' / sumstring= ? + ! ' ' = ?! ' ' / b?! ' '
    console.log('sumstring', sumString)
    userSymbol = prompt("Enter a symbol")
}

document.write(sumString)




