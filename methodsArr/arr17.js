// 17.	Задача. Відсортувати масив імен за останньою літерою.



const namesArray = ['Alexander', 'Denis', 'Anton', 'Anna', 'Daniella', 'Peter', 'Vasyl']
console.log(`newArr = ${namesArray}`)
const getArraySortByLastLetter = (array) =>
    array.sort((a, b) => {
        if (a[a.length-1] < b[b.length-1]) {
            return -1
        }
        if (a[a.length-1] > b[b.length-1]) {
            return 1
        }
        return 0
    }
    )

const arraySortByLastLetter = getArraySortByLastLetter(namesArray)
console.log(`array sort by last letter = ${arraySortByLastLetter}`)












