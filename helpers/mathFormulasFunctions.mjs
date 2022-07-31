export const calcTrianglePerimeter = (side1, side2, side3) => side1 + side2 + side3; // функція на знаходження периметру, якщо знаємо сторони

export const calcTriangleSquare = (side1, side2, side3, halfPerim) => { // функції на знаходження площі, якщо знаємо сторони
    const tempData = halfPerim * (halfPerim - side1) * (halfPerim - side2) * (halfPerim - side3);
    return Math.sqrt(tempData).toFixed(2);
}

export const calcSideLenght = (vertex_1_coorX, vertex_1_coorY, vertex_2_coorX, vertex_2_coorY) => { // функція на знаходження довжини сторони, якщо знаємо координати вершин
    const sideLenght = Math.pow((vertex_2_coorX - vertex_1_coorX), 2) + Math.pow((vertex_2_coorY - vertex_1_coorY), 2);
    return Math.sqrt(sideLenght).toFixed(2);
}

const calcOneLinePoints = (x1, x2, x3, y1, y2, y3, addVar) => { // функція на перевірку розтащування точок на одній прямій
    const oneLinePointsFormula = addVar * ((x1 - x3) * (y2 - y3) - (x2 - x3) * (y1 - y3));
    return oneLinePointsFormula.toFixed(2);
}