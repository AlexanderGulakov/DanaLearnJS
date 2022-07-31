//14 Задані координати вершин трикутника. Знайти його периметр та площу, за допомогою підпрограм.

import { calcSideLenght } from './helpers/mathFormulasFunctions';

const triangleVertex_A_coordinate1 = parseFloat(prompt('Enter coordinate "x" of triangle`s vertex "A"'));
const triangleVertex_A_coordinate2 = parseFloat(prompt('Enter coordinate "y" of triangle`s vertex "A"'));

const triangleVertex_B_coordinate1 = parseFloat(prompt('Enter coordinate "x" of triangle`s vertex "B"'));
const triangleVertex_B_coordinate2 = parseFloat(prompt('Enter coordinate "y" of triangle`s vertex "B"'));

const triangleVertex_C_coordinate1 = parseFloat(prompt('Enter coordinate "x" of triangle`s vertex "C"'));
const triangleVertex_C_coordinate2 = parseFloat(prompt('Enter coordinate "y" of triangle`s vertex "C"'));

const divider = 2;

const sideAB = calcSideLenght(triangleVertex_A_coordinate1, triangleVertex_A_coordinate2, triangleVertex_B_coordinate1, triangleVertex_B_coordinate2); // виклик функції на знаходження сторони та передача актуальних параметри
console.log(sideAB);
const sideBC = calcSideLenght(triangleVertex_B_coordinate1, triangleVertex_B_coordinate2, triangleVertex_C_coordinate1, triangleVertex_C_coordinate2); // аналогічно
console.log(sideBC);
const sideAC = calcSideLenght(triangleVertex_A_coordinate1, triangleVertex_A_coordinate2, triangleVertex_C_coordinate1, triangleVertex_C_coordinate2); // аналогічно
console.log(sideAC);

const trianglePerimeter = calcTrianglePerimeter(sideAB, sideBC, sideAC); // виклик функції на знаходження периметру та передамо актуальні параметри
const halfPerim = trianglePerimeter / divider; // знайдемо напівпериметр

const triangleSquare = calcTriangleSquare (sideAB, sideBC, sideAC, halfPerim); // виклик функції на знаходження периметру та передамо актуальні параметри









/*const calcSideLenght = (vertex_1_coorX, vertex_1_coorY, vertex_2_coorX, vertex_2_coorY) => {
    const sideLenght = Math.pow((vertex_2_coorX - vertex_1_coorX), 2) + Math.pow((vertex_2_coorY - vertex_1_coorY), 2);
    return Math.sqrt(sideLenght).toFixed(2);
}
const triangleHalfPerimeter = calcSideLenght(triangleVertex_A_coordinate1, triangleVertex_A_coordinate2, triangleVertex_B_coordinate1, triangleVertex_B_coordinate2);
console.log(triangleHalfPerimeter);*/

/*const triangleHalfPerimeter = trianglePerimeter / 2; // знаходимо напівпериметр і запишемо у змінну

const calcTriangleSquare = (side1, side2, side3, halfPerim) => { // опис другої функції на знаходження площі
    const tempData = halfPerim  (halfPerim - side1)  (halfPerim - side2) * (halfPerim - side3);
    return Math.sqrt(tempData).toFixed(2);
}
const triangleSquare = calcTriangleSquare(triangleSideA, triangleSideB, triangleSideC, triangleHalfPerimeter); // виклик другої функції площі та запишемо у змінну
console.log(`Triangle \n Sides: ${triangleSideA}, ${triangleSideB}, ${triangleSideC} \n Perimeter: ${trianglePerimeter} \n Square: ${triangleSquare}`);*/