// 6. З клавіатури вводяться імена двох дітей та кількість шоколадок.
//  Вивести не екран ім’я того учня, у якого кількість шоколадок є більшою.

const firstName = prompt("Enter your name ",);
const firstQuantity = parseFloat(prompt("How much? "));
const secondName = prompt("Enter your name ");
const secondQuantity = parseFloat(prompt("How much? "));



if (firstQuantity > secondQuantity) {

    alert(`= ${firstName}`);
}

else {
    alert(`= ${secondName}`)
}