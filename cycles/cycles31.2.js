// 31. Морський бій. Комп’ютер випадковим чином розміщує одиночний корабель на полі 5*5.
//  З клавіатури поступово вводяться координати пострілу поки корабель не буде потоплено. 
//  Спробуйте відоразити гру графічно.


 
let ShipPositionRow = Math.ceil(Math.random() * 5)
let ShipPositionColumn = Math.ceil(Math.random() * 5)


let shotAtShipRow = +prompt("A shot at the ship. Row =")
let shotAtShipColumn = +prompt(" Column = ")