// 7 Дано масив розмірності N і число k ( k<N). Здійснити циклічний зсув елементів масиву вліво 
// на k позицій. 
// Наприклад для масиву [1,2,3,4,5,6] та k=2 після виконання зсуву отримуємо [3,4,5,6,1,2].



let array = [1, 2, 3, 4, 5, 6, 7, 8]  //length = 8
const newArray = []
// newArray = [ 3, 4, 5, 6, 7, 8, 1, 2]
console.log(`array ${array}`)
const k = parseInt(prompt(" Shift the elements of the array to the right by k positions.K <" + (array.length), ""))   //7


for (let i = 0, j = array.length - k; i < array.length; i++, j++) {  //  i=0  j =8-7 = 1   i<8 
    //  j = 1 i = 0  | j = 2 i = 1 | j = 3 i = 2 |  j = 4 i = 3 |  j = 5 i = 4 |  j = 6 i = 5|  j = 7 i = 6 |  j = 8  i = 7

    if (j === array.length) { // j===8  
        j = 0                  // j= 0           
        newArray[j] = array[i] //  newArray[0] = array[7]
        console.log(`j if ${j}`)
        console.log(`i if ${i}`)
        if ((array.length - k) === 1) {   // 8-7 =1
            break;                // break
        }
        j++                    // j= 
        i++                    // i= 

    }

    newArray[j] = array[i]   //  newArray[1] = array[0] | [2] =[1]   [3] =[2]  [4] =[3]   [5] =[4]   [6] =[5]   [7] =[6]
    console.log(`i ${i}`)
    console.log(`j ${j}`)
    console.log(`newArray[j] ${newArray[j]}`)
}

console.log(`newArray[j] ${newArray}`)










// for (let i = 0, j = array.length - k; i < array.length; i++, j++) {  //  i=0  j =8-7 = 1   i<8
//     // j = 1  j = 2 i = 1  j = 3 i = 2   j = 4 i = 3    j = 5 i = 4    j = 6 i = 5    j = 7 i = 6   j = 8  i = 7

//     if (j === array.length) { // j===8
//         j = 0                  // j= 0
//         newArray[j] = array[i] //  newArray[0] = array[7]
//         console.log(`j if ${j}`)
//         console.log(`i if ${i}`)
//         if ((array.length - k) > 1) {
//             j++                    // j=
//             i++                    // i=

//         }

//     }
//     newArray[j] = array[i]   //  newArray[1] = array[0]  [2] =[1]   [3] =[2]  [4] =[3]   [5] =[4]   [6] =[5]   [7] =[6]
//     console.log(`i ${i}`)
//     console.log(`j ${j}`)
//     console.log(`newArray[j] ${newArray[j]}`)
// }

// console.log(`newArray[j] ${newArray}`)