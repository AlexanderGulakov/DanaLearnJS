//20.	Задача.Дано масив показників гемоглобіну (масив чисел). Сформувати масив тих, які є меншими за 115.


const arrayOfNumbers = [200, 220, 30, 115, 56, 120, 250]
const hemoglobinIndicators = arrayOfNumbers.filter((currentValue) => currentValue < 115)

console.log(`Hemoglobin indicators less than 115 = ${hemoglobinIndicators}`)