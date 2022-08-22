// Задача 8. Створити функцію, яка випадковим чином виводить на екран одне
//  із 4 зображень (шляхи до зображень передаються у функцію)

// <img src=”/images/picture.jpg“> 


const showImg = (img1, img2, img3, img4,) => {
    let randomNumber = Math.round((Math.random() * (4 - 1)) + 1);
    console.log('randomNumber', randomNumber)
    if (randomNumber === 1) {
        randomNumber = img1
    }
    else if (randomNumber === 2) {
        randomNumber = img2
    }
    else if (randomNumber === 3) {
        randomNumber = img3
    }
    else {
        randomNumber = img4
    }
    document.write(` ${randomNumber}`)
}
let imgFirst = (`<img src="/img/1.jpeg">`)
let imgSecond = (`<img src="/img/2.jpg">`)
let imgThird = (`<img src="/img/3.jpg">`)
let imgFourth = (`<img src="/img/4.jpg">`)
showImg(imgFirst, imgSecond, imgThird, imgFourth)







