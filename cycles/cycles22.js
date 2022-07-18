// 22. Користувач загадує натуральне число від 1 до N.
//  Шляхом задавання мінімальної кількості запитань знайти вказане число 
//  (застосувати бінарний пошук, на кожному кроці якого інтервал пошуку зменшується на 2 
//     шляхом порівняння з елементом, який знаходиться у центрі поточного інтервалу).

let endInterval = +prompt("1.Guess the number.\n 2.Interval from 1 to maximum number. Enter the maximum number. ")
let guessedNumber;
let result;
let startInterval = 1
let midInterval;
midInterval = Math.floor((startInterval + endInterval) / 2)
console.log('midInterval  ', midInterval)
do {

    guessedNumber = +prompt(` Select from the list :  \n1. Your number > ${midInterval}\n2. Your number < ${midInterval}\n3. Your number = ${midInterval} `)
    switch (guessedNumber) {
        case 1: result = Math.floor((midInterval + endInterval) / 2)  //75
            // if (guessedNumber > midInterval) 
            break;
        case 2: result = Math.floor((midInterval + result)) / 2    //60<75
            //  if (guessedNumber < midInterval) 
            break;
        case 3: midInterval = ` Perfectly guessed number = ${midInterval} `
            break;
    }
    alert(midInterval)
}

while (guessedNumber !== 3)






// let endInterval = +prompt("1.Guess the number.\n 2.Interval from 1 to maximum number. Enter the maximum number. ")
// let guessedNumber;
// let result;
// let startInterval = 1
// let midInterval = Math.floor((startInterval + endInterval) / 2)
// console.log('midInterval  ', midInterval)
// do {
//     guessedNumber = +prompt(` Select from the list :  \n1. Your number > ${midInterval}\n2. Your number < ${midInterval}\n3. Your number = ${midInterval} `)
//     switch (guessedNumber) {
//         case 1:  midInterval = Math.floor((midInterval + endInterval) / 2)
//             // if (guessedNumber > midInterval)
//             break;
//         case 2:  midInterval = Math.floor((midInterval + startInterval)) / 2
//             //  if (guessedNumber < midInterval)
//             break;
//         case 3: midInterval = ` Perfectly guessed number = ${midInterval} `
//             break;
//     }
//     alert(midInterval)
// }

// while (guessedNumber !== 3)