//21 Задані координати точки на поверхні і центра кулі. Знайти її об’єм і площу поверхні, за допомогою підпрограм.

import { getMid } from "./helpers/mathFormulasFunctions.mjs";
const mid1 = getMid(5, 7, 9);
const mid2 = getMid(5, 9, 7);
const mid3 = getMid(7, 5, 9);
const mid4 = getMid(7, 9, 5);
const mid5 = getMid(9, 5, 7);
const mid6 = getMid(9, 7, 5);
console.log(`mid: ${mid1}`);
console.log(`mid: ${mid2}`);
console.log(`mid: ${mid3}`);
console.log(`mid: ${mid4}`);
console.log(`mid: ${mid5}`);
console.log(`mid: ${mid6}`);
