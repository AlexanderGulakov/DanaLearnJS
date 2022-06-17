// 9. У двох дітей є цукерки трьох типів «Червоний мак», «Ліщина», «Білочка» 
// (кількість кожного виду цукерок у кожної дитини вводиться з клавіатури).
//  Вивести на екран одне із повідомлень:
// 1)у однієї із дітей кожного типу цукерок більше;
// 2)у однієї із дітей двох типів цукерок більше;
// 3)кількість кожного з видів цукерок однакова.
// 4)інше.



const firstChildAmountRedPoppy = parseInt(prompt(" The first child is Sasha \n Enter the number of candies Red Poppy", ""));
const firstChildAmountHazel = parseInt(prompt(" The first child is Sasha \n Enter the number of candies Hazel", ""));
const firstChildAmountSquirrel = parseInt(prompt(" The first child is Sasha \n Enter the number of candies Squirrel", ""));
const secondChildAmountRedPoppy = parseInt(prompt(" The second child is Dana \n Enter the number of candies Red Poppy", ""));
const secondChildAmountHazel = parseInt(prompt(" The second child is Dana \n Enter the number of candies Hazel", ""));
const secondChildAmountSquirrel = parseInt(prompt(" The second child is Dana \n Enter the number of candies Squirrel", ""));

if (firstChildAmountRedPoppy > secondChildAmountRedPoppy &&
    firstChildAmountHazel > secondChildAmountHazel &&
    firstChildAmountSquirrel > secondChildAmountSquirrel) {
    alert("Sasha has more of each type of candy")
}
else if (firstChildAmountRedPoppy < secondChildAmountRedPoppy &&
    firstChildAmountHazel < secondChildAmountHazel &&
    firstChildAmountSquirrel < secondChildAmountSquirrel) {
    alert("Dana has more of each type of candy")
}
// if (firstChildAmountRedPoppy && firstChildAmountHazel > secondChildAmountRedPoppy && secondChildAmountHazel ||
//     firstChildAmountRedPoppy && firstChildAmountSquirrel > secondChildAmountRedPoppy && secondChildAmountSquirrel ||
//     firstChildAmountHazel && secondChildAmountSquirrel > secondChildAmountHazel && secondChildAmountSquirrel) {
//     alert("Sasha has a larger number of two types of candies")
// }
// else  if (firstChildAmountRedPoppy && firstChildAmountHazel < secondChildAmountRedPoppy && secondChildAmountHazel ||
//     firstChildAmountRedPoppy && firstChildAmountSquirrel < secondChildAmountRedPoppy && secondChildAmountSquirrel ||
//     firstChildAmountHazel && secondChildAmountSquirrel < secondChildAmountHazel && secondChildAmountSquirrel) {
//         alert("Dana has a larger number of two types of candies")
    // }
    if (firstChildAmountRedPoppy === secondChildAmountRedPoppy &&
        firstChildAmountHazel === secondChildAmountHazel &&
        firstChildAmountSquirrel === secondChildAmountSquirrel){
            alert("The amount of candy is the same")
         
        }


