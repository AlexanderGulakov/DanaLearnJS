//Задача 9. Дано рядок тексту.
//Перевірити, чи містить він дату у форматі dd.mm.yyyy (dd- день, mm- місяць, yyyy- рік).


//const stringOfText = "Oleksander, Daniella. ! Oleksander? 20.10.1993 Daniella"
const stringOfText = "20.10.93"
console.log(`A string of text = ${stringOfText}`)
 const regular = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/g
//const regular = /(\d{1,2}\D\d{1,2}\D\d{4})/g

let dateInTheText = regular.test(stringOfText)

console.log(` = ${dateInTheText}`)





// /\d{1,2}\/\d{1,2}\/\d{4}/g
//   12     /   11   / 2001

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
