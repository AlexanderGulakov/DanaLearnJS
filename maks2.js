const shipPositionRow = Math.ceil(Math.random() * rowQty);
console.log('shipPositionRow', shipPositionRow)
const shipPositionColumn = Math.ceil(Math.random() * columnQty);
console.log('shipPositionColumn', shipPositionColumn)

let userShotRow;
let userShotColumn;
let isShipGotShot;
let shotNumbers = 0;

do {
    userShotRow = parseInt(prompt(`Choose a row from "1" to "${rowQty}" to take a shot!`, '1'));
    userShotColumn = parseInt(prompt(`Choose a column from "1" to "${columnQty}" to take a shot!`, '1'));
    isShipGotShot = (userShotRow === shipPositionRow && userShotColumn === shipPositionColumn);

    if (isShipGotShot) {
        let hitShipsCell = document.getElementById(`${userShotRow}${userShotColumn}`); // якщо влучив - переміг
        hitShipsCell.style.backgroundColor = "red";
    }

    else if (userShotRow && userShotColumn) {
        shotNumbers++
        let hitEmptyCell = document.getElementById(`${userShotRow}${userShotColumn}`);
        hitEmptyCell.style.backgroundColor = "black";
        hitEmptyCell.textContent = `${shotNumbers}`;
    }
    
} while (!isShipGotShot && !isNaN(userShotRow) && !isNaN(userShotColumn))

if (isShipGotShot) {
    alert(`You hit the ship! It was on the row ${shipPositionRow} and column ${shipPositionColumn}`)
}