// let array = [0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15] // числовий масив розмірності N. 
// let arrayCopy = []
// for (let i = 0, j = 0; i < array.length; i++, j++) { // i = 0 j = 0
//     arrayCopy[j] = array[i]                         // arrayCopy[0] = array[0]
// }
// console.log(`array ${array}`)
// console.log(`arrayCopy ${arrayCopy}`)

for (let j = i + 1; j < startArray.length; j++) {
    let lastArrOfSequencesArr = arrayOfSequences[arrayOfSequences.length - 1]
    let lastElementOfLastArr = lastArrOfSequencesArr[lastArrOfSequencesArr - 1]
    let tempArray = []
    if (startArray[j] > lastElementOfLastArr) {
        tempArray = [...lastArrOfSequencesArr, startArray[j]]
        arrayOfSequences[arrayOfSequences.length] = tempArray

    }
    else {
        for (let k = arrayOfSequences.length; k >= 0; k--) {
            let findArray = arrayOfSequences[k]
            let lastElementFindArray = findArray[findArray.length - 1]
            if (lastElementFindArray < startArray[j]) {
                tempArray = [...findArray, startArray[j]]
                arrayOfSequences[k + 1] = tempArray
            }
        }
    }
}
let longestAscendingOfSequence = arrayOfSequences[arrayOfSequences.length - 1]
console.log(longestAscendingOfSequence)











let a = [0]
let b = [1, 2, 4]
let array = []
array.push(a)
array.push(b)
console.log(array)




// console.log(array)
// console.log(arrayCopy)
// array[0]='newElement'
// console.log(array)
// console.log(arrayCopy)