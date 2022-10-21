//19	Задача. Дано масив років народження працівників. 
//Вивести масив тих, які є призовного віку (менше 25 років). Ха-ха – апдейт – менше 60 років )

const birthYearOfWorkers = [1993, 1960, 1970, 2000, 2020, 1962]
const maxConscriptionYear = 2004
const minConscriptionYear = 1962
const workersOfConscriptionAge = birthYearOfWorkers.filter((currentValue) => currentValue < maxConscriptionYear && currentValue > minConscriptionYear)

console.log(`Workers of conscription age = ${workersOfConscriptionAge}`)

