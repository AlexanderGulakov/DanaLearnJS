/*31. Морський бій. Комп’ютер випадковим чином розміщує одиночний корамель на полі 5*5. З клавіатури поступово вводяться координати пострілу поки корабель не буде потоплено. Спробуйте відоразити гру графічно.*/


let positionX = 3
let positionY = 4
let isGoesToHell = false
let shotX
let shotY

alert(`Commander, we need to sunk this fucking russian warship! Neptune is charged! Provide the coordinates of this fish feed:`)
do{
  shotX = +prompt (`PositionX:`);
  shotY = +prompt (`PositionY:`);
  if(shotX === positionX && shotY === positionY){
    isGoesToHell = true
    document.getElementById(`${shotX}${shotY}`).style.backgroundImage = "url('1.jpg')";
  }
  else {
    document.getElementById(`${shotX}${shotY}`).style.backgroundImage = "url('missed1.jpg')";
  }
} while(!isGoesToHell)
alert(`Well done, Commander, russian warship - go fuck yourself!`)
// щось таке? якась фігня) як же ж тоді зафарбовувати влучання