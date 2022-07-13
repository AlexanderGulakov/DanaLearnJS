// // Задача 12. Створити таблицю 3*4 з використанням відповідних табличних тегів.


// document.write("<pre>");
// for (let i = 0; i < 4; i++) {
//     document.write('<table border="2">')
//     document.write("<tr>");
//     document.write("<th>");
//         document.write("Table ");
//     document.write("</th>");
//     document.write("</tr>"); 
// }

//    document.write("</pre>");

// ДОБАВИТИ ЗМІННІ ДЛЯ КІЛЬКОСТІ РЯДКІВ І КОЛОНОК


let rowTable = 4
let columnTable = 3

document.write('<table border="2">')
for (let i = 0; i < rowTable; i++) {
    document.write("<tr>");
    for (let j = 0; j < columnTable; j++) {
        document.write("<td> Table </td>");
    }
    document.write("</tr>");
}
document.write("</table>");

