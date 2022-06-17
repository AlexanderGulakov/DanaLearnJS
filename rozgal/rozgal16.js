// Задача 16. Комп’ютер загадує число від 1 до 5.
//  Дати можливість користувачу за 2 спроби вгадати загадане комп’ютером число.

// 5.1 .Випадковим чином генерується число від 1 до 5. Спробуйте вгадати число за 2 спроби

const firstNumber = Math.ceil(Math.random() * 5); 
let guesNumber = parseInt(prompt("1) Guess the number")); // назва змінної

if (guesNumber !== firstNumber) {
  guesNumber = parseInt(prompt("2) Guess the number"))
  if ((guesNumber !== firstNumber))
    alert(`You lost`)
  else
    alert(`Well done. You win.`)
}

else {
  alert(`Well done. You win.`)
}


alert(` ${firstNumber}`);