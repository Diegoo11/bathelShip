/* eslint-disable no-console */
const gameboard = require('./gameboard');

const matris = [''];

const player1 = gameboard();
const player2 = gameboard();

function gameTurn() {
    const turno = matris.length % 2 === 0;
    // player 1
    if (turno) {
        const legal = player1.all;
        window.addEventListener('click', () => {
            let x;
            let y;
            const even = (z) => z === x + y;
            if (legal.some(even)) {
                player2.receiveAttack(x, y);
                matris.push('');
                gameTurn();
            } else { gameTurn(); }
        });
    }
    // player 2
    if (!turno) {
        const ramdomNumber = Math.floor(Math.random() * 10) + 1;
        const ramdomLether = String.fromCharCode(Math.floor(Math.random() * 10) + 97);
        const legal = player1.all;
        const even = (x) => x === ramdomNumber + ramdomLether;
        if (legal.some(even)) {
            player1.receiveAttack('x', 'y');
            matris.push('');
            gameTurn();
        } else { gameTurn(); }
    }
}

// eslint-disable-next-line import/prefer-default-export
export { gameTurn };
