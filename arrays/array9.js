// Дано масив розмірності N. 
//  Визначити максимальну кількість його однакових елементів.



let number = [2, 1, 6, 4, 2, 8, 10, 5, 9, 2, 1]
let count = 0
let maxCount = 0
for (let i = 0; i < number.length; i++) {   // i = 0 
    for (let j = 0; j < number.length; j++){ // j = 0    
        if(number[i] === number[j + 1]) {  //  ????
            count++                                                                            
        }
    if (count > maxCount) {
        maxCount = count
    }
}

}
alert(`Maximum number of identical elements = ${maxCount}`)

