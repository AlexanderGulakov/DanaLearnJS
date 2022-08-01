// 31. Морський бій. Комп’ютер випадковим чином розміщує одиночний корабель на полі 5*5.
//  З клавіатури поступово вводяться координати пострілу поки корабель не буде потоплено. 
//  Спробуйте відобразити гру графічно.

let rowTable = 5
let columnTable = 5

document.write('<table border="2"> ')
for (let i = 0; i < rowTable; i++) {          //| i = 0                                   | i = 1                                 | i = 2                                 | i = 3                                  | i = 4                 
    // console.log(' i ', i)
    document.write("<tr>");
    for (let j = 0; j < columnTable; j++) {  //| j = 0 / j = 1 / j = 2 / j = 3 / j = 4   | j = 0 / j = 1 / j = 2 / j = 3 / j = 4  | j = 0 / j = 1 / j = 2 / j = 3 / j = 4 | j = 0 / j = 1 / j = 2 / j = 3 / j = 4  | j = 0 / j = 1 / j = 2 / j = 3 / j = 4
        // console.log(' j ', j) // тут чому і дорівнює
        document.write(`<td id = ${i + 1}${j + 1} >   </td>`);
        console.log(' i ', i + 1)
        console.log(' j ', j + 1) 
    }
    document.write("</tr>");
}
document.write("</table>");
alert(`Start Game`)


