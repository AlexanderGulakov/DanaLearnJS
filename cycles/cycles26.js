// 26. Комп’ютер загадує випадкове число від 1 до 10. 
// Вгадати число шляхом введеня можливих варіантів. 
// В кінці вивести кількість спроб користувача. 


let numberGuessedComp = Math.ceil(Math.random() * 10)              //| комп загадує число
console.log("number guessed comp", numberGuessedComp)
  
let quantityUserAttempts = 0
let userGuessNumber;
do {
    userGuessNumber = +prompt(' Guess the number from 1 to 10')     //|  користувач вгадує число від 1 до 10
    console.log('Guess the number', userGuessNumber)
    quantityUserAttempts++
    console.log('quantity user attempts', quantityUserAttempts)
    if(userGuessNumber !== numberGuessedComp){
        alert('The number is incorrect. Try again.')
    }
    else{
        alert(`You guessed the number. Quantity of your attempts = ${quantityUserAttempts }`)
        break;
    }
}
while(true)
// while(userGuessNumber !== numberGuessedComp)
