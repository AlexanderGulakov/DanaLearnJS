// Задача 2. Дано послідовність оцінок учня. Підрахувати кількість:
//     4) двійок
//     5) кількість хороших оцінок (добре, відмінно);
//     6) кількість оцінок, які нижче середнього. ( )


let scoresCount = parseInt(prompt("Scores count =", " ")) // кількість оцінок 
let scores = new Array(scoresCount)  //  масив для оцінок
let countScore2 = 0
let countGoodScore = 0
let countScoreBelowAverage = 0
// let sum = 0
// let arithmeticMean

for (let i = 0; i < scores.length; i++) {   //Введемо оцінки учня
    scores[i] = parseInt(prompt("Scores №" + (i + 1), "0"));
    console.log(`scores ${scores}`)

    if (scores[i] === 2) {
        countScore2++                      //Рахуємо кількість двійок
    }
    if (scores[i] >= 4) {
        countGoodScore++                    //кількість хороших оцінок (добре, відмінно)
    }
    // sum = sum + scores[i]                       // Знаходимо суму 
    // console.log(`sum ${sum}`)
    // arithmeticMean = sum / scores.length   // Знаходимо середнє арифметичне
    // console.log(`arithmeticMean ${arithmeticMean}`)
    if (scores[i] < 3) {
        countScoreBelowAverage++           // кількість оцінок, які нижче середнього. 
    }
}
alert(`Count Score2 = ${countScore2} 
Count good = ${countGoodScore}  
Count less than aversge = ${countScoreBelowAverage} `)

