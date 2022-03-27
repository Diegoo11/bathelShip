/* eslint-disable no-console */
function botPlay() {
    const ramdomNumber = Math.floor(Math.random() * 10) + 1;
    const ramdomLether = String.fromCharCode(Math.floor(Math.random() * 10) + 97);
    // eslint-disable-next-line no-undef
    const legal = player1.all;
    console.log(legal);
    const even = (x) => x === ramdomNumber + ramdomLether;
    if (!(legal.some(even))) {
        console.log(`se jugo ${ramdomNumber}${ramdomLether}`);
    } else {
        console.log('no se juego');
    }
}

module.exports = botPlay;
