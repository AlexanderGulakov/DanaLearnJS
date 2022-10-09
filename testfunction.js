/* Задача 11. Дано числовий масив розмірності N.  Вважати, що його елементи утворюють числову послідовність, 
утворити новий масив що містить найдовшу зростаючу підпослідовність.*/

const array =  [0,8,4,12,2,10,6,14,1,9,5,13,3,11,7,15]
let finalArray = [];
let currentArray = [];
let biggestNum = 0;

for (let i = 0, zeroIndex = 0; i < array.length; i++) {

    currentArray = [];
    biggestNum = currentArray[zeroIndex] = array[i];

    for (let j = i + 1, k = 0; j < array.length; j++) {

        if (array[j] > biggestNum) {
            biggestNum = array[j];
            k++
            currentArray[k] = biggestNum;
        }
    }

    if (currentArray.length > finalArray.length) {
        finalArray = currentArray;
    }
    console.log(`${i}---${currentArray}`)

}
console.log(finalArray);