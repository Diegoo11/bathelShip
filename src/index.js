/* eslint-disable no-console */
/* eslint-disable no-undef */

const gameboard = require('./test/gameboard');

const player1 = gameboard();

player1.addShip(1, 2, 'b');
player1.addShip(3, 1, 'e');
player1.addShip(1, 3, 'f');
player1.addShip(4, 4, 'c', true);
player1.addShip(2, 5, 'e');
player1.addShip(3, 5, 'h', true);
player1.addShip(1, 7, 'j');
player1.addShip(2, 9, 'b', true);
player1.addShip(2, 9, 'g');
player1.addShip(1, 9, 'j');

const player2 = gameboard();

player2.addShip(1, 1, 'b');
player2.addShip(1, 1, 'f');
player2.addShip(1, 3, 'i');
player2.addShip(2, 4, 'a');
player2.addShip(2, 4, 'd');
player2.addShip(4, 3, 'g', true);
player2.addShip(3, 8, 'a');
player2.addShip(1, 10, 'a');
player2.addShip(3, 8, 'f', true);
player2.addShip(2, 9, 'h', true);

function botPlay() {
    const ramdomNumber = Math.floor(Math.random() * 10) + 1;
    const ramdomLether = String.fromCharCode(Math.floor(Math.random() * 10) + 97);
    const legal = player1.all;
    console.log(legal);
    const even = (x) => x === ramdomNumber + ramdomLether;
    if (!legal.some(even)) {
        player1.receiveAttack(2, 'b');
        console.log(`se jugo ${ramdomLether} ${ramdomNumber}`);
    } else {
        console.log('no se juego');
    }
}

botPlay();

console.log(player1);

console.log(player2);
