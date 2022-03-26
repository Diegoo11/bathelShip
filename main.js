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

eval("/* eslint-disable no-console */\n/* eslint-disable no-undef */\n\nconst gameboard = __webpack_require__(/*! ./test/gameboard */ \"./src/test/gameboard.js\");\n\nconst player1 = gameboard();\n\nplayer1.addShip(1, 2, 'b');\nplayer1.addShip(3, 1, 'e');\nplayer1.addShip(1, 3, 'f');\nplayer1.addShip(4, 4, 'c', true);\nplayer1.addShip(2, 5, 'e');\nplayer1.addShip(3, 5, 'h', true);\nplayer1.addShip(1, 7, 'j');\nplayer1.addShip(2, 9, 'b', true);\nplayer1.addShip(2, 9, 'g');\nplayer1.addShip(1, 9, 'j');\n\n// eslint-disable-next-line no-unused-vars\n// function botPlay() {\n//    const ramdomNumber = Math.floor(Math.random() * 10) + 1;\n//    const ramdomLether = String.fromCharCode(Math.floor(Math.random() * 10) + 97);\n//    const legal = player1.all;\n///    const even = (x) => x === ramdomNumber + ramdomLether;\n//    if (!legal.some(even)) {\n//\n//        //        console.log(`se jugo ${ramdomLether} ${ramdomNumber}`);\n//    } else {\n//        //        console.log('no se juego');\n//    }\n// }\n\nconst player2 = gameboard();\n\nplayer2.addShip(1, 1, 'b');\nplayer2.addShip(1, 1, 'f');\nplayer2.addShip(1, 3, 'i');\nplayer2.addShip(2, 4, 'a');\nplayer2.addShip(2, 4, 'd');\nplayer2.addShip(4, 3, 'g', true);\nplayer2.addShip(3, 8, 'a');\nplayer2.addShip(1, 10, 'a');\nplayer2.addShip(3, 8, 'f', true);\nplayer2.addShip(2, 9, 'h', true);\n\nconsole.log(player1);\nconsole.log(player2);\n\nplayer1.receiveAttack(1, 'b');\n\n\n//# sourceURL=webpack://bathelship/./src/index.js?");

/***/ }),

/***/ "./src/test/gameboard.js":
/*!*******************************!*\
  !*** ./src/test/gameboard.js ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/* eslint-disable no-shadow */\n/* eslint-disable no-undef */\n/* eslint-disable no-console */\nconst ship = __webpack_require__(/*! ./ship */ \"./src/test/ship.js\");\nconst rule = __webpack_require__(/*! ./rule */ \"./src/test/rule.js\");\n\nfunction gameboard() {\n    this.flota = {};\n    this.gps = [];\n    this.contador = [];\n    this.fail = [];\n    this.addShip = (length, num, lether, direction) => {\n        const largo = Object.values(flota).length + 1;\n        this.flota[`ship${largo}`] = ship(length, num, lether, direction, largo);\n\n        const privGPS = [];\n        for (let i = 1; i <= length; i += 1) {\n            if (!direction) {\n                privGPS.push(`${num}${String.fromCharCode(lether.charCodeAt() + i - 1)}`);\n            }\n            if (direction) {\n                privGPS.push(`${num + i - 1}${lether}`);\n            }\n        }\n\n        if (this.gps.some((element) => privGPS.some((x) => x === element))) {\n            delete this.flota[`ship${largo}`];\n            return;\n        }\n\n        rule(length, num, lether, direction);\n        this.contador.push('');\n    };\n\n    this.hit = (numship, site) => {\n        this.flota[`ship${numship}`].damage[`site${site}`] = 'bad';\n    };\n\n    this.all = [];\n    console.log(this.flota);\n    this.receiveAttack = (num, lether) => {\n        const attack = num + lether;\n        this.all.push(attack);\n        if (gps.some((x) => x === attack)) {\n            console.log(this.gps);\n            for (let i = 1; i <= contador.length; i += 1) {\n                for (let e = 1; e <= Object.values(this.flota[`ship${i}`].coord).length; e += 1) {\n                    const valores = this.flota[`ship${i}`].coord[`coord${e}`].xy;\n                    if (valores === attack) {\n                        this.hit(i, e);\n                    }\n                    if ((Object.values(this.flota[`ship${i}`].damage).every((site) => site === 'bad'))) {\n                        this.flota[`ship${i}`].status = 'dead';\n                    }\n                }\n            }\n        } else if (!(fail.some((x) => x === attack))) {\n            this.fail.push(attack);\n            console.log(this.gps);\n        }\n    };\n\n    this.isHundido = (numship) => (Object.values(this.flota[`ship${numship}`].damage).every((site) => site === 'bad'));\n\n    this.endGame = () => {\n        const end = [];\n        for (let i = 1; i <= contador.length; i += 1) {\n            end.push(this.flota[`ship${i}`].status);\n        }\n        return end.every((x) => x === 'dead');\n    };\n\n    return {\n        flota, addShip, gps, contador, receiveAttack, fail, endGame, hit, isHundido, all,\n    };\n}\n\nmodule.exports = gameboard;\n\n\n//# sourceURL=webpack://bathelship/./src/test/gameboard.js?");

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