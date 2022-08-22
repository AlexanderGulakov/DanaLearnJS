// Задача 9. Створити функцію, яка виводить банер 
// (у функцію передаються: зображення, заголовок та посилання, 
//     куди переходимо при кліку на зображення 
//     (тег img повине знаходитись у середині тега a: <a> <img src=”шлях”> </a>


const showBanner = (image, title, link) => {
    document.write(`${title}<br><a href=${link}><img src=${image}></a><br>`)

    //   (`<a href="https://uk.wikipedia.org/wiki/%D0%9A%D1%96%D1%82"><img src="/img/1.jpeg"></a>`)
}
const imagePath = "/img/1.jpeg"
const mainText = "Кіт(Felis) — рід хижих ссавців родини котових (Felidae)"
const linkToSite = "https://uk.wikipedia.org/wiki/%D0%9A%D1%96%D1%82"

showBanner(imagePath, mainText, linkToSite)
showBanner("/img/2.jpg","Любо́в (коха́ння)","https://uk.wikipedia.org/wiki/%D0%9B%D1%8E%D0%B1%D0%BE%D0%B2#%D0%9A%D0%BE%D1%85%D0%B0%D0%BD%D0%BD%D1%8F" )



