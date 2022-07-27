// 28. З клавіатури вводяться поступово числа. Знайти два найбільші числа.
//  Ввід здійснюється до тих пір, поки різниця між такими числами є більшою за 5.


let currentNumber = 0
let secondlargestNumber = -Infinity
let firstlargestNumber = +prompt("Enter your number")  //| 10  
do {
    currentNumber = +prompt("Enter your number")       //| 50      | 40    | 120   |70   |124

    if (currentNumber > firstlargestNumber ) {         //| 50> 10  |-     | 120>50 |-    |124>120
        // && secondlargestNumber < currentNumber) {  
        secondlargestNumber = firstlargestNumber       //| 10      | -   | 50     | -    |120
        firstlargestNumber = currentNumber             //| 50      | -   | 120    |-     |124

    }
    // else if (secondlargestNumber < currentNumber 
    else if (currentNumber > secondlargestNumber ) {   //| -       |40>10 |-     |70>50  | -
        // && currentNumber < firstlargestNumber) {   
        secondlargestNumber = currentNumber            //| -       |40    |-     |70     | -
    }

}
while ((firstlargestNumber - 5) >= secondlargestNumber   )
alert(`The first largest number = ${firstlargestNumber} The second largest number = ${secondlargestNumber}  `)










// let currentNumber = 0
// let secondlargestNumber = -Infinity
// let firstlargestNumber = +prompt("Enter your number")  //| 10  
// do {
//     currentNumber = +prompt("Enter your number")   //|  50          | 40     |120      |70     |124

//     if (currentNumber > firstlargestNumber         //|  50>10       |40>50 - |120>50  |70>120-  |124>120
//         && secondlargestNumber < currentNumber) {  //|-Infinity<50  | 10<40  |40<120  |50<70    |70
//         secondlargestNumber = firstlargestNumber   //| 10           | 10     |50      |(50)
//         firstlargestNumber = currentNumber         //| 50           | 50     |120     |(120)

//     }
//     else if (secondlargestNumber < currentNumber   //| 10< 50        |10<40  |50<120   |50<70
//         && currentNumber < firstlargestNumber) {   //| 50<50 -       | 40<50 |120<120- |70<120
//         secondlargestNumber = currentNumber        //| (10)          |40    |(50)      |70
//     }

// }
// while ((secondlargestNumber - firstlargestNumber) < 5)
// alert(`The first largest number = ${firstlargestNumber} The second largest number = ${secondlargestNumber}  `)











 




   










