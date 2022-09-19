//                                   +  + 
//                    0  1  2  3  4  5  6  7
const currentArray = [1, 6, 3, 3, 3, 5, 5, 7];
// [0,0,3,2,0]
// i       // 0   1  2  5 7
// j       // 1   2  3  7 8
// k       // 0   1  2  3 4
// counter // 1   1  3  2
// newArray//[0,  0, 3, 2 ]


const arraySeries = (array) => {
    let arraySeries = [];
    
    for (let i = 0, k = 0, counter = 1; i < array.length; i = i + counter) {  
        counter = 1
        for (let j = i + 1; j < array.length; j++) { 
            if (array[i] === array[j]) {
                arraySeries[k] = ++counter
                continue
            }
            else if (j - i === 1) {
                arraySeries[k] = 0            
            }
            k++
            break;
        }

        if(array[array.length - 1] !== array[array.length - 2]) {
            arraySeries[k] = 0
        }
       
    }
    return arraySeries;
}

console.log(arraySeries(currentArray));