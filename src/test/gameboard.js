/* eslint-disable func-names */
/* eslint-disable no-shadow */
/* eslint-disable no-undef */
/* eslint-disable no-console */
function waterpoint(id) {
    document.getElementById(id).classList.add('waterpoint');
}

function damagepoint(id) {
    document.getElementById(id).classList.add('damagepoint');
}

// eslint-disable-next-line no-unused-vars

const ship = require('./ship');
const rule = require('./rule');

function gameboard() {
    this.flota = {};
    this.gps = [];
    this.contador = [];
    this.fail = [];
    this.addShip = function (length, num, lether, direction) {
        if ((!(direction)) && lether.charCodeAt() + length - 1 > 106) {
            return new Error('la posicion que esta solicitando no es legal, lether');
        }
        if (direction && num + length - 1 > 10) {
            return new Error('la posicion que esta solicitando no es legal, number ');
        }
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

    this.hit = function (numship, site) {
        this.flota[`ship${numship}`].damage[`site${site}`] = 'bad';
    };

    this.all = [];
    // console.log(this.flota.call(gameboard));
    // console.log(this);
    receiveAttack = function (num, lether, id) {
        const attack = num + lether;
        this.all.push(attack);
        if (this.gps.some((x) => x === attack)) {
            for (let i = 1; i <= contador.length; i += 1) {
                for (let e = 1; e <= Object.values(this.flota[`ship${i}`].coord).length; e += 1) {
                    const valores = this.flota[`ship${i}`].coord[`coord${e}`].xy;
                    if (valores === attack) {
                        this.hit(i, e);
                        damagepoint(id);
                    }
                    if ((Object.values(this.flota[`ship${i}`].damage).every((site) => site === 'bad'))) {
                        this.flota[`ship${i}`].status = 'dead';
                    }
                }
            }
        } else if (!(fail.some((x) => x === attack))) {
            this.fail.push(attack);
            waterpoint(id);
        }
    };

    this.isHundido = (numship) => (Object.values(this.flota[`ship${numship}`].damage).every((site) => site === 'bad'));

    this.endGame = function () {
        const end = [];
        for (let i = 1; i <= contador.length; i += 1) {
            end.push(this.flota[`ship${i}`].status);
        }
        return end.every((x) => x === 'dead');
    };

    const numberFlota1 = [1, 1, 1, 1, 2, 2, 2, 3, 3, 4];

    this.makeFlota = function () {
        const ramdomNumber = Math.floor(Math.random() * 10) + 1;
        const ramdomLether = String.fromCharCode(Math.floor(Math.random() * 10) + 97);
        const ramdomPosition = Math.floor(Math.random() * numberFlota1.length);

        this.addShip(numberFlota1[ramdomPosition], ramdomNumber, ramdomLether);
    };

    return {
        flota, addShip, gps, contador, receiveAttack, fail, endGame, hit, isHundido, all, makeFlota,
    };
}

module.exports = gameboard;
