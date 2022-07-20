// 22. Користувач загадує натуральне число від 1 до N.
//  Шляхом задавання мінімальної кількості запитань знайти вказане число 
//  (застосувати бінарний пошук, на кожному кроці якого інтервал пошуку зменшується на 2 
//     шляхом порівняння з елементом, який знаходиться у центрі поточного інтервалу).



let startInterval = 1
let endInterval = +prompt("1.Guess the number.\n 2.Interval from 1 to maximum number. Enter the maximum number. ")
let midInterval = Math.floor((startInterval + endInterval) / 2)
console.log('midInterval  ', midInterval)
let guessedNumber;
let result;
do {
    guessedNumber = +prompt(` Select from the list :  \n1. Your number > ${midInterval}\n2. Your number < ${midInterval}\n3. Your number = ${midInterval} `)
    console.log('guessedNumber  ', guessedNumber)
    switch (guessedNumber) {
        case 1:
            startInterval = midInterval
            midInterval = Math.floor((midInterval + endInterval) / 2)
            console.log('case1  ', midInterval)
            break;
        case 2:
            endInterval = midInterval
            midInterval = Math.floor((startInterval + midInterval) / 2)
            console.log('case2  ', midInterval)
            break;
        case 3: midInterval = ` Perfectly guessed number = ${midInterval} `
            console.log('case3  ', midInterval)
            alert(midInterval)
            break;
        default: amount = "The number is incorrect. Try again.";
    }

    // if (endInterval !== 3 && (startInterval + 2) === endInterval  ||  midInterval === 1) {
    //     console.log('if  ', midInterval)
    //     alert(` Your guessed number${midInterval}`)
    //     break;
    // }
    if (endInterval !== 3 && (startInterval + 2) === endInterval ) {
        alert(` Your guessed number${midInterval}`)
        break;
    }
    if ((startInterval + 2) === endInterval && ) {
        alert(` Your guessed number${midInterval}`)
        break;
    }

    // if ((startInterval + 1) === endInterval) {
    //     midInterval = midInterval + 1
    //     alert(` Your guessed number${midInterval}`)
    //     break;
    // }


    //  if (endInterval !== 3 && (startInterval + 2) === endInterval || 
    //  midInterval === 1) {
    //     console.log('if  ', midInterval)
    //     alert(` Your guessed number${midInterval}`)
    //     break;
    // }
    // else if ( midInterval === endInterval  ){
    //     alert(` Your guessed number${midInterval}`)
    //     break;
    // }

}
while (guessedNumber !== 3)



// if (guessedNumber === 1) {
//     startInterval = midInterval
// }
// else {
//     endInterval = midInterval
// }
// if (guessedNumber === 2) {
//     endInterval = midInterval
// }
// else {
//     startInterval = midInterval
// }






