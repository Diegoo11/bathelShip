/* eslint-disable no-console */
// eslint-disable-next-line default-param-last
function ship(length, num, lether, direction = false, nroS, status = 'live') {
    // eslint-disable-next-line no-undef
    // eslint-disable-next-line no-undef

    // eslint-disable-next-line no-undef
    damage = {};
    for (let i = 1; i <= length; i += 1) {
        this.damage[`site${i}`] = 'good';
    }
    // eslint-disable-next-line no-undef

    // eslint-disable-next-line no-undef
    isHundido = () => (Object.values(this.damage).every((site) => site === 'bad'));

    // eslint-disable-next-line no-undef
    coord = {};

    if ((!(direction)) && lether.charCodeAt() + length - 1 > 106) {
        return new Error('la posicion que esta solicitando no es legal, lether');
    }
    if (direction && num + length - 1 > 10) {
        return new Error('la posicion que esta solicitando no es legal, number ');
    }

    for (let i = 1; i <= length; i += 1) {
        this.coord[`coord${i}`] = {
            num,
            lether: String.fromCharCode(lether.charCodeAt() + i - 1),
            xy: `${num}${String.fromCharCode(lether.charCodeAt() + i - 1)}`,
        };
        if (direction) {
            this.coord[`coord${i}`] = {
                num: num + i - 1,
                lether,
                xy: `${num + i - 1}${lether}`,
            };
        }
    }
    return {
        length,
        // eslint-disable-next-line no-undef
        damage,
        status,
        // eslint-disable-next-line no-undef
        // eslint-disable-next-line no-undef
        // eslint-disable-next-line no-undef
        coord,
    };
}

module.exports = ship;
