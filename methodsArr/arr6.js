//6. Дано ваги автомобілів на парковці. 
//З’ясувати, чи усі автомобілі є легковими (легшими за 2000 кг).


// 1 варіант :
const carsWeight = [1900, 1700, 1000, 1500, 1250]
const weightOfPassengerCar = 2000
const areAllPassengerCars = carsWeight.every((carWeight) => carWeight < weightOfPassengerCar)
if (areAllPassengerCars) {
    console.log(` Yes. All are passenger cars.`)
}
else {
    console.log(` No. Not all are passenger cars.`)
}



// // 2 варіант :
// const carsWeight = [1900, 1700, 1000, 1500, 1250]
// const weightOfPassengerCar = 2000
// const isPassengerCar = (carWeight) => carWeight < weightOfPassengerCar
// if (carsWeight.every(isPassengerCar) ) { // не викликати методи в іфі
//     console.log(` Yes. All are passenger cars.`)
// }
// else {
//     console.log(` No. Not all are passenger cars.`)
// }

 











