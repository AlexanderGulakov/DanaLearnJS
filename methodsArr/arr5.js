// 5. Дано масив імен. 
// Сформувати новий масив, який складається з імен, 
// які починаються на задану літеру.



// 1 варіант :
const namesArray = ['Alexander', 'Denis', 'Anton', 'Anna', 'Daniella', 'Peter', 'Vasyl']
const firstLetterOfName = 'A'
const newArr = namesArray.filter((nameArray) => nameArray[0] === firstLetterOfName) 
console.log(`newArr = ${newArr}`)


// 2 варіант :
// const namesArray = ['Alexander', 'Denis', 'Anton', 'Anna', 'Daniella', 'Peter', 'Vasyl']
// const firstLetterOfName = 'A'
// const getNewArr =(nameArray) => nameArray[0] === firstLetterOfName
// const newArr = namesArray.filter(getNewArr)
// console.log(`newArr = ${newArr}`)



 
