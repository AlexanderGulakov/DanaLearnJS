// 5. Комп’ютер випадковим чином генерує число. Вгадати, чи наступне число буде більшим чи меншим.


const firstNumber = Math.ceil(Math.random() * 100);  
const secondNumber =  Math.ceil(Math.random() * 100);   
alert(` ${firstNumber}`);
const isBigger = confirm('Will the next number be bigger??') // булеві змінні мають називатись isConfirm (true/false), hasPassport(true/false)
if (isBigger  && firstNumber < secondNumber) // булеві змінні не треба прирівнювати до тру/фолс, вони вже або тру, або фолс
{
  alert((`Well done. You win.`));

}

else {
  alert((`You lost`) );
}

alert(` = ${secondNumber}`);

















// 5.1 .Випадковим чином генерується число від 1 до 5. Спробуйте вгадати число за 2 спроби

// let firstNumber = Math.ceil(Math.random() * 5); //назва змінної + змінні, які не змінюються треба оголошувати через конст!!!!!!
// let yourFirstNumber = parseInt(prompt("1) Guess the number")); // назва змінної

// if (yourFirstNumber === firstNumber) {
//   alert(`Well done. You win.`)
// } 
// // логічна помилка, пропонувати ввести другий номер треба тільки у разі неправильного вводу першого номера
// let yourSecondNumber = parseInt(prompt("2) Guess the number")); // можна однією змінною


// if (yourSecondNumber === firstNumber) {
//   alert(`Well done. You win.`);
// }
// else {
//   alert(`You lost`);
// }
// alert(` ${firstNumber}`);





