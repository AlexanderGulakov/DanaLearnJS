let rowQty = parseInt(prompt('Enter rows quantity', '1')); // оголошуємо кількість колонок
let columnQty = parseInt(prompt('Enter columns quantity', '1')); // оголошуємо кількість рядків

document.write('<table>'); // створюємо таблицю

document.write('<tr>') // оголошуємо рядок, який огортає заголовок

for (let i = 0; i < columnQty; i++) { // робим цикл з кількості колонок, які введе користувач
    document.write(`<th> ${i + 1}</th>`)
}

document.write('</tr>');

for (let j = 0; j < rowQty; j++) { // рядки з введеної користувачем кількості
    document.write('<tr>')
    for (let k = 0; k < columnQty; k++) {
        document.write(`<td id=${j + 1}${k + 1}></td>`) // клітинки
    }
    document.write(`${j + 1}. <br><br>`); // спроба пронумерувати колонки
    document.write('</tr>');
}

document.write('</table>')