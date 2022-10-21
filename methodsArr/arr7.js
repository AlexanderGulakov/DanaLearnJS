// 7. Дано масив, який зберігає кількість відвідувачів протягом тижня. 
// З’ясувати, чи були дні, коли кількість відвідувачів була меншою за 10.



// const ArrDayOfWeek = [`Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`, `Saturday`, `Sunday`]
const arrQuantityOfVisitors = [12, 10, 7, 6, 15, 20, 9]
const targetQuantity = 10
const findIfVisitorsQuantityLessThanTarget = (array, targetQuantity) =>
    array.some((currentValue) => currentValue < targetQuantity)

const isVisitorsQuantityLessThanTarget = findIfVisitorsQuantityLessThanTarget(arrQuantityOfVisitors, targetQuantity)

isVisitorsQuantityLessThanTarget ? console.log(` Yes.`) : console.log(` No.`)




