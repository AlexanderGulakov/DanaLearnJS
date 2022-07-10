/*28. З клавіатури вводяться поступово числа. Знайти два найбільші числа. Ввід здійснюється до тих пір, поки різниця між такими числами є більшою за 5.*/

let usersNumberSecond;
let secondBiggestNumber = 0;
let firstBiggestNumber = +prompt(`Enter number`) || 0;
do {
  usersNumberSecond = +prompt(`Enter number`) || 6;
  if (!secondBiggestNumber) {
      secondBiggestNumber = usersNumberSecond;
  };
  if (usersNumberSecond > firstBiggestNumber) {
      if (usersNumberSecond > secondBiggestNumber) {
          if (secondBiggestNumber > firstBiggestNumber) {
              firstBiggestNumber = usersNumberSecond;
              continue;
          }
          if (secondBiggestNumber < firstBiggestNumber) {
              secondBiggestNumber = usersNumberSecond;
          };
      }
      if (usersNumberSecond < secondBiggestNumber) {
          firstBiggestNumber = usersNumberSecond;
      };
  };
    console.log("first", firstBiggestNumber, "second", secondBiggestNumber);
} while (Math.abs(secondBiggestNumber - firstBiggestNumber) > 5);