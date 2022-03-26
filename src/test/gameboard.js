/* eslint-disable no-shadow */
/* eslint-disable no-undef */
/* eslint-disable no-console */
const ship = require('./ship');
const rule = require('./rule');

function gameboard() {
    this.flota = {};
    this.gps = [];
    this.contador = [];
    this.fail = [];
    this.addShip = (length, num, lether, direction) => {
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

    this.hit = (numship, site) => {
        this.flota[`ship${numship}`].damage[`site${site}`] = 'bad';
    };

    this.all = [];
    // console.log(this.flota.call(gameboard));
    // console.log(this);
    receiveAttack = function (num, lether) {
        const attack = num + lether;
        console.log(this.flota);
        this.all.push(attack);
        if (gps.some((x) => x === attack)) {
            for (let i = 1; i <= contador.length; i += 1) {
                for (let e = 1; e <= Object.values(this.flota[`ship${i}`].coord).length; e += 1) {
                    const valores = this.flota[`ship${i}`].coord[`coord${e}`].xy;
                    if (valores === attack) {
                        hit(i, e);
                    }
                    if ((Object.values(this.flota[`ship${i}`].damage).every((site) => site === 'bad'))) {
                        this.flota[`ship${i}`].status = 'dead';
                    }
                }
            }
        } else if (!(fail.some((x) => x === attack))) {
            this.fail.push(attack);
            console.log(this.gps);
        }
    };

    this.isHundido = (numship) => (Object.values(this.flota[`ship${numship}`].damage).every((site) => site === 'bad'));

    this.endGame = () => {
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
