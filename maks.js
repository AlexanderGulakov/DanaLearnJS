/*32. Тир. На полі з 10 клітинок розміщують зайця. За один крок заєць може стрибати на відстань від 0 до 3 позицій у будь-якому напрямку. 
З клавіатури вводиться позиція пострілу. Гра продовжується поки  у користувача не закінчаться патрони (кількість вводиться з клавіатури) 
або не буде влучання. Спробуйте відоразити гру графічно.*/

let fieldsRow = +prompt (`Enter the height of the field`);
 let fieldsColumn = +prompt (`Enter the width of the field`);
 document.write(`<table style=width:50% height:50% align=center>`); 
 document.write(
   `<caption style=color:red; font-size:7em>The hunting</caption>`
 );
 for (let i = 0; i < fieldsRow; i++) {
   document.write(`<tr style=height:100px >`);
   for (let j = 0; j < fieldsColumn; j++) {
     document.write(
       `<td id=${i + 1}${j + 1} style=width:100px height:100px></td>`
     );
   }
   document.write(`</tr>`);
 };