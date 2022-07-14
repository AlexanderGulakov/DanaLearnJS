alert(
  `Hello, young hunter! Your family starving. You must find some food in this land!`
);
let ammoAmount = +prompt(`So you took so many bullets with you => `);
let harePosX = Math.floor(Math.random() * fieldsRow) + 1;
let harePosY = Math.floor(Math.random() * fieldsColumn) + 1;
console.log(harePosX, harePosY);
let shotPosX;
let shotPosY;
let hareMove;
let hareMoveWay;
let hareMoveCoordinate;
while (shotPosX !== harePosX || shotPosY !== harePosY) {
  if (ammoAmount === 0) {
    alert(`Oh,man! You condemned your loved ones to terrible suffering`);
    break;
  }
  shotPosX = +prompt(
    `There he is - a hare. You look into the scope and determine the X coordinate:`
  );
  shotPosY = +prompt(`...and the Y coordinate:`);
  ammoAmount--;
  if (shotPosX !== harePosX || shotPosY !== harePosY) {
    alert(`Well, you have ${ammoAmount} rounds left. You should try better!`);
    document.getElementById(`${shotPosX}${shotPosY}`).style.backgroundColor =
      "black";
    hareMove = Math.floor(Math.random() * 3);
    hareMoveWay = Math.round(Math.random());            //if 1 = +; 0 = -
    hareMoveCoordinate = Math.round(Math.random());             // if 1 = x; 0 = y
    console.log('haremove',hareMove,'+-',hareMoveWay,'xy',hareMoveCoordinate)
    if (hareMoveWay === 1) {
      if (hareMoveCoordinate === 1) {
        harePosX += hareMove;
      } else {
        harePosY += hareMove;
      }
      if (harePosX > fieldsRow) {
        harePosX = fieldsRow;
      } else if (harePosY > fieldsColumn) {
        harePosY = fieldsColumn;
      }
    } else {
      if (hareMoveCoordinate === 1) {
        harePosX -= hareMove;
      } else {
        harePosY -= hareMove;
      }
      if (harePosX < 1) {
        harePosX = 1;
      } else if (harePosY < 1) {
        harePosY = 1;
      }
    }
    console.log('harePosX',harePosX,'harePoxY',harePosY);
  }
};
if (shotPosX === harePosX && shotPosY === harePosY) {
  alert(`Bulls eye! You saved your relatives.`);
  document.write(`</table>`);
  document.getElementById(`${shotPosX}${shotPosY}`).style.backgroundColor =
    "red";
};
