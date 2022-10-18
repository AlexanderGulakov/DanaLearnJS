// 6.Дано цілочисловий  масив розмірності N. 
// Якщо він є перестановкою, то вивести ТАК,
//  у противному випадку вивести номер першого недопустимого елемента.


let array = [3, 2, 8, 0, 1, 4, 6]  // масив розмірності N.
let tempArray;
let result;
for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
        if (array[j] < array[i]) {
            tempArray = array[i]
            array[i] = array[j]
            array[j] = tempArray
        }
    }
    console.log(`array[i] = ${array[i]}`)
}
console.log(`array= ${array}`)
// array = [0,1,2,3,5]

for (let k = 0; k < array.length - 1; k++) {
    result = `Yes`
    if (array[k] + 1 !== array[k + 1]) {
        result = `First invalid element = ${array[k + 1]}`
        break;
    }

}
console.log(` ${result}`)
