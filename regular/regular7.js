//Задача 7. Дано рядок тексту. Знайти усі знаки пунктуації, які були використано.

//[-!"#$%&'()*+,./:;<=>?@[\\\]_`{|}~]
 
const stringOfText = "Oleksander, Daniella. ! Oleksander? Daniella:" 
console.log(`A string of text = ${stringOfText}`)
const regular = /[-!"#$%&'()*+,./:;<=>?@[\\\]_`{|}~]/g
const punctuationMarks  = stringOfText.match(regular)
console.log(`Punctuation marks in the text= ${punctuationMarks}`) // , . ! ? :

// РЕЗУЛЬТАТ ,,.,!,?,: - ЦЕ НЕ ВІРНО