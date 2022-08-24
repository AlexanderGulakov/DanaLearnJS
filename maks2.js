const numsArray = [7, 7, 7, 9, 45, 45, 45, 99];
const newNumsArray = [];
let seriaLength = 0;

for (let i = 0, j = 0; i < numsArray.length; i += seriaLength + 1, j++) {
    seriaLength = 0;
    for (let k = i + 1; k < numsArray.length; k++) {
        if (numsArray[i] === numsArray[k]) {
            seriaLength++;
        }
        else {

            break
        }

    }
    if (seriaLength > 0) {
        newNumsArray[j] = numsArray[i];
    }
    else {
        newNumsArray[j] = numsArray[i];
    }
}
console.log('Finalarray', newNumsArray);