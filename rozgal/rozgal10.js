//10 Родина їде на відпочинок автомобілем. З клавіатури вводиться наявна кількість літрів палива, 
// витрати палива на 100 кілометрів та відстань, яку необхідно подолати. 
// Вивести на екран чи потрібно, чи не потрібно буде додатково заправляти автомобіль.




const availableFuelCount = parseFloat(prompt(" How much fuel do you have? ?", ""));
const litersOfFuelPerKm = parseFloat(prompt(" How many liters of fuel per 100 km?", ""));
const distanceToBeCovered = parseFloat(prompt(" What is the distance?", "")); 
const possibleDistance = availableFuelCount * 100 / litersOfFuelPerKm                  // краще визначити на скільки кілометрів вистачить того бензу, що є в юзера

// if ((possibleDistance === distanceToBeCovered) || (possibleDistance > distanceToBeCovered)) {
if (possibleDistance >= distanceToBeCovered) {
    alert(`There is enough fuel`)
}

else {
    alert(`There is not enough fuel`)
}







// if ((userDistance * quantityLiters) < quantityFuel) {
//     alert(`There is not enough fuel`)

// if ((userDistance * quantityLiters) === quantityFuel || (userDistance * quantityLiters) > quantityFuel )
//     alert(`There is enough fuel`)
// }

// else {
//     alert(`There is not enough fuel.`)
// }












