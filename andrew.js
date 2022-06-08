/*Дано ширину екрана та кількість елементів, які повинні бути відображені у рядку. 
Визначити ширину елементів, які повинні бути відображені у цьому рядку. */


const SCREEN_WIDTH = prompt('Width of the screen', '100'); // Чому я не можу за допомогою typeof перевірити тип даних ???

let elementsQty = prompt('Elements quantity', '5');

let elementSize = SCREEN_WIDTH / elementsQty;

alert('Each elemet size =' + ' ' + elementSize);

console.log(typeof SCREEN_WIDTH);

/* Далі пробую розмір екрану в пікселях

const SCREEN_SIZE = parseInt(prompt('SCREEN_SIZE', '100px')); // Напевно не розумію як правильно перетворити тип даних "строк"а на "число"

let elementsQty = parseInt(prompt('elementsQty', '5px'));

//let elementSize = parseInt(prompt('SCREEN_SIZE' / 'elementsQty')); // Через помилковість арифметичної операції тут виникає помилка NaN

//alert('Each elemet size =' + ' ' + elementSize)*/



