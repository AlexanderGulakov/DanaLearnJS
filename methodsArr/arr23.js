// 23.	Задача. Дано масив літер. Сформувати рядок, який складається тільки з голосних літер.


const arrayOfLetter = ['a', 'b', 'c', 'd', 'e', 'y', 'f', 'o', 'l']
console.log(`A array of letter = ${arrayOfLetter}`)
const arrayOfVowels = ['a', 'e', 'i', 'o', 'u', 'y']

const getVowels = (firstArr, secondArr) => firstArr.filter((currentValue) => secondArr.indexOf(currentValue) !== -1);
const sortedByVowelsArr = getVowels(leterrsArr, vowelArr);
console.log(sortedByVowelsArr);


const getVowelsLetter = (array, arrayOfVowels) =>

    array.filter((currentValue, index) => {
        if (currentValue === arrayOfVowels[arrayOfVowels.indexOf(currentValue[0])]) {
            return currentValue
        }
    }
    )
const vowelsLetter = getVowelsLetter(arrayOfLetter, arrayOfVowels)
console.log(`A string consisting only of vowels = ${vowelsLetter}`)






// const arrayOfLetter = ['a', 'b', 'c', 'd', 'e', 'y', 'f', 'o', 'l']
// console.log(`A array of letter = ${arrayOfLetter}`)
// const arrayOfVowels = ['a', 'e', 'i', 'o', 'u', 'y']

// const getVowelsLetter = (array, arrayOfVowels) =>
//     array.filter((currentValue) => {
//         for (let i = 0; i < arrayOfVowels.length; i++) {
//             if (currentValue === arrayOfVowels[i]) {
//                 return currentValue
//             }
//         }
//     }
//     )

// const vowelsLetter = getVowelsLetter(arrayOfLetter, arrayOfVowels)
// console.log(`A string consisting only of vowels = ${vowelsLetter}`)
