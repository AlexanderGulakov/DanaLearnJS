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

for (let i = 0; i < number.length; i++) {                   //| i = 0     | i = 2     | i = 3    i = 
    if((number[i] !== number[i + 1])){                                  //|2!==3
        series = 0
        result[i] = series                                               //|0
        console.log(`result[i]= ${result[i]}`)                           //| 0
    }                                   
    for (let j = 0; j < i < number.length; j++) { //| j = 0                | j = 0 
        let series = 1                   
        if ((number[i] === number[i + 1])) {                  //| 5===5               //| 3===3  3===3                                               
            series ++                                         //| 2                   //| 2      4                         
            result[j] = series                                //| 2                   //| 2                
        if(number[i+1] === number[i + 2]) {                   //|                     //| 3===3
            series ++                                         //|                     //| 3                                          
            result[j] = series                                //|                     //| 3
            i++
        }
    }
     console.log(`result[j]= ${result[j]}`)                   //|2                    //|3
    }
                                      
}









































