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

/***/ "./app/lib/factories/BallFactory.ts":
/*!******************************************!*\
  !*** ./app/lib/factories/BallFactory.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _model_Ball__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/Ball */ "./app/lib/model/Ball.ts");

class BallFactory {
    constructor(width, context) {
        this.width = width;
        this.height = width;
        this.context = context;
    }
    create() {
        return new _model_Ball__WEBPACK_IMPORTED_MODULE_0__["default"](this.width, this.height, this.context);
    }
}
/* harmony default export */ __webpack_exports__["default"] = (BallFactory);


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
        this.blocksPerColumn = 30;
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

new _model_Gameboard__WEBPACK_IMPORTED_MODULE_0__["default"](document.querySelector("#gameboard"));


/***/ }),

/***/ "./app/lib/model/Ball.ts":
/*!*******************************!*\
  !*** ./app/lib/model/Ball.ts ***!
  \*******************************/
/*! exports provided: default, BallActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BallActions", function() { return BallActions; });
/* harmony import */ var _abstract_Solid2D__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract/Solid2D */ "./app/lib/model/abstract/Solid2D.ts");
/* harmony import */ var _commands_MoveCommand__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../commands/MoveCommand */ "./app/lib/commands/MoveCommand.ts");
/* harmony import */ var _utils_SpriteLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/SpriteLoader */ "./app/lib/utils/SpriteLoader.ts");



class Ball extends _abstract_Solid2D__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(width, height, context) {
        let initialX = (context.width - width) / 2;
        let staticY = context.height - height;
        let image = new Image();
        super(initialX, staticY, width, height, context);
        image.src = _utils_SpriteLoader__WEBPACK_IMPORTED_MODULE_2__["default"].load("ball.png");
        this.sprite = image;
        this.x = 0;
        this.directionX = 1;
        this.directionY = 1;
        this.gravity = 0.5;
        this.gravitySpeed = 0;
        this.move();
    }
    paint() {
        let context = this.context.getContext("2d");
        context.drawImage(this.sprite, this.x, this.y, this.width, this.height);
    }
    start() {
        this.timer = setInterval(() => this.move(), 12);
    }
    move() {
        let command = new _commands_MoveCommand__WEBPACK_IMPORTED_MODULE_1__["default"](this.x + 10 * this.directionX, this.y + 10 * this.gravitySpeed, this);
        let result = command.execute();
        this.x = result[0];
        this.y = result[1];
        if (this.x + this.width >= this.context.width) {
            this.directionX = -1;
        }
        else if (this.x == 0) {
            this.directionX = 1;
        }
        if (this.y + this.height >= this.context.height) {
            this.gravitySpeed -= this.gravity;
            this.destroy();
        }
        else if (this.y == 0) {
            this.gravitySpeed += this.gravity + Math.random();
        }
        this.notify({ action: BallActions.MOVE });
    }
    destroy() {
        this.notify({ action: BallActions.DESTROY });
        clearInterval(this.timer);
        this.observers.forEach(observer => this.detach(observer));
    }
}
/* harmony default export */ __webpack_exports__["default"] = (Ball);
var BallActions;
(function (BallActions) {
    BallActions[BallActions["MOVE"] = 0] = "MOVE";
    BallActions[BallActions["DESTROY"] = 1] = "DESTROY";
})(BallActions || (BallActions = {}));


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
/* harmony import */ var _Ball__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Ball */ "./app/lib/model/Ball.ts");
/* harmony import */ var _utils_SpriteLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/SpriteLoader */ "./app/lib/utils/SpriteLoader.ts");



class Brick extends _abstract_Solid2D__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(x, y, length, context, weight) {
        super(x, y, length, length, context);
        this.weight = weight;
        this.setSprite(weight);
    }
    setSprite(weight) {
        let image = new Image();
        switch (weight) {
            case BrickWeight.LOW:
                image.src = _utils_SpriteLoader__WEBPACK_IMPORTED_MODULE_2__["default"].load(BrickSprite.LOW);
                break;
            case BrickWeight.MEDIUM:
                image.src = _utils_SpriteLoader__WEBPACK_IMPORTED_MODULE_2__["default"].load(BrickSprite.MEDIUM);
                break;
            case BrickWeight.HIGH:
                image.src = _utils_SpriteLoader__WEBPACK_IMPORTED_MODULE_2__["default"].load(BrickSprite.HIGH);
                break;
            case BrickWeight.HUGE:
                image.src = _utils_SpriteLoader__WEBPACK_IMPORTED_MODULE_2__["default"].load(BrickSprite.HUGE);
                break;
        }
        this.sprite = image;
    }
    update(observable, args) {
        if (observable instanceof _Ball__WEBPACK_IMPORTED_MODULE_1__["default"]) {
            if (args.action == _Ball__WEBPACK_IMPORTED_MODULE_1__["BallActions"].MOVE) {
                if (this.isColliding(observable)) {
                    this.destroy();
                }
            }
        }
    }
    paint() {
        let context = this.context.getContext("2d");
        context.drawImage(this.sprite, this.x, this.y, this.width, this.height);
    }
    destroy() {
        this.notify({ action: BrickActions.DESTROY });
        super.destroy();
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
/* harmony import */ var _factories_BallFactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../factories/BallFactory */ "./app/lib/factories/BallFactory.ts");
/* harmony import */ var _Block__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Block */ "./app/lib/model/Block.ts");
/* harmony import */ var _Ball__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Ball */ "./app/lib/model/Ball.ts");






class Gameboard {
    constructor(canvas) {
        this.canvas = canvas;
        this.prepareScene();
        this.attached = [];
        this.player = new _factories_PlayerFactory__WEBPACK_IMPORTED_MODULE_1__["default"](300, 50, this.canvas).create();
        this.gamepad = new _factories_GamepadFactory__WEBPACK_IMPORTED_MODULE_0__["default"](this.player).create();
        this.ball = new _factories_BallFactory__WEBPACK_IMPORTED_MODULE_3__["default"](30, this.canvas).create();
        let blocks = new _factories_BlockFactory__WEBPACK_IMPORTED_MODULE_2__["default"](4, this.canvas).create();
        blocks.forEach((block) => {
            this.attachToContext(block);
            this.ball.attach(block);
        });
        this.attachToContext(this.player);
        this.attachToContext(this.ball);
        this.ball.attach(this.player);
        this.ball.attach(this);
        this.ball.start();
    }
    prepareScene() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.canvas.style.background = "#191919";
    }
    attachToContext(paintable) {
        this.attached.push(paintable);
        paintable.attach(this);
        paintable.paint();
    }
    detachOfContext(paintable) {
        let index = this.attached.indexOf(paintable);
        if (index > -1) {
            this.attached.splice(index, 1);
        }
    }
    update(state, args) {
        if (state instanceof _Block__WEBPACK_IMPORTED_MODULE_4__["default"]) {
            if (args.action == _Block__WEBPACK_IMPORTED_MODULE_4__["BrickActions"].DESTROY) {
                this.detachOfContext(state);
            }
        }
        else if (state instanceof _Ball__WEBPACK_IMPORTED_MODULE_5__["default"]) {
            switch (args.action) {
                case _Ball__WEBPACK_IMPORTED_MODULE_5__["BallActions"].MOVE:
                    break;
                case _Ball__WEBPACK_IMPORTED_MODULE_5__["BallActions"].DESTROY:
                    this.detachOfContext(state);
                    break;
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
/* harmony import */ var _utils_SpriteLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/SpriteLoader */ "./app/lib/utils/SpriteLoader.ts");
/* harmony import */ var _Ball__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Ball */ "./app/lib/model/Ball.ts");




class Player extends _abstract_Solid2D__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(width, height, context) {
        let initialX = (context.width - width) / 2;
        let staticY = context.height - height;
        let image = new Image;
        super(initialX, staticY, width, height, context);
        this.move(0);
        image.src = _utils_SpriteLoader__WEBPACK_IMPORTED_MODULE_2__["default"].load("player.png");
        this.sprite = image;
    }
    update(observable, args) {
        if (observable instanceof _Ball__WEBPACK_IMPORTED_MODULE_3__["default"]) {
            if (args.action == _Ball__WEBPACK_IMPORTED_MODULE_3__["BallActions"].MOVE) {
                if (this.isColliding(observable)) {
                    console.log("Tocou");
                    this.destroy();
                }
            }
        }
    }
    paint() {
        let context = this.context.getContext("2d");
        context.drawImage(this.sprite, this.x, this.y, this.width, this.height);
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
        this.observers = [];
    }
    attach(observer) {
        this.observers.push(observer);
    }
    detach(observer) {
        let index = this.observers.indexOf(observer);
        if (index > -1) {
            this.observers.splice(index, 1);
        }
    }
    notify(args) {
        this.observers.forEach((observer) => observer.update(this, args));
    }
    isColliding(solid) {
        let s1 = this;
        let s2 = solid;
        if (s1.x < s2.x + s2.width &&
            s1.x + s1.width > s2.x &&
            s1.y < s2.y + s2.height &&
            s1.y + s1.height > s2.y) {
            return true;
        }
        return false;
    }
    getX() {
        return this.x;
    }
    getY() {
        return this.y;
    }
    paint() { }
    destroy() {
        this.observers.forEach(observer => this.detach(observer));
    }
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


/***/ }),

/***/ "./app/lib/utils/SpriteLoader.ts":
/*!***************************************!*\
  !*** ./app/lib/utils/SpriteLoader.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SpriteLoader; });
class SpriteLoader {
    static load(filename) {
        let spriteDir = "./dist/sprites/";
        return `${spriteDir}${filename}`;
    }
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBwL2xpYi9jb21tYW5kcy9Nb3ZlQ29tbWFuZC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvbGliL2VudW1zL0dhbWVwYWRBY3Rpb25zLnRzIiwid2VicGFjazovLy8uL2FwcC9saWIvZmFjdG9yaWVzL0JhbGxGYWN0b3J5LnRzIiwid2VicGFjazovLy8uL2FwcC9saWIvZmFjdG9yaWVzL0Jsb2NrRmFjdG9yeS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvbGliL2ZhY3Rvcmllcy9HYW1lcGFkRmFjdG9yeS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvbGliL2ZhY3Rvcmllcy9QbGF5ZXJGYWN0b3J5LnRzIiwid2VicGFjazovLy8uL2FwcC9saWIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2xpYi9tb2RlbC9CYWxsLnRzIiwid2VicGFjazovLy8uL2FwcC9saWIvbW9kZWwvQmxvY2sudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2xpYi9tb2RlbC9HYW1lYm9hcmQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2xpYi9tb2RlbC9QbGF5ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2xpYi9tb2RlbC9hYnN0cmFjdC9CYXNlR2FtZXBhZC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvbGliL21vZGVsL2Fic3RyYWN0L1NvbGlkMkQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2xpYi9tb2RlbC9hYnN0cmFjdC9pbXBsL0Rlc2t0b3BHYW1lcGFkLnRzIiwid2VicGFjazovLy8uL2FwcC9saWIvbW9kZWwvYWJzdHJhY3QvaW1wbC9Nb2JpbGVHYW1lcGFkLnRzIiwid2VicGFjazovLy8uL2FwcC9saWIvbW9kZWwvaW50ZXJmYWNlcy9PYnNlcnZhYmxlLnRzIiwid2VicGFjazovLy8uL2FwcC9saWIvdXRpbHMvU3ByaXRlTG9hZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNlLHNFQUFPLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUM3Q3ZCO0FBQUE7QUFBQTtBQUF5QztBQUNvRDtBQUM3Riw2QkFBNkIsb0RBQVc7QUFDeEM7QUFDQSxjQUFjLHFFQUFlO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsb0VBQWMsZ0JBQWdCLGlFQUFXO0FBQzVEO0FBQ0E7QUFDQSx3QkFBd0Isb0VBQWMsaUJBQWlCLGlFQUFXO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ2UsNkVBQWMsRUFBQzs7Ozs7Ozs7Ozs7OztBQ3JCOUI7QUFBQTtBQUFBO0FBQXlDO0FBQ3VCO0FBQ2hFLDRCQUE0QixvREFBVztBQUN2QztBQUNBLGNBQWMscUVBQWU7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZSw0RUFBYSxFQUFDOzs7Ozs7Ozs7Ozs7O0FDbEI3QjtBQUFBO0FBQ0E7QUFDZSx5RUFBVSxFQUFDOzs7Ozs7Ozs7Ozs7O0FDRjFCO0FBQUE7QUFBZTtBQUNmO0FBQ0E7QUFDQSxrQkFBa0IsVUFBVSxFQUFFLFNBQVM7QUFDdkM7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2FwcC9saWIvaW5kZXgudHNcIik7XG4iLCJjbGFzcyBNb3ZlQ29tbWFuZCB7XHJcbiAgICBjb25zdHJ1Y3RvcihuZXdYLCBuZXdZLCBtb3ZlYWJsZSkge1xyXG4gICAgICAgIHRoaXMueCA9IG5ld1g7XHJcbiAgICAgICAgdGhpcy55ID0gbmV3WTtcclxuICAgICAgICB0aGlzLm1vdmVhYmxlID0gbW92ZWFibGU7XHJcbiAgICB9XHJcbiAgICBleGVjdXRlKCkge1xyXG4gICAgICAgIGxldCBuZXh0UG9zaXRpb25YID0gdGhpcy54ICsgdGhpcy5tb3ZlYWJsZS53aWR0aDtcclxuICAgICAgICBsZXQgbmV4dFBvc2l0aW9uWSA9IHRoaXMueSArIHRoaXMubW92ZWFibGUuaGVpZ2h0O1xyXG4gICAgICAgIGlmICh0aGlzLnggPCAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMueCA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKG5leHRQb3NpdGlvblggPiB0aGlzLm1vdmVhYmxlLmNvbnRleHQud2lkdGgpIHtcclxuICAgICAgICAgICAgdGhpcy54ID0gTWF0aC5hYnModGhpcy5tb3ZlYWJsZS5jb250ZXh0LndpZHRoIC0gdGhpcy5tb3ZlYWJsZS53aWR0aCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnkgPCAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMueSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKG5leHRQb3NpdGlvblkgPiB0aGlzLm1vdmVhYmxlLmNvbnRleHQuaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIHRoaXMueSA9IE1hdGguYWJzKHRoaXMubW92ZWFibGUuY29udGV4dC5oZWlnaHQgLSB0aGlzLm1vdmVhYmxlLmhlaWdodCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBbdGhpcy54LCB0aGlzLnldO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IE1vdmVDb21tYW5kO1xyXG4iLCJleHBvcnQgdmFyIEtleWJvYXJkQWN0aW9uO1xyXG4oZnVuY3Rpb24gKEtleWJvYXJkQWN0aW9uKSB7XHJcbiAgICBLZXlib2FyZEFjdGlvbltcIkxFRlRcIl0gPSBcIktleUFcIjtcclxuICAgIEtleWJvYXJkQWN0aW9uW1wiUklHSFRcIl0gPSBcIktleURcIjtcclxufSkoS2V5Ym9hcmRBY3Rpb24gfHwgKEtleWJvYXJkQWN0aW9uID0ge30pKTtcclxuZXhwb3J0IHZhciBBcnJvd0FjdGlvbjtcclxuKGZ1bmN0aW9uIChBcnJvd0FjdGlvbikge1xyXG4gICAgQXJyb3dBY3Rpb25bXCJMRUZUXCJdID0gXCJBcnJvd0xlZnRcIjtcclxuICAgIEFycm93QWN0aW9uW1wiUklHSFRcIl0gPSBcIkFycm93UmlnaHRcIjtcclxufSkoQXJyb3dBY3Rpb24gfHwgKEFycm93QWN0aW9uID0ge30pKTtcclxuZXhwb3J0IHZhciBHYW1lcGFkTGlzdGVuZXI7XHJcbihmdW5jdGlvbiAoR2FtZXBhZExpc3RlbmVyKSB7XHJcbiAgICBHYW1lcGFkTGlzdGVuZXJbXCJUT1VDSFwiXSA9IFwib250b3VjaHN0YXJ0XCI7XHJcbiAgICBHYW1lcGFkTGlzdGVuZXJbXCJLRVlCT0FSRFwiXSA9IFwib25rZXlkb3duXCI7XHJcbn0pKEdhbWVwYWRMaXN0ZW5lciB8fCAoR2FtZXBhZExpc3RlbmVyID0ge30pKTtcclxuIiwiaW1wb3J0IEJhbGwgZnJvbSBcIi4uL21vZGVsL0JhbGxcIjtcclxuY2xhc3MgQmFsbEZhY3Rvcnkge1xyXG4gICAgY29uc3RydWN0b3Iod2lkdGgsIGNvbnRleHQpIHtcclxuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSB3aWR0aDtcclxuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xyXG4gICAgfVxyXG4gICAgY3JlYXRlKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgQmFsbCh0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgdGhpcy5jb250ZXh0KTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBCYWxsRmFjdG9yeTtcclxuIiwiaW1wb3J0IEJsb2NrLCB7IEJyaWNrV2VpZ2h0IH0gZnJvbSBcIi4uL21vZGVsL0Jsb2NrXCI7XHJcbmNsYXNzIEJsb2NrRmFjdG9yeSB7XHJcbiAgICBjb25zdHJ1Y3RvcihsaW5lcywgY29udGV4dCkge1xyXG4gICAgICAgIHRoaXMubGluZXMgPSBsaW5lcztcclxuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xyXG4gICAgICAgIHRoaXMuYmxvY2tzUGVyQ29sdW1uID0gMzA7XHJcbiAgICB9XHJcbiAgICBjcmVhdGUoKSB7XHJcbiAgICAgICAgbGV0IGJsb2NrcyA9IFtdO1xyXG4gICAgICAgIGxldCBuZXh0UG9zaXRpb24gPSB7IHg6IDAsIHk6IDAgfTtcclxuICAgICAgICBsZXQgbGVuZ3RoID0gdGhpcy5jb250ZXh0LndpZHRoIC8gdGhpcy5ibG9ja3NQZXJDb2x1bW47XHJcbiAgICAgICAgZm9yIChsZXQgbGluZSA9IDA7IGxpbmUgPCB0aGlzLmxpbmVzOyBsaW5lKyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgY29sdW1uID0gMDsgY29sdW1uIDwgdGhpcy5ibG9ja3NQZXJDb2x1bW47IGNvbHVtbisrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYmxvY2tXZWlnaHQgPSB0aGlzLmdldEJsb2NrV2VpZ2h0KGxpbmUpO1xyXG4gICAgICAgICAgICAgICAgYmxvY2tzLnB1c2gobmV3IEJsb2NrKG5leHRQb3NpdGlvbi54LCBuZXh0UG9zaXRpb24ueSwgbGVuZ3RoLCB0aGlzLmNvbnRleHQsIGJsb2NrV2VpZ2h0KSk7XHJcbiAgICAgICAgICAgICAgICBuZXh0UG9zaXRpb24ueCArPSBsZW5ndGg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbmV4dFBvc2l0aW9uLnggPSAwO1xyXG4gICAgICAgICAgICBuZXh0UG9zaXRpb24ueSArPSBsZW5ndGg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBibG9ja3M7XHJcbiAgICB9XHJcbiAgICBnZXRCbG9ja1dlaWdodChsaW5lKSB7XHJcbiAgICAgICAgc3dpdGNoIChsaW5lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBCcmlja1dlaWdodC5IVUdFO1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gQnJpY2tXZWlnaHQuSElHSDtcclxuICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEJyaWNrV2VpZ2h0Lk1FRElVTTtcclxuICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEJyaWNrV2VpZ2h0LkxPVztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBCcmlja1dlaWdodC5MT1c7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEJsb2NrRmFjdG9yeTtcclxuIiwiaW1wb3J0IERlc2t0b3BHYW1lcGFkIGZyb20gXCIuLi9tb2RlbC9hYnN0cmFjdC9pbXBsL0Rlc2t0b3BHYW1lcGFkXCI7XHJcbmltcG9ydCBNb2JpbGVHYW1lcGFkIGZyb20gXCIuLi9tb2RlbC9hYnN0cmFjdC9pbXBsL01vYmlsZUdhbWVwYWRcIjtcclxuY2xhc3MgR2FtZXBhZEZhY3Rvcnkge1xyXG4gICAgY29uc3RydWN0b3IocGxheWVyKSB7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBwbGF5ZXI7XHJcbiAgICB9XHJcbiAgICBjcmVhdGUoKSB7XHJcbiAgICAgICAgaWYgKCgnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3cpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgTW9iaWxlR2FtZXBhZCh0aGlzLnBsYXllcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IERlc2t0b3BHYW1lcGFkKHRoaXMucGxheWVyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgR2FtZXBhZEZhY3Rvcnk7XHJcbiIsImltcG9ydCBQbGF5ZXIgZnJvbSBcIi4uL21vZGVsL1BsYXllclwiO1xyXG5jbGFzcyBQbGF5ZXJGYWN0b3J5IHtcclxuICAgIGNvbnN0cnVjdG9yKHdpZHRoLCBoZWlnaHQsIGNvbnRleHQpIHtcclxuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcclxuICAgICAgICB0aGlzLnJlY29yZCA9IHRoaXMubG9hZFJlY29yZCgpO1xyXG4gICAgfVxyXG4gICAgY3JlYXRlKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUGxheWVyKHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCB0aGlzLmNvbnRleHQpO1xyXG4gICAgfVxyXG4gICAgbG9hZFJlY29yZCgpIHtcclxuICAgICAgICByZXR1cm4gcGFyc2VJbnQobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJyZWNvcmRcIikpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFBsYXllckZhY3Rvcnk7XHJcbiIsImltcG9ydCBHYW1lYm9hcmQgZnJvbSBcIi4vbW9kZWwvR2FtZWJvYXJkXCI7XHJcbm5ldyBHYW1lYm9hcmQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNnYW1lYm9hcmRcIikpO1xyXG4iLCJpbXBvcnQgU29saWQyRCBmcm9tIFwiLi9hYnN0cmFjdC9Tb2xpZDJEXCI7XHJcbmltcG9ydCBNb3ZlQ29tbWFuZCBmcm9tIFwiLi4vY29tbWFuZHMvTW92ZUNvbW1hbmRcIjtcclxuaW1wb3J0IFNwcml0ZUxvYWRlciBmcm9tIFwiLi4vdXRpbHMvU3ByaXRlTG9hZGVyXCI7XHJcbmNsYXNzIEJhbGwgZXh0ZW5kcyBTb2xpZDJEIHtcclxuICAgIGNvbnN0cnVjdG9yKHdpZHRoLCBoZWlnaHQsIGNvbnRleHQpIHtcclxuICAgICAgICBsZXQgaW5pdGlhbFggPSAoY29udGV4dC53aWR0aCAtIHdpZHRoKSAvIDI7XHJcbiAgICAgICAgbGV0IHN0YXRpY1kgPSBjb250ZXh0LmhlaWdodCAtIGhlaWdodDtcclxuICAgICAgICBsZXQgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICBzdXBlcihpbml0aWFsWCwgc3RhdGljWSwgd2lkdGgsIGhlaWdodCwgY29udGV4dCk7XHJcbiAgICAgICAgaW1hZ2Uuc3JjID0gU3ByaXRlTG9hZGVyLmxvYWQoXCJiYWxsLnBuZ1wiKTtcclxuICAgICAgICB0aGlzLnNwcml0ZSA9IGltYWdlO1xyXG4gICAgICAgIHRoaXMueCA9IDA7XHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb25YID0gMTtcclxuICAgICAgICB0aGlzLmRpcmVjdGlvblkgPSAxO1xyXG4gICAgICAgIHRoaXMuZ3Jhdml0eSA9IDAuNTtcclxuICAgICAgICB0aGlzLmdyYXZpdHlTcGVlZCA9IDA7XHJcbiAgICAgICAgdGhpcy5tb3ZlKCk7XHJcbiAgICB9XHJcbiAgICBwYWludCgpIHtcclxuICAgICAgICBsZXQgY29udGV4dCA9IHRoaXMuY29udGV4dC5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UodGhpcy5zcHJpdGUsIHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcbiAgICB9XHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLnRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4gdGhpcy5tb3ZlKCksIDEyKTtcclxuICAgIH1cclxuICAgIG1vdmUoKSB7XHJcbiAgICAgICAgbGV0IGNvbW1hbmQgPSBuZXcgTW92ZUNvbW1hbmQodGhpcy54ICsgMTAgKiB0aGlzLmRpcmVjdGlvblgsIHRoaXMueSArIDEwICogdGhpcy5ncmF2aXR5U3BlZWQsIHRoaXMpO1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBjb21tYW5kLmV4ZWN1dGUoKTtcclxuICAgICAgICB0aGlzLnggPSByZXN1bHRbMF07XHJcbiAgICAgICAgdGhpcy55ID0gcmVzdWx0WzFdO1xyXG4gICAgICAgIGlmICh0aGlzLnggKyB0aGlzLndpZHRoID49IHRoaXMuY29udGV4dC53aWR0aCkge1xyXG4gICAgICAgICAgICB0aGlzLmRpcmVjdGlvblggPSAtMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy54ID09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb25YID0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMueSArIHRoaXMuaGVpZ2h0ID49IHRoaXMuY29udGV4dC5oZWlnaHQpIHtcclxuICAgICAgICAgICAgdGhpcy5ncmF2aXR5U3BlZWQgLT0gdGhpcy5ncmF2aXR5O1xyXG4gICAgICAgICAgICB0aGlzLmRlc3Ryb3koKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy55ID09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5ncmF2aXR5U3BlZWQgKz0gdGhpcy5ncmF2aXR5ICsgTWF0aC5yYW5kb20oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5ub3RpZnkoeyBhY3Rpb246IEJhbGxBY3Rpb25zLk1PVkUgfSk7XHJcbiAgICB9XHJcbiAgICBkZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMubm90aWZ5KHsgYWN0aW9uOiBCYWxsQWN0aW9ucy5ERVNUUk9ZIH0pO1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcik7XHJcbiAgICAgICAgdGhpcy5vYnNlcnZlcnMuZm9yRWFjaChvYnNlcnZlciA9PiB0aGlzLmRldGFjaChvYnNlcnZlcikpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEJhbGw7XHJcbmV4cG9ydCB2YXIgQmFsbEFjdGlvbnM7XHJcbihmdW5jdGlvbiAoQmFsbEFjdGlvbnMpIHtcclxuICAgIEJhbGxBY3Rpb25zW0JhbGxBY3Rpb25zW1wiTU9WRVwiXSA9IDBdID0gXCJNT1ZFXCI7XHJcbiAgICBCYWxsQWN0aW9uc1tCYWxsQWN0aW9uc1tcIkRFU1RST1lcIl0gPSAxXSA9IFwiREVTVFJPWVwiO1xyXG59KShCYWxsQWN0aW9ucyB8fCAoQmFsbEFjdGlvbnMgPSB7fSkpO1xyXG4iLCJpbXBvcnQgU29saWQyRCBmcm9tIFwiLi9hYnN0cmFjdC9Tb2xpZDJEXCI7XHJcbmltcG9ydCBCYWxsLCB7IEJhbGxBY3Rpb25zIH0gZnJvbSBcIi4vQmFsbFwiO1xyXG5pbXBvcnQgU3ByaXRlTG9hZGVyIGZyb20gXCIuLi91dGlscy9TcHJpdGVMb2FkZXJcIjtcclxuY2xhc3MgQnJpY2sgZXh0ZW5kcyBTb2xpZDJEIHtcclxuICAgIGNvbnN0cnVjdG9yKHgsIHksIGxlbmd0aCwgY29udGV4dCwgd2VpZ2h0KSB7XHJcbiAgICAgICAgc3VwZXIoeCwgeSwgbGVuZ3RoLCBsZW5ndGgsIGNvbnRleHQpO1xyXG4gICAgICAgIHRoaXMud2VpZ2h0ID0gd2VpZ2h0O1xyXG4gICAgICAgIHRoaXMuc2V0U3ByaXRlKHdlaWdodCk7XHJcbiAgICB9XHJcbiAgICBzZXRTcHJpdGUod2VpZ2h0KSB7XHJcbiAgICAgICAgbGV0IGltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgc3dpdGNoICh3ZWlnaHQpIHtcclxuICAgICAgICAgICAgY2FzZSBCcmlja1dlaWdodC5MT1c6XHJcbiAgICAgICAgICAgICAgICBpbWFnZS5zcmMgPSBTcHJpdGVMb2FkZXIubG9hZChCcmlja1Nwcml0ZS5MT1cpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQnJpY2tXZWlnaHQuTUVESVVNOlxyXG4gICAgICAgICAgICAgICAgaW1hZ2Uuc3JjID0gU3ByaXRlTG9hZGVyLmxvYWQoQnJpY2tTcHJpdGUuTUVESVVNKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEJyaWNrV2VpZ2h0LkhJR0g6XHJcbiAgICAgICAgICAgICAgICBpbWFnZS5zcmMgPSBTcHJpdGVMb2FkZXIubG9hZChCcmlja1Nwcml0ZS5ISUdIKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEJyaWNrV2VpZ2h0LkhVR0U6XHJcbiAgICAgICAgICAgICAgICBpbWFnZS5zcmMgPSBTcHJpdGVMb2FkZXIubG9hZChCcmlja1Nwcml0ZS5IVUdFKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNwcml0ZSA9IGltYWdlO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlKG9ic2VydmFibGUsIGFyZ3MpIHtcclxuICAgICAgICBpZiAob2JzZXJ2YWJsZSBpbnN0YW5jZW9mIEJhbGwpIHtcclxuICAgICAgICAgICAgaWYgKGFyZ3MuYWN0aW9uID09IEJhbGxBY3Rpb25zLk1PVkUpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzQ29sbGlkaW5nKG9ic2VydmFibGUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwYWludCgpIHtcclxuICAgICAgICBsZXQgY29udGV4dCA9IHRoaXMuY29udGV4dC5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UodGhpcy5zcHJpdGUsIHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcbiAgICB9XHJcbiAgICBkZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMubm90aWZ5KHsgYWN0aW9uOiBCcmlja0FjdGlvbnMuREVTVFJPWSB9KTtcclxuICAgICAgICBzdXBlci5kZXN0cm95KCk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQnJpY2s7XHJcbmV4cG9ydCB2YXIgQnJpY2tBY3Rpb25zO1xyXG4oZnVuY3Rpb24gKEJyaWNrQWN0aW9ucykge1xyXG4gICAgQnJpY2tBY3Rpb25zW0JyaWNrQWN0aW9uc1tcIkRFU1RST1lcIl0gPSAwXSA9IFwiREVTVFJPWVwiO1xyXG59KShCcmlja0FjdGlvbnMgfHwgKEJyaWNrQWN0aW9ucyA9IHt9KSk7XHJcbmV4cG9ydCB2YXIgQnJpY2tXZWlnaHQ7XHJcbihmdW5jdGlvbiAoQnJpY2tXZWlnaHQpIHtcclxuICAgIEJyaWNrV2VpZ2h0W0JyaWNrV2VpZ2h0W1wiTE9XXCJdID0gMTBdID0gXCJMT1dcIjtcclxuICAgIEJyaWNrV2VpZ2h0W0JyaWNrV2VpZ2h0W1wiTUVESVVNXCJdID0gMjBdID0gXCJNRURJVU1cIjtcclxuICAgIEJyaWNrV2VpZ2h0W0JyaWNrV2VpZ2h0W1wiSElHSFwiXSA9IDMwXSA9IFwiSElHSFwiO1xyXG4gICAgQnJpY2tXZWlnaHRbQnJpY2tXZWlnaHRbXCJIVUdFXCJdID0gNTBdID0gXCJIVUdFXCI7XHJcbn0pKEJyaWNrV2VpZ2h0IHx8IChCcmlja1dlaWdodCA9IHt9KSk7XHJcbnZhciBCcmlja1Nwcml0ZTtcclxuKGZ1bmN0aW9uIChCcmlja1Nwcml0ZSkge1xyXG4gICAgQnJpY2tTcHJpdGVbXCJMT1dcIl0gPSBcIjEucG5nXCI7XHJcbiAgICBCcmlja1Nwcml0ZVtcIk1FRElVTVwiXSA9IFwiMi5wbmdcIjtcclxuICAgIEJyaWNrU3ByaXRlW1wiSElHSFwiXSA9IFwiMy5wbmdcIjtcclxuICAgIEJyaWNrU3ByaXRlW1wiSFVHRVwiXSA9IFwiNC5wbmdcIjtcclxufSkoQnJpY2tTcHJpdGUgfHwgKEJyaWNrU3ByaXRlID0ge30pKTtcclxuIiwiaW1wb3J0IEdhbWVwYWRGYWN0b3J5IGZyb20gXCIuLi9mYWN0b3JpZXMvR2FtZXBhZEZhY3RvcnlcIjtcclxuaW1wb3J0IFBsYXllckZhY3RvcnkgZnJvbSBcIi4uL2ZhY3Rvcmllcy9QbGF5ZXJGYWN0b3J5XCI7XHJcbmltcG9ydCBCbG9ja0ZhY3RvcnkgZnJvbSBcIi4uL2ZhY3Rvcmllcy9CbG9ja0ZhY3RvcnlcIjtcclxuaW1wb3J0IEJhbGxGYWN0b3J5IGZyb20gXCIuLi9mYWN0b3JpZXMvQmFsbEZhY3RvcnlcIjtcclxuaW1wb3J0IEJsb2NrLCB7IEJyaWNrQWN0aW9ucyB9IGZyb20gXCIuL0Jsb2NrXCI7XHJcbmltcG9ydCBCYWxsLCB7IEJhbGxBY3Rpb25zIH0gZnJvbSBcIi4vQmFsbFwiO1xyXG5jbGFzcyBHYW1lYm9hcmQge1xyXG4gICAgY29uc3RydWN0b3IoY2FudmFzKSB7XHJcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XHJcbiAgICAgICAgdGhpcy5wcmVwYXJlU2NlbmUoKTtcclxuICAgICAgICB0aGlzLmF0dGFjaGVkID0gW107XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBuZXcgUGxheWVyRmFjdG9yeSgzMDAsIDUwLCB0aGlzLmNhbnZhcykuY3JlYXRlKCk7XHJcbiAgICAgICAgdGhpcy5nYW1lcGFkID0gbmV3IEdhbWVwYWRGYWN0b3J5KHRoaXMucGxheWVyKS5jcmVhdGUoKTtcclxuICAgICAgICB0aGlzLmJhbGwgPSBuZXcgQmFsbEZhY3RvcnkoMzAsIHRoaXMuY2FudmFzKS5jcmVhdGUoKTtcclxuICAgICAgICBsZXQgYmxvY2tzID0gbmV3IEJsb2NrRmFjdG9yeSg0LCB0aGlzLmNhbnZhcykuY3JlYXRlKCk7XHJcbiAgICAgICAgYmxvY2tzLmZvckVhY2goKGJsb2NrKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYXR0YWNoVG9Db250ZXh0KGJsb2NrKTtcclxuICAgICAgICAgICAgdGhpcy5iYWxsLmF0dGFjaChibG9jayk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5hdHRhY2hUb0NvbnRleHQodGhpcy5wbGF5ZXIpO1xyXG4gICAgICAgIHRoaXMuYXR0YWNoVG9Db250ZXh0KHRoaXMuYmFsbCk7XHJcbiAgICAgICAgdGhpcy5iYWxsLmF0dGFjaCh0aGlzLnBsYXllcik7XHJcbiAgICAgICAgdGhpcy5iYWxsLmF0dGFjaCh0aGlzKTtcclxuICAgICAgICB0aGlzLmJhbGwuc3RhcnQoKTtcclxuICAgIH1cclxuICAgIHByZXBhcmVTY2VuZSgpIHtcclxuICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kID0gXCIjMTkxOTE5XCI7XHJcbiAgICB9XHJcbiAgICBhdHRhY2hUb0NvbnRleHQocGFpbnRhYmxlKSB7XHJcbiAgICAgICAgdGhpcy5hdHRhY2hlZC5wdXNoKHBhaW50YWJsZSk7XHJcbiAgICAgICAgcGFpbnRhYmxlLmF0dGFjaCh0aGlzKTtcclxuICAgICAgICBwYWludGFibGUucGFpbnQoKTtcclxuICAgIH1cclxuICAgIGRldGFjaE9mQ29udGV4dChwYWludGFibGUpIHtcclxuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLmF0dGFjaGVkLmluZGV4T2YocGFpbnRhYmxlKTtcclxuICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xyXG4gICAgICAgICAgICB0aGlzLmF0dGFjaGVkLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdXBkYXRlKHN0YXRlLCBhcmdzKSB7XHJcbiAgICAgICAgaWYgKHN0YXRlIGluc3RhbmNlb2YgQmxvY2spIHtcclxuICAgICAgICAgICAgaWYgKGFyZ3MuYWN0aW9uID09IEJyaWNrQWN0aW9ucy5ERVNUUk9ZKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRldGFjaE9mQ29udGV4dChzdGF0ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoc3RhdGUgaW5zdGFuY2VvZiBCYWxsKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoYXJncy5hY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgQmFsbEFjdGlvbnMuTU9WRTpcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgQmFsbEFjdGlvbnMuREVTVFJPWTpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRldGFjaE9mQ29udGV4dChzdGF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5yZXBhaW50KCk7XHJcbiAgICB9XHJcbiAgICByZXBhaW50KCkge1xyXG4gICAgICAgIHRoaXMuY2FudmFzXHJcbiAgICAgICAgICAgIC5nZXRDb250ZXh0KFwiMmRcIilcclxuICAgICAgICAgICAgLmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcclxuICAgICAgICB0aGlzLmF0dGFjaGVkLmZvckVhY2goKGVsKSA9PiBlbC5wYWludCgpKTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBHYW1lYm9hcmQ7XHJcbiIsImltcG9ydCBTb2xpZDJEIGZyb20gXCIuL2Fic3RyYWN0L1NvbGlkMkRcIjtcclxuaW1wb3J0IE1vdmVDb21tYW5kIGZyb20gXCIuLi9jb21tYW5kcy9Nb3ZlQ29tbWFuZFwiO1xyXG5pbXBvcnQgU3ByaXRlTG9hZGVyIGZyb20gXCIuLi91dGlscy9TcHJpdGVMb2FkZXJcIjtcclxuaW1wb3J0IEJhbGwsIHsgQmFsbEFjdGlvbnMgfSBmcm9tIFwiLi9CYWxsXCI7XHJcbmNsYXNzIFBsYXllciBleHRlbmRzIFNvbGlkMkQge1xyXG4gICAgY29uc3RydWN0b3Iod2lkdGgsIGhlaWdodCwgY29udGV4dCkge1xyXG4gICAgICAgIGxldCBpbml0aWFsWCA9IChjb250ZXh0LndpZHRoIC0gd2lkdGgpIC8gMjtcclxuICAgICAgICBsZXQgc3RhdGljWSA9IGNvbnRleHQuaGVpZ2h0IC0gaGVpZ2h0O1xyXG4gICAgICAgIGxldCBpbWFnZSA9IG5ldyBJbWFnZTtcclxuICAgICAgICBzdXBlcihpbml0aWFsWCwgc3RhdGljWSwgd2lkdGgsIGhlaWdodCwgY29udGV4dCk7XHJcbiAgICAgICAgdGhpcy5tb3ZlKDApO1xyXG4gICAgICAgIGltYWdlLnNyYyA9IFNwcml0ZUxvYWRlci5sb2FkKFwicGxheWVyLnBuZ1wiKTtcclxuICAgICAgICB0aGlzLnNwcml0ZSA9IGltYWdlO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlKG9ic2VydmFibGUsIGFyZ3MpIHtcclxuICAgICAgICBpZiAob2JzZXJ2YWJsZSBpbnN0YW5jZW9mIEJhbGwpIHtcclxuICAgICAgICAgICAgaWYgKGFyZ3MuYWN0aW9uID09IEJhbGxBY3Rpb25zLk1PVkUpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzQ29sbGlkaW5nKG9ic2VydmFibGUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJUb2NvdVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHBhaW50KCkge1xyXG4gICAgICAgIGxldCBjb250ZXh0ID0gdGhpcy5jb250ZXh0LmdldENvbnRleHQoXCIyZFwiKTtcclxuICAgICAgICBjb250ZXh0LmRyYXdJbWFnZSh0aGlzLnNwcml0ZSwgdGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuICAgIH1cclxuICAgIG1vdmUoZHgpIHtcclxuICAgICAgICBsZXQgY29tbWFuZCA9IG5ldyBNb3ZlQ29tbWFuZCh0aGlzLnggKyBkeCwgdGhpcy55LCB0aGlzKTtcclxuICAgICAgICB0aGlzLnggPSBjb21tYW5kLmV4ZWN1dGUoKVswXTtcclxuICAgICAgICB0aGlzLm5vdGlmeSgpO1xyXG4gICAgfVxyXG4gICAgZGVzdHJveSgpIHsgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFBsYXllcjtcclxuIiwiY2xhc3MgQmFzZUdhbWVwYWQge1xyXG4gICAgY29uc3RydWN0b3IoZXZlbnQpIHtcclxuICAgICAgICBkb2N1bWVudFtldmVudF0gPSAocHJlc3NlZCkgPT4gdGhpcy5wcm9jZXNzQ29tbWFuZChwcmVzc2VkKTtcclxuICAgIH1cclxuICAgIG1vdmUocGxheWVyLCB4KSB7XHJcbiAgICAgICAgcGxheWVyLm1vdmUoeCk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQmFzZUdhbWVwYWQ7XHJcbiIsImltcG9ydCBPYnNlcnZhYmxlIGZyb20gXCIuLi9pbnRlcmZhY2VzL09ic2VydmFibGVcIjtcclxuY2xhc3MgU29saWQyRCBleHRlbmRzIE9ic2VydmFibGUge1xyXG4gICAgY29uc3RydWN0b3IoeCwgeSwgd2lkdGgsIGhlaWdodCwgY29udGV4dCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aCArIDAuNTtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodCArIDAuNTtcclxuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xyXG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzID0gW107XHJcbiAgICB9XHJcbiAgICBhdHRhY2gob2JzZXJ2ZXIpIHtcclxuICAgICAgICB0aGlzLm9ic2VydmVycy5wdXNoKG9ic2VydmVyKTtcclxuICAgIH1cclxuICAgIGRldGFjaChvYnNlcnZlcikge1xyXG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMub2JzZXJ2ZXJzLmluZGV4T2Yob2JzZXJ2ZXIpO1xyXG4gICAgICAgIGlmIChpbmRleCA+IC0xKSB7XHJcbiAgICAgICAgICAgIHRoaXMub2JzZXJ2ZXJzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbm90aWZ5KGFyZ3MpIHtcclxuICAgICAgICB0aGlzLm9ic2VydmVycy5mb3JFYWNoKChvYnNlcnZlcikgPT4gb2JzZXJ2ZXIudXBkYXRlKHRoaXMsIGFyZ3MpKTtcclxuICAgIH1cclxuICAgIGlzQ29sbGlkaW5nKHNvbGlkKSB7XHJcbiAgICAgICAgbGV0IHMxID0gdGhpcztcclxuICAgICAgICBsZXQgczIgPSBzb2xpZDtcclxuICAgICAgICBpZiAoczEueCA8IHMyLnggKyBzMi53aWR0aCAmJlxyXG4gICAgICAgICAgICBzMS54ICsgczEud2lkdGggPiBzMi54ICYmXHJcbiAgICAgICAgICAgIHMxLnkgPCBzMi55ICsgczIuaGVpZ2h0ICYmXHJcbiAgICAgICAgICAgIHMxLnkgKyBzMS5oZWlnaHQgPiBzMi55KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBnZXRYKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLng7XHJcbiAgICB9XHJcbiAgICBnZXRZKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnk7XHJcbiAgICB9XHJcbiAgICBwYWludCgpIHsgfVxyXG4gICAgZGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLm9ic2VydmVycy5mb3JFYWNoKG9ic2VydmVyID0+IHRoaXMuZGV0YWNoKG9ic2VydmVyKSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgU29saWQyRDtcclxuIiwiaW1wb3J0IEJhc2VHYW1lcGFkIGZyb20gXCIuLi9CYXNlR2FtZXBhZFwiO1xyXG5pbXBvcnQgeyBLZXlib2FyZEFjdGlvbiwgQXJyb3dBY3Rpb24sIEdhbWVwYWRMaXN0ZW5lciB9IGZyb20gXCIuLi8uLi8uLi9lbnVtcy9HYW1lcGFkQWN0aW9uc1wiO1xyXG5jbGFzcyBEZXNrdG9wR2FtZXBhZCBleHRlbmRzIEJhc2VHYW1lcGFkIHtcclxuICAgIGNvbnN0cnVjdG9yKHBsYXllcikge1xyXG4gICAgICAgIHN1cGVyKEdhbWVwYWRMaXN0ZW5lci5LRVlCT0FSRCk7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBwbGF5ZXI7XHJcbiAgICAgICAgdGhpcy5zdGVwcyA9IE1hdGguZmxvb3IocGxheWVyLmNvbnRleHQud2lkdGggLyAxNSk7XHJcbiAgICB9XHJcbiAgICBwcm9jZXNzQ29tbWFuZChwcmVzc2VkKSB7XHJcbiAgICAgICAgdGhpcy5kb0FjdGlvbihwcmVzc2VkKTtcclxuICAgIH1cclxuICAgIGRvQWN0aW9uKHByZXNzZWQpIHtcclxuICAgICAgICBsZXQga2V5ID0gcHJlc3NlZC5jb2RlO1xyXG4gICAgICAgIGlmIChrZXkgPT0gS2V5Ym9hcmRBY3Rpb24uTEVGVCB8fCBrZXkgPT0gQXJyb3dBY3Rpb24uTEVGVCkge1xyXG4gICAgICAgICAgICB0aGlzLm1vdmUodGhpcy5wbGF5ZXIsIC10aGlzLnN0ZXBzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoa2V5ID09IEtleWJvYXJkQWN0aW9uLlJJR0hUIHx8IGtleSA9PSBBcnJvd0FjdGlvbi5SSUdIVCkge1xyXG4gICAgICAgICAgICB0aGlzLm1vdmUodGhpcy5wbGF5ZXIsIHRoaXMuc3RlcHMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBEZXNrdG9wR2FtZXBhZDtcclxuIiwiaW1wb3J0IEJhc2VHYW1lcGFkIGZyb20gXCIuLi9CYXNlR2FtZXBhZFwiO1xyXG5pbXBvcnQgeyBHYW1lcGFkTGlzdGVuZXIgfSBmcm9tIFwiLi4vLi4vLi4vZW51bXMvR2FtZXBhZEFjdGlvbnNcIjtcclxuY2xhc3MgTW9iaWxlR2FtZXBhZCBleHRlbmRzIEJhc2VHYW1lcGFkIHtcclxuICAgIGNvbnN0cnVjdG9yKHBsYXllcikge1xyXG4gICAgICAgIHN1cGVyKEdhbWVwYWRMaXN0ZW5lci5UT1VDSCk7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBwbGF5ZXI7XHJcbiAgICAgICAgdGhpcy5zdGVwcyA9IE1hdGguZmxvb3IocGxheWVyLmNvbnRleHQud2lkdGggLyAxNSk7XHJcbiAgICB9XHJcbiAgICBwcm9jZXNzQ29tbWFuZChwcmVzc2VkKSB7XHJcbiAgICAgICAgbGV0IHNjcmVlbldpZHRoID0gdGhpcy5wbGF5ZXIuY29udGV4dC5jbGllbnRXaWR0aDtcclxuICAgICAgICBpZiAocHJlc3NlZC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYID4gc2NyZWVuV2lkdGggLyAyKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW92ZSh0aGlzLnBsYXllciwgdGhpcy5zdGVwcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm1vdmUodGhpcy5wbGF5ZXIsIC10aGlzLnN0ZXBzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTW9iaWxlR2FtZXBhZDtcclxuIiwiY2xhc3MgT2JzZXJ2YWJsZSB7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgT2JzZXJ2YWJsZTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3ByaXRlTG9hZGVyIHtcclxuICAgIHN0YXRpYyBsb2FkKGZpbGVuYW1lKSB7XHJcbiAgICAgICAgbGV0IHNwcml0ZURpciA9IFwiLi9kaXN0L3Nwcml0ZXMvXCI7XHJcbiAgICAgICAgcmV0dXJuIGAke3Nwcml0ZURpcn0ke2ZpbGVuYW1lfWA7XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==