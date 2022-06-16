// 11. Користувач може здійснити покупку у одному із двох відділів («побутова техніка» або «інструменти»). При цьому у кожному із відділів
//  йому будуть пропонувати один із перерахованих товарів:
// «побутова техніка»:
// -	телевізор;
// -	праска;
// -	планшет;
// 	«інструменти»
// -	лопата;
// -	граблі;
// -	мітла;
// -	пила.
//  Вивести на екран назву товару, яку вибрав користувач.


let homeAppliances = confirm('Do you want to buy in a home appliance store?');
let instruments;
if (homeAppliances) {
    homeAppliances = parseInt(prompt(" Select from the list: \n1. TV\n2. Iron\n3. Tablet"))
    switch (homeAppliances) {
        case 1:
            alert("TV");
            break;
        case 2:
            alert("Iron");
            break;
        case 3:
            alert("Tablet");
            break;
        case 4: alert("Instruments");
            break;
        default: alert("wrong number");
    }
}
if (!homeAppliances) {
    instruments = confirm('Do you want to buy in a instruments store?');
    if (instruments) {
        instruments = parseInt(prompt(" Select from the list: \n1.Shovel\n2.Rake\n3.Broom\n4.Saw"))
        switch (instruments) {
            case 1:
                alert("Shovel");
                break;
            case 2:
                alert("Rake");
                break;
            case 3:
                alert("Broom");
                break;
            case 4:
                alert("Saw");
                break;
            default: alert("wrong number");
        }
    }
}
 else {
    alert("Thank you for your order")
 }


