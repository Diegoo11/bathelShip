/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("/* eslint-disable no-alert */\n/* eslint-disable no-console */\n/* eslint-disable no-undef */\n\nconst gameboard = __webpack_require__(/*! ./test/gameboard */ \"./src/test/gameboard.js\");\nconst shipcoords = __webpack_require__(/*! ./test/doom */ \"./src/test/doom.js\");\n\nlet player1 = gameboard();\n\nwhile (player1.contador.length < 10) {\n    player1.makeFlota();\n}\n\nplayer1.gps.forEach((x) => shipcoords(x));\n\nconst reload = document.getElementById('reload');\nreload.onclick = () => {\n    console.log('xd');\n    player1 = gameboard();\n    document.querySelectorAll('.square').forEach((x) => x.classList.remove('shipcoords'));\n    while (player1.contador.length < 10) {\n        player1.makeFlota();\n    }\n\n    player1.gps.forEach((x) => shipcoords(x));\n};\n\nconst player2 = gameboard();\n\nconsole.log(player2);\n\nwhile (player2.contador.length < 10) {\n    console.log('hola');\n    player2.makeFlota();\n}\n\n// eslint-disable-next-line no-unused-vars\nfunction botPlay() {\n    const ramdomNumber = Math.floor(Math.random() * 10) + 1;\n    const ramdomLether = String.fromCharCode(Math.floor(Math.random() * 10) + 97);\n    // eslint-disable-next-line no-undef\n    const legal = player1.all;\n    const even = (x) => x === ramdomNumber + ramdomLether;\n    if (!(legal.some(even))) {\n        player1.receiveAttack(ramdomNumber, ramdomLether, ramdomNumber + ramdomLether);\n    } else {\n        botPlay();\n    }\n}\n\nconst table = document.querySelector('.table2');\nconst matris = [];\ntable.addEventListener('click', (e) => {\n    reload.disabled = true;\n    const ataque = document.getElementById(e.srcElement.id).getAttribute('data-xy');\n    if (matris.some((x) => x === ataque)) { return; }\n    matris.push(ataque);\n    const coordY = document.getElementById(e.srcElement.id).getAttribute('data-xy').slice(1);\n    const coordX = document.getElementById(e.srcElement.id).getAttribute('data-xy').slice(0, 1);\n    player2.receiveAttack(coordX, coordY, e.srcElement.id);\n    botPlay();\n    if (player1.endGame()) {\n        alert('gano el player 2');\n    }\n    if (player2.endGame()) {\n        alert('gano el player 1');\n    }\n});\n\nconsole.log(player1);\nconsole.log(player2);\n\n\n//# sourceURL=webpack://bathelship/./src/index.js?");

/***/ }),

/***/ "./src/test/doom.js":
/*!**************************!*\
  !*** ./src/test/doom.js ***!
  \**************************/
/***/ ((module) => {

eval("function shipcoords(id) {\n    document.getElementById(id).classList.add('shipcoords');\n}\n\nmodule.exports = shipcoords;\n\n\n//# sourceURL=webpack://bathelship/./src/test/doom.js?");

/***/ }),

/***/ "./src/test/gameboard.js":
/*!*******************************!*\
  !*** ./src/test/gameboard.js ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/* eslint-disable func-names */\n/* eslint-disable no-shadow */\n/* eslint-disable no-undef */\n/* eslint-disable no-console */\nfunction waterpoint(id) {\n    document.getElementById(id).classList.add('waterpoint');\n}\n\nfunction damagepoint(id) {\n    document.getElementById(id).classList.add('damagepoint');\n}\n\n// eslint-disable-next-line no-unused-vars\n\nconst ship = __webpack_require__(/*! ./ship */ \"./src/test/ship.js\");\nconst rule = __webpack_require__(/*! ./rule */ \"./src/test/rule.js\");\n\nfunction gameboard() {\n    this.flota = {};\n    this.gps = [];\n    this.contador = [];\n    this.fail = [];\n    this.addShip = function (length, num, lether, direction) {\n        if ((!(direction)) && lether.charCodeAt() + length - 1 > 106) {\n            return new Error('la posicion que esta solicitando no es legal, lether');\n        }\n        if (direction && num + length - 1 > 10) {\n            return new Error('la posicion que esta solicitando no es legal, number ');\n        }\n        const largo = Object.values(flota).length + 1;\n        this.flota[`ship${largo}`] = ship(length, num, lether, direction, largo);\n        const privGPS = [];\n        for (let i = 1; i <= length; i += 1) {\n            if (!direction) {\n                privGPS.push(`${num}${String.fromCharCode(lether.charCodeAt() + i - 1)}`);\n            }\n            if (direction) {\n                privGPS.push(`${num + i - 1}${lether}`);\n            }\n        }\n\n        if (this.gps.some((element) => privGPS.some((x) => x === element))) {\n            delete this.flota[`ship${largo}`];\n            return;\n        }\n\n        rule(length, num, lether, direction);\n        this.contador.push('');\n    };\n\n    this.hit = function (numship, site) {\n        this.flota[`ship${numship}`].damage[`site${site}`] = 'bad';\n    };\n\n    this.all = [];\n    // console.log(this.flota.call(gameboard));\n    // console.log(this);\n    receiveAttack = function (num, lether, id) {\n        const attack = num + lether;\n        this.all.push(attack);\n        if (this.gps.some((x) => x === attack)) {\n            for (let i = 1; i <= contador.length; i += 1) {\n                for (let e = 1; e <= Object.values(this.flota[`ship${i}`].coord).length; e += 1) {\n                    const valores = this.flota[`ship${i}`].coord[`coord${e}`].xy;\n                    if (valores === attack) {\n                        this.hit(i, e);\n                        damagepoint(id);\n                    }\n                    if ((Object.values(this.flota[`ship${i}`].damage).every((site) => site === 'bad'))) {\n                        this.flota[`ship${i}`].status = 'dead';\n                    }\n                }\n            }\n        } else if (!(fail.some((x) => x === attack))) {\n            this.fail.push(attack);\n            waterpoint(id);\n        }\n    };\n\n    this.isHundido = (numship) => (Object.values(this.flota[`ship${numship}`].damage).every((site) => site === 'bad'));\n\n    this.endGame = function () {\n        const end = [];\n        for (let i = 1; i <= contador.length; i += 1) {\n            end.push(this.flota[`ship${i}`].status);\n        }\n        return end.every((x) => x === 'dead');\n    };\n\n    const numberFlota1 = [1, 1, 1, 1, 2, 2, 2, 3, 3, 4];\n\n    this.makeFlota = function () {\n        const ramdomNumber = Math.floor(Math.random() * 10) + 1;\n        const ramdomLether = String.fromCharCode(Math.floor(Math.random() * 10) + 97);\n        const ramdomPosition = Math.floor(Math.random() * numberFlota1.length);\n\n        this.addShip(numberFlota1[ramdomPosition], ramdomNumber, ramdomLether);\n    };\n\n    return {\n        flota, addShip, gps, contador, receiveAttack, fail, endGame, hit, isHundido, all, makeFlota,\n    };\n}\n\nmodule.exports = gameboard;\n\n\n//# sourceURL=webpack://bathelship/./src/test/gameboard.js?");

/***/ }),

/***/ "./src/test/rule.js":
/*!**************************!*\
  !*** ./src/test/rule.js ***!
  \**************************/
/***/ ((module) => {

eval("function rule(length, num, lether, direction = false) {\n    for (let i = 1; i <= length; i += 1) {\n        if (!direction) {\n            this.gps.push(`${num}${String.fromCharCode(lether.charCodeAt() + i - 1)}`);\n        }\n        if (direction) {\n            this.gps.push(`${num + i - 1}${lether}`);\n        }\n    }\n}\n\nmodule.exports = rule;\n\n\n//# sourceURL=webpack://bathelship/./src/test/rule.js?");

/***/ }),

/***/ "./src/test/ship.js":
/*!**************************!*\
  !*** ./src/test/ship.js ***!
  \**************************/
/***/ ((module) => {

eval("/* eslint-disable no-console */\n// eslint-disable-next-line default-param-last\nfunction ship(length, num, lether, direction = false, nroS, status = 'live') {\n    // eslint-disable-next-line no-undef\n    // eslint-disable-next-line no-undef\n\n    // eslint-disable-next-line no-undef\n    this.damage = {};\n    for (let i = 1; i <= length; i += 1) {\n        this.damage[`site${i}`] = 'good';\n    }\n    // eslint-disable-next-line no-undef\n\n    // eslint-disable-next-line no-undef\n    this.isHundido = () => (Object.values(this.damage).every((site) => site === 'bad'));\n\n    // eslint-disable-next-line no-undef\n    this.coord = {};\n\n    if ((!(direction)) && lether.charCodeAt() + length - 1 > 106) {\n        return new Error('la posicion que esta solicitando no es legal, lether');\n    }\n    if (direction && num + length - 1 > 10) {\n        return new Error('la posicion que esta solicitando no es legal, number ');\n    }\n\n    for (let i = 1; i <= length; i += 1) {\n        this.coord[`coord${i}`] = {\n            num,\n            lether: String.fromCharCode(lether.charCodeAt() + i - 1),\n            xy: `${num}${String.fromCharCode(lether.charCodeAt() + i - 1)}`,\n        };\n        if (direction) {\n            this.coord[`coord${i}`] = {\n                num: num + i - 1,\n                lether,\n                xy: `${num + i - 1}${lether}`,\n            };\n        }\n    }\n    return {\n        length,\n        // eslint-disable-next-line no-undef\n        damage,\n        status,\n        // eslint-disable-next-line no-undef\n        // eslint-disable-next-line no-undef\n        // eslint-disable-next-line no-undef\n        coord,\n    };\n}\n\nmodule.exports = ship;\n\n\n//# sourceURL=webpack://bathelship/./src/test/ship.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;