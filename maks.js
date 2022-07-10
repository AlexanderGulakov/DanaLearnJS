/*31. Морський бій. Комп’ютер випадковим чином розміщує одиночний корамель на полі 5*5. З клавіатури поступово вводяться координати пострілу поки корабель не буде потоплено. Спробуйте відоразити гру графічно.*/

let fieldsRow = +prompt (`Enter the width of the field`);
let fieldsColumn = +prompt (`Enter the height of the field`);
document.write(`<h1 text-align="center">Black Sea</h1>`);
document.write(`<table border=3 class="center">`);
let positionX = 3
let positionY = 4
let isGoesToHell = false
let shotX
let shotY
for (let i = 0; i < fieldsRow; i++) {
  document.write(`<tr">`);
  for (let j = 0; j < fieldsColumn; j++) {

    document.write(`<td id=${i+1}${j+1} class="city"></td>`);
  }
  document.write(`</tr>`);
}
document.write(`</table>`);
alert(`Commander, we need to sunk this fucking russian warship! Neptune is charged! Provide the coordinates of this fish feed:`)
do{
  shotX = +prompt (`PositionX:`);
  shotY = +prompt (`PositionY:`);
  if(shotX === positionX && shotY === positionY){
    isGoesToHell = true
    document.getElementById(`${shotX}${shotY}`).style.backgroundImage = "url('1.jpg')";
  }
} while(!isGoesToHell)
alert(`Well done, Commander, russian warship - go fuck yourself!`)
// щось таке? якась фігня) як же ж тоді зафарбовувати влучання