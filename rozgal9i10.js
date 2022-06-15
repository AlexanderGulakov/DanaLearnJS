// // 5. Комп’ютер випадковим чином генерує число. Вгадати, чи наступне число буде більшим чи меншим.

// let number = Math.random() * 100;
// number = Math.ceil(number);


// let firstNumber = Math.ceil(Math.random() * 100);  
// let secondNumber =  Math.ceil(Math.random() * 100);   
// alert(` ${firstNumber}`);

// if ((confirm('Will the next number be bigger??')) && firstNumber < secondNumber)
// {
//   alert((`Well done. You win.`));

// }

// else {
//   alert((`You lost`) );
// }

// alert(` = ${secondNumber}`);

const firstNumber = Math.ceil(Math.random() * 100);  
const secondNumber =  Math.ceil(Math.random() * 100);   
alert(` ${firstNumber}`);
const yourConfirm = confirm('Will the next number be bigger??')
if (yourConfirm === true && firstNumber < secondNumber)
{
  alert((`Well done. You win.`));

}

else {
  alert((`You lost`) );
}

alert(` = ${secondNumber}`);


// 5.1 .Випадковим чином генерується число від 1 до 5. Спробуйте вгадати число за 2 спроби

// let firstNumber = Math.ceil(Math.random() * 5);
// let yourFirstNumber = parseInt(prompt("1) Guess the number"));

// if (yourFirstNumber === firstNumber) {
//   alert(`Well done. You win.`)
// }
// let yourSecondNumber = parseInt(prompt("2) Guess the number"));

//  if (yourSecondNumber === firstNumber) {
//   alert(`Well done. You win.`);
// }
// else {
//   alert(`You lost`);
// }
// alert(` ${firstNumber}`);





