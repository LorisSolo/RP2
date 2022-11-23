
let body = document.querySelector('body')


function boje() {
    let zelena = 0
    setInterval(() => {
        if (zelena > 255) zelena = 0
        zelena++
        body.style.backgroundColor = `rgb(0 ,${zelena}, 0)`;
    }, 30)
}

boje()