
// // Найбільше серед двох замінити на 0. 
// Якщо однакові, то замінити обидва на 1.

let firstNumber = parseInt(prompt(" Enter first number", 10));
let secondNumber = parseInt(prompt("Enter second number", 8));


if (firstNumber === secondNumber) {
    firstNumber = 1;
    secondNumber = 1;
}
else if (firstNumber > secondNumber) {
    firstNumber = 0;
}
 
else {
    secondNumber = 0;
}
 
alert(`first number= ${firstNumber}, second number = ${secondNumber}`);


