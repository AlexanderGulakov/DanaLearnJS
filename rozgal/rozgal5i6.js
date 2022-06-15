

// Задача 2.1 З клавіатури вводяться два числа. Вибравши номер операції обчислити результат.
// 2.1.3

const firstNumber = parseFloat(prompt( "Write your first Number "));

const secondNumber = parseFloat(prompt( "Write your second Number "));
const operation = prompt( " Write your operation 1+  2-  3/   4*   5% ");
let result;

switch (operation){

    case 1 : result = firstNumber + secondNumber  ;
    break;
    case 2: result = firstNumber - secondNumber;
    break;
    case 3: result = firstNumber / secondNumber;
    break;
    case 4: result = firstNumber * secondNumber;
    break;
    case 5: result = firstNumber % secondNumber;
    break;
    default: result = "Error";
}
alert(result);



// Задача 2.2. Модифікувати попереднє завдання ввівши не номер операції, а саму операцію.


// // 2.2
// const firstNumber = parseFloat(prompt( "Write your first Number "));
// const operation = prompt( "Write your operation ");
// const secondNumber = parseFloat(prompt( "Write your second Number "));
// let result;

// switch (operation){

//     case `+` : result = firstNumber + secondNumber  ;
//     break;
//     case `-`: result = firstNumber - secondNumber;
//     break;
//     case `/`: result = firstNumber / secondNumber;
//     break;
//     case `*`: result = firstNumber * secondNumber;
//     break;
//     case `%`: result = firstNumber % secondNumber;
//     break;
//     default: result = "Eror";
// }
// alert(result);



