// 27. Комп’ютер загадує два випадкових числа від 1 до 10. 
// Вгадати обидва числа шляхом введеня можливих варіантів.
//  В кінці вивести кількість спроб користувача.


let firstNumberGuessedComp = Math.ceil(Math.random() * 10)              //| комп загадує пеше число
console.log(" first number guessed comp", firstNumberGuessedComp)

let secondNumberGuessedComp = Math.ceil(Math.random() * 10)              //| комп загадує друге число
console.log("second number guessed comp", secondNumberGuessedComp)

while (secondNumberGuessedComp === firstNumberGuessedComp) {                //|Цикл
    secondNumberGuessedComp = Math.ceil(Math.random() * 10)
    console.log('if=second number guessed comp  ', secondNumberGuessedComp)
}
let quantityUserAttempts = 0
let userGuessNumber;                                                    //| carrentNumber  поточне число
let isFirstNumberGuessed = false
console.log('IsFirstNumberGuessed', isFirstNumberGuessed)
let isSecondNumberGuessed = false
console.log('IsSecondNumberGuessed', isSecondNumberGuessed)0

do {
    userGuessNumber = +prompt(' Guess the number from 1 to 10')          //|  користувач вгадує числа 
    console.log('Guess the number', userGuessNumber)
    if(userGuessNumber === null){
        break;
    }
    if (userGuessNumber !== firstNumberGuessedComp && userGuessNumber !== secondNumberGuessedComp) {
        alert('The number is incorrect. Try again.')
    }
    else {
        if (!isFirstNumberGuessed && userGuessNumber === firstNumberGuessedComp) {
            alert('You guessed the first number.')
            isFirstNumberGuessed = true
            console.log('IsFirstNumberGuessed = ', isFirstNumberGuessed)
        }
        else if (!isSecondNumberGuessed && userGuessNumber === secondNumberGuessedComp) {
            alert('You guessed the second number.')
            isSecondNumberGuessed = true
            console.log('IsSecondNumberGuessed = ', isSecondNumberGuessed)
        }
    }
    quantityUserAttempts++
    console.log('quantity user attempts', quantityUserAttempts)
}
while (!isFirstNumberGuessed || !isSecondNumberGuessed )
alert(`You guessed both number. Quantity of your attempts = ${quantityUserAttempts}`)










// let firstNumberGuessedComp = Math.ceil(Math.random() * 10)              //| комп загадує пеше число
// console.log(" first number guessed comp", firstNumberGuessedComp)

// let secondNumberGuessedComp = Math.ceil(Math.random() * 10)              //| комп загадує друге число
// console.log("second number guessed comp", secondNumberGuessedComp)
// let quantityUserAttempts = 0
// let userGuessNumber;
// let firstUserNumber = 0
// let secondUserNumber = 0
// do {
//     userGuessNumber = +prompt(' Guess the number from 1 to 10')          //|  користувач вгадує числа
//     console.log('Guess the number', userGuessNumber)

//     if (userGuessNumber !== firstNumberGuessedComp && userGuessNumber !== secondNumberGuessedComp) {
//         alert('The number is incorrect. Try again.')
//     }
//     else {
//         if (userGuessNumber === firstNumberGuessedComp) {
//             alert('You guessed the first number.')
//             firstUserNumber = userGuessNumber
//             console.log('firstUserNumber = ', firstUserNumber)
//         }
//         else if (userGuessNumber === secondNumberGuessedComp) {
//             alert('You guessed the second number.')
//             secondUserNumber = userGuessNumber
//             console.log('secondUserNumber = ', secondUserNumber)
//         }

//         if (userGuessNumber === secondNumberGuessedComp && userGuessNumber === firstNumberGuessedComp) {
//             alert(`You guessed both number. Quantity of your attempts = ${quantityUserAttempts}`)
//             break;
//         }
//     }

//     // if (userGuessNumber === secondUserNumber && firstUserNumber === firstNumberGuessedComp) {
//     //     alert(`You guessed both number. Quantity of your attempts = ${quantityUserAttempts}`)
//     // }

//     // if (firstUserNumber !== 0 && secondUserNumber !== 0){
//     //     alert(`You guessed both number. Quantity of your attempts = ${quantityUserAttempts}`)
//     // }
//     quantityUserAttempts++
//     console.log('quantity user attempts', quantityUserAttempts)
// }
// while (firstUserNumber === 0 || secondUserNumber === 0)
// alert(`You guessed both number. Quantity of your attempts = ${quantityUserAttempts}`)