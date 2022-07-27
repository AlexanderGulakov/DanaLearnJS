// 31. Морський бій. Комп’ютер випадковим чином розміщує одиночний корабель на полі 5*5.
//  З клавіатури поступово вводяться координати пострілу поки корабель не буде потоплено. 
//  Спробуйте відоразити гру графічно.

 
 


let rowTable = 5
let columnTable = 5

document.write('<table border="2"> ')
for (let i = 0; i < rowTable; i++) {
    document.write("<tr>");
    for (let j = 0; j < columnTable; j++) {
        document.write("<td>   </td>");
    }
    document.write("</tr>");
}
document.write("</table>");


