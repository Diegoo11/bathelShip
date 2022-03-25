/* eslint-disable no-shadow */
/* eslint-disable no-undef */
/* eslint-disable no-console */
const ship = require('./ship');
const rule = require('./rule');

function gameboard() {
    flota = {};
    gps = [];
    contador = [];
    fail = [];
    addShip = (length, num, lether, direction) => {
        const largo = Object.values(flota).length + 1;
        this.flota[`ship${largo}`] = ship(length, num, lether, direction, largo);

        const privGPS = [];
        for (let i = 1; i <= length; i += 1) {
            if (!direction) {
                privGPS.push(`${num}${String.fromCharCode(lether.charCodeAt() + i - 1)}`);
            }
            if (direction) {
                privGPS.push(`${num + i - 1}${lether}`);
            }
        }

        if (this.gps.some((element) => privGPS.some((x) => x === element))) {
            delete this.flota[`ship${largo}`];
            return;
        }

        rule(length, num, lether, direction);
        this.contador.push('');
    };

    hit = (numship, site) => {
        this.flota[`ship${numship}`].damage[`site${site}`] = 'bad';
    };

    all = [];

    receiveAttack = (num, lether) => {
        const attack = num + lether;
        this.all.push(attack);
        if (gps.some((x) => x === attack)) {
            for (let i = 1; i <= contador.length; i += 1) {
                for (let e = 1; e <= Object.values(this.flota[`ship${i}`].coord).length; e += 1) {
                    const valores = this.flota[`ship${i}`].coord[`coord${e}`].xy;
                    if (valores === attack) {
                        this.hit(i, e);
                    }
                    if ((Object.values(this.flota[`ship${i}`].damage).every((site) => site === 'bad'))) {
                        this.flota[`ship${i}`].status = 'dead';
                    }
                }
            }
        } else if (!(fail.some((x) => x === attack))) {
            fail.push(attack);
        }
    };

    isHundido = (numship) => (Object.values(this.flota[`ship${numship}`].damage).every((site) => site === 'bad'));

    endGame = () => {
        const end = [];
        for (let i = 1; i <= contador.length; i += 1) {
            end.push(this.flota[`ship${i}`].status);
        }
        return end.every((x) => x === 'dead');
    };

    return {
        flota, addShip, gps, contador, receiveAttack, fail, endGame, hit, isHundido, all,
    };
}

module.exports = gameboard;
