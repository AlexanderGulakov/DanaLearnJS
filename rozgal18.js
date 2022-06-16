
// 13. З клавіатури ввоидться номер місяця, вивести на екран пору року


const numberOfMonth = parseInt(prompt("Write your number of Month "));
const winter = 1 || 2 || 12;
const spring = 3 || 4 || 5;
const summer = 6 || 7 || 8;
const autumn = 9 || 10 || 11;
switch (numberOfMonth) {
    case 1 || 2 || 12:
        alert("Winter");
        break;
    case 3 || 4 || 5:
        alert("Spring");
        break;
    case 6 || 7 || 8:
        alert("Summer");
        break;
    case 9 || 10 || 11:
        alert("Autumn");
        break;
    default: alert("wrong number");
}