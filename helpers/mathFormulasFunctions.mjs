
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

export const getNMemberArithmeticProg = (a1, d, n) => a1 + d * (n - 1)

export const getSumNMembersArithmeticProg = (a1, d, q) => {
    let i = 1
    let sum = 0
    let an = a1         // 0        
    while (i < q) {     // 1 < 5     |  2<5    |3<5   |4<5
        an = an + d     // 0 +2 = 2  | 2+2 = 4 |4+2=6 |6+2 = 8
        i++             // 2         | 3       |4     | 5
        sum = sum + an
    }
    return sum
}
//     a2 = a1 + d =0 + 2=2
//     a3 = a2 + d =2 + 2=4
//     a4 = a3 + d =4 + 2=6
//     a5 = a4 + d =6 + 2=8
export const getNMemberGeometricProg = (b1, q, n) => b1 * Math.pow(q, n - 1)
// bn=b1 * q(в стп n−1) 
export const getSumNMembersGeometicProg = (b1, q, n) => (b1 * (Math.pow(q, n) - 1)) / (q - 1)
//Sn=b1(q(встn) −1)/q−1

export const getSquareInfinitelyDescendingGeometricProg = (b1, q) => b1 / (1 - q)







