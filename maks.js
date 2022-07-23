// Графічна візуалізація поля

const fieldLenght = parseInt(prompt('Enter lenght of the line where tank can drive'));
const rowsCount = 1
document.write('<table>');
// document.write('<tr>');
// for (let i = 0; i < fieldLenght; i++) {
//     document.write(`<th>${i + 1}</th>`)
// }
// document.write('</tr>');
for (let i = 0; i <= rowsCount; i++) {
  document.write('<tr>');
  for (let j = 0; j < fieldLenght; j++) {
      if(i === 0) {
        document.write(`<th>${j + 1}</th>`)
      }
      else document.write(`<td id="${j + 1}"></td>`);
  }
  document.write('</tr>');
}


document.write('</table>');