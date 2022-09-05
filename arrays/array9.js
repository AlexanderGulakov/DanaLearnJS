// Дано масив розмірності N. 
//  Визначити максимальну кількість його однакових елементів.



let number = [2, 1, 6, 4, 2, 8, 10, 5, 9, 2, 1]
let count = 1
let maxCount = 0
// let sameElements = 0
for (let i = 0; i < 2; i++) {
    for (let j = 0; j < number.length; j++) {
        console.log(`i= ${i}`)   // i = 0          
        console.log(`j= ${j}`)  // j = 0  
        if (i === j) {
            j = i + 1
            console.log(`if()j= ${j}`)    // j = 1
        }
        if (number[i] === number[j] ) {  //   2 === 1
            count++
            console.log(`if count = ${count}`)  // -
        }
        console.log(`number[i]= ${number[i]}`) //2
        console.log(`number[j]= ${number[j]}`) //1
        console.log(`count = ${count}`)  // 1

        // if (count > maxCount) {
        //     maxCount = count
        // }
    }

}
alert(`Maximum number of identical elements = ${count}`)

