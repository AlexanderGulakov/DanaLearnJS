// Задача 15. З використанням операторів вибору реалізувати гру 
// «Камінь ножниці папір» (користувач задає свій варіант, комп’ютер генерує випадковим чином),


const userNumber = parseInt(prompt("Select from the list: \n1. Stone \n2. Scissors\n3.Paper"));
switch (userNumber) {
    case 1:
        alert("Stone");
        break;
    case 2:
        alert("Scissors");
        break;
    case 3:
        alert("Paper");
        break;
    default: alert("wrong number");

}
const randomNumberComp = Math.ceil(Math.random() * 3); 
alert (`random number = ${randomNumberComp}`);

if (randomNumberComp===1 && ){
    alert("Paper");
}

 