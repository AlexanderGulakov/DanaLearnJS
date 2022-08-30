
export const getLength = (x1, y1, x2, y2) => Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2))

export const getPerimeter = (a, b, c) => a + b + c

export const getSquare = (p, a, b, c) => Math.sqrt(p * (p - a) * (p - b) * (p - c))

export const getSquareFromPoints = (x1, y1, x2, y2, x3, y3) => 0.5 * (((x1 - x3) * (y2 - y3)) - ((x2 - x3) * (y1 - y3)))

export const getHypotenuse = (a, b, c) => {
    let hypotenuse = a
    if (b > hypotenuse) {
        hypotenuse = b
    }
    if (c > hypotenuse) {
        hypotenuse = c
    }
    return hypotenuse
}
export const getFirstLegs = (a, b, c) => {
    let minNumber = a
    if (b < minNumber) {
        minNumber = b
    }
    if (c < minNumber) {
        minNumber = c
    }
    return minNumber
}
export const getSecondLegs = (p, a, c) => p - (a + c)

export const getRightTriangle = (a, b, c) => {
    const isRightTriangle = Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2)
    if (isRightTriangle) {
        console.log(`A right triangle. Length of the hypotenuse = ${c}`)
    }
    else {
        console.log(`The triangle is not right-angled.`)
    }
}
export const getQuadrangleSquare = (a, b) => a * b

export const getCoordinateOfPoint = (x, y) => (x + y) / 2

export const getRadiusCircle = (a, b, c, s) => (s * 2) / (a + b + c)

export const getRadiusSphere = (x1, y1, z1, x2, y2, z2) => Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2) + Math.pow((z2 - z1), 2))

export const getVolumeSphere = (p, r) => 4 / 3 * (p * Math.pow(r, 3))

export const getSquareSurface = (p, r) => 4 * p * Math.pow(r, 2)

export const getNMemberArithmeticProg = (a1, dif, nMember) => a1 + dif * (nMember - 1) // ПИСАТИ НОРМАЛЬНІ НАЗВИ ПАРАМЕТРІВ

export const getSumNMembersArithmeticProg = (a1, dif, nMember) => {
    // ЦИКЛОМ ФОР, ПОЧИНАТИ З 0 І ПИСАТИ НОРМАЛЬНІ НАЗВИ ПАРАМЕТРІВ. 2, 3, 3   2+5+8 = 15
    let sum = 0
    let an = a1
    for (let i = 0; i < nMember; i++) {
        console.log(`i = ${i}`)
        console.log(`an = ${an}`)
        sum = sum + an
        an = an + dif
    }
    return sum
}

export const getNMemberGeometricProg = (b1, denominator, nMember) => b1 * Math.pow(denominator, nMember - 1) // НАЗВИ ПАРАМЕТРІВ

export const getSumNMembersGeometicProg = (b1, denominator, nMember) => (b1 * (Math.pow(denominator, nMember) - 1)) / (denominator - 1) // НАЗВИ ПАРАМЕТРІВ


export const checkIsDescendingGeometricProg = (denominator) => Math.abs(denominator) < 1

// {
//     if (Math.abs(denominator) < 1) {
//         console.log(`The specified geometric progression is descending `)
//         return true
//     }
//     else {
//         console.log(`The specified geometric progression is don't descending `)
//     }
//     return false
// }
export const getSquareDescendingGeometricProg = (b1, denominator) => b1 / (1 - denominator)

export const calcDiscriminant = (a, b, c) => Math.pow(b, 2) - 4 * a * c

export const calcQuadraticEquation = (a, b, discriminant) => {
    if (discriminant > 0) {
        let firstRoot = (-b) + Math.sqrt(discriminant) / 2 * a
        let secondRoot = (-b) - Math.sqrt(discriminant) / 2 * a
        console.log(` firstRoot = ${firstRoot} secondRoot = ${secondRoot}`)
    }
    else if (discriminant === 0) {
        let root = (-b) + Math.sqrt(discriminant) / 2 * a
        console.log(`  Root = ${root} `)
    }
    else {
        console.log(`There are no roots.`)
    }
}

export const getSumAfterNYears = (money, monthes, percents) => {
    let sum = money
    for (let i = 0; i < monthes; i++) {
        console.log(`i = ${i}`)
        sum = sum + (sum / 100 * percents)
        // console.log(`sum = ${sum}`)
    }
    return sum

}



