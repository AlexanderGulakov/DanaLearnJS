// 10.	Дано масив розмірності N і число k ( k <N). 
// Здійснити циклічний зсув елементів масиву вправо на k позицій. 
// Наприклад для масиву [1,2,3,4,5,6] 
// та k=2 після виконання зсуву отримуємо [5,6,1,2,3,4].

let array = [5, 7, 4, 2, 1, 9, 3, 4]  //length = 8
console.log(`array ${array}`)
const k = parseInt(prompt(" Shift the elements of the array to the right by k positions.K<8. K =", " "))//2
// let result = array.length - k  //6
// console.log(`result ${result}`)
let newArray = []
for (let i = 0; i < array.length - k; i++) {    // i = 0           i = 1         i = 2       i<6
    // console.log(`i ${i}`)

    for (let j = i + 6; j < array.length; j++) { //j = 6  j = 7       j < 8
        // console.log(`i ${i}`)
        // console.log(`j ${j}`)
        if (i === 0) {
            newArray = array[j]                   //  3         4
            console.log(`newArray  ${newArray}`)   // 3         4
        }
    }
    newArray = array[i]                        //  5   7  4  2  1 9 
    console.log(`newArray  ${newArray}`)

}












// for (let i = 0; i < array.length; i++) { // i = 0      i = 1    i = 2                   i<8
//     array[i] = array[i + result]           //5 = 3      7= 4
//     newArray[i] = array[i]              // 3           // 4
//     console.log(`newArray[i] ${newArray[i]}`)
//     // alert(`newArray[i] = ${newArray[i]}`)
//     if (i >= k) { // i >= 2
//         newArray[i] =
//         console.log(`newArray[i] ${newArray[i]}`)
//     }
// }



// let number = [1, 2, 3, 4, 5, 6, 7, 8]  //length = 8
// const k = parseInt(prompt(" Shift the elements of the array to the right by k positions.K < 8. K =", " "))//1
// let result = []
// for (let i = 0; i < number.length; i++) {
//     result[i] = number[i]
//     console.log(`result[i] ${result[i]}`)
//     if (i === 7) {

//         result[i] = number[i] % number.length + k
//         console.log(`result[i] ${result[i]}`)
//     }
// alert(`result[i] = ${result[i]}`)
// }


