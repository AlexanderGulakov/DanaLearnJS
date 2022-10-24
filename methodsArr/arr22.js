// // 22.	Задача. Дано масив номерів автомобілів. 
// // Сформувати масив тих, які починаються на літеру «А» і закінчуються на літеру «Р».

// const arrayNumbersOfCar = ['AO 4790 AR', 'BM 4650 AM', 'RM 8653 AN', 'AM 2850 AP', 'AM 2648 AR']
// console.log(`array numbers of car = ${arrayNumbersOfCar}`)
// const firstLetter = 'A'
// // const endLetter = 'R'
// const getArrBeginLetterAEndLetterR = (array, firstLetter) => {  
//     array.filter((currentValue, index, arr) => {
//         if (arr[index] === firstLetter) {
//             return currentValue
//         }
//     }
//     )
//     }

//  const arrBeginLetterAEndLetterR = getArrBeginLetterAEndLetterR(arrayNumbersOfCar, firstLetter)
// console.log(`The array starts with the letter "A" and ends with the letter "R" = ${arrBeginLetterAEndLetterR}`)









// const arrayNumbersOfCar = ['AO 4790 AR', 'BM 4650 AM', 'RM 8653 AN', 'AM 2850 AP', 'AM 2648 AR']
// console.log(`array numbers of car = ${arrayNumbersOfCar}`)
// const firstLetter = 'A'
// const endLetter = 'R'
// const getArrBeginLetterAEndLetterR = (array, firstLetter, endLetter) =>
//     array.sort((a, b) => {
//         if ((a[0] === firstLetter && a[a.length - 1] === endLetter) > (b[0] === firstLetter && b[b.length - 1] === endLetter)) {
//             return -1
//         }
//         if ((a[0] === firstLetter && a[a.length - 1] === endLetter) < (b[0] === firstLetter && b[b.length - 1] === endLetter)) {
//             return 1
//         }
//         return 0
//     }
//     )

//  const arrBeginLetterAEndLetterR = getArrBeginLetterAEndLetterR (arrayNumbersOfCar, firstLetter, endLetter)
//  console.log(`The array starts with the letter "A" and ends with the letter "R" = ${arrBeginLetterAEndLetterR}`)
