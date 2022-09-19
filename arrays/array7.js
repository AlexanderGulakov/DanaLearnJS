// 7 Дано масив розмірності N і число k ( k<N). Здійснити циклічний зсув елементів масиву вліво 
// на k позицій. 
// Наприклад для масиву [1,2,3,4,5,6] та k=2 після виконання зсуву отримуємо [3,4,5,6,1,2].



let array = [5, 7, 4, 2, 1, 9, 3, 4]  //length = 8
const newArray = []
console.log(`array ${array}`)
const k = parseInt(prompt(" Shift the elements of the array to the right by k positions.K <" + (array.length), ""))   //1


for (let i = 0, j = array.length - k ; i < array.length; i++, j++) {  // i<8   i=0  j = 2
    // j =  //8-2=6
    newArray[j] = array[i]   //  newArray[6] = array[0]    [7]=[1]   [1]=[3]  [2]=[4]  [3]=[5] [4]=[6] [5]=[7]

    if (j=== array.length  ) { // j===8  
        j = 0                  // j= 0           
        newArray[j] = array[i] //  newArray[0] = array[2]
        console.log(`j if ${j}`)
        // if (k === 1) {
        //     break;                // break
        // }
        // j++                    // j= 
        // i++                    // i= 

    }

    console.log(`i ${i}`)
    console.log(`j ${j}`)
    console.log(`newArray[j] ${newArray[j]}`)
}

console.log(`newArray[j] ${newArray}`)