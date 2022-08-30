//Задача 9. Дано масив розмірності N.  Визначити максимальну кількість його однакових елементів.

const array = [5, 5, 5, 1, 2, 5, 3, 3, 3, 5, 3, 3, 99, 5, 99];
const newArray = [];
let step = 1;
let sameElementsQty = 1;

for (let i = 0, j = 0; i < array.length; i += step, j++) { // створимо новий масив в який запишемо кількості кожного з однакових елементів
    step = 1;
    sameElementsQty = 1;

    for (let k = i + 1; k < array.length; k++) {
        if (array[i] === array[k]) {
            step++;
            sameElementsQty++;
        }
    }
    newArray[j] = sameElementsQty;
}
console.log(newArray);

let sameElementsMaxQty;
for (let i = 0; i < newArray.length; i++) { // і вже в цьому новому масиві ми порівняємо кількість однакових елементів
    if (newArray[i + 1] > newArray[i]) {
        sameElementsMaxQty = newArray[i + 1];
    }
}
console.log(sameElementsMaxQty);