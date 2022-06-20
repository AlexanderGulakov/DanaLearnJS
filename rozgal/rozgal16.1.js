// Задача 16.1. Комп’ютер випадковим чином вибирає початок і кінець проміжку (проміжок повинен знаходитися в межах від 1 до 100).
//  Користувач вводить число і виграє, якщо число знаходиться у цьому проміжку,
//  або розташоване від нього (від лівого або правого краю) не більше ніж на 10.



const beginningRandomInterval = Math.ceil(Math.random() * 100);
const endOfRandomInterval = Math.floor(Math.random() * (100 - beginningRandomInterval)) + beginningRandomInterval;
// return Math.floor(Math.random() * (max - min)) + min;
const userNumber = parseInt(prompt(" Enter your number", ""));

if((beginningRandomInterval - 11) < userNumber  &&  (endOfRandomInterval +11) > userNumber ) { 
    alert(`You win. Starting interval= ${beginningRandomInterval} and final interval= ${endOfRandomInterval}`)
}
 
else {
    alert(`You lost.Starting interval= ${beginningRandomInterval} and final interval= ${endOfRandomInterval}`)
}

 


    // if ((userNumber === beginningRandomInterval) || (userNumber === endOfRandomInterval)) {
    //     alert(`You win. Starting interval= ${beginningRandomInterval} and final interval= ${endOfRandomInterval}`)
    // }
    // else if (userNumber > beginningRandomInterval && userNumber < endOfRandomInterval) {
    //     alert(`You win. Starting interval= ${beginningRandomInterval} and final interval= ${endOfRandomInterval}`)
    // }
    
    // else if ((beginningRandomInterval - 11) < userNumber && (endOfRandomInterval + 11) > userNumber ) { 
    
    //     alert(`You win. Starting interval= ${beginningRandomInterval} and final interval= ${endOfRandomInterval}`)
    // }
    