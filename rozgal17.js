// 12 З клавіатури вводиться рейтинг користувача. 
// 1-Профі, 2-Досвідчений, 3-Знаючий, 4-Початківець.
//  //Чи доволено робити коментарі (1, 2 -дозволено, 3,4- не дозволено)

const userRating = parseInt(prompt("Enter user rating: \n1. Prof \n2. Experienced \n3.Knowing \n4 Beginner"));
switch (userRating) {
    case 1:
    case 2:
        alert("Allowed");
        break;
    case 3:
    case 4:
        alert("Not allowed");
        break;
    default: alert("Wrong number");

}
