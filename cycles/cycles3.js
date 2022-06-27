// Задача 3. Вивести на екран таблицю
// -------
// | | | |
// -------
// | | | |
// -------
// | | | |
// -------


// for (початок; умова; крок) {
//     // ... тіло циклу ...
//   }
 


for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 7; j++) {
        document.write("-");
    }
    document.write("<br>");

    for (let j = 0; j < 4; j++) {
        document.write("|  ");
    }
    document.write("<br>");
}
for (let i = 0; i < 1; i++) {
    for (let j = 0; j < 7; j++) {
        document.write("-");
    }
}
