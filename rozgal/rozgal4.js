// З клавіатури вводиться назва категорії водія.
//  Вивести на екран назву транспортного засобу, яким він може керувати

let userCategory = prompt( "Write your category ");
userCategory = userCategory.toUpperCase();
let result ;
switch (userCategory){

    case `A`: result = "Motorcycle";
    break;
    case `B`: result = "Car(up to 3500 kg)";
    break;
    case `C`: result = "Car(over 3500 kg)";
    break;
    case `D`: result = "Bus";
    break;
    case `E`: result = "Transportation of trailers";
    break;
    default: result = " Wrong category";
}
alert(result);






// const userCategory = prompt( "Write your category ");

// if(userCategory === 'A' || userCategory === 'a') 
// {   
//      alert(`Motorcycle`);
// }

// else if(userCategory === 'B' || userCategory === 'b') {
//      alert(`Car(up to 3500 kg)`);
// }

// else if(userCategory === 'C' || userCategory === 'c') {
//     alert(`Car(over 3500 kg)`);
// }
// else if(userCategory === 'D' || userCategory === 'd' ) {
//     alert(`Bus`);
// }

// else if(userCategory === 'E' || userCategory === 'e' ) {
//     alert(`Transportation of trailers`);
// }
 
// else 
// {
//     alert(`Wrong category`);  
// }
 

