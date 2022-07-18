// 21. На екрані виводиться меню:
// 	1.Ініціалізація (сума=0)
// 	2.Додати 2
// 	3.Додати 3
// 	4.Відняти 2
// 	5.Відняти 3.
// 	6.Вивести суму
// 	7.Вихід.
// Шляхом поступового вибору відповідних пунктів спробувати 
// отримати число N, яке вводиться з клавіатури.

let chosenOption;
let amount = +prompt("Enter a number", " ")
console.log('userNumber  ', amount)
do {
    chosenOption = +prompt(` Select from the list: \n1. Initialization (Sum=0) \n2.+2 \n3. +3 \n4. -2  \n5. -3 
\n6. Calculate the amount \n7. Exit`)
    switch (chosenOption) {
        case 1: amount = 0
            break;
        case 2: amount += 2             //| case 2: amount =  amount + 2
            break;
        case 3: amount +=  3            //| case 3: amount =  amount + 3
            break;
        case 4: amount -=  2            //| case 4: amount =  amount - 2
            break;
        case 5: amount -=  3            //| case 5: amount =  amount - 3
            break;
        case 6: alert(amount)            
            break;
        case 7: amount = "Exit"
            break;
        default: amount = "The number is incorrect. Try again.";
    }
}
while (chosenOption !== 7)





// let chosenOption;
// let amount = +prompt("Enter a number", " ")
// console.log('userNumber  ', amount)
// do {
//     chosenOption = +prompt(` Select from the list: \n1. Initialization (Sum=0) \n2.+2 \n3. +3 \n4. -2  \n5. -3
// \n6. Calculate the amount \n7. Exit`)
//     switch (chosenOption) {
//         case 1: amount = 0
//             break;
//         case 2:  amount = amount + 2
//             break;
//         case 3: amount = amount + 3
//             break;
//         case 4:  amount = amount - 2
//             break;
//         case 5: amount = amount - 3
//             break;
//         case 6: amount
//             break;
//         case 7: amount = "Exit"
//             break;
//         default: amount = "The number is incorrect. Try again.";
//     }
//     alert(amount)
// }

// while (chosenOption !== 7)
