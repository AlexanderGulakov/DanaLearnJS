// 5.1 Дано масив розмірності N. 
// Назвемо серією групу однакових елементів що йдуть поспіль, 
// а довжиною серії - кількість цих елементів 
// (довжина серії може дорівнювати 0. Вивести масив, що містить довжини всіх серій вихідного масиву. 

let number = [5, 5, 2, 3, 3, 3, 3, 4, 5, 6, 6, 2, 2, 1]  //масив розмірності N. 
// let final = [2,0,4,0,0,2,2,0]

// let series      //група однакових елементів що йдуть поспіль
let result = []
// let seriesLength = 1  // довжина серії- кількість елементів в серії
    // let series = 0                                        //|  

for (let i = 0; i < number.length; i++) {              //| i = 0    |  i = 2
    let series = 1                                     //|  
 
    if ((number[i] !== number[i + 1])) {               //|              2!=3                      
        series = 0                                     //|               0
        result[i] = series
        console.log(`result[i]= ${result[i]}`)
    }
    // series = 1
    for (let j = 0; number[i] === number[i + 1]; j++) { //| j = 0                        
        if ((number[i] === number[i + 1])) {            //|  5===5                          
            series = series + 1                         //|  2                                
            i++                                         //| i = 1      
        }
       
    }
    result[i] = series                                  //  2             0        
    console.log(`result[i]= ${result[i]}`)
}






















// for (let i = 0; i < number.length; i++) {      //| i = 0     i = 1     i = 2
//     let series = 1
//     for (let j = 0; j < number.length; j++) {  //| j = 0     j = 1
//         if ((number[i] === number[i + 1])) {     //|5===5    5!==2
//             series++                           //| 2
//         }
//     }

//     if ((number[i] !== number[i + 1])) {                  //| 5!==2
//         series = 0                                        //| 0
//         result[i] = series
//         console.log(`result[i]= ${result[i]}`)
//     }


// }
















// for (let i = 0; i < number.length; i++) {      //| i = 0 |  i = 1 | i = 2 | i = 3
//     let series = 1
//     for (let j = i+1; j < number.length; j++) {//| j = 1 |                |j = 0
//         if (number[i] === number[j]) {         //| 5===5 |                |3===3
//             series++                           //|  +    |                |+
//             result[i] = series                 //|  2    |                |3
//             console.log(`result[i]= ${result[j]}`)

//             // alert(`${ }`)
//         }
//     }
//         if (number[i] !== number[i + 1]) {              //| 5!==2 | 2!==3
//             series = 0
//             result[i] = series                          //| 0     | 0
//             console.log(`result[i]= ${result[i]}`)
//         }

// }



