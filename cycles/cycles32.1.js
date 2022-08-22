// 32. Тир. На полі з 10 клітинок розміщують зайця. 
// За один крок заєць може стрибати на відстань від 0 до 3 позицій у будь-якому напрямку.
//  З клавіатури вводиться позиція пострілу.
//  Гра продовжується поки  у користувача не закінчаться патрони 
//  (кількість вводиться з клавіатури) або не буде влучання. 
//  Спробуйте відоразити гру графічно.




let field = 10
document.write('<table border="2"> ')
document.write("<tr>");
for (let i = 0; i < field; i++) {
    document.write(`<td id = ${i + 1}>   </td>`);
    console.log(' i ', i + 1)
}
document.write("</tr>");
document.write("</table>");
alert(`Start Game`)













// document.write('<table border="2"> ')
// for (let i = 0; i < 1; i++) {
//     document.write("<tr>");
//     for (let j = 0; j < field; j++) {
//         document.write(`<td id = ${i + 1}${j + 1} >   </td>`);
//         console.log(' i ', i + 1)
//         console.log(' j ', j + 1)
//     }
//     document.write("</tr>");
// }
// document.write("</table>");
// alert(`Start Game`)

