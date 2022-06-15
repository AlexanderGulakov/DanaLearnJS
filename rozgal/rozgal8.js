// 4. З клавіатури вводиться кількість балів.
//  Вивести на екран оцінку (задовільно, добре чи відмінно).


const score = parseInt(prompt("Enter your score", ""));
let result;
switch (score) {
    case 1: result = "You are very stupid";
        break;
    case 2: result = "You're still stupid";
        break;
    case 3: result = "It's better";
        break;
    case 4: result = "It's much better";
        break;
    case 5: result = "Well done";
        break;
    default: result = "The score is incorrect. Don't fool me";

}
alert(result);