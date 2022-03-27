/* eslint-disable no-alert */
/* eslint-disable no-console */
/* eslint-disable no-undef */

const gameboard = require('./test/gameboard');
const shipcoords = require('./test/doom');

let player1 = gameboard();

while (player1.contador.length < 10) {
    player1.makeFlota();
}

player1.gps.forEach((x) => shipcoords(x));

const reload = document.getElementById('reload');
reload.onclick = () => {
    console.log('xd');
    player1 = gameboard();
    document.querySelectorAll('.square').forEach((x) => x.classList.remove('shipcoords'));
    while (player1.contador.length < 10) {
        player1.makeFlota();
    }

    player1.gps.forEach((x) => shipcoords(x));
};

const player2 = gameboard();

console.log(player2);

while (player2.contador.length < 10) {
    console.log('hola');
    player2.makeFlota();
}

// eslint-disable-next-line no-unused-vars
function botPlay() {
    const ramdomNumber = Math.floor(Math.random() * 10) + 1;
    const ramdomLether = String.fromCharCode(Math.floor(Math.random() * 10) + 97);
    // eslint-disable-next-line no-undef
    const legal = player1.all;
    const even = (x) => x === ramdomNumber + ramdomLether;
    if (!(legal.some(even))) {
        player1.receiveAttack(ramdomNumber, ramdomLether, ramdomNumber + ramdomLether);
    } else {
        botPlay();
    }
}

const table = document.querySelector('.table2');
const matris = [];
table.addEventListener('click', (e) => {
    reload.disabled = true;
    const ataque = document.getElementById(e.srcElement.id).getAttribute('data-xy');
    if (matris.some((x) => x === ataque)) { return; }
    matris.push(ataque);
    const coordY = document.getElementById(e.srcElement.id).getAttribute('data-xy').slice(1);
    const coordX = document.getElementById(e.srcElement.id).getAttribute('data-xy').slice(0, 1);
    player2.receiveAttack(coordX, coordY, e.srcElement.id);
    botPlay();
    if (player1.endGame()) {
        alert('gano el player 2');
    }
    if (player2.endGame()) {
        alert('gano el player 1');
    }
});

console.log(player1);
console.log(player2);
