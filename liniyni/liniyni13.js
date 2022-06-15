// З клавіатури вводиться номер дня тижня (від 1 до 7). Визначити який буде день тижня через N днів.

const day = parseInt(prompt("Enter the your number = ", 7));
const after = parseInt(prompt("What will be the day of the week after", 14));
const number = 1;
let total = (day + after - number) % 7 + number;
// total = total + number;

alert(`Total = ${total} day`);


// var resultDay=(dayNumber-1+moveDaysCount)%7+1;