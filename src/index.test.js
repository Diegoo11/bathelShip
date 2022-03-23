/* eslint-disable no-undef */
const merryBB = require('./test/merry');

test('imprime el msg', () => {
    expect(merryBB('como estas Diego')).toBe('como estas Diego');
});
