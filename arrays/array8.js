// Дано числовий масив розмірності N. Знайти кількість його локальних мінімумів.
//  Локальним мінімумом називається елемент, значення якого менше від сусідів

let number = [2, 1, 6, 4, 3, 2, 8, 10, 5, 9]
let count = 0

for (let i = 0; i < number.length; i++) {     //i = 0 i<10   i ++
    console.log(`i= ${i}`)
    if ((number[i + 1] < number[i]) && (number[i + 1] < number[i + 2])) {    //number[1] < number[0] && number[1] < number[2]
        count++                                                             // 1
        // console.log(`number[i]= ${number[i]}`)
        console.log(`count= ${count}`)
    }
    console.log(`i= ${number[i]}`)
    console.log(`i+1= ${number[i + 1]}`)
    console.log(`i+2= ${number[i + 2]}`)
}
alert(`count = ${count}`)