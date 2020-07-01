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
        this.setSprite(weight);
        setTimeout(() => {
            console.log(`Destroy at: ${this.x} ${this.y}`);
            this.destroy();
        }, Math.random() * 10000);
    }
    setSprite(weight) {
        let image = new Image();
        switch (weight) {
            case BrickWeight.LOW:
                image.src = "./dist/sprites/" + BrickSprite.LOW;
                break;
            case BrickWeight.MEDIUM:
                image.src = "./dist/sprites/" + BrickSprite.MEDIUM;
                break;
            case BrickWeight.HIGH:
                image.src = "./dist/sprites/" + BrickSprite.HIGH;
                break;
            case BrickWeight.HUGE:
                image.src = "./dist/sprites/" + BrickSprite.HUGE;
                break;
        }
        image.onload = () => {
            this.sprite = image;
        };
    }
    paint() {
        let context = this.context.getContext("2d");
        context.strokeStyle = "#000000";
        context.strokeRect(this.x, this.y, this.width, this.height);
        context.drawImage(this.sprite, this.x, this.y, this.width, this.height);
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
var BrickSprite;
(function (BrickSprite) {
    BrickSprite["LOW"] = "1.png";
    BrickSprite["MEDIUM"] = "2.png";
    BrickSprite["HIGH"] = "3.png";
    BrickSprite["HUGE"] = "4.png";
})(BrickSprite || (BrickSprite = {}));


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
/* harmony import */ var _Block__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Block */ "./app/lib/model/Block.ts");




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
        if (state instanceof _Block__WEBPACK_IMPORTED_MODULE_3__["default"]) {
            if (args.action == _Block__WEBPACK_IMPORTED_MODULE_3__["BrickActions"].DESTROY) {
                let index = this.attached.indexOf(state);
                this.attached.splice(index, 1);
            }
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBwL2xpYi9jb21tYW5kcy9Nb3ZlQ29tbWFuZC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvbGliL2VudW1zL0dhbWVwYWRBY3Rpb25zLnRzIiwid2VicGFjazovLy8uL2FwcC9saWIvZmFjdG9yaWVzL0Jsb2NrRmFjdG9yeS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvbGliL2ZhY3Rvcmllcy9HYW1lcGFkRmFjdG9yeS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvbGliL2ZhY3Rvcmllcy9QbGF5ZXJGYWN0b3J5LnRzIiwid2VicGFjazovLy8uL2FwcC9saWIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2xpYi9tb2RlbC9CbG9jay50cyIsIndlYnBhY2s6Ly8vLi9hcHAvbGliL21vZGVsL0dhbWVib2FyZC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvbGliL21vZGVsL1BsYXllci50cyIsIndlYnBhY2s6Ly8vLi9hcHAvbGliL21vZGVsL2Fic3RyYWN0L0Jhc2VHYW1lcGFkLnRzIiwid2VicGFjazovLy8uL2FwcC9saWIvbW9kZWwvYWJzdHJhY3QvU29saWQyRC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvbGliL21vZGVsL2Fic3RyYWN0L2ltcGwvRGVza3RvcEdhbWVwYWQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2xpYi9tb2RlbC9hYnN0cmFjdC9pbXBsL01vYmlsZUdhbWVwYWQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2xpYi9tb2RlbC9pbnRlcmZhY2VzL09ic2VydmFibGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNB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QUNBLHdCQUF3QixvRUFBYyxpQkFBaUIsaUVBQVc7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDZSw2RUFBYyxFQUFDOzs7Ozs7Ozs7Ozs7O0FDckI5QjtBQUFBO0FBQUE7QUFBeUM7QUFDdUI7QUFDaEUsNEJBQTRCLG9EQUFXO0FBQ3ZDO0FBQ0EsY0FBYyxxRUFBZTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNlLDRFQUFhLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNsQjdCO0FBQUE7QUFDQTtBQUNlLHlFQUFVLEVBQUMiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9hcHAvbGliL2luZGV4LnRzXCIpO1xuIiwiY2xhc3MgTW92ZUNvbW1hbmQge1xyXG4gICAgY29uc3RydWN0b3IobmV3WCwgbmV3WSwgbW92ZWFibGUpIHtcclxuICAgICAgICB0aGlzLnggPSBuZXdYO1xyXG4gICAgICAgIHRoaXMueSA9IG5ld1k7XHJcbiAgICAgICAgdGhpcy5tb3ZlYWJsZSA9IG1vdmVhYmxlO1xyXG4gICAgfVxyXG4gICAgZXhlY3V0ZSgpIHtcclxuICAgICAgICBsZXQgbmV4dFBvc2l0aW9uWCA9IHRoaXMueCArIHRoaXMubW92ZWFibGUud2lkdGg7XHJcbiAgICAgICAgbGV0IG5leHRQb3NpdGlvblkgPSB0aGlzLnkgKyB0aGlzLm1vdmVhYmxlLmhlaWdodDtcclxuICAgICAgICBpZiAodGhpcy54IDwgMCkge1xyXG4gICAgICAgICAgICB0aGlzLnggPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChuZXh0UG9zaXRpb25YID4gdGhpcy5tb3ZlYWJsZS5jb250ZXh0LndpZHRoKSB7XHJcbiAgICAgICAgICAgIHRoaXMueCA9IE1hdGguYWJzKHRoaXMubW92ZWFibGUuY29udGV4dC53aWR0aCAtIHRoaXMubW92ZWFibGUud2lkdGgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy55IDwgMCkge1xyXG4gICAgICAgICAgICB0aGlzLnkgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChuZXh0UG9zaXRpb25ZID4gdGhpcy5tb3ZlYWJsZS5jb250ZXh0LmhlaWdodCkge1xyXG4gICAgICAgICAgICB0aGlzLnkgPSBNYXRoLmFicyh0aGlzLm1vdmVhYmxlLmNvbnRleHQuaGVpZ2h0IC0gdGhpcy5tb3ZlYWJsZS5oZWlnaHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gW3RoaXMueCwgdGhpcy55XTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBNb3ZlQ29tbWFuZDtcclxuIiwiZXhwb3J0IHZhciBLZXlib2FyZEFjdGlvbjtcclxuKGZ1bmN0aW9uIChLZXlib2FyZEFjdGlvbikge1xyXG4gICAgS2V5Ym9hcmRBY3Rpb25bXCJMRUZUXCJdID0gXCJLZXlBXCI7XHJcbiAgICBLZXlib2FyZEFjdGlvbltcIlJJR0hUXCJdID0gXCJLZXlEXCI7XHJcbn0pKEtleWJvYXJkQWN0aW9uIHx8IChLZXlib2FyZEFjdGlvbiA9IHt9KSk7XHJcbmV4cG9ydCB2YXIgQXJyb3dBY3Rpb247XHJcbihmdW5jdGlvbiAoQXJyb3dBY3Rpb24pIHtcclxuICAgIEFycm93QWN0aW9uW1wiTEVGVFwiXSA9IFwiQXJyb3dMZWZ0XCI7XHJcbiAgICBBcnJvd0FjdGlvbltcIlJJR0hUXCJdID0gXCJBcnJvd1JpZ2h0XCI7XHJcbn0pKEFycm93QWN0aW9uIHx8IChBcnJvd0FjdGlvbiA9IHt9KSk7XHJcbmV4cG9ydCB2YXIgR2FtZXBhZExpc3RlbmVyO1xyXG4oZnVuY3Rpb24gKEdhbWVwYWRMaXN0ZW5lcikge1xyXG4gICAgR2FtZXBhZExpc3RlbmVyW1wiVE9VQ0hcIl0gPSBcIm9udG91Y2hzdGFydFwiO1xyXG4gICAgR2FtZXBhZExpc3RlbmVyW1wiS0VZQk9BUkRcIl0gPSBcIm9ua2V5ZG93blwiO1xyXG59KShHYW1lcGFkTGlzdGVuZXIgfHwgKEdhbWVwYWRMaXN0ZW5lciA9IHt9KSk7XHJcbiIsImltcG9ydCBCbG9jaywgeyBCcmlja1dlaWdodCB9IGZyb20gXCIuLi9tb2RlbC9CbG9ja1wiO1xyXG5jbGFzcyBCbG9ja0ZhY3Rvcnkge1xyXG4gICAgY29uc3RydWN0b3IobGluZXMsIGNvbnRleHQpIHtcclxuICAgICAgICB0aGlzLmxpbmVzID0gbGluZXM7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcclxuICAgICAgICB0aGlzLmJsb2Nrc1BlckNvbHVtbiA9IDI1O1xyXG4gICAgfVxyXG4gICAgY3JlYXRlKCkge1xyXG4gICAgICAgIGxldCBibG9ja3MgPSBbXTtcclxuICAgICAgICBsZXQgbmV4dFBvc2l0aW9uID0geyB4OiAwLCB5OiAwIH07XHJcbiAgICAgICAgbGV0IGxlbmd0aCA9IHRoaXMuY29udGV4dC53aWR0aCAvIHRoaXMuYmxvY2tzUGVyQ29sdW1uO1xyXG4gICAgICAgIGZvciAobGV0IGxpbmUgPSAwOyBsaW5lIDwgdGhpcy5saW5lczsgbGluZSsrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGNvbHVtbiA9IDA7IGNvbHVtbiA8IHRoaXMuYmxvY2tzUGVyQ29sdW1uOyBjb2x1bW4rKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGJsb2NrV2VpZ2h0ID0gdGhpcy5nZXRCbG9ja1dlaWdodChsaW5lKTtcclxuICAgICAgICAgICAgICAgIGJsb2Nrcy5wdXNoKG5ldyBCbG9jayhuZXh0UG9zaXRpb24ueCwgbmV4dFBvc2l0aW9uLnksIGxlbmd0aCwgdGhpcy5jb250ZXh0LCBibG9ja1dlaWdodCkpO1xyXG4gICAgICAgICAgICAgICAgbmV4dFBvc2l0aW9uLnggKz0gbGVuZ3RoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG5leHRQb3NpdGlvbi54ID0gMDtcclxuICAgICAgICAgICAgbmV4dFBvc2l0aW9uLnkgKz0gbGVuZ3RoO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYmxvY2tzO1xyXG4gICAgfVxyXG4gICAgZ2V0QmxvY2tXZWlnaHQobGluZSkge1xyXG4gICAgICAgIHN3aXRjaCAobGluZSkge1xyXG4gICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gQnJpY2tXZWlnaHQuSFVHRTtcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEJyaWNrV2VpZ2h0LkhJR0g7XHJcbiAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBCcmlja1dlaWdodC5NRURJVU07XHJcbiAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgIHJldHVybiBCcmlja1dlaWdodC5MT1c7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gQnJpY2tXZWlnaHQuTE9XO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBCbG9ja0ZhY3Rvcnk7XHJcbiIsImltcG9ydCBEZXNrdG9wR2FtZXBhZCBmcm9tIFwiLi4vbW9kZWwvYWJzdHJhY3QvaW1wbC9EZXNrdG9wR2FtZXBhZFwiO1xyXG5pbXBvcnQgTW9iaWxlR2FtZXBhZCBmcm9tIFwiLi4vbW9kZWwvYWJzdHJhY3QvaW1wbC9Nb2JpbGVHYW1lcGFkXCI7XHJcbmNsYXNzIEdhbWVwYWRGYWN0b3J5IHtcclxuICAgIGNvbnN0cnVjdG9yKHBsYXllcikge1xyXG4gICAgICAgIHRoaXMucGxheWVyID0gcGxheWVyO1xyXG4gICAgfVxyXG4gICAgY3JlYXRlKCkge1xyXG4gICAgICAgIGlmICgoJ29udG91Y2hzdGFydCcgaW4gd2luZG93KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IE1vYmlsZUdhbWVwYWQodGhpcy5wbGF5ZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBEZXNrdG9wR2FtZXBhZCh0aGlzLnBsYXllcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEdhbWVwYWRGYWN0b3J5O1xyXG4iLCJpbXBvcnQgUGxheWVyIGZyb20gXCIuLi9tb2RlbC9QbGF5ZXJcIjtcclxuY2xhc3MgUGxheWVyRmFjdG9yeSB7XHJcbiAgICBjb25zdHJ1Y3Rvcih3aWR0aCwgaGVpZ2h0LCBjb250ZXh0KSB7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XHJcbiAgICAgICAgdGhpcy5yZWNvcmQgPSB0aGlzLmxvYWRSZWNvcmQoKTtcclxuICAgIH1cclxuICAgIGNyZWF0ZSgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFBsYXllcih0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgdGhpcy5jb250ZXh0KTtcclxuICAgIH1cclxuICAgIGxvYWRSZWNvcmQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicmVjb3JkXCIpKTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXJGYWN0b3J5O1xyXG4iLCJpbXBvcnQgR2FtZWJvYXJkIGZyb20gXCIuL21vZGVsL0dhbWVib2FyZFwiO1xyXG5jb25zdCBnYW1lYm9hcmQgPSBuZXcgR2FtZWJvYXJkKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZ2FtZWJvYXJkXCIpKTtcclxuIiwiaW1wb3J0IFNvbGlkMkQgZnJvbSBcIi4vYWJzdHJhY3QvU29saWQyRFwiO1xyXG5jbGFzcyBCcmljayBleHRlbmRzIFNvbGlkMkQge1xyXG4gICAgY29uc3RydWN0b3IoeCwgeSwgbGVuZ3RoLCBjb250ZXh0LCB3ZWlnaHQpIHtcclxuICAgICAgICBzdXBlcih4LCB5LCBsZW5ndGgsIGxlbmd0aCwgY29udGV4dCk7XHJcbiAgICAgICAgdGhpcy53ZWlnaHQgPSB3ZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5zZXRTcHJpdGUod2VpZ2h0KTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYERlc3Ryb3kgYXQ6ICR7dGhpcy54fSAke3RoaXMueX1gKTtcclxuICAgICAgICAgICAgdGhpcy5kZXN0cm95KCk7XHJcbiAgICAgICAgfSwgTWF0aC5yYW5kb20oKSAqIDEwMDAwKTtcclxuICAgIH1cclxuICAgIHNldFNwcml0ZSh3ZWlnaHQpIHtcclxuICAgICAgICBsZXQgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICBzd2l0Y2ggKHdlaWdodCkge1xyXG4gICAgICAgICAgICBjYXNlIEJyaWNrV2VpZ2h0LkxPVzpcclxuICAgICAgICAgICAgICAgIGltYWdlLnNyYyA9IFwiLi9kaXN0L3Nwcml0ZXMvXCIgKyBCcmlja1Nwcml0ZS5MT1c7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBCcmlja1dlaWdodC5NRURJVU06XHJcbiAgICAgICAgICAgICAgICBpbWFnZS5zcmMgPSBcIi4vZGlzdC9zcHJpdGVzL1wiICsgQnJpY2tTcHJpdGUuTUVESVVNO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQnJpY2tXZWlnaHQuSElHSDpcclxuICAgICAgICAgICAgICAgIGltYWdlLnNyYyA9IFwiLi9kaXN0L3Nwcml0ZXMvXCIgKyBCcmlja1Nwcml0ZS5ISUdIO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQnJpY2tXZWlnaHQuSFVHRTpcclxuICAgICAgICAgICAgICAgIGltYWdlLnNyYyA9IFwiLi9kaXN0L3Nwcml0ZXMvXCIgKyBCcmlja1Nwcml0ZS5IVUdFO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGltYWdlLm9ubG9hZCA9ICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zcHJpdGUgPSBpbWFnZTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgcGFpbnQoKSB7XHJcbiAgICAgICAgbGV0IGNvbnRleHQgPSB0aGlzLmNvbnRleHQuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gICAgICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSBcIiMwMDAwMDBcIjtcclxuICAgICAgICBjb250ZXh0LnN0cm9rZVJlY3QodGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuICAgICAgICBjb250ZXh0LmRyYXdJbWFnZSh0aGlzLnNwcml0ZSwgdGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuICAgIH1cclxuICAgIGRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5ub3RpZnkoeyBhY3Rpb246IEJyaWNrQWN0aW9ucy5ERVNUUk9ZIH0pO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEJyaWNrO1xyXG5leHBvcnQgdmFyIEJyaWNrQWN0aW9ucztcclxuKGZ1bmN0aW9uIChCcmlja0FjdGlvbnMpIHtcclxuICAgIEJyaWNrQWN0aW9uc1tCcmlja0FjdGlvbnNbXCJERVNUUk9ZXCJdID0gMF0gPSBcIkRFU1RST1lcIjtcclxufSkoQnJpY2tBY3Rpb25zIHx8IChCcmlja0FjdGlvbnMgPSB7fSkpO1xyXG5leHBvcnQgdmFyIEJyaWNrV2VpZ2h0O1xyXG4oZnVuY3Rpb24gKEJyaWNrV2VpZ2h0KSB7XHJcbiAgICBCcmlja1dlaWdodFtCcmlja1dlaWdodFtcIkxPV1wiXSA9IDEwXSA9IFwiTE9XXCI7XHJcbiAgICBCcmlja1dlaWdodFtCcmlja1dlaWdodFtcIk1FRElVTVwiXSA9IDIwXSA9IFwiTUVESVVNXCI7XHJcbiAgICBCcmlja1dlaWdodFtCcmlja1dlaWdodFtcIkhJR0hcIl0gPSAzMF0gPSBcIkhJR0hcIjtcclxuICAgIEJyaWNrV2VpZ2h0W0JyaWNrV2VpZ2h0W1wiSFVHRVwiXSA9IDUwXSA9IFwiSFVHRVwiO1xyXG59KShCcmlja1dlaWdodCB8fCAoQnJpY2tXZWlnaHQgPSB7fSkpO1xyXG52YXIgQnJpY2tTcHJpdGU7XHJcbihmdW5jdGlvbiAoQnJpY2tTcHJpdGUpIHtcclxuICAgIEJyaWNrU3ByaXRlW1wiTE9XXCJdID0gXCIxLnBuZ1wiO1xyXG4gICAgQnJpY2tTcHJpdGVbXCJNRURJVU1cIl0gPSBcIjIucG5nXCI7XHJcbiAgICBCcmlja1Nwcml0ZVtcIkhJR0hcIl0gPSBcIjMucG5nXCI7XHJcbiAgICBCcmlja1Nwcml0ZVtcIkhVR0VcIl0gPSBcIjQucG5nXCI7XHJcbn0pKEJyaWNrU3ByaXRlIHx8IChCcmlja1Nwcml0ZSA9IHt9KSk7XHJcbiIsImltcG9ydCBHYW1lcGFkRmFjdG9yeSBmcm9tIFwiLi4vZmFjdG9yaWVzL0dhbWVwYWRGYWN0b3J5XCI7XHJcbmltcG9ydCBQbGF5ZXJGYWN0b3J5IGZyb20gXCIuLi9mYWN0b3JpZXMvUGxheWVyRmFjdG9yeVwiO1xyXG5pbXBvcnQgQmxvY2tGYWN0b3J5IGZyb20gXCIuLi9mYWN0b3JpZXMvQmxvY2tGYWN0b3J5XCI7XHJcbmltcG9ydCBCbG9jaywgeyBCcmlja0FjdGlvbnMgfSBmcm9tIFwiLi9CbG9ja1wiO1xyXG5jbGFzcyBHYW1lYm9hcmQge1xyXG4gICAgY29uc3RydWN0b3IoY2FudmFzKSB7XHJcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XHJcbiAgICAgICAgdGhpcy5wcmVwYXJlU2NlbmUoKTtcclxuICAgICAgICB0aGlzLmF0dGFjaGVkID0gW107XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBuZXcgUGxheWVyRmFjdG9yeSgzMDAsIDUwLCB0aGlzLmNhbnZhcykuY3JlYXRlKCk7XHJcbiAgICAgICAgdGhpcy5nYW1lcGFkID0gbmV3IEdhbWVwYWRGYWN0b3J5KHRoaXMucGxheWVyKS5jcmVhdGUoKTtcclxuICAgICAgICBsZXQgYmxvY2tzID0gbmV3IEJsb2NrRmFjdG9yeSg0LCB0aGlzLmNhbnZhcykuY3JlYXRlKCk7XHJcbiAgICAgICAgYmxvY2tzLmZvckVhY2goKGJsb2NrKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYXR0YWNoVG9Db250ZXh0KGJsb2NrKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmF0dGFjaFRvQ29udGV4dCh0aGlzLnBsYXllcik7XHJcbiAgICB9XHJcbiAgICBwcmVwYXJlU2NlbmUoKSB7XHJcbiAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICB9XHJcbiAgICBhdHRhY2hUb0NvbnRleHQocGFpbnRhYmxlKSB7XHJcbiAgICAgICAgdGhpcy5hdHRhY2hlZC5wdXNoKHBhaW50YWJsZSk7XHJcbiAgICAgICAgcGFpbnRhYmxlLmF0dGFjaCh0aGlzKTtcclxuICAgICAgICBwYWludGFibGUucGFpbnQoKTtcclxuICAgIH1cclxuICAgIHVwZGF0ZShzdGF0ZSwgYXJncykge1xyXG4gICAgICAgIGlmIChzdGF0ZSBpbnN0YW5jZW9mIEJsb2NrKSB7XHJcbiAgICAgICAgICAgIGlmIChhcmdzLmFjdGlvbiA9PSBCcmlja0FjdGlvbnMuREVTVFJPWSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5hdHRhY2hlZC5pbmRleE9mKHN0YXRlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXR0YWNoZWQuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnJlcGFpbnQoKTtcclxuICAgIH1cclxuICAgIHJlcGFpbnQoKSB7XHJcbiAgICAgICAgdGhpcy5jYW52YXNcclxuICAgICAgICAgICAgLmdldENvbnRleHQoXCIyZFwiKVxyXG4gICAgICAgICAgICAuY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xyXG4gICAgICAgIHRoaXMuYXR0YWNoZWQuZm9yRWFjaCgoZWwpID0+IGVsLnBhaW50KCkpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEdhbWVib2FyZDtcclxuIiwiaW1wb3J0IFNvbGlkMkQgZnJvbSBcIi4vYWJzdHJhY3QvU29saWQyRFwiO1xyXG5pbXBvcnQgTW92ZUNvbW1hbmQgZnJvbSBcIi4uL2NvbW1hbmRzL01vdmVDb21tYW5kXCI7XHJcbmNsYXNzIFBsYXllciBleHRlbmRzIFNvbGlkMkQge1xyXG4gICAgY29uc3RydWN0b3Iod2lkdGgsIGhlaWdodCwgY29udGV4dCkge1xyXG4gICAgICAgIGxldCBpbml0aWFsWCA9IChjb250ZXh0LndpZHRoIC0gd2lkdGgpIC8gMjtcclxuICAgICAgICBsZXQgc3RhdGljWSA9IGNvbnRleHQuaGVpZ2h0IC0gaGVpZ2h0O1xyXG4gICAgICAgIHN1cGVyKGluaXRpYWxYLCBzdGF0aWNZLCB3aWR0aCwgaGVpZ2h0LCBjb250ZXh0KTtcclxuICAgICAgICB0aGlzLm1vdmUoMCk7XHJcbiAgICB9XHJcbiAgICBwYWludCgpIHtcclxuICAgICAgICBsZXQgY29udGV4dCA9IHRoaXMuY29udGV4dC5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSBcIiMwMDAwMDBcIjtcclxuICAgICAgICBjb250ZXh0LmZpbGxSZWN0KHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcbiAgICB9XHJcbiAgICBtb3ZlKGR4KSB7XHJcbiAgICAgICAgbGV0IGNvbW1hbmQgPSBuZXcgTW92ZUNvbW1hbmQodGhpcy54ICsgZHgsIHRoaXMueSwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy54ID0gY29tbWFuZC5leGVjdXRlKClbMF07XHJcbiAgICAgICAgdGhpcy5ub3RpZnkoKTtcclxuICAgIH1cclxuICAgIGRlc3Ryb3koKSB7IH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7XHJcbiIsImNsYXNzIEJhc2VHYW1lcGFkIHtcclxuICAgIGNvbnN0cnVjdG9yKGV2ZW50KSB7XHJcbiAgICAgICAgZG9jdW1lbnRbZXZlbnRdID0gKHByZXNzZWQpID0+IHRoaXMucHJvY2Vzc0NvbW1hbmQocHJlc3NlZCk7XHJcbiAgICB9XHJcbiAgICBtb3ZlKHBsYXllciwgeCkge1xyXG4gICAgICAgIHBsYXllci5tb3ZlKHgpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEJhc2VHYW1lcGFkO1xyXG4iLCJpbXBvcnQgT2JzZXJ2YWJsZSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9PYnNlcnZhYmxlXCI7XHJcbmNsYXNzIFNvbGlkMkQgZXh0ZW5kcyBPYnNlcnZhYmxlIHtcclxuICAgIGNvbnN0cnVjdG9yKHgsIHksIHdpZHRoLCBoZWlnaHQsIGNvbnRleHQpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGggKyAwLjU7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQgKyAwLjU7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcclxuICAgICAgICB0aGlzLm9ic2VydmFibGVzID0gW107XHJcbiAgICB9XHJcbiAgICBhdHRhY2gob2JzZXJ2ZXIpIHtcclxuICAgICAgICB0aGlzLm9ic2VydmFibGVzLnB1c2gob2JzZXJ2ZXIpO1xyXG4gICAgfVxyXG4gICAgZGV0YWNoKG9ic2VydmVyKSB7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5vYnNlcnZhYmxlcy5pbmRleE9mKG9ic2VydmVyKTtcclxuICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xyXG4gICAgICAgICAgICB0aGlzLm9ic2VydmFibGVzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbm90aWZ5KGFyZ3MpIHtcclxuICAgICAgICB0aGlzLm9ic2VydmFibGVzLmZvckVhY2goKG9ic2VydmVyKSA9PiBvYnNlcnZlci51cGRhdGUodGhpcywgYXJncykpO1xyXG4gICAgfVxyXG4gICAgcGFpbnQoKSB7IH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBTb2xpZDJEO1xyXG4iLCJpbXBvcnQgQmFzZUdhbWVwYWQgZnJvbSBcIi4uL0Jhc2VHYW1lcGFkXCI7XHJcbmltcG9ydCB7IEtleWJvYXJkQWN0aW9uLCBBcnJvd0FjdGlvbiwgR2FtZXBhZExpc3RlbmVyIH0gZnJvbSBcIi4uLy4uLy4uL2VudW1zL0dhbWVwYWRBY3Rpb25zXCI7XHJcbmNsYXNzIERlc2t0b3BHYW1lcGFkIGV4dGVuZHMgQmFzZUdhbWVwYWQge1xyXG4gICAgY29uc3RydWN0b3IocGxheWVyKSB7XHJcbiAgICAgICAgc3VwZXIoR2FtZXBhZExpc3RlbmVyLktFWUJPQVJEKTtcclxuICAgICAgICB0aGlzLnBsYXllciA9IHBsYXllcjtcclxuICAgICAgICB0aGlzLnN0ZXBzID0gTWF0aC5mbG9vcihwbGF5ZXIuY29udGV4dC53aWR0aCAvIDE1KTtcclxuICAgIH1cclxuICAgIHByb2Nlc3NDb21tYW5kKHByZXNzZWQpIHtcclxuICAgICAgICB0aGlzLmRvQWN0aW9uKHByZXNzZWQpO1xyXG4gICAgfVxyXG4gICAgZG9BY3Rpb24ocHJlc3NlZCkge1xyXG4gICAgICAgIGxldCBrZXkgPSBwcmVzc2VkLmNvZGU7XHJcbiAgICAgICAgaWYgKGtleSA9PSBLZXlib2FyZEFjdGlvbi5MRUZUIHx8IGtleSA9PSBBcnJvd0FjdGlvbi5MRUZUKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW92ZSh0aGlzLnBsYXllciwgLXRoaXMuc3RlcHMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChrZXkgPT0gS2V5Ym9hcmRBY3Rpb24uUklHSFQgfHwga2V5ID09IEFycm93QWN0aW9uLlJJR0hUKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW92ZSh0aGlzLnBsYXllciwgdGhpcy5zdGVwcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IERlc2t0b3BHYW1lcGFkO1xyXG4iLCJpbXBvcnQgQmFzZUdhbWVwYWQgZnJvbSBcIi4uL0Jhc2VHYW1lcGFkXCI7XHJcbmltcG9ydCB7IEdhbWVwYWRMaXN0ZW5lciB9IGZyb20gXCIuLi8uLi8uLi9lbnVtcy9HYW1lcGFkQWN0aW9uc1wiO1xyXG5jbGFzcyBNb2JpbGVHYW1lcGFkIGV4dGVuZHMgQmFzZUdhbWVwYWQge1xyXG4gICAgY29uc3RydWN0b3IocGxheWVyKSB7XHJcbiAgICAgICAgc3VwZXIoR2FtZXBhZExpc3RlbmVyLlRPVUNIKTtcclxuICAgICAgICB0aGlzLnBsYXllciA9IHBsYXllcjtcclxuICAgICAgICB0aGlzLnN0ZXBzID0gTWF0aC5mbG9vcihwbGF5ZXIuY29udGV4dC53aWR0aCAvIDE1KTtcclxuICAgIH1cclxuICAgIHByb2Nlc3NDb21tYW5kKHByZXNzZWQpIHtcclxuICAgICAgICBsZXQgc2NyZWVuV2lkdGggPSB0aGlzLnBsYXllci5jb250ZXh0LmNsaWVudFdpZHRoO1xyXG4gICAgICAgIGlmIChwcmVzc2VkLmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFggPiBzY3JlZW5XaWR0aCAvIDIpIHtcclxuICAgICAgICAgICAgdGhpcy5tb3ZlKHRoaXMucGxheWVyLCB0aGlzLnN0ZXBzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubW92ZSh0aGlzLnBsYXllciwgLXRoaXMuc3RlcHMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBNb2JpbGVHYW1lcGFkO1xyXG4iLCJjbGFzcyBPYnNlcnZhYmxlIHtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBPYnNlcnZhYmxlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9