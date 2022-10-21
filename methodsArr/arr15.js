
//15. Дано масив імен працівників. Сформувати новий масив, який складається з перших літер імен.

const namesArray = ['Alexander', 'Denis', 'Anton', 'Marina', 'Daniella', 'Peter', 'Vasyl']
const firstLetterArr = namesArray.map((nameArray) => nameArray[0])

console.log(`Array consisting of first letters = ${firstLetterArr}`)


