// 31. Морський бій. Комп’ютер випадковим чином розміщує одиночний корабель на полі 5*5.
//  З клавіатури поступово вводяться координати пострілу поки корабель не буде потоплено. 
//  Спробуйте відоразити гру графічно.



let shipPositionRow = 2
let shipPositionColumn = 2
let searchId;
// let shipPositionRow = Math.ceil(Math.random() * 5)
// console.log('ships position row', shipPositionRow)
// let shipPositionColumn = Math.ceil(Math.random() * 5)
// console.log('ships position column', shipPositionColumn)

let shotAtShipRow;
let shotAtShipColumn;
do {
    shotAtShipRow = +prompt("A shot at the ship. From 1 to 2. Row =")
    shotAtShipColumn = +prompt(" A shot at the ship. From 1 to 2. Column = ")
    if ((shotAtShipRow === shipPositionRow) && (shotAtShipColumn === shipPositionColumn)) {
        searchId = document.getElementById(`${shotAtShipRow}${shotAtShipColumn}`);
        (searchId.style.background = "red");
        alert(' You won.The ship sank.')
        break;
    }
    else if ((shotAtShipRow !== shipPositionRow) || (shotAtShipColumn !== shipPositionColumn)) {
        searchId = document.getElementById(`${shotAtShipRow}${shotAtShipColumn}`);
        (searchId.style.background = "black");
        alert(' Wrong. Try again')
    }

}
while (true)
