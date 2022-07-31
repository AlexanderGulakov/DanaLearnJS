//14 Задані координати вершин трикутника. Знайти його периметр та площу, за допомогою підпрограм.

import { calcSideLenght, calcTrianglePerimeter, calcTriangleSquare } from "./helpers/mathFormulasFunctions.mjs"; // Імпортуємо потрібні функції з допоміжного файлу та використовуємо їх за допомогою Node.js

const triangleVertex_A_coordinate1 = -2;
const triangleVertex_A_coordinate2 = 3;

const triangleVertex_B_coordinate1 = 4;
const triangleVertex_B_coordinate2 = 3;

const triangleVertex_C_coordinate1 = 2;
const triangleVertex_C_coordinate2 = 5;

const divider = 2;

const sideAB = parseFloat(calcSideLenght(triangleVertex_A_coordinate1, triangleVertex_A_coordinate2, triangleVertex_B_coordinate1, triangleVertex_B_coordinate2)); // виклик функції на знаходження сторони та передача актуальних параметри
console.log(sideAB);
const sideBC = parseFloat(calcSideLenght(triangleVertex_B_coordinate1, triangleVertex_B_coordinate2, triangleVertex_C_coordinate1, triangleVertex_C_coordinate2)); // аналогічно
console.log(sideBC);
const sideAC = parseFloat(calcSideLenght(triangleVertex_A_coordinate1, triangleVertex_A_coordinate2, triangleVertex_C_coordinate1, triangleVertex_C_coordinate2)); // аналогічно
console.log(sideAC);

const trianglePerimeter = calcTrianglePerimeter(sideAB, sideBC, sideAC); // виклик функції на знаходження периметру та передамо актуальні параметри

const halfPerim = trianglePerimeter / divider; // знайдемо напівпериметр*/

const triangleSquare = calcTriangleSquare (sideAB, sideBC, sideAC, halfPerim); // виклик функції на знаходження периметру та передамо актуальні параметри
console.log(`Triangle \n Sides: ${sideAB}, ${sideBC}, ${sideAC} \n Perimeter: ${trianglePerimeter} \n Square: ${triangleSquare}`);