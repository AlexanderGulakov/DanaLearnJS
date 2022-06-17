// 14. З клавіатури вводиться рівень доступу. Вивести на екран текстове представлення.
// 1.Аднміністратор
// 2.Менеджер
// 3.Редактор
// 4.Користувач


// const accesslevel = parseInt(prompt("Enter the access level: \n1. Administrator \n2. Manager \n3.Editor \n4 User"));
// switch(accesslevel) {
//     case 1:     
//     alert("Administrator");
//     break;
//     case 2:     
//     alert("Manager");
//     break;
//     case 3:     
//     alert("Editor");
//     break;
//     case 4:     
//     alert("User");
//     break;
//     default: alert("wrong number");

// }



// Задача 14.1. Змінити попереднє завдання вивівши «працівник», якщо це перші 3 пункти.
const accesslevel = parseInt(prompt("Enter the access level: \n1. Administrator \n2. Manager \n3.Editor \n4 User"));
switch (accesslevel) {
    case 1:
    case 2:
    case 3:
        alert("Worker");
        break;
    case 4:
        alert("User");
        break;
    default: alert("wrong number");

}
