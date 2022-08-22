// Задача 7. Створити функцію, яка створює таблицю 
// з вказаною кількістю рядків і стовпців


const createTable = (row, column) => {
    document.write('<table border="2"> ')
    for (let i = 0; i < row; i++) {
        document.write("<tr>");
        for (let j = 0; j < column; j++) {
            document.write(`<td>   </td>`);
        }
        document.write("</tr>");
    }
    document.write("</table>");

}
let rowTable = +prompt("How many rows?")
let columnTable = +prompt("How many column?")
createTable(rowTable, columnTable)


