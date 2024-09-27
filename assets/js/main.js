let name = '';
let game = {};
let panel = 'start';
let $ = function (domElement) { return document.querySelector(domElement); };

let nav = () => {
    document.onclick = (event) => {
        event.preventDefault();
        switch (event.target.id) {
            case "startGame":
                go('game', 'd-block');
                break;
            case "restart":
                go('game', 'd-block');
                //Тут будем убирать элементы
                break;
        }
    }
}

let go = (page, attribute) => {
    let pages = ['start', 'game', 'end'];
    panel = page;
    $(`#${page}`).setAttribute('class', attribute);
    pages.forEach(el => {
        if(page !== el) $(`#${el}`).setAttribute('class', 'd-none');
    })
}
window.onload = () => {
    nav();
    setInterval(() => {
        if(panel === "game") {
            game = new Game();
            game.start();
            panel = 'game process';
        }
    }, 500)
}