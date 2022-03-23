/* eslint-disable no-undef */
const ship = require('./test/ship');

test('fabricador ship 1', () => {
    const flota = ship(2);
    expect(flota.length).toEqual(2);
});

test('fabricador ship 2', () => {
    let flota = ship(4);
    flota = ship(flota.length, 'dead');
    expect(flota.damage).toEqual({
        site1: 'good',
        site2: 'good',
        site3: 'good',
        site4: 'good',
    });
});

test('fabricador ship 3', () => {
    let flota = ship(4);
    flota = ship(this.length, 'dead');
    expect(flota.status).toEqual('dead');
});

test('prueba de la funcion hit()', () => {
    const flota = ship(5);
    flota.hit(3);
    expect(flota.damage).toEqual({
        site1: 'good',
        site2: 'good',
        site3: 'bad',
        site4: 'good',
        site5: 'good',
    });
});

test('prueba de isHundido 1', () => {
    const flota = ship(5);
    flota.hit(1);
    flota.hit(4);
    flota.hit(2);
    expect(flota.isHundido()).toBe(false);
});

test('prueba 2 de isHundido', () => {
    const flota = ship(2);
    flota.hit(1);
    flota.hit(2);
    expect(flota.isHundido()).toBe(true);
});
