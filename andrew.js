// Тепер перша клітинка пуста. 

// Таблична візуалізація поля

let rowQty = parseInt(prompt('Enter rows quantity', '5')); // оголошуємо кількість колонок
let columnQty = parseInt(prompt('Enter columns quantity', '5')); // оголошуємо кількість рядків


document.write('<table>'); // створюємо таблицю

// document.write('<tr>') // оголошуємо рядок, який огортає заголовок

// for (let i = 0; i < columnQty + 1; i++) { // робим цикл з кількості колонок, які введе користувач
//     document.write(`<td id=${'c' + i}> ${i}</td>`); // додаю нумерацію колонок
//     let cornerCell = document.getElementById('c0'); // кутова клітинка має бути пуста
//     cornerCell.textContent = ''; // &nbps; чомусь не спрацьовує, тому ставлю пусту строку
// }

// document.write('</tr>');

for (let j = 0; j <= rowQty; j++) { // рядки з введеної користувачем кількості
    document.write('<tr>')
    if(j===0){
        document.write(`<td>№</td><br>`);
    }
    else document.write(`<td>${j}</td><br>`);

    for (let k = 0; k < columnQty; k++) {
        if(j===0){
            document.write(`<td id=${'c' + k}> ${k+1}</td>`);
        }
        else document.write(`<td id=${j + 1}${k + 1}></td>`) // клітинка задаємо id з цифр рядків та колонок
    }

    document.write('</tr>');
}

document.write('</table>')

