// 15.	З клавіатури вводиться номер місяця. Визначити, який буде місяць через вказану кількість N місяців. 

const month = parseInt(prompt("Enter the your number = ", 12));
const after = parseInt(prompt("After=", 12));
const number = 1;
let total = ((month + after) - number) % 12;
total = total + number;

alert(`Total = ${total} month`);

