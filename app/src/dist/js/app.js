/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/lib/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/lib/commands/MoveCommand.ts":
/*!*****************************************!*\
  !*** ./app/lib/commands/MoveCommand.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class MoveCommand {
    constructor(newX, newY, moveable) {
        this.x = newX;
        this.y = newY;
        this.moveable = moveable;
    }
    execute() {
        let nextPositionX = this.x + this.moveable.width;
        let nextPositionY = this.y + this.moveable.height;
        if (this.x < 0) {
            this.x = 0;
        }
        else if (nextPositionX > this.moveable.context.width) {
            this.x = Math.abs(this.moveable.context.width - this.moveable.width);
        }
        if (this.y < 0) {
            this.y = 0;
        }
        else if (nextPositionY > this.moveable.context.height) {
            this.y = Math.abs(this.moveable.context.height - this.moveable.height);
        }
        return [this.x, this.y];
    }
}
/* harmony default export */ __webpack_exports__["default"] = (MoveCommand);


/***/ }),

/***/ "./app/lib/enums/GamepadActions.ts":
/*!*****************************************!*\
  !*** ./app/lib/enums/GamepadActions.ts ***!
  \*****************************************/
/*! exports provided: KeyboardAction, ArrowAction, GamepadListener */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyboardAction", function() { return KeyboardAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrowAction", function() { return ArrowAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamepadListener", function() { return GamepadListener; });
var KeyboardAction;
(function (KeyboardAction) {
    KeyboardAction["LEFT"] = "KeyA";
    KeyboardAction["RIGHT"] = "KeyD";
})(KeyboardAction || (KeyboardAction = {}));
var ArrowAction;
(function (ArrowAction) {
    ArrowAction["LEFT"] = "ArrowLeft";
    ArrowAction["RIGHT"] = "ArrowRight";
})(ArrowAction || (ArrowAction = {}));
var GamepadListener;
(function (GamepadListener) {
    GamepadListener["TOUCH"] = "ontouchstart";
    GamepadListener["KEYBOARD"] = "onkeydown";
})(GamepadListener || (GamepadListener = {}));


/***/ }),

/***/ "./app/lib/factories/BlockFactory.ts":
/*!*******************************************!*\
  !*** ./app/lib/factories/BlockFactory.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _model_Block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/Block */ "./app/lib/model/Block.ts");

class BlockFactory {
    constructor(lines, context) {
        this.lines = lines;
        this.context = context;
        this.blocksPerColumn = 25;
    }
    create() {
        let blocks = [];
        let nextPosition = { x: 0, y: 0 };
        let length = this.context.width / this.blocksPerColumn;
        for (let line = 0; line < this.lines; line++) {
            for (let column = 0; column < this.blocksPerColumn; column++) {
                let blockWeight = this.getBlockWeight(line);
                blocks.push(new _model_Block__WEBPACK_IMPORTED_MODULE_0__["default"](nextPosition.x, nextPosition.y, length, this.context, blockWeight));
                nextPosition.x += length;
            }
            nextPosition.x = 0;
            nextPosition.y += length;
        }
        return blocks;
    }
    getBlockWeight(line) {
        switch (line) {
            case 0:
                return _model_Block__WEBPACK_IMPORTED_MODULE_0__["BrickWeight"].HUGE;
            case 1:
                return _model_Block__WEBPACK_IMPORTED_MODULE_0__["BrickWeight"].HIGH;
            case 2:
                return _model_Block__WEBPACK_IMPORTED_MODULE_0__["BrickWeight"].MEDIUM;
            case 3:
                return _model_Block__WEBPACK_IMPORTED_MODULE_0__["BrickWeight"].LOW;
            default:
                return _model_Block__WEBPACK_IMPORTED_MODULE_0__["BrickWeight"].LOW;
        }
    }
}
/* harmony default export */ __webpack_exports__["default"] = (BlockFactory);


/***/ }),

/***/ "./app/lib/factories/GamepadFactory.ts":
/*!*********************************************!*\
  !*** ./app/lib/factories/GamepadFactory.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _model_abstract_impl_DesktopGamepad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/abstract/impl/DesktopGamepad */ "./app/lib/model/abstract/impl/DesktopGamepad.ts");
/* harmony import */ var _model_abstract_impl_MobileGamepad__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/abstract/impl/MobileGamepad */ "./app/lib/model/abstract/impl/MobileGamepad.ts");


class GamepadFactory {
    constructor(player) {
        this.player = player;
    }
    create() {
        if (('ontouchstart' in window)) {
            return new _model_abstract_impl_MobileGamepad__WEBPACK_IMPORTED_MODULE_1__["default"](this.player);
        }
        else {
            return new _model_abstract_impl_DesktopGamepad__WEBPACK_IMPORTED_MODULE_0__["default"](this.player);
        }
    }
}
/* harmony default export */ __webpack_exports__["default"] = (GamepadFactory);


/***/ }),

/***/ "./app/lib/factories/PlayerFactory.ts":
/*!********************************************!*\
  !*** ./app/lib/factories/PlayerFactory.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _model_Player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/Player */ "./app/lib/model/Player.ts");

class PlayerFactory {
    constructor(width, height, context) {
        this.width = width;
        this.height = height;
        this.context = context;
        this.record = this.loadRecord();
    }
    create() {
        return new _model_Player__WEBPACK_IMPORTED_MODULE_0__["default"](this.width, this.height, this.context);
    }
    loadRecord() {
        return parseInt(localStorage.getItem("record"));
    }
}
/* harmony default export */ __webpack_exports__["default"] = (PlayerFactory);


/***/ }),

/***/ "./app/lib/index.ts":
/*!**************************!*\
  !*** ./app/lib/index.ts ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _model_Gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model/Gameboard */ "./app/lib/model/Gameboard.ts");

const gameboard = new _model_Gameboard__WEBPACK_IMPORTED_MODULE_0__["default"](document.querySelector("#gameboard"));


/***/ }),

/***/ "./app/lib/model/Block.ts":
/*!********************************!*\
  !*** ./app/lib/model/Block.ts ***!
  \********************************/
/*! exports provided: default, BrickActions, BrickWeight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrickActions", function() { return BrickActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrickWeight", function() { return BrickWeight; });
/* harmony import */ var _abstract_Solid2D__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract/Solid2D */ "./app/lib/model/abstract/Solid2D.ts");

class Brick extends _abstract_Solid2D__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(x, y, length, context, weight) {
        super(x, y, length, length, context);
        this.weight = weight;
        this.setColor(weight);
    }
    setColor(weight) {
        switch (weight) {
            case BrickWeight.LOW:
                this.color = BrickColors.LOW;
                break;
            case BrickWeight.MEDIUM:
                this.color = BrickColors.MEDIUM;
                break;
            case BrickWeight.HIGH:
                this.color = BrickColors.HIGH;
                break;
            case BrickWeight.HUGE:
                this.color = BrickColors.HUGE;
                break;
        }
    }
    paint() {
        let context = this.context.getContext("2d");
        context.strokeStyle = "#000000";
        context.strokeRect(this.x, this.y, this.width, this.height);
        context.fillStyle = this.color;
        context.fillRect(this.x, this.y, this.width, this.height);
    }
    destroy() {
        this.notify({ action: BrickActions.DESTROY });
    }
}
/* harmony default export */ __webpack_exports__["default"] = (Brick);
var BrickActions;
(function (BrickActions) {
    BrickActions[BrickActions["DESTROY"] = 0] = "DESTROY";
})(BrickActions || (BrickActions = {}));
var BrickWeight;
(function (BrickWeight) {
    BrickWeight[BrickWeight["LOW"] = 10] = "LOW";
    BrickWeight[BrickWeight["MEDIUM"] = 20] = "MEDIUM";
    BrickWeight[BrickWeight["HIGH"] = 30] = "HIGH";
    BrickWeight[BrickWeight["HUGE"] = 50] = "HUGE";
})(BrickWeight || (BrickWeight = {}));
var BrickColors;
(function (BrickColors) {
    BrickColors["LOW"] = "#dddddd";
    BrickColors["MEDIUM"] = "#00ff00";
    BrickColors["HIGH"] = "#0000ff";
    BrickColors["HUGE"] = "#ff0000";
})(BrickColors || (BrickColors = {}));


/***/ }),

/***/ "./app/lib/model/Gameboard.ts":
/*!************************************!*\
  !*** ./app/lib/model/Gameboard.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _factories_GamepadFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../factories/GamepadFactory */ "./app/lib/factories/GamepadFactory.ts");
/* harmony import */ var _factories_PlayerFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../factories/PlayerFactory */ "./app/lib/factories/PlayerFactory.ts");
/* harmony import */ var _factories_BlockFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../factories/BlockFactory */ "./app/lib/factories/BlockFactory.ts");



class Gameboard {
    constructor(canvas) {
        this.canvas = canvas;
        this.prepareScene();
        this.attached = [];
        this.player = new _factories_PlayerFactory__WEBPACK_IMPORTED_MODULE_1__["default"](300, 50, this.canvas).create();
        this.gamepad = new _factories_GamepadFactory__WEBPACK_IMPORTED_MODULE_0__["default"](this.player).create();
        let blocks = new _factories_BlockFactory__WEBPACK_IMPORTED_MODULE_2__["default"](4, this.canvas).create();
        blocks.forEach((block) => {
            this.attachToContext(block);
        });
        this.attachToContext(this.player);
    }
    prepareScene() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
    attachToContext(paintable) {
        this.attached.push(paintable);
        paintable.attach(this);
        paintable.paint();
    }
    update(state, args) {
        this.repaint();
    }
    repaint() {
        this.canvas
            .getContext("2d")
            .clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.attached.forEach((el) => el.paint());
    }
}
/* harmony default export */ __webpack_exports__["default"] = (Gameboard);


/***/ }),

/***/ "./app/lib/model/Player.ts":
/*!*********************************!*\
  !*** ./app/lib/model/Player.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _abstract_Solid2D__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract/Solid2D */ "./app/lib/model/abstract/Solid2D.ts");
/* harmony import */ var _commands_MoveCommand__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../commands/MoveCommand */ "./app/lib/commands/MoveCommand.ts");


class Player extends _abstract_Solid2D__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(width, height, context) {
        let initialX = (context.width - width) / 2;
        let staticY = context.height - height;
        super(initialX, staticY, width, height, context);
        this.move(0);
    }
    paint() {
        let context = this.context.getContext("2d");
        context.fillStyle = "#000000";
        context.fillRect(this.x, this.y, this.width, this.height);
    }
    move(dx) {
        let command = new _commands_MoveCommand__WEBPACK_IMPORTED_MODULE_1__["default"](this.x + dx, this.y, this);
        this.x = command.execute()[0];
        this.notify();
    }
    destroy() { }
}
/* harmony default export */ __webpack_exports__["default"] = (Player);


/***/ }),

/***/ "./app/lib/model/abstract/BaseGamepad.ts":
/*!***********************************************!*\
  !*** ./app/lib/model/abstract/BaseGamepad.ts ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class BaseGamepad {
    constructor(event) {
        document[event] = (pressed) => this.processCommand(pressed);
    }
    move(player, x) {
        player.move(x);
    }
}
/* harmony default export */ __webpack_exports__["default"] = (BaseGamepad);


/***/ }),

/***/ "./app/lib/model/abstract/Solid2D.ts":
/*!*******************************************!*\
  !*** ./app/lib/model/abstract/Solid2D.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _interfaces_Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../interfaces/Observable */ "./app/lib/model/interfaces/Observable.ts");

class Solid2D extends _interfaces_Observable__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(x, y, width, height, context) {
        super();
        this.x = x;
        this.y = y;
        this.width = width + 0.5;
        this.height = height + 0.5;
        this.context = context;
        this.observables = [];
    }
    attach(observer) {
        this.observables.push(observer);
    }
    detach(observer) {
        let index = this.observables.indexOf(observer);
        if (index > -1) {
            this.observables.splice(index, 1);
        }
    }
    notify(args) {
        this.observables.forEach((observer) => observer.update(this, args));
    }
    paint() { }
}
/* harmony default export */ __webpack_exports__["default"] = (Solid2D);


/***/ }),

/***/ "./app/lib/model/abstract/impl/DesktopGamepad.ts":
/*!*******************************************************!*\
  !*** ./app/lib/model/abstract/impl/DesktopGamepad.ts ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BaseGamepad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../BaseGamepad */ "./app/lib/model/abstract/BaseGamepad.ts");
/* harmony import */ var _enums_GamepadActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../enums/GamepadActions */ "./app/lib/enums/GamepadActions.ts");


class DesktopGamepad extends _BaseGamepad__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(player) {
        super(_enums_GamepadActions__WEBPACK_IMPORTED_MODULE_1__["GamepadListener"].KEYBOARD);
        this.player = player;
        this.steps = Math.floor(player.context.width / 15);
    }
    processCommand(pressed) {
        this.doAction(pressed);
    }
    doAction(pressed) {
        let key = pressed.code;
        if (key == _enums_GamepadActions__WEBPACK_IMPORTED_MODULE_1__["KeyboardAction"].LEFT || key == _enums_GamepadActions__WEBPACK_IMPORTED_MODULE_1__["ArrowAction"].LEFT) {
            this.move(this.player, -this.steps);
        }
        else if (key == _enums_GamepadActions__WEBPACK_IMPORTED_MODULE_1__["KeyboardAction"].RIGHT || key == _enums_GamepadActions__WEBPACK_IMPORTED_MODULE_1__["ArrowAction"].RIGHT) {
            this.move(this.player, this.steps);
        }
    }
}
/* harmony default export */ __webpack_exports__["default"] = (DesktopGamepad);


/***/ }),

/***/ "./app/lib/model/abstract/impl/MobileGamepad.ts":
/*!******************************************************!*\
  !*** ./app/lib/model/abstract/impl/MobileGamepad.ts ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BaseGamepad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../BaseGamepad */ "./app/lib/model/abstract/BaseGamepad.ts");
/* harmony import */ var _enums_GamepadActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../enums/GamepadActions */ "./app/lib/enums/GamepadActions.ts");


class MobileGamepad extends _BaseGamepad__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(player) {
        super(_enums_GamepadActions__WEBPACK_IMPORTED_MODULE_1__["GamepadListener"].TOUCH);
        this.player = player;
        this.steps = Math.floor(player.context.width / 15);
    }
    processCommand(pressed) {
        let screenWidth = this.player.context.clientWidth;
        if (pressed.changedTouches[0].clientX > screenWidth / 2) {
            this.move(this.player, this.steps);
        }
        else {
            this.move(this.player, -this.steps);
        }
    }
}
/* harmony default export */ __webpack_exports__["default"] = (MobileGamepad);


/***/ }),

/***/ "./app/lib/model/interfaces/Observable.ts":
/*!************************************************!*\
  !*** ./app/lib/model/interfaces/Observable.ts ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Observable {
}
/* harmony default export */ __webpack_exports__["default"] = (Observable);


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBwL2xpYi9jb21tYW5kcy9Nb3ZlQ29tbWFuZC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvbGliL2VudW1zL0dhbWVwYWRBY3Rpb25zLnRzIiwid2VicGFjazovLy8uL2FwcC9saWIvZmFjdG9yaWVzL0Jsb2NrRmFjdG9yeS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvbGliL2ZhY3Rvcmllcy9HYW1lcGFkRmFjdG9yeS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvbGliL2ZhY3Rvcmllcy9QbGF5ZXJGYWN0b3J5LnRzIiwid2VicGFjazovLy8uL2FwcC9saWIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2xpYi9tb2RlbC9CbG9jay50cyIsIndlYnBhY2s6Ly8vLi9hcHAvbGliL21vZGVsL0dhbWVib2FyZC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvbGliL21vZGVsL1BsYXllci50cyIsIndlYnBhY2s6Ly8vLi9hcHAvbGliL21vZGVsL2Fic3RyYWN0L0Jhc2VHYW1lcGFkLnRzIiwid2VicGFjazovLy8uL2FwcC9saWIvbW9kZWwvYWJzdHJhY3QvU29saWQyRC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvbGliL21vZGVsL2Fic3RyYWN0L2ltcGwvRGVza3RvcEdhbWVwYWQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2xpYi9tb2RlbC9hYnN0cmFjdC9pbXBsL01vYmlsZUdhbWVwYWQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2xpYi9tb2RlbC9pbnRlcmZhY2VzL09ic2VydmFibGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNB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QztBQUNBLGNBQWMscUVBQWU7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZSw0RUFBYSxFQUFDOzs7Ozs7Ozs7Ozs7O0FDbEI3QjtBQUFBO0FBQ0E7QUFDZSx5RUFBVSxFQUFDIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vYXBwL2xpYi9pbmRleC50c1wiKTtcbiIsImNsYXNzIE1vdmVDb21tYW5kIHtcclxuICAgIGNvbnN0cnVjdG9yKG5ld1gsIG5ld1ksIG1vdmVhYmxlKSB7XHJcbiAgICAgICAgdGhpcy54ID0gbmV3WDtcclxuICAgICAgICB0aGlzLnkgPSBuZXdZO1xyXG4gICAgICAgIHRoaXMubW92ZWFibGUgPSBtb3ZlYWJsZTtcclxuICAgIH1cclxuICAgIGV4ZWN1dGUoKSB7XHJcbiAgICAgICAgbGV0IG5leHRQb3NpdGlvblggPSB0aGlzLnggKyB0aGlzLm1vdmVhYmxlLndpZHRoO1xyXG4gICAgICAgIGxldCBuZXh0UG9zaXRpb25ZID0gdGhpcy55ICsgdGhpcy5tb3ZlYWJsZS5oZWlnaHQ7XHJcbiAgICAgICAgaWYgKHRoaXMueCA8IDApIHtcclxuICAgICAgICAgICAgdGhpcy54ID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAobmV4dFBvc2l0aW9uWCA+IHRoaXMubW92ZWFibGUuY29udGV4dC53aWR0aCkge1xyXG4gICAgICAgICAgICB0aGlzLnggPSBNYXRoLmFicyh0aGlzLm1vdmVhYmxlLmNvbnRleHQud2lkdGggLSB0aGlzLm1vdmVhYmxlLndpZHRoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMueSA8IDApIHtcclxuICAgICAgICAgICAgdGhpcy55ID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAobmV4dFBvc2l0aW9uWSA+IHRoaXMubW92ZWFibGUuY29udGV4dC5oZWlnaHQpIHtcclxuICAgICAgICAgICAgdGhpcy55ID0gTWF0aC5hYnModGhpcy5tb3ZlYWJsZS5jb250ZXh0LmhlaWdodCAtIHRoaXMubW92ZWFibGUuaGVpZ2h0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFt0aGlzLngsIHRoaXMueV07XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTW92ZUNvbW1hbmQ7XHJcbiIsImV4cG9ydCB2YXIgS2V5Ym9hcmRBY3Rpb247XHJcbihmdW5jdGlvbiAoS2V5Ym9hcmRBY3Rpb24pIHtcclxuICAgIEtleWJvYXJkQWN0aW9uW1wiTEVGVFwiXSA9IFwiS2V5QVwiO1xyXG4gICAgS2V5Ym9hcmRBY3Rpb25bXCJSSUdIVFwiXSA9IFwiS2V5RFwiO1xyXG59KShLZXlib2FyZEFjdGlvbiB8fCAoS2V5Ym9hcmRBY3Rpb24gPSB7fSkpO1xyXG5leHBvcnQgdmFyIEFycm93QWN0aW9uO1xyXG4oZnVuY3Rpb24gKEFycm93QWN0aW9uKSB7XHJcbiAgICBBcnJvd0FjdGlvbltcIkxFRlRcIl0gPSBcIkFycm93TGVmdFwiO1xyXG4gICAgQXJyb3dBY3Rpb25bXCJSSUdIVFwiXSA9IFwiQXJyb3dSaWdodFwiO1xyXG59KShBcnJvd0FjdGlvbiB8fCAoQXJyb3dBY3Rpb24gPSB7fSkpO1xyXG5leHBvcnQgdmFyIEdhbWVwYWRMaXN0ZW5lcjtcclxuKGZ1bmN0aW9uIChHYW1lcGFkTGlzdGVuZXIpIHtcclxuICAgIEdhbWVwYWRMaXN0ZW5lcltcIlRPVUNIXCJdID0gXCJvbnRvdWNoc3RhcnRcIjtcclxuICAgIEdhbWVwYWRMaXN0ZW5lcltcIktFWUJPQVJEXCJdID0gXCJvbmtleWRvd25cIjtcclxufSkoR2FtZXBhZExpc3RlbmVyIHx8IChHYW1lcGFkTGlzdGVuZXIgPSB7fSkpO1xyXG4iLCJpbXBvcnQgQmxvY2ssIHsgQnJpY2tXZWlnaHQgfSBmcm9tIFwiLi4vbW9kZWwvQmxvY2tcIjtcclxuY2xhc3MgQmxvY2tGYWN0b3J5IHtcclxuICAgIGNvbnN0cnVjdG9yKGxpbmVzLCBjb250ZXh0KSB7XHJcbiAgICAgICAgdGhpcy5saW5lcyA9IGxpbmVzO1xyXG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XHJcbiAgICAgICAgdGhpcy5ibG9ja3NQZXJDb2x1bW4gPSAyNTtcclxuICAgIH1cclxuICAgIGNyZWF0ZSgpIHtcclxuICAgICAgICBsZXQgYmxvY2tzID0gW107XHJcbiAgICAgICAgbGV0IG5leHRQb3NpdGlvbiA9IHsgeDogMCwgeTogMCB9O1xyXG4gICAgICAgIGxldCBsZW5ndGggPSB0aGlzLmNvbnRleHQud2lkdGggLyB0aGlzLmJsb2Nrc1BlckNvbHVtbjtcclxuICAgICAgICBmb3IgKGxldCBsaW5lID0gMDsgbGluZSA8IHRoaXMubGluZXM7IGxpbmUrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBjb2x1bW4gPSAwOyBjb2x1bW4gPCB0aGlzLmJsb2Nrc1BlckNvbHVtbjsgY29sdW1uKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBibG9ja1dlaWdodCA9IHRoaXMuZ2V0QmxvY2tXZWlnaHQobGluZSk7XHJcbiAgICAgICAgICAgICAgICBibG9ja3MucHVzaChuZXcgQmxvY2sobmV4dFBvc2l0aW9uLngsIG5leHRQb3NpdGlvbi55LCBsZW5ndGgsIHRoaXMuY29udGV4dCwgYmxvY2tXZWlnaHQpKTtcclxuICAgICAgICAgICAgICAgIG5leHRQb3NpdGlvbi54ICs9IGxlbmd0aDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBuZXh0UG9zaXRpb24ueCA9IDA7XHJcbiAgICAgICAgICAgIG5leHRQb3NpdGlvbi55ICs9IGxlbmd0aDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGJsb2NrcztcclxuICAgIH1cclxuICAgIGdldEJsb2NrV2VpZ2h0KGxpbmUpIHtcclxuICAgICAgICBzd2l0Y2ggKGxpbmUpIHtcclxuICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEJyaWNrV2VpZ2h0LkhVR0U7XHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIHJldHVybiBCcmlja1dlaWdodC5ISUdIO1xyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gQnJpY2tXZWlnaHQuTUVESVVNO1xyXG4gICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gQnJpY2tXZWlnaHQuTE9XO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEJyaWNrV2VpZ2h0LkxPVztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQmxvY2tGYWN0b3J5O1xyXG4iLCJpbXBvcnQgRGVza3RvcEdhbWVwYWQgZnJvbSBcIi4uL21vZGVsL2Fic3RyYWN0L2ltcGwvRGVza3RvcEdhbWVwYWRcIjtcclxuaW1wb3J0IE1vYmlsZUdhbWVwYWQgZnJvbSBcIi4uL21vZGVsL2Fic3RyYWN0L2ltcGwvTW9iaWxlR2FtZXBhZFwiO1xyXG5jbGFzcyBHYW1lcGFkRmFjdG9yeSB7XHJcbiAgICBjb25zdHJ1Y3RvcihwbGF5ZXIpIHtcclxuICAgICAgICB0aGlzLnBsYXllciA9IHBsYXllcjtcclxuICAgIH1cclxuICAgIGNyZWF0ZSgpIHtcclxuICAgICAgICBpZiAoKCdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdykpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBNb2JpbGVHYW1lcGFkKHRoaXMucGxheWVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgRGVza3RvcEdhbWVwYWQodGhpcy5wbGF5ZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBHYW1lcGFkRmFjdG9yeTtcclxuIiwiaW1wb3J0IFBsYXllciBmcm9tIFwiLi4vbW9kZWwvUGxheWVyXCI7XHJcbmNsYXNzIFBsYXllckZhY3Rvcnkge1xyXG4gICAgY29uc3RydWN0b3Iod2lkdGgsIGhlaWdodCwgY29udGV4dCkge1xyXG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcclxuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xyXG4gICAgICAgIHRoaXMucmVjb3JkID0gdGhpcy5sb2FkUmVjb3JkKCk7XHJcbiAgICB9XHJcbiAgICBjcmVhdGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQbGF5ZXIodGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsIHRoaXMuY29udGV4dCk7XHJcbiAgICB9XHJcbiAgICBsb2FkUmVjb3JkKCkge1xyXG4gICAgICAgIHJldHVybiBwYXJzZUludChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInJlY29yZFwiKSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgUGxheWVyRmFjdG9yeTtcclxuIiwiaW1wb3J0IEdhbWVib2FyZCBmcm9tIFwiLi9tb2RlbC9HYW1lYm9hcmRcIjtcclxuY29uc3QgZ2FtZWJvYXJkID0gbmV3IEdhbWVib2FyZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2dhbWVib2FyZFwiKSk7XHJcbiIsImltcG9ydCBTb2xpZDJEIGZyb20gXCIuL2Fic3RyYWN0L1NvbGlkMkRcIjtcclxuY2xhc3MgQnJpY2sgZXh0ZW5kcyBTb2xpZDJEIHtcclxuICAgIGNvbnN0cnVjdG9yKHgsIHksIGxlbmd0aCwgY29udGV4dCwgd2VpZ2h0KSB7XHJcbiAgICAgICAgc3VwZXIoeCwgeSwgbGVuZ3RoLCBsZW5ndGgsIGNvbnRleHQpO1xyXG4gICAgICAgIHRoaXMud2VpZ2h0ID0gd2VpZ2h0O1xyXG4gICAgICAgIHRoaXMuc2V0Q29sb3Iod2VpZ2h0KTtcclxuICAgIH1cclxuICAgIHNldENvbG9yKHdlaWdodCkge1xyXG4gICAgICAgIHN3aXRjaCAod2VpZ2h0KSB7XHJcbiAgICAgICAgICAgIGNhc2UgQnJpY2tXZWlnaHQuTE9XOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb2xvciA9IEJyaWNrQ29sb3JzLkxPVztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEJyaWNrV2VpZ2h0Lk1FRElVTTpcclxuICAgICAgICAgICAgICAgIHRoaXMuY29sb3IgPSBCcmlja0NvbG9ycy5NRURJVU07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBCcmlja1dlaWdodC5ISUdIOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb2xvciA9IEJyaWNrQ29sb3JzLkhJR0g7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBCcmlja1dlaWdodC5IVUdFOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb2xvciA9IEJyaWNrQ29sb3JzLkhVR0U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwYWludCgpIHtcclxuICAgICAgICBsZXQgY29udGV4dCA9IHRoaXMuY29udGV4dC5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgICAgICAgY29udGV4dC5zdHJva2VTdHlsZSA9IFwiIzAwMDAwMFwiO1xyXG4gICAgICAgIGNvbnRleHQuc3Ryb2tlUmVjdCh0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG4gICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcclxuICAgICAgICBjb250ZXh0LmZpbGxSZWN0KHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcbiAgICB9XHJcbiAgICBkZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMubm90aWZ5KHsgYWN0aW9uOiBCcmlja0FjdGlvbnMuREVTVFJPWSB9KTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBCcmljaztcclxuZXhwb3J0IHZhciBCcmlja0FjdGlvbnM7XHJcbihmdW5jdGlvbiAoQnJpY2tBY3Rpb25zKSB7XHJcbiAgICBCcmlja0FjdGlvbnNbQnJpY2tBY3Rpb25zW1wiREVTVFJPWVwiXSA9IDBdID0gXCJERVNUUk9ZXCI7XHJcbn0pKEJyaWNrQWN0aW9ucyB8fCAoQnJpY2tBY3Rpb25zID0ge30pKTtcclxuZXhwb3J0IHZhciBCcmlja1dlaWdodDtcclxuKGZ1bmN0aW9uIChCcmlja1dlaWdodCkge1xyXG4gICAgQnJpY2tXZWlnaHRbQnJpY2tXZWlnaHRbXCJMT1dcIl0gPSAxMF0gPSBcIkxPV1wiO1xyXG4gICAgQnJpY2tXZWlnaHRbQnJpY2tXZWlnaHRbXCJNRURJVU1cIl0gPSAyMF0gPSBcIk1FRElVTVwiO1xyXG4gICAgQnJpY2tXZWlnaHRbQnJpY2tXZWlnaHRbXCJISUdIXCJdID0gMzBdID0gXCJISUdIXCI7XHJcbiAgICBCcmlja1dlaWdodFtCcmlja1dlaWdodFtcIkhVR0VcIl0gPSA1MF0gPSBcIkhVR0VcIjtcclxufSkoQnJpY2tXZWlnaHQgfHwgKEJyaWNrV2VpZ2h0ID0ge30pKTtcclxudmFyIEJyaWNrQ29sb3JzO1xyXG4oZnVuY3Rpb24gKEJyaWNrQ29sb3JzKSB7XHJcbiAgICBCcmlja0NvbG9yc1tcIkxPV1wiXSA9IFwiI2RkZGRkZFwiO1xyXG4gICAgQnJpY2tDb2xvcnNbXCJNRURJVU1cIl0gPSBcIiMwMGZmMDBcIjtcclxuICAgIEJyaWNrQ29sb3JzW1wiSElHSFwiXSA9IFwiIzAwMDBmZlwiO1xyXG4gICAgQnJpY2tDb2xvcnNbXCJIVUdFXCJdID0gXCIjZmYwMDAwXCI7XHJcbn0pKEJyaWNrQ29sb3JzIHx8IChCcmlja0NvbG9ycyA9IHt9KSk7XHJcbiIsImltcG9ydCBHYW1lcGFkRmFjdG9yeSBmcm9tIFwiLi4vZmFjdG9yaWVzL0dhbWVwYWRGYWN0b3J5XCI7XHJcbmltcG9ydCBQbGF5ZXJGYWN0b3J5IGZyb20gXCIuLi9mYWN0b3JpZXMvUGxheWVyRmFjdG9yeVwiO1xyXG5pbXBvcnQgQmxvY2tGYWN0b3J5IGZyb20gXCIuLi9mYWN0b3JpZXMvQmxvY2tGYWN0b3J5XCI7XHJcbmNsYXNzIEdhbWVib2FyZCB7XHJcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMpIHtcclxuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcclxuICAgICAgICB0aGlzLnByZXBhcmVTY2VuZSgpO1xyXG4gICAgICAgIHRoaXMuYXR0YWNoZWQgPSBbXTtcclxuICAgICAgICB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXJGYWN0b3J5KDMwMCwgNTAsIHRoaXMuY2FudmFzKS5jcmVhdGUoKTtcclxuICAgICAgICB0aGlzLmdhbWVwYWQgPSBuZXcgR2FtZXBhZEZhY3RvcnkodGhpcy5wbGF5ZXIpLmNyZWF0ZSgpO1xyXG4gICAgICAgIGxldCBibG9ja3MgPSBuZXcgQmxvY2tGYWN0b3J5KDQsIHRoaXMuY2FudmFzKS5jcmVhdGUoKTtcclxuICAgICAgICBibG9ja3MuZm9yRWFjaCgoYmxvY2spID0+IHtcclxuICAgICAgICAgICAgdGhpcy5hdHRhY2hUb0NvbnRleHQoYmxvY2spO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuYXR0YWNoVG9Db250ZXh0KHRoaXMucGxheWVyKTtcclxuICAgIH1cclxuICAgIHByZXBhcmVTY2VuZSgpIHtcclxuICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuICAgIH1cclxuICAgIGF0dGFjaFRvQ29udGV4dChwYWludGFibGUpIHtcclxuICAgICAgICB0aGlzLmF0dGFjaGVkLnB1c2gocGFpbnRhYmxlKTtcclxuICAgICAgICBwYWludGFibGUuYXR0YWNoKHRoaXMpO1xyXG4gICAgICAgIHBhaW50YWJsZS5wYWludCgpO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlKHN0YXRlLCBhcmdzKSB7XHJcbiAgICAgICAgdGhpcy5yZXBhaW50KCk7XHJcbiAgICB9XHJcbiAgICByZXBhaW50KCkge1xyXG4gICAgICAgIHRoaXMuY2FudmFzXHJcbiAgICAgICAgICAgIC5nZXRDb250ZXh0KFwiMmRcIilcclxuICAgICAgICAgICAgLmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcclxuICAgICAgICB0aGlzLmF0dGFjaGVkLmZvckVhY2goKGVsKSA9PiBlbC5wYWludCgpKTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBHYW1lYm9hcmQ7XHJcbiIsImltcG9ydCBTb2xpZDJEIGZyb20gXCIuL2Fic3RyYWN0L1NvbGlkMkRcIjtcclxuaW1wb3J0IE1vdmVDb21tYW5kIGZyb20gXCIuLi9jb21tYW5kcy9Nb3ZlQ29tbWFuZFwiO1xyXG5jbGFzcyBQbGF5ZXIgZXh0ZW5kcyBTb2xpZDJEIHtcclxuICAgIGNvbnN0cnVjdG9yKHdpZHRoLCBoZWlnaHQsIGNvbnRleHQpIHtcclxuICAgICAgICBsZXQgaW5pdGlhbFggPSAoY29udGV4dC53aWR0aCAtIHdpZHRoKSAvIDI7XHJcbiAgICAgICAgbGV0IHN0YXRpY1kgPSBjb250ZXh0LmhlaWdodCAtIGhlaWdodDtcclxuICAgICAgICBzdXBlcihpbml0aWFsWCwgc3RhdGljWSwgd2lkdGgsIGhlaWdodCwgY29udGV4dCk7XHJcbiAgICAgICAgdGhpcy5tb3ZlKDApO1xyXG4gICAgfVxyXG4gICAgcGFpbnQoKSB7XHJcbiAgICAgICAgbGV0IGNvbnRleHQgPSB0aGlzLmNvbnRleHQuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gXCIjMDAwMDAwXCI7XHJcbiAgICAgICAgY29udGV4dC5maWxsUmVjdCh0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG4gICAgfVxyXG4gICAgbW92ZShkeCkge1xyXG4gICAgICAgIGxldCBjb21tYW5kID0gbmV3IE1vdmVDb21tYW5kKHRoaXMueCArIGR4LCB0aGlzLnksIHRoaXMpO1xyXG4gICAgICAgIHRoaXMueCA9IGNvbW1hbmQuZXhlY3V0ZSgpWzBdO1xyXG4gICAgICAgIHRoaXMubm90aWZ5KCk7XHJcbiAgICB9XHJcbiAgICBkZXN0cm95KCkgeyB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgUGxheWVyO1xyXG4iLCJjbGFzcyBCYXNlR2FtZXBhZCB7XHJcbiAgICBjb25zdHJ1Y3RvcihldmVudCkge1xyXG4gICAgICAgIGRvY3VtZW50W2V2ZW50XSA9IChwcmVzc2VkKSA9PiB0aGlzLnByb2Nlc3NDb21tYW5kKHByZXNzZWQpO1xyXG4gICAgfVxyXG4gICAgbW92ZShwbGF5ZXIsIHgpIHtcclxuICAgICAgICBwbGF5ZXIubW92ZSh4KTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBCYXNlR2FtZXBhZDtcclxuIiwiaW1wb3J0IE9ic2VydmFibGUgZnJvbSBcIi4uL2ludGVyZmFjZXMvT2JzZXJ2YWJsZVwiO1xyXG5jbGFzcyBTb2xpZDJEIGV4dGVuZHMgT2JzZXJ2YWJsZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcih4LCB5LCB3aWR0aCwgaGVpZ2h0LCBjb250ZXh0KSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoICsgMC41O1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0ICsgMC41O1xyXG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XHJcbiAgICAgICAgdGhpcy5vYnNlcnZhYmxlcyA9IFtdO1xyXG4gICAgfVxyXG4gICAgYXR0YWNoKG9ic2VydmVyKSB7XHJcbiAgICAgICAgdGhpcy5vYnNlcnZhYmxlcy5wdXNoKG9ic2VydmVyKTtcclxuICAgIH1cclxuICAgIGRldGFjaChvYnNlcnZlcikge1xyXG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMub2JzZXJ2YWJsZXMuaW5kZXhPZihvYnNlcnZlcik7XHJcbiAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcclxuICAgICAgICAgICAgdGhpcy5vYnNlcnZhYmxlcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG5vdGlmeShhcmdzKSB7XHJcbiAgICAgICAgdGhpcy5vYnNlcnZhYmxlcy5mb3JFYWNoKChvYnNlcnZlcikgPT4gb2JzZXJ2ZXIudXBkYXRlKHRoaXMsIGFyZ3MpKTtcclxuICAgIH1cclxuICAgIHBhaW50KCkgeyB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgU29saWQyRDtcclxuIiwiaW1wb3J0IEJhc2VHYW1lcGFkIGZyb20gXCIuLi9CYXNlR2FtZXBhZFwiO1xyXG5pbXBvcnQgeyBLZXlib2FyZEFjdGlvbiwgQXJyb3dBY3Rpb24sIEdhbWVwYWRMaXN0ZW5lciB9IGZyb20gXCIuLi8uLi8uLi9lbnVtcy9HYW1lcGFkQWN0aW9uc1wiO1xyXG5jbGFzcyBEZXNrdG9wR2FtZXBhZCBleHRlbmRzIEJhc2VHYW1lcGFkIHtcclxuICAgIGNvbnN0cnVjdG9yKHBsYXllcikge1xyXG4gICAgICAgIHN1cGVyKEdhbWVwYWRMaXN0ZW5lci5LRVlCT0FSRCk7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBwbGF5ZXI7XHJcbiAgICAgICAgdGhpcy5zdGVwcyA9IE1hdGguZmxvb3IocGxheWVyLmNvbnRleHQud2lkdGggLyAxNSk7XHJcbiAgICB9XHJcbiAgICBwcm9jZXNzQ29tbWFuZChwcmVzc2VkKSB7XHJcbiAgICAgICAgdGhpcy5kb0FjdGlvbihwcmVzc2VkKTtcclxuICAgIH1cclxuICAgIGRvQWN0aW9uKHByZXNzZWQpIHtcclxuICAgICAgICBsZXQga2V5ID0gcHJlc3NlZC5jb2RlO1xyXG4gICAgICAgIGlmIChrZXkgPT0gS2V5Ym9hcmRBY3Rpb24uTEVGVCB8fCBrZXkgPT0gQXJyb3dBY3Rpb24uTEVGVCkge1xyXG4gICAgICAgICAgICB0aGlzLm1vdmUodGhpcy5wbGF5ZXIsIC10aGlzLnN0ZXBzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoa2V5ID09IEtleWJvYXJkQWN0aW9uLlJJR0hUIHx8IGtleSA9PSBBcnJvd0FjdGlvbi5SSUdIVCkge1xyXG4gICAgICAgICAgICB0aGlzLm1vdmUodGhpcy5wbGF5ZXIsIHRoaXMuc3RlcHMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBEZXNrdG9wR2FtZXBhZDtcclxuIiwiaW1wb3J0IEJhc2VHYW1lcGFkIGZyb20gXCIuLi9CYXNlR2FtZXBhZFwiO1xyXG5pbXBvcnQgeyBHYW1lcGFkTGlzdGVuZXIgfSBmcm9tIFwiLi4vLi4vLi4vZW51bXMvR2FtZXBhZEFjdGlvbnNcIjtcclxuY2xhc3MgTW9iaWxlR2FtZXBhZCBleHRlbmRzIEJhc2VHYW1lcGFkIHtcclxuICAgIGNvbnN0cnVjdG9yKHBsYXllcikge1xyXG4gICAgICAgIHN1cGVyKEdhbWVwYWRMaXN0ZW5lci5UT1VDSCk7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBwbGF5ZXI7XHJcbiAgICAgICAgdGhpcy5zdGVwcyA9IE1hdGguZmxvb3IocGxheWVyLmNvbnRleHQud2lkdGggLyAxNSk7XHJcbiAgICB9XHJcbiAgICBwcm9jZXNzQ29tbWFuZChwcmVzc2VkKSB7XHJcbiAgICAgICAgbGV0IHNjcmVlbldpZHRoID0gdGhpcy5wbGF5ZXIuY29udGV4dC5jbGllbnRXaWR0aDtcclxuICAgICAgICBpZiAocHJlc3NlZC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYID4gc2NyZWVuV2lkdGggLyAyKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW92ZSh0aGlzLnBsYXllciwgdGhpcy5zdGVwcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm1vdmUodGhpcy5wbGF5ZXIsIC10aGlzLnN0ZXBzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTW9iaWxlR2FtZXBhZDtcclxuIiwiY2xhc3MgT2JzZXJ2YWJsZSB7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgT2JzZXJ2YWJsZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==