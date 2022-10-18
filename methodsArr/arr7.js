// 7. Дано масив, який зберігає кількість відвідувачів протягом тижня. 
// З’ясувати, чи були дні, коли кількість відвідувачів була меншою за 10.


// // 1 варіант :
// const ArrDayOfWeek = [`Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`, `Saturday`, `Sunday`]
const arrQuantityOfVisitors = [12, 10, 7, 6, 15, 20, 9]
const fixedQuantity = 10
const newArr = arrQuantityOfVisitors.some((currentValue) => currentValue < fixedQuantity
)
if (newArr) {
    console.log(` Yes.`)
}
else {
    console.log(` No.`)
}




