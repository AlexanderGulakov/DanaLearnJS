// Задача 13. Динамічно створити поля для введення назви предмета 
// та кількості балів з введеної користувачем кількості предметів 
// (для кожного предмета: два input з відповідними тегами label).

let quantityOfSubjects = prompt("Enter the quantity of subjects", " ")
// console.log('quantity of subjects', quantityOfSubjects)

for (let i = 0; i < 1; i++) {
    for (let j = 0; j < quantityOfSubjects; j++) {

        document.write(`<label for= {subject}> Subject ${j + 1} </label> <input type={text} id={subject}> <br>`);
        
        document.write(`<label for= {score}> Score ${j + 1} </label> <input type={text} id={score}> <br>`);
        for(let k= 0; k < 45; k++ )
        document.write("-")
        document.write("<br>")
    }
   
}
 document.write("<br>")





//  <label for="subject">Subject</label>
// <input type="text" id="subject"> <br>
// <label for="score">Score</label>
// <input type="text" id="score"> 