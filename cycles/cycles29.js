// 29. З клавіатури вводяться поступово числа. 
// Знайти два найменші числа. Ввід здійснюється до тих пір, 
// поки різниця між такими числами є більшою за 5.

let currentNumber = 0
let firstSmallestNumber = -Infinity
let secondSmallestNumber = +prompt("Enter your number")  //| 7  

do {
    currentNumber = +prompt("Enter your number")         //| 12      10

    if (firstSmallestNumber === -Infinity               //| true
        && currentNumber > secondSmallestNumber) {      //| 12>7
        firstSmallestNumber = secondSmallestNumber      //| 7
        secondSmallestNumber = currentNumber            //| 12
    }

    else if (currentNumber < firstSmallestNumber        //|   1 
        && currentNumber < secondSmallestNumber) {      //| 

        secondSmallestNumber = firstSmallestNumber       //| 
        firstSmallestNumber = currentNumber              //| 
    }

    else if (currentNumber > firstSmallestNumber         //|  10> 7
        && currentNumber < secondSmallestNumber) {       //|   10<12

        secondSmallestNumber = currentNumber              //|  10
    }

}
while ((secondSmallestNumber - 5) >= firstSmallestNumber)
alert(`The first smallest number = ${firstSmallestNumber} The second smallest number = ${secondSmallestNumber}  `)







// let currentNumber = 0
// let firstSmallestNumber = -Infinity
// let secondSmallestNumber = +prompt("Enter your number")  //| 7

// do {
//     currentNumber = +prompt("Enter your number")         //| 12      10

//     if (firstSmallestNumber === -Infinity               //| true
//         && currentNumber > secondSmallestNumber) {      //| 12>7
//         firstSmallestNumber = secondSmallestNumber      //| 7
//         secondSmallestNumber = currentNumber            //| 12
//     }

//     else if (currentNumber < firstSmallestNumber        //|   1
//         && currentNumber < secondSmallestNumber) {      //|

//         secondSmallestNumber = firstSmallestNumber       //|
//         firstSmallestNumber = currentNumber              //|
//     }

//     else if (currentNumber > firstSmallestNumber         //|  10> 7
//         && currentNumber < secondSmallestNumber) {       //|   10<12

//         secondSmallestNumber = currentNumber              //|  10
//     }

// }
// while ((secondSmallestNumber - 5) >= firstSmallestNumber)
// alert(`The first smallest number = ${firstSmallestNumber} The second smallest number = ${secondSmallestNumber}  `)
