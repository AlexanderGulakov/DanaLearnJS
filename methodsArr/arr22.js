// // 22.	Задача. Дано масив номерів автомобілів. 
// // Сформувати масив тих, які починаються на літеру «А» і закінчуються на літеру «Р».

const arrayNumbersOfCar = ['AO 4790 AR', 'BM 4650 AM', 'RM 8653 AN', 'AM 2850 AP', 'AM 2648 AR']
console.log(`array numbers of car = ${arrayNumbersOfCar}`)
const firstLetter = 'A'
const endLetter = 'R'
const getArrBeginLetterAEndLetterR = (array, first, end) =>
    array.filter((currentValue) => currentValue[0] === first && currentValue[currentValue.length - 1] === end)

const arrBeginLetterAEndLetterR = getArrBeginLetterAEndLetterR(arrayNumbersOfCar, firstLetter, endLetter)
console.log(`The array starts with the letter "A" and ends with the letter "R" = ${arrBeginLetterAEndLetterR}`)







