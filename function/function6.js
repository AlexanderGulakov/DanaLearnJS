// Задача 6. Створити функції, які переводять:
//     1) Сантиметри у дюйми;
//     2) Кілограми у фунти;
//     3) Кілометри у милі.

const inchesPerCm = 0.39370     //змінні
const poundsPerKg = 2.2046     //
const milesPerKm = 0.6214     //
const getInches = (cm) => Math.floor(cm * inchesPerCm)   
const getPounds = (kg) => Math.floor(kg * poundsPerKg)    
const getMiles = (km) => Math.floor(km * milesPerKm)   

let centimeters = +prompt("How many centimeters?")    
let kilograms = +prompt("How many kilograms?")  
let kilometers = +prompt("How many kilometers?")
let countInches = getInches(centimeters)
let countPounds = getPounds(kilograms)
let countMiles = getMiles(kilometers)
alert(`Cm = ${centimeters}.Inches = ${countInches}
Kg = ${kilograms}.Pound = ${countPounds} 
Km = ${kilometers}. Mile = ${countMiles}`)