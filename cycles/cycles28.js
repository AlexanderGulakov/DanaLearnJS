// 28. З клавіатури вводяться поступово числа. Знайти два найбільші числа.
//  Ввід здійснюється до тих пір, поки різниця між такими числами є більшою за 5.


let carrentNumber = 0
let secondlargestNumber = -Infinity
let firstlargestNumber = +prompt("Enter your number")  //| 10  
do {
    carrentNumber = +prompt("Enter your number")       //| 50      | 40    | 120   |70   |124

    if (carrentNumber > firstlargestNumber ) {         //| 50> 10  |-     | 120>50 |-    |124>120
        // && secondlargestNumber < carrentNumber) {  
        secondlargestNumber = firstlargestNumber       //| 10      | -   | 50     | -    |120
        firstlargestNumber = carrentNumber             //| 50      | -   | 120    |-     |124

    }
    // else if (secondlargestNumber < carrentNumber 
    else if (carrentNumber > secondlargestNumber ) {   //| -       |40>10 |-     |70>50  | -
        // && carrentNumber < firstlargestNumber) {   
        secondlargestNumber = carrentNumber            //| -       |40    |-     |70     | -
    }

}
while ((firstlargestNumber - 5) >= secondlargestNumber   )
alert(`The first largest number = ${firstlargestNumber} The second largest number = ${secondlargestNumber}  `)





// let carrentNumber = 0
// let secondlargestNumber = -Infinity
// let firstlargestNumber = +prompt("Enter your number")  //| 10  
// do {
//     carrentNumber = +prompt("Enter your number")   //|  50          | 40     |120      |70     |124

//     if (carrentNumber > firstlargestNumber         //|  50>10       |40>50 - |120>50  |70>120-  |124>120
//         && secondlargestNumber < carrentNumber) {  //|-Infinity<50  | 10<40  |40<120  |50<70    |70
//         secondlargestNumber = firstlargestNumber   //| 10           | 10     |50      |(50)
//         firstlargestNumber = carrentNumber         //| 50           | 50     |120     |(120)

//     }
//     else if (secondlargestNumber < carrentNumber   //| 10< 50        |10<40  |50<120   |50<70
//         && carrentNumber < firstlargestNumber) {   //| 50<50 -       | 40<50 |120<120- |70<120
//         secondlargestNumber = carrentNumber        //| (10)          |40    |(50)      |70
//     }

// }
// while ((secondlargestNumber - firstlargestNumber) < 5)
// alert(`The first largest number = ${firstlargestNumber} The second largest number = ${secondlargestNumber}  `)











 




   










