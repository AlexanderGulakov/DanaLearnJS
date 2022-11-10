//Задача 9. Дано рядок тексту.
//Перевірити, чи містить він дату у форматі dd.mm.yyyy (dd- день, mm- місяць, yyyy- рік).


//const stringOfText = "Oleksander, Daniella. ! Oleksander? 20.10.1993 Daniella"
const stringOfText = "32.13.1993 ХО"
console.log(`A string of text = ${stringOfText}`)
//  const regular =/(\d{1,2}\/\d{1,2}\/\d{4})/g
const regular = /(\d{1,2}\D\d{1,2}\D\d{4})/g

let dateInTheText = regular.test(stringOfText)

console.log(` = ${dateInTheText}`)

// 32.13.1993 - НЕ Є ДАТОЮ, АЛЕ ВЕРТАЄ ТРУ!

//  const getDateOfText = (str, re) =>{
//     let dateInTheText = re.test(str)
//     if(dateInTheText ){
//         return console.log(`Date in the text = ${dateInTheText}`)
//     }
//  }
// const result = getDateOfText(stringOfText,regular)
 //console.log(`Date in the text = ${dateInTheText}`)
 //console.log(` The text does not contain a date`)
