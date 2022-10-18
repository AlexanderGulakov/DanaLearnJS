
// 11.Дано числовий масив розмірності N. 
//  Вважати, що його елементи утворюють числову послідовність, 
//  утворити новий масив що містить найдовшу зростаючу підпослідовність
// 0,8,4,12,2,10,6,14,1,9,5,13,3,11,7,15

const startArray = [0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15];
let arrayOfSequences = [] //масив масивів
let i = startArray[0]  // i = 0
arrayOfSequences[0] = [i]  // let newArr = []; newArr[0]= i ; arrayOfSequences[0]= newArr

for (let j = i + 1; j < startArray.length; j++) {
    let lastArrOfSequencesArr = arrayOfSequences[arrayOfSequences.length - 1]
    let lastElementOfLastArr = lastArrOfSequencesArr[lastArrOfSequencesArr - 1]
    let tempArray = []
    if (startArray[j] > lastElementOfLastArr) {
        tempArray = [...lastArrOfSequencesArr, startArray[j]]
        arrayOfSequences[arrayOfSequences.length] = tempArray
    }

    else {
        for (let k = arrayOfSequences.length-1; k >= 0; k--) {
            let findArray = arrayOfSequences[k]
            let lastElementFindArray = findArray[findArray.length - 1]
            if (lastElementFindArray < startArray[j]) {
                let tempArr = [...findArray, startArray[j]]
                arrayOfSequences[k + 1] = tempArr
                break;
            }
        }
        
    }
    console.log(arrayOfSequences)
}
let longestAscendingOfSequence = arrayOfSequences[arrayOfSequences.length - 1]
console.log(longestAscendingOfSequence)

// цикл, який іде по startArr починаючи з другого елементу {
// якщо:   startArr[j] > останній елемент останнього масиву
// 		tempArr = копія останнього масиву + startArr[j]
// 		дописуєм tempArr в кінець arrayOfSequences 
	
// інакше:
// 	// пройти по всім підмасивам і знайти підмасив в якому останній елемент буде меншим за startArr[j]
// 	// tempArr = скопіювати знайдений масив + startArr[j]
// 	// в наступний від знайденого записати tempArray
	
// }








 


