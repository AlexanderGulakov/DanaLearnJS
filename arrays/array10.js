// 10.	Дано масив розмірності N і число k (k <N). 
// Здійснити циклічний зсув елементів масиву вправо на k позицій. 
// Наприклад для масиву [1,2,3,4,5,6] 
// та k=2 після виконання зсуву отримуємо [5,6,1,2,3,4].


let array = [1, 2, 3, 4, 5, 6, 7, 8]  //length = 8
const newArray = []
console.log(`array ${array}`)
const k = 7
for (let i = 0, j = i + k; i < array.length; i++, j++) {  // i<8   i=0  j = 1

    if (i === array.length - k) { // i=== 7   
        j = 0                  // j= 0           
        
        console.log(`j if ${j}`)
        if (k === 1) {
            newArray[j] = array[i] //  newArray[0] = array[7]
            break;                // break
        }
        // j++                    // j= 
        // i++                    // i= 

    }
    newArray[j] = array[i]   //  newArray[1] = array[0]    [2]=[1]  [3]=[2]  [4]=[3]  [5]=[4]  [6]=[5]   [7]=[6] 

    console.log(`i ${i}`)
    console.log(`j ${j}`)
    console.log(`newArray[j] ${newArray[j]}`)
}

console.log(`newArray[j] ${newArray}`)













// for (let i = 0, j = i + k; i < array.length; i++, j++) {  // i<8   i=0  j = 3

//     if (i === array.length - k) { // i=== 5
//         j = 0                  // j= 0
//         newArray[j] = array[i] //  newArray[0] = array[5]
//         console.log(`j if ${j}`)
//         j++                    // j= 1
//         i++                    // i= 6

//     }
//     newArray[j] = array[i]   //  newArray[3] = array[0]    [4]=[1]  [5]=[2]  [6]=[3]  [7]=[4]  |   [1]=[6]   [2]=[7]

//     console.log(`i ${i}`)
//     console.log(`j ${j}`)
//     console.log(`newArray[j] ${newArray[j]}`)
// }

// console.log(`newArray[j] ${newArray}`)











