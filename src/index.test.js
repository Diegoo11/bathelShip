/* eslint-disable no-undef */
const gameboard = require('./test/gameboard');

test('fabricador ship 1', () => {
    const player = gameboard();
    player.addShip(4, 2, 'a');
    expect(player.flota.ship1.length).toEqual(4);
});

test('fabricador ship 2', () => {
    const player = gameboard();
    player.addShip(4, 3, 'b');
    expect(player.flota.ship1.damage).toEqual({
        site1: 'good',
        site2: 'good',
        site3: 'good',
        site4: 'good',
    });
});

test('fabricador ship 3', () => {
    const player = gameboard();
    player.addShip(4, 2, 'b');
    player.flota.ship1.status = 'dead';
    expect(player.flota.ship1.status).toEqual('dead');
});

test('prueba de la funcion hit()', () => {
    const player = gameboard();
    player.addShip(5, 3, 'c', true);
    player.hit(1, 3);
    expect(player.flota.ship1.damage).toEqual({
        site1: 'good',
        site2: 'good',
        site3: 'bad',
        site4: 'good',
        site5: 'good',
    });
});

test('prueba de isHundido 1', () => {
    const player = gameboard();
    player.addShip(5, 1, 'a');
    player.hit(1, 1);
    player.hit(1, 4);
    player.hit(1, 2);
    expect(player.isHundido(1)).toBe(false);
});

test('prueba 2 de isHundido', () => {
    const player = gameboard();
    player.addShip(2, 1, 'a');
    player.hit(1, 1);
    player.hit(1, 2);
    expect(player.isHundido(1)).toBe(true);
});

//--------------------------------------------------------------------------

test('prueba de coordenadas 1', () => {
    const player = gameboard();
    player.addShip(4, 1, 'a');
    expect(player.flota.ship1.coord.coord1).toEqual({
        lether: 'a',
        num: 1,
        xy: '1a',
    });
});

test('prueba de coordenadas 2', () => {
    const player = gameboard();
    player.addShip(4, 1, 'a');
    expect(player.flota.ship1.coord.coord2).toEqual({
        lether: 'b',
        num: 1,
        xy: '1b',
    });
});

test('prueba de coordenadas 3 horizontal', () => {
    const player = gameboard();
    player.addShip(4, 1, 'a', true);
    expect(player.flota.ship1.coord.coord2).toEqual({
        lether: 'a',
        num: 2,
        xy: '2a',
    });
});

test('prueba de coordenadas 4', () => {
    const player = gameboard();
    player.addShip(4, 1, 'a', true);
    expect(player.flota.ship1.coord.coord1).toEqual({
        lether: 'a',
        num: 1,
        xy: '1a',
    });
});

// -------------------------Prueba de posicion erronea------------------------------

test('prueba de coordenadas error 1', () => {
    const player = gameboard();
    player.addShip(4, 8, 'a', true);
    expect(player.flota.ship1.coord).toBe(undefined);
});

test('prueba de coordenadas error 2', () => {
    const player = gameboard();
    player.addShip(4, 1, 'a');
    player.addShip(4, 1, 'c', true);
    expect(player.flota.ship2).toBe(undefined);
});

test('prueba de numero de barcos', () => {
    const player = gameboard();
    player.addShip(1, 1, 'a');
    player.addShip(1, 3, 'a');
    player.addShip(1, 5, 'a');
    player.addShip(1, 7, 'a');
    expect(player.contador.length).toBe(4);
});

// -------------------------Prueba de ataque--------------------------------------

test('prueba de ataque 1', () => {
    const player = gameboard();
    player.addShip(5, 3, 'c', true);
    player.receiveAttack(5, 'c');
    expect(player.flota.ship1.damage).toEqual({
        site1: 'good',
        site2: 'good',
        site3: 'bad',
        site4: 'good',
        site5: 'good',
    });
});

test('prueba de ataque 2', () => {
    const player = gameboard();
    player.addShip(5, 3, 'c', true);
    player.receiveAttack(9, 'c');
    expect(player.flota.ship1.damage).toEqual({
        site1: 'good',
        site2: 'good',
        site3: 'good',
        site4: 'good',
        site5: 'good',
    });
});

test('prueba de funcion endgame', () => {
    const player = gameboard();
    player.addShip(5, 3, 'c', true);
    player.receiveAttack(9, 'c');
});

// -------------------------Prueba de ataque--------------------------------------

test('endGame test 1', () => {
    const player = gameboard();
    player.addShip(2, 2, 'a');
    player.receiveAttack(2, 'a');
    player.receiveAttack(2, 'b');
    expect(player.endGame()).toEqual(true);
});

test('endGame test 2', () => {
    const player = gameboard();
    player.addShip(3, 2, 'a');
    player.receiveAttack(2, 'a');
    player.receiveAttack(2, 'b');
    expect(player.endGame()).toEqual(false);
});
