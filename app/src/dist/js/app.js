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

/***/ "./app/lib/enums/Direction.ts":
/*!************************************!*\
  !*** ./app/lib/enums/Direction.ts ***!
  \************************************/
/*! exports provided: HorizontalDirection, VerticalDirection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HorizontalDirection", function() { return HorizontalDirection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerticalDirection", function() { return VerticalDirection; });
var HorizontalDirection;
(function (HorizontalDirection) {
    HorizontalDirection[HorizontalDirection["LEFT"] = -1] = "LEFT";
    HorizontalDirection[HorizontalDirection["RIGHT"] = 1] = "RIGHT";
    HorizontalDirection[HorizontalDirection["CURRENT"] = 0] = "CURRENT";
})(HorizontalDirection || (HorizontalDirection = {}));
var VerticalDirection;
(function (VerticalDirection) {
    VerticalDirection[VerticalDirection["TOP"] = -1] = "TOP";
    VerticalDirection[VerticalDirection["DOWN"] = 1] = "DOWN";
    VerticalDirection[VerticalDirection["CURRENT"] = 0] = "CURRENT";
})(VerticalDirection || (VerticalDirection = {}));


/***/ }),

/***/ "./app/lib/enums/GameEvent.ts":
/*!************************************!*\
  !*** ./app/lib/enums/GameEvent.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var GameEvent;
(function (GameEvent) {
    GameEvent[GameEvent["PLAYER_MOVED"] = 0] = "PLAYER_MOVED";
    GameEvent[GameEvent["BALL_MOVED"] = 1] = "BALL_MOVED";
    GameEvent[GameEvent["BALL_PLAYER_COLLISION"] = 2] = "BALL_PLAYER_COLLISION";
    GameEvent[GameEvent["BALL_BRICK_COLLISION"] = 3] = "BALL_BRICK_COLLISION";
    GameEvent[GameEvent["BALL_FLOOR_COLLISION"] = 4] = "BALL_FLOOR_COLLISION";
})(GameEvent || (GameEvent = {}));
/* harmony default export */ __webpack_exports__["default"] = (GameEvent);


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

/***/ "./app/lib/factories/BrickFactory.ts":
/*!*******************************************!*\
  !*** ./app/lib/factories/BrickFactory.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _model_Brick__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/Brick */ "./app/lib/model/Brick.ts");

class BrickFactory {
    constructor(lines, context) {
        this.lines = lines;
        this.context = context;
        this.bricksPerColumn = 25;
    }
    create() {
        let bricks = [];
        let nextPosition = { x: 0, y: 0 };
        let brickLength = this.context.width / this.bricksPerColumn;
        for (let line = 0; line < this.lines; line++) {
            for (let column = 0; column < this.bricksPerColumn; column++) {
                let brickWeight = this.getBrickWeight();
                bricks.push(new _model_Brick__WEBPACK_IMPORTED_MODULE_0__["default"](nextPosition.x, nextPosition.y, brickLength, this.context, brickWeight));
                nextPosition.x += brickLength;
            }
            nextPosition.x = 0;
            nextPosition.y += brickLength;
        }
        return bricks;
    }
    getBrickWeight() {
        let randomWeight = Math.floor(Math.random() * 4);
        switch (randomWeight) {
            case 0:
                return _model_Brick__WEBPACK_IMPORTED_MODULE_0__["BrickWeight"].HUGE;
            case 1:
                return _model_Brick__WEBPACK_IMPORTED_MODULE_0__["BrickWeight"].HIGH;
            case 2:
                return _model_Brick__WEBPACK_IMPORTED_MODULE_0__["BrickWeight"].MEDIUM;
            case 3:
                return _model_Brick__WEBPACK_IMPORTED_MODULE_0__["BrickWeight"].LOW;
            default:
                return _model_Brick__WEBPACK_IMPORTED_MODULE_0__["BrickWeight"].LOW;
        }
    }
}
/* harmony default export */ __webpack_exports__["default"] = (BrickFactory);


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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _abstract_Solid2D__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract/Solid2D */ "./app/lib/model/abstract/Solid2D.ts");
/* harmony import */ var _commands_MoveCommand__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../commands/MoveCommand */ "./app/lib/commands/MoveCommand.ts");
/* harmony import */ var _utils_MediaLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/MediaLoader */ "./app/lib/utils/MediaLoader.ts");
/* harmony import */ var _enums_GameEvent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../enums/GameEvent */ "./app/lib/enums/GameEvent.ts");
/* harmony import */ var _enums_Direction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../enums/Direction */ "./app/lib/enums/Direction.ts");





class Ball extends _abstract_Solid2D__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(width, height, context) {
        let initialX = context.width / 2;
        let staticY = context.height / 2;
        let image = new Image();
        super(initialX, staticY, width, height, context);
        image.src = _utils_MediaLoader__WEBPACK_IMPORTED_MODULE_2__["default"].loadSprite("ball.png");
        this.sprite = image;
        this.velocity = 5;
        this.dx = this.velocity;
        this.dy = this.velocity;
        this.move();
    }
    paint() {
        let context = this.context.getContext("2d");
        context.drawImage(this.sprite, this.x, this.y, this.width, this.height);
    }
    start() {
        this.timer = setInterval(() => this.move(), 12);
    }
    changeDirection(x, y) {
        if (x != _enums_Direction__WEBPACK_IMPORTED_MODULE_4__["HorizontalDirection"].CURRENT) {
            this.dx = this.velocity * x;
        }
        if (y != _enums_Direction__WEBPACK_IMPORTED_MODULE_4__["VerticalDirection"].CURRENT) {
            this.dy = this.velocity * y;
        }
    }
    move() {
        let command = new _commands_MoveCommand__WEBPACK_IMPORTED_MODULE_1__["default"](this.x + this.dx, this.y + this.dy, this);
        let result = command.execute();
        this.x = result[0];
        this.y = result[1];
        if (this.x + this.width >= this.context.width) {
            this.changeDirection(_enums_Direction__WEBPACK_IMPORTED_MODULE_4__["HorizontalDirection"].LEFT, _enums_Direction__WEBPACK_IMPORTED_MODULE_4__["VerticalDirection"].CURRENT);
        }
        else if (this.x == 0) {
            this.changeDirection(_enums_Direction__WEBPACK_IMPORTED_MODULE_4__["HorizontalDirection"].RIGHT, _enums_Direction__WEBPACK_IMPORTED_MODULE_4__["VerticalDirection"].CURRENT);
        }
        if (this.y + this.height >= this.context.height) {
            this.destroy();
        }
        else if (this.y == 0) {
            this.changeDirection(_enums_Direction__WEBPACK_IMPORTED_MODULE_4__["HorizontalDirection"].CURRENT, _enums_Direction__WEBPACK_IMPORTED_MODULE_4__["VerticalDirection"].DOWN);
        }
        this.notify(_enums_GameEvent__WEBPACK_IMPORTED_MODULE_3__["default"].BALL_MOVED);
    }
    destroy() {
        this.notify(_enums_GameEvent__WEBPACK_IMPORTED_MODULE_3__["default"].BALL_FLOOR_COLLISION);
        clearInterval(this.timer);
        this.observers.forEach((observer) => this.detach(observer));
    }
}
/* harmony default export */ __webpack_exports__["default"] = (Ball);


/***/ }),

/***/ "./app/lib/model/Brick.ts":
/*!********************************!*\
  !*** ./app/lib/model/Brick.ts ***!
  \********************************/
/*! exports provided: default, BrickWeight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrickWeight", function() { return BrickWeight; });
/* harmony import */ var _abstract_Solid2D__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract/Solid2D */ "./app/lib/model/abstract/Solid2D.ts");
/* harmony import */ var _Ball__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Ball */ "./app/lib/model/Ball.ts");
/* harmony import */ var _utils_MediaLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/MediaLoader */ "./app/lib/utils/MediaLoader.ts");
/* harmony import */ var _enums_GameEvent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../enums/GameEvent */ "./app/lib/enums/GameEvent.ts");




class Brick extends _abstract_Solid2D__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(x, y, length, context, weight) {
        super(x, y, length, length, context);
        this.weight = weight;
        this.sound = new Audio(_utils_MediaLoader__WEBPACK_IMPORTED_MODULE_2__["default"].loadSound("collision.flac"));
        this.sound.volume = 0.15;
        this.setSprite(weight);
    }
    setSprite(weight) {
        let image = new Image();
        switch (weight) {
            case BrickWeight.LOW:
                image.src = _utils_MediaLoader__WEBPACK_IMPORTED_MODULE_2__["default"].loadSprite(BrickSprite.LOW);
                break;
            case BrickWeight.MEDIUM:
                image.src = _utils_MediaLoader__WEBPACK_IMPORTED_MODULE_2__["default"].loadSprite(BrickSprite.MEDIUM);
                break;
            case BrickWeight.HIGH:
                image.src = _utils_MediaLoader__WEBPACK_IMPORTED_MODULE_2__["default"].loadSprite(BrickSprite.HIGH);
                break;
            case BrickWeight.HUGE:
                image.src = _utils_MediaLoader__WEBPACK_IMPORTED_MODULE_2__["default"].loadSprite(BrickSprite.HUGE);
                break;
        }
        this.sprite = image;
    }
    update(observable, args) {
        if (observable instanceof _Ball__WEBPACK_IMPORTED_MODULE_1__["default"]) {
            if (args == _enums_GameEvent__WEBPACK_IMPORTED_MODULE_3__["default"].BALL_MOVED && this.isColliding(observable)) {
                this.destroy();
            }
        }
    }
    paint() {
        let context = this.context.getContext("2d");
        context.drawImage(this.sprite, this.x, this.y, this.width, this.height);
    }
    destroy() {
        this.sound.play();
        this.notify(_enums_GameEvent__WEBPACK_IMPORTED_MODULE_3__["default"].BALL_BRICK_COLLISION);
        super.destroy();
    }
}
/* harmony default export */ __webpack_exports__["default"] = (Brick);
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
/* harmony import */ var _enums_Direction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums/Direction */ "./app/lib/enums/Direction.ts");
/* harmony import */ var _enums_GameEvent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums/GameEvent */ "./app/lib/enums/GameEvent.ts");
/* harmony import */ var _factories_BallFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../factories/BallFactory */ "./app/lib/factories/BallFactory.ts");
/* harmony import */ var _factories_BrickFactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../factories/BrickFactory */ "./app/lib/factories/BrickFactory.ts");
/* harmony import */ var _factories_GamepadFactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../factories/GamepadFactory */ "./app/lib/factories/GamepadFactory.ts");
/* harmony import */ var _factories_PlayerFactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../factories/PlayerFactory */ "./app/lib/factories/PlayerFactory.ts");
/* harmony import */ var _utils_GameStorage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/GameStorage */ "./app/lib/utils/GameStorage.ts");
/* harmony import */ var _Ball__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Ball */ "./app/lib/model/Ball.ts");
/* harmony import */ var _Brick__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Brick */ "./app/lib/model/Brick.ts");
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Player */ "./app/lib/model/Player.ts");










class Gameboard {
    constructor(canvas) {
        this.canvas = canvas;
        this.points = 0;
        this.prepareScene();
        this.attached = [];
        this.player = new _factories_PlayerFactory__WEBPACK_IMPORTED_MODULE_5__["default"](300, 50, this.canvas).create();
        this.gamepad = new _factories_GamepadFactory__WEBPACK_IMPORTED_MODULE_4__["default"](this.player).create();
        this.ball = new _factories_BallFactory__WEBPACK_IMPORTED_MODULE_2__["default"](30, this.canvas).create();
        this.generateBricks();
        this.bind(this.player);
        this.bind(this.ball);
        this.ball.attach(this.player);
        this.ball.attach(this);
        this.ball.start();
    }
    prepareScene() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.canvas.style.background = "#191919";
    }
    bind(paintable) {
        this.attached.push(paintable);
        paintable.attach(this);
        paintable.paint();
    }
    unbind(paintable) {
        let index = this.attached.indexOf(paintable);
        if (index > -1) {
            this.attached.splice(index, 1);
        }
    }
    update(state, args) {
        switch (args) {
            case _enums_GameEvent__WEBPACK_IMPORTED_MODULE_1__["default"].BALL_BRICK_COLLISION:
                if (this.isBrick(state)) {
                    this.ball.detach(state);
                    this.unbind(state);
                    this.points += state.weight;
                    if (state.weight == _Brick__WEBPACK_IMPORTED_MODULE_8__["BrickWeight"].HIGH ||
                        state.weight == _Brick__WEBPACK_IMPORTED_MODULE_8__["BrickWeight"].HUGE) {
                        this.ball.changeDirection(_enums_Direction__WEBPACK_IMPORTED_MODULE_0__["HorizontalDirection"].CURRENT, _enums_Direction__WEBPACK_IMPORTED_MODULE_0__["VerticalDirection"].DOWN);
                    }
                    _utils_GameStorage__WEBPACK_IMPORTED_MODULE_6__["default"].saveRecord(this.points);
                    this.generateBricks();
                }
                break;
            case _enums_GameEvent__WEBPACK_IMPORTED_MODULE_1__["default"].BALL_FLOOR_COLLISION:
                if (this.isBall(state)) {
                    this.unbind(state);
                }
                break;
            case _enums_GameEvent__WEBPACK_IMPORTED_MODULE_1__["default"].BALL_PLAYER_COLLISION:
                if (this.isPlayer(state)) {
                    this.ball.changeDirection(_enums_Direction__WEBPACK_IMPORTED_MODULE_0__["HorizontalDirection"].CURRENT, _enums_Direction__WEBPACK_IMPORTED_MODULE_0__["VerticalDirection"].TOP);
                }
                break;
        }
        this.repaint();
    }
    generateBricks() {
        let hasBricks = this.attached.filter((el) => this.isBrick(el)).length > 0;
        if (!hasBricks) {
            let bricks = new _factories_BrickFactory__WEBPACK_IMPORTED_MODULE_3__["default"](4, this.canvas).create();
            bricks.forEach((brick) => {
                this.bind(brick);
                this.ball.attach(brick);
            });
        }
    }
    repaint() {
        this.canvas
            .getContext("2d")
            .clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.attached.forEach((el) => el.paint());
    }
    isBall(arg) {
        return arg instanceof _Ball__WEBPACK_IMPORTED_MODULE_7__["default"];
    }
    isBrick(arg) {
        return arg instanceof _Brick__WEBPACK_IMPORTED_MODULE_8__["default"];
    }
    isPlayer(arg) {
        return arg instanceof _Player__WEBPACK_IMPORTED_MODULE_9__["default"];
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
/* harmony import */ var _commands_MoveCommand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../commands/MoveCommand */ "./app/lib/commands/MoveCommand.ts");
/* harmony import */ var _enums_GameEvent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums/GameEvent */ "./app/lib/enums/GameEvent.ts");
/* harmony import */ var _utils_MediaLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/MediaLoader */ "./app/lib/utils/MediaLoader.ts");
/* harmony import */ var _abstract_Solid2D__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./abstract/Solid2D */ "./app/lib/model/abstract/Solid2D.ts");
/* harmony import */ var _Ball__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Ball */ "./app/lib/model/Ball.ts");





class Player extends _abstract_Solid2D__WEBPACK_IMPORTED_MODULE_3__["default"] {
    constructor(width, height, context) {
        let initialX = (context.width - width) / 2;
        let staticY = context.height - height;
        super(initialX, staticY, width, height, context);
        this.initializeMedia();
        this.move(0);
    }
    initializeMedia() {
        let image = new Image();
        image.src = _utils_MediaLoader__WEBPACK_IMPORTED_MODULE_2__["default"].loadSprite("player.png");
        this.sprite = image;
        this.sound = new Audio(_utils_MediaLoader__WEBPACK_IMPORTED_MODULE_2__["default"].loadSound("player.ogg"));
        this.sound.volume = 0.15;
    }
    update(observable, args) {
        if (observable instanceof _Ball__WEBPACK_IMPORTED_MODULE_4__["default"]) {
            if (args == _enums_GameEvent__WEBPACK_IMPORTED_MODULE_1__["default"].BALL_MOVED && this.isColliding(observable)) {
                this.sound.play();
                this.notify(_enums_GameEvent__WEBPACK_IMPORTED_MODULE_1__["default"].BALL_PLAYER_COLLISION);
            }
        }
    }
    paint() {
        let context = this.context.getContext("2d");
        context.drawImage(this.sprite, this.x, this.y, this.width, this.height);
    }
    move(dx) {
        let command = new _commands_MoveCommand__WEBPACK_IMPORTED_MODULE_0__["default"](this.x + dx, this.y, this);
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
/* harmony import */ var _utils_interfaces_Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/interfaces/Observable */ "./app/lib/utils/interfaces/Observable.ts");

class Solid2D extends _utils_interfaces_Observable__WEBPACK_IMPORTED_MODULE_0__["default"] {
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
        if (this.x < solid.x + solid.width &&
            this.x + this.width > solid.x &&
            this.y < solid.y + solid.height &&
            this.y + this.height > solid.y) {
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
        this.observers.forEach((observer) => this.detach(observer));
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

/***/ "./app/lib/utils/GameStorage.ts":
/*!**************************************!*\
  !*** ./app/lib/utils/GameStorage.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class GameStorage {
    static saveRecord(recordValue) {
        if (recordValue > this.getRecord()) {
            localStorage.setItem(this.recordKey, recordValue.toString());
        }
    }
    static getRecord() {
        let record = parseInt(localStorage.getItem(this.recordKey));
        if (Number.isSafeInteger(record)) {
            return record;
        }
        return 0;
    }
}
GameStorage.recordKey = "player_record";
/* harmony default export */ __webpack_exports__["default"] = (GameStorage);


/***/ }),

/***/ "./app/lib/utils/MediaLoader.ts":
/*!**************************************!*\
  !*** ./app/lib/utils/MediaLoader.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MediaLoader; });
class MediaLoader {
    static loadSprite(filename) {
        let spriteDir = "./dist/sprites/";
        return `${spriteDir}${filename}`;
    }
    static loadSound(filename) {
        let audioDir = "./dist/sounds/";
        return `${audioDir}${filename}`;
    }
}


/***/ }),

/***/ "./app/lib/utils/interfaces/Observable.ts":
/*!************************************************!*\
  !*** ./app/lib/utils/interfaces/Observable.ts ***!
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBwL2xpYi9jb21tYW5kcy9Nb3ZlQ29tbWFuZC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvbGliL2VudW1zL0RpcmVjdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9hcHAvbGliL2VudW1zL0dhbWVFdmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvbGliL2VudW1zL0dhbWVwYWRBY3Rpb25zLnRzIiwid2VicGFjazovLy8uL2FwcC9saWIvZmFjdG9yaWVzL0JhbGxGYWN0b3J5LnRzIiwid2VicGFjazovLy8uL2FwcC9saWIvZmFjdG9yaWVzL0JyaWNrRmFjdG9yeS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvbGliL2ZhY3Rvcmllcy9HYW1lcGFkRmFjdG9yeS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvbGliL2ZhY3Rvcmllcy9QbGF5ZXJGYWN0b3J5LnRzIiwid2VicGFjazovLy8uL2FwcC9saWIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2xpYi9tb2RlbC9CYWxsLnRzIiwid2VicGFjazovLy8uL2FwcC9saWIvbW9kZWwvQnJpY2sudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2xpYi9tb2RlbC9HYW1lYm9hcmQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2xpYi9tb2RlbC9QbGF5ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2xpYi9tb2RlbC9hYnN0cmFjdC9CYXNlR2FtZXBhZC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvbGliL21vZGVsL2Fic3RyYWN0L1NvbGlkMkQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2xpYi9tb2RlbC9hYnN0cmFjdC9pbXBsL0Rlc2t0b3BHYW1lcGFkLnRzIiwid2VicGFjazovLy8uL2FwcC9saWIvbW9kZWwvYWJzdHJhY3QvaW1wbC9Nb2JpbGVHYW1lcGFkLnRzIiwid2VicGFjazovLy8uL2FwcC9saWIvdXRpbHMvR2FtZVN0b3JhZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2xpYi91dGlscy9NZWRpYUxvYWRlci50cyIsIndlYnBhY2s6Ly8vLi9hcHAvbGliL3V0aWxzL2ludGVyZmFjZXMvT2JzZXJ2YWJsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2UsMEVBQVcsRUFBQzs7Ozs7Ozs7Ozs7OztBQ3hCM0I7QUFBQTtBQUFBO0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsa0RBQWtEO0FBQzVDO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLDhDQUE4Qzs7Ozs7Ozs7Ozs7OztBQ1gvQztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QixvREFBVztBQUN4QztBQUNBLGNBQWMscUVBQWU7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixvRUFBYyxnQkFBZ0IsaUVBQVc7QUFDNUQ7QUFDQTtBQUNBLHdCQUF3QixvRUFBYyxpQkFBaUIsaUVBQVc7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDZSw2RUFBYyxFQUFDOzs7Ozs7Ozs7Ozs7O0FDckI5QjtBQUFBO0FBQUE7QUFBeUM7QUFDdUI7QUFDaEUsNEJBQTRCLG9EQUFXO0FBQ3ZDO0FBQ0EsY0FBYyxxRUFBZTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNlLDRFQUFhLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNsQjdCO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2UsMEVBQVcsRUFBQzs7Ozs7Ozs7Ozs7OztBQ2YzQjtBQUFBO0FBQWU7QUFDZjtBQUNBO0FBQ0Esa0JBQWtCLFVBQVUsRUFBRSxTQUFTO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixTQUFTLEVBQUUsU0FBUztBQUN0QztBQUNBOzs7Ozs7Ozs7Ozs7O0FDVEE7QUFBQTtBQUNBO0FBQ2UseUVBQVUsRUFBQyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2FwcC9saWIvaW5kZXgudHNcIik7XG4iLCJjbGFzcyBNb3ZlQ29tbWFuZCB7XHJcbiAgICBjb25zdHJ1Y3RvcihuZXdYLCBuZXdZLCBtb3ZlYWJsZSkge1xyXG4gICAgICAgIHRoaXMueCA9IG5ld1g7XHJcbiAgICAgICAgdGhpcy55ID0gbmV3WTtcclxuICAgICAgICB0aGlzLm1vdmVhYmxlID0gbW92ZWFibGU7XHJcbiAgICB9XHJcbiAgICBleGVjdXRlKCkge1xyXG4gICAgICAgIGxldCBuZXh0UG9zaXRpb25YID0gdGhpcy54ICsgdGhpcy5tb3ZlYWJsZS53aWR0aDtcclxuICAgICAgICBsZXQgbmV4dFBvc2l0aW9uWSA9IHRoaXMueSArIHRoaXMubW92ZWFibGUuaGVpZ2h0O1xyXG4gICAgICAgIGlmICh0aGlzLnggPCAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMueCA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKG5leHRQb3NpdGlvblggPiB0aGlzLm1vdmVhYmxlLmNvbnRleHQud2lkdGgpIHtcclxuICAgICAgICAgICAgdGhpcy54ID0gTWF0aC5hYnModGhpcy5tb3ZlYWJsZS5jb250ZXh0LndpZHRoIC0gdGhpcy5tb3ZlYWJsZS53aWR0aCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnkgPCAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMueSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKG5leHRQb3NpdGlvblkgPiB0aGlzLm1vdmVhYmxlLmNvbnRleHQuaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIHRoaXMueSA9IE1hdGguYWJzKHRoaXMubW92ZWFibGUuY29udGV4dC5oZWlnaHQgLSB0aGlzLm1vdmVhYmxlLmhlaWdodCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBbdGhpcy54LCB0aGlzLnldO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IE1vdmVDb21tYW5kO1xyXG4iLCJleHBvcnQgdmFyIEhvcml6b250YWxEaXJlY3Rpb247XHJcbihmdW5jdGlvbiAoSG9yaXpvbnRhbERpcmVjdGlvbikge1xyXG4gICAgSG9yaXpvbnRhbERpcmVjdGlvbltIb3Jpem9udGFsRGlyZWN0aW9uW1wiTEVGVFwiXSA9IC0xXSA9IFwiTEVGVFwiO1xyXG4gICAgSG9yaXpvbnRhbERpcmVjdGlvbltIb3Jpem9udGFsRGlyZWN0aW9uW1wiUklHSFRcIl0gPSAxXSA9IFwiUklHSFRcIjtcclxuICAgIEhvcml6b250YWxEaXJlY3Rpb25bSG9yaXpvbnRhbERpcmVjdGlvbltcIkNVUlJFTlRcIl0gPSAwXSA9IFwiQ1VSUkVOVFwiO1xyXG59KShIb3Jpem9udGFsRGlyZWN0aW9uIHx8IChIb3Jpem9udGFsRGlyZWN0aW9uID0ge30pKTtcclxuZXhwb3J0IHZhciBWZXJ0aWNhbERpcmVjdGlvbjtcclxuKGZ1bmN0aW9uIChWZXJ0aWNhbERpcmVjdGlvbikge1xyXG4gICAgVmVydGljYWxEaXJlY3Rpb25bVmVydGljYWxEaXJlY3Rpb25bXCJUT1BcIl0gPSAtMV0gPSBcIlRPUFwiO1xyXG4gICAgVmVydGljYWxEaXJlY3Rpb25bVmVydGljYWxEaXJlY3Rpb25bXCJET1dOXCJdID0gMV0gPSBcIkRPV05cIjtcclxuICAgIFZlcnRpY2FsRGlyZWN0aW9uW1ZlcnRpY2FsRGlyZWN0aW9uW1wiQ1VSUkVOVFwiXSA9IDBdID0gXCJDVVJSRU5UXCI7XHJcbn0pKFZlcnRpY2FsRGlyZWN0aW9uIHx8IChWZXJ0aWNhbERpcmVjdGlvbiA9IHt9KSk7XHJcbiIsInZhciBHYW1lRXZlbnQ7XHJcbihmdW5jdGlvbiAoR2FtZUV2ZW50KSB7XHJcbiAgICBHYW1lRXZlbnRbR2FtZUV2ZW50W1wiUExBWUVSX01PVkVEXCJdID0gMF0gPSBcIlBMQVlFUl9NT1ZFRFwiO1xyXG4gICAgR2FtZUV2ZW50W0dhbWVFdmVudFtcIkJBTExfTU9WRURcIl0gPSAxXSA9IFwiQkFMTF9NT1ZFRFwiO1xyXG4gICAgR2FtZUV2ZW50W0dhbWVFdmVudFtcIkJBTExfUExBWUVSX0NPTExJU0lPTlwiXSA9IDJdID0gXCJCQUxMX1BMQVlFUl9DT0xMSVNJT05cIjtcclxuICAgIEdhbWVFdmVudFtHYW1lRXZlbnRbXCJCQUxMX0JSSUNLX0NPTExJU0lPTlwiXSA9IDNdID0gXCJCQUxMX0JSSUNLX0NPTExJU0lPTlwiO1xyXG4gICAgR2FtZUV2ZW50W0dhbWVFdmVudFtcIkJBTExfRkxPT1JfQ09MTElTSU9OXCJdID0gNF0gPSBcIkJBTExfRkxPT1JfQ09MTElTSU9OXCI7XHJcbn0pKEdhbWVFdmVudCB8fCAoR2FtZUV2ZW50ID0ge30pKTtcclxuZXhwb3J0IGRlZmF1bHQgR2FtZUV2ZW50O1xyXG4iLCJleHBvcnQgdmFyIEtleWJvYXJkQWN0aW9uO1xyXG4oZnVuY3Rpb24gKEtleWJvYXJkQWN0aW9uKSB7XHJcbiAgICBLZXlib2FyZEFjdGlvbltcIkxFRlRcIl0gPSBcIktleUFcIjtcclxuICAgIEtleWJvYXJkQWN0aW9uW1wiUklHSFRcIl0gPSBcIktleURcIjtcclxufSkoS2V5Ym9hcmRBY3Rpb24gfHwgKEtleWJvYXJkQWN0aW9uID0ge30pKTtcclxuZXhwb3J0IHZhciBBcnJvd0FjdGlvbjtcclxuKGZ1bmN0aW9uIChBcnJvd0FjdGlvbikge1xyXG4gICAgQXJyb3dBY3Rpb25bXCJMRUZUXCJdID0gXCJBcnJvd0xlZnRcIjtcclxuICAgIEFycm93QWN0aW9uW1wiUklHSFRcIl0gPSBcIkFycm93UmlnaHRcIjtcclxufSkoQXJyb3dBY3Rpb24gfHwgKEFycm93QWN0aW9uID0ge30pKTtcclxuZXhwb3J0IHZhciBHYW1lcGFkTGlzdGVuZXI7XHJcbihmdW5jdGlvbiAoR2FtZXBhZExpc3RlbmVyKSB7XHJcbiAgICBHYW1lcGFkTGlzdGVuZXJbXCJUT1VDSFwiXSA9IFwib250b3VjaHN0YXJ0XCI7XHJcbiAgICBHYW1lcGFkTGlzdGVuZXJbXCJLRVlCT0FSRFwiXSA9IFwib25rZXlkb3duXCI7XHJcbn0pKEdhbWVwYWRMaXN0ZW5lciB8fCAoR2FtZXBhZExpc3RlbmVyID0ge30pKTtcclxuIiwiaW1wb3J0IEJhbGwgZnJvbSBcIi4uL21vZGVsL0JhbGxcIjtcclxuY2xhc3MgQmFsbEZhY3Rvcnkge1xyXG4gICAgY29uc3RydWN0b3Iod2lkdGgsIGNvbnRleHQpIHtcclxuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSB3aWR0aDtcclxuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xyXG4gICAgfVxyXG4gICAgY3JlYXRlKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgQmFsbCh0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgdGhpcy5jb250ZXh0KTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBCYWxsRmFjdG9yeTtcclxuIiwiaW1wb3J0IEJyaWNrLCB7IEJyaWNrV2VpZ2h0IH0gZnJvbSBcIi4uL21vZGVsL0JyaWNrXCI7XHJcbmNsYXNzIEJyaWNrRmFjdG9yeSB7XHJcbiAgICBjb25zdHJ1Y3RvcihsaW5lcywgY29udGV4dCkge1xyXG4gICAgICAgIHRoaXMubGluZXMgPSBsaW5lcztcclxuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xyXG4gICAgICAgIHRoaXMuYnJpY2tzUGVyQ29sdW1uID0gMjU7XHJcbiAgICB9XHJcbiAgICBjcmVhdGUoKSB7XHJcbiAgICAgICAgbGV0IGJyaWNrcyA9IFtdO1xyXG4gICAgICAgIGxldCBuZXh0UG9zaXRpb24gPSB7IHg6IDAsIHk6IDAgfTtcclxuICAgICAgICBsZXQgYnJpY2tMZW5ndGggPSB0aGlzLmNvbnRleHQud2lkdGggLyB0aGlzLmJyaWNrc1BlckNvbHVtbjtcclxuICAgICAgICBmb3IgKGxldCBsaW5lID0gMDsgbGluZSA8IHRoaXMubGluZXM7IGxpbmUrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBjb2x1bW4gPSAwOyBjb2x1bW4gPCB0aGlzLmJyaWNrc1BlckNvbHVtbjsgY29sdW1uKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBicmlja1dlaWdodCA9IHRoaXMuZ2V0QnJpY2tXZWlnaHQoKTtcclxuICAgICAgICAgICAgICAgIGJyaWNrcy5wdXNoKG5ldyBCcmljayhuZXh0UG9zaXRpb24ueCwgbmV4dFBvc2l0aW9uLnksIGJyaWNrTGVuZ3RoLCB0aGlzLmNvbnRleHQsIGJyaWNrV2VpZ2h0KSk7XHJcbiAgICAgICAgICAgICAgICBuZXh0UG9zaXRpb24ueCArPSBicmlja0xlbmd0aDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBuZXh0UG9zaXRpb24ueCA9IDA7XHJcbiAgICAgICAgICAgIG5leHRQb3NpdGlvbi55ICs9IGJyaWNrTGVuZ3RoO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYnJpY2tzO1xyXG4gICAgfVxyXG4gICAgZ2V0QnJpY2tXZWlnaHQoKSB7XHJcbiAgICAgICAgbGV0IHJhbmRvbVdlaWdodCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDQpO1xyXG4gICAgICAgIHN3aXRjaCAocmFuZG9tV2VpZ2h0KSB7XHJcbiAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBCcmlja1dlaWdodC5IVUdFO1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gQnJpY2tXZWlnaHQuSElHSDtcclxuICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEJyaWNrV2VpZ2h0Lk1FRElVTTtcclxuICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEJyaWNrV2VpZ2h0LkxPVztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBCcmlja1dlaWdodC5MT1c7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEJyaWNrRmFjdG9yeTtcclxuIiwiaW1wb3J0IERlc2t0b3BHYW1lcGFkIGZyb20gXCIuLi9tb2RlbC9hYnN0cmFjdC9pbXBsL0Rlc2t0b3BHYW1lcGFkXCI7XHJcbmltcG9ydCBNb2JpbGVHYW1lcGFkIGZyb20gXCIuLi9tb2RlbC9hYnN0cmFjdC9pbXBsL01vYmlsZUdhbWVwYWRcIjtcclxuY2xhc3MgR2FtZXBhZEZhY3Rvcnkge1xyXG4gICAgY29uc3RydWN0b3IocGxheWVyKSB7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBwbGF5ZXI7XHJcbiAgICB9XHJcbiAgICBjcmVhdGUoKSB7XHJcbiAgICAgICAgaWYgKCgnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3cpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgTW9iaWxlR2FtZXBhZCh0aGlzLnBsYXllcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IERlc2t0b3BHYW1lcGFkKHRoaXMucGxheWVyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgR2FtZXBhZEZhY3Rvcnk7XHJcbiIsImltcG9ydCBQbGF5ZXIgZnJvbSBcIi4uL21vZGVsL1BsYXllclwiO1xyXG5jbGFzcyBQbGF5ZXJGYWN0b3J5IHtcclxuICAgIGNvbnN0cnVjdG9yKHdpZHRoLCBoZWlnaHQsIGNvbnRleHQpIHtcclxuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcclxuICAgICAgICB0aGlzLnJlY29yZCA9IHRoaXMubG9hZFJlY29yZCgpO1xyXG4gICAgfVxyXG4gICAgY3JlYXRlKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUGxheWVyKHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCB0aGlzLmNvbnRleHQpO1xyXG4gICAgfVxyXG4gICAgbG9hZFJlY29yZCgpIHtcclxuICAgICAgICByZXR1cm4gcGFyc2VJbnQobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJyZWNvcmRcIikpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFBsYXllckZhY3Rvcnk7XHJcbiIsImltcG9ydCBHYW1lYm9hcmQgZnJvbSBcIi4vbW9kZWwvR2FtZWJvYXJkXCI7XHJcbm5ldyBHYW1lYm9hcmQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNnYW1lYm9hcmRcIikpO1xyXG4iLCJpbXBvcnQgU29saWQyRCBmcm9tIFwiLi9hYnN0cmFjdC9Tb2xpZDJEXCI7XHJcbmltcG9ydCBNb3ZlQ29tbWFuZCBmcm9tIFwiLi4vY29tbWFuZHMvTW92ZUNvbW1hbmRcIjtcclxuaW1wb3J0IE1lZGlhTG9hZGVyIGZyb20gXCIuLi91dGlscy9NZWRpYUxvYWRlclwiO1xyXG5pbXBvcnQgR2FtZUV2ZW50IGZyb20gXCIuLi9lbnVtcy9HYW1lRXZlbnRcIjtcclxuaW1wb3J0IHsgSG9yaXpvbnRhbERpcmVjdGlvbiwgVmVydGljYWxEaXJlY3Rpb24gfSBmcm9tIFwiLi4vZW51bXMvRGlyZWN0aW9uXCI7XHJcbmNsYXNzIEJhbGwgZXh0ZW5kcyBTb2xpZDJEIHtcclxuICAgIGNvbnN0cnVjdG9yKHdpZHRoLCBoZWlnaHQsIGNvbnRleHQpIHtcclxuICAgICAgICBsZXQgaW5pdGlhbFggPSBjb250ZXh0LndpZHRoIC8gMjtcclxuICAgICAgICBsZXQgc3RhdGljWSA9IGNvbnRleHQuaGVpZ2h0IC8gMjtcclxuICAgICAgICBsZXQgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICBzdXBlcihpbml0aWFsWCwgc3RhdGljWSwgd2lkdGgsIGhlaWdodCwgY29udGV4dCk7XHJcbiAgICAgICAgaW1hZ2Uuc3JjID0gTWVkaWFMb2FkZXIubG9hZFNwcml0ZShcImJhbGwucG5nXCIpO1xyXG4gICAgICAgIHRoaXMuc3ByaXRlID0gaW1hZ2U7XHJcbiAgICAgICAgdGhpcy52ZWxvY2l0eSA9IDU7XHJcbiAgICAgICAgdGhpcy5keCA9IHRoaXMudmVsb2NpdHk7XHJcbiAgICAgICAgdGhpcy5keSA9IHRoaXMudmVsb2NpdHk7XHJcbiAgICAgICAgdGhpcy5tb3ZlKCk7XHJcbiAgICB9XHJcbiAgICBwYWludCgpIHtcclxuICAgICAgICBsZXQgY29udGV4dCA9IHRoaXMuY29udGV4dC5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UodGhpcy5zcHJpdGUsIHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcbiAgICB9XHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLnRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4gdGhpcy5tb3ZlKCksIDEyKTtcclxuICAgIH1cclxuICAgIGNoYW5nZURpcmVjdGlvbih4LCB5KSB7XHJcbiAgICAgICAgaWYgKHggIT0gSG9yaXpvbnRhbERpcmVjdGlvbi5DVVJSRU5UKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZHggPSB0aGlzLnZlbG9jaXR5ICogeDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHkgIT0gVmVydGljYWxEaXJlY3Rpb24uQ1VSUkVOVCkge1xyXG4gICAgICAgICAgICB0aGlzLmR5ID0gdGhpcy52ZWxvY2l0eSAqIHk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbW92ZSgpIHtcclxuICAgICAgICBsZXQgY29tbWFuZCA9IG5ldyBNb3ZlQ29tbWFuZCh0aGlzLnggKyB0aGlzLmR4LCB0aGlzLnkgKyB0aGlzLmR5LCB0aGlzKTtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gY29tbWFuZC5leGVjdXRlKCk7XHJcbiAgICAgICAgdGhpcy54ID0gcmVzdWx0WzBdO1xyXG4gICAgICAgIHRoaXMueSA9IHJlc3VsdFsxXTtcclxuICAgICAgICBpZiAodGhpcy54ICsgdGhpcy53aWR0aCA+PSB0aGlzLmNvbnRleHQud2lkdGgpIHtcclxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VEaXJlY3Rpb24oSG9yaXpvbnRhbERpcmVjdGlvbi5MRUZULCBWZXJ0aWNhbERpcmVjdGlvbi5DVVJSRU5UKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy54ID09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VEaXJlY3Rpb24oSG9yaXpvbnRhbERpcmVjdGlvbi5SSUdIVCwgVmVydGljYWxEaXJlY3Rpb24uQ1VSUkVOVCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnkgKyB0aGlzLmhlaWdodCA+PSB0aGlzLmNvbnRleHQuaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGVzdHJveSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLnkgPT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmNoYW5nZURpcmVjdGlvbihIb3Jpem9udGFsRGlyZWN0aW9uLkNVUlJFTlQsIFZlcnRpY2FsRGlyZWN0aW9uLkRPV04pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm5vdGlmeShHYW1lRXZlbnQuQkFMTF9NT1ZFRCk7XHJcbiAgICB9XHJcbiAgICBkZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMubm90aWZ5KEdhbWVFdmVudC5CQUxMX0ZMT09SX0NPTExJU0lPTik7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVyKTtcclxuICAgICAgICB0aGlzLm9ic2VydmVycy5mb3JFYWNoKChvYnNlcnZlcikgPT4gdGhpcy5kZXRhY2gob2JzZXJ2ZXIpKTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBCYWxsO1xyXG4iLCJpbXBvcnQgU29saWQyRCBmcm9tIFwiLi9hYnN0cmFjdC9Tb2xpZDJEXCI7XHJcbmltcG9ydCBCYWxsIGZyb20gXCIuL0JhbGxcIjtcclxuaW1wb3J0IE1lZGlhTG9hZGVyIGZyb20gXCIuLi91dGlscy9NZWRpYUxvYWRlclwiO1xyXG5pbXBvcnQgR2FtZUV2ZW50IGZyb20gXCIuLi9lbnVtcy9HYW1lRXZlbnRcIjtcclxuY2xhc3MgQnJpY2sgZXh0ZW5kcyBTb2xpZDJEIHtcclxuICAgIGNvbnN0cnVjdG9yKHgsIHksIGxlbmd0aCwgY29udGV4dCwgd2VpZ2h0KSB7XHJcbiAgICAgICAgc3VwZXIoeCwgeSwgbGVuZ3RoLCBsZW5ndGgsIGNvbnRleHQpO1xyXG4gICAgICAgIHRoaXMud2VpZ2h0ID0gd2VpZ2h0O1xyXG4gICAgICAgIHRoaXMuc291bmQgPSBuZXcgQXVkaW8oTWVkaWFMb2FkZXIubG9hZFNvdW5kKFwiY29sbGlzaW9uLmZsYWNcIikpO1xyXG4gICAgICAgIHRoaXMuc291bmQudm9sdW1lID0gMC4xNTtcclxuICAgICAgICB0aGlzLnNldFNwcml0ZSh3ZWlnaHQpO1xyXG4gICAgfVxyXG4gICAgc2V0U3ByaXRlKHdlaWdodCkge1xyXG4gICAgICAgIGxldCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIHN3aXRjaCAod2VpZ2h0KSB7XHJcbiAgICAgICAgICAgIGNhc2UgQnJpY2tXZWlnaHQuTE9XOlxyXG4gICAgICAgICAgICAgICAgaW1hZ2Uuc3JjID0gTWVkaWFMb2FkZXIubG9hZFNwcml0ZShCcmlja1Nwcml0ZS5MT1cpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQnJpY2tXZWlnaHQuTUVESVVNOlxyXG4gICAgICAgICAgICAgICAgaW1hZ2Uuc3JjID0gTWVkaWFMb2FkZXIubG9hZFNwcml0ZShCcmlja1Nwcml0ZS5NRURJVU0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQnJpY2tXZWlnaHQuSElHSDpcclxuICAgICAgICAgICAgICAgIGltYWdlLnNyYyA9IE1lZGlhTG9hZGVyLmxvYWRTcHJpdGUoQnJpY2tTcHJpdGUuSElHSCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBCcmlja1dlaWdodC5IVUdFOlxyXG4gICAgICAgICAgICAgICAgaW1hZ2Uuc3JjID0gTWVkaWFMb2FkZXIubG9hZFNwcml0ZShCcmlja1Nwcml0ZS5IVUdFKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNwcml0ZSA9IGltYWdlO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlKG9ic2VydmFibGUsIGFyZ3MpIHtcclxuICAgICAgICBpZiAob2JzZXJ2YWJsZSBpbnN0YW5jZW9mIEJhbGwpIHtcclxuICAgICAgICAgICAgaWYgKGFyZ3MgPT0gR2FtZUV2ZW50LkJBTExfTU9WRUQgJiYgdGhpcy5pc0NvbGxpZGluZyhvYnNlcnZhYmxlKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwYWludCgpIHtcclxuICAgICAgICBsZXQgY29udGV4dCA9IHRoaXMuY29udGV4dC5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UodGhpcy5zcHJpdGUsIHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcbiAgICB9XHJcbiAgICBkZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMuc291bmQucGxheSgpO1xyXG4gICAgICAgIHRoaXMubm90aWZ5KEdhbWVFdmVudC5CQUxMX0JSSUNLX0NPTExJU0lPTik7XHJcbiAgICAgICAgc3VwZXIuZGVzdHJveSgpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEJyaWNrO1xyXG5leHBvcnQgdmFyIEJyaWNrV2VpZ2h0O1xyXG4oZnVuY3Rpb24gKEJyaWNrV2VpZ2h0KSB7XHJcbiAgICBCcmlja1dlaWdodFtCcmlja1dlaWdodFtcIkxPV1wiXSA9IDEwXSA9IFwiTE9XXCI7XHJcbiAgICBCcmlja1dlaWdodFtCcmlja1dlaWdodFtcIk1FRElVTVwiXSA9IDIwXSA9IFwiTUVESVVNXCI7XHJcbiAgICBCcmlja1dlaWdodFtCcmlja1dlaWdodFtcIkhJR0hcIl0gPSAzMF0gPSBcIkhJR0hcIjtcclxuICAgIEJyaWNrV2VpZ2h0W0JyaWNrV2VpZ2h0W1wiSFVHRVwiXSA9IDUwXSA9IFwiSFVHRVwiO1xyXG59KShCcmlja1dlaWdodCB8fCAoQnJpY2tXZWlnaHQgPSB7fSkpO1xyXG52YXIgQnJpY2tTcHJpdGU7XHJcbihmdW5jdGlvbiAoQnJpY2tTcHJpdGUpIHtcclxuICAgIEJyaWNrU3ByaXRlW1wiTE9XXCJdID0gXCIxLnBuZ1wiO1xyXG4gICAgQnJpY2tTcHJpdGVbXCJNRURJVU1cIl0gPSBcIjIucG5nXCI7XHJcbiAgICBCcmlja1Nwcml0ZVtcIkhJR0hcIl0gPSBcIjMucG5nXCI7XHJcbiAgICBCcmlja1Nwcml0ZVtcIkhVR0VcIl0gPSBcIjQucG5nXCI7XHJcbn0pKEJyaWNrU3ByaXRlIHx8IChCcmlja1Nwcml0ZSA9IHt9KSk7XHJcbiIsImltcG9ydCB7IEhvcml6b250YWxEaXJlY3Rpb24sIFZlcnRpY2FsRGlyZWN0aW9uIH0gZnJvbSBcIi4uL2VudW1zL0RpcmVjdGlvblwiO1xyXG5pbXBvcnQgR2FtZUV2ZW50IGZyb20gXCIuLi9lbnVtcy9HYW1lRXZlbnRcIjtcclxuaW1wb3J0IEJhbGxGYWN0b3J5IGZyb20gXCIuLi9mYWN0b3JpZXMvQmFsbEZhY3RvcnlcIjtcclxuaW1wb3J0IEJyaWNrRmFjdG9yeSBmcm9tIFwiLi4vZmFjdG9yaWVzL0JyaWNrRmFjdG9yeVwiO1xyXG5pbXBvcnQgR2FtZXBhZEZhY3RvcnkgZnJvbSBcIi4uL2ZhY3Rvcmllcy9HYW1lcGFkRmFjdG9yeVwiO1xyXG5pbXBvcnQgUGxheWVyRmFjdG9yeSBmcm9tIFwiLi4vZmFjdG9yaWVzL1BsYXllckZhY3RvcnlcIjtcclxuaW1wb3J0IEdhbWVTdG9yYWdlIGZyb20gXCIuLi91dGlscy9HYW1lU3RvcmFnZVwiO1xyXG5pbXBvcnQgQmFsbCBmcm9tIFwiLi9CYWxsXCI7XHJcbmltcG9ydCBCcmljaywgeyBCcmlja1dlaWdodCB9IGZyb20gXCIuL0JyaWNrXCI7XHJcbmltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vUGxheWVyXCI7XHJcbmNsYXNzIEdhbWVib2FyZCB7XHJcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMpIHtcclxuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcclxuICAgICAgICB0aGlzLnBvaW50cyA9IDA7XHJcbiAgICAgICAgdGhpcy5wcmVwYXJlU2NlbmUoKTtcclxuICAgICAgICB0aGlzLmF0dGFjaGVkID0gW107XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBuZXcgUGxheWVyRmFjdG9yeSgzMDAsIDUwLCB0aGlzLmNhbnZhcykuY3JlYXRlKCk7XHJcbiAgICAgICAgdGhpcy5nYW1lcGFkID0gbmV3IEdhbWVwYWRGYWN0b3J5KHRoaXMucGxheWVyKS5jcmVhdGUoKTtcclxuICAgICAgICB0aGlzLmJhbGwgPSBuZXcgQmFsbEZhY3RvcnkoMzAsIHRoaXMuY2FudmFzKS5jcmVhdGUoKTtcclxuICAgICAgICB0aGlzLmdlbmVyYXRlQnJpY2tzKCk7XHJcbiAgICAgICAgdGhpcy5iaW5kKHRoaXMucGxheWVyKTtcclxuICAgICAgICB0aGlzLmJpbmQodGhpcy5iYWxsKTtcclxuICAgICAgICB0aGlzLmJhbGwuYXR0YWNoKHRoaXMucGxheWVyKTtcclxuICAgICAgICB0aGlzLmJhbGwuYXR0YWNoKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuYmFsbC5zdGFydCgpO1xyXG4gICAgfVxyXG4gICAgcHJlcGFyZVNjZW5lKCkge1xyXG4gICAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcbiAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmJhY2tncm91bmQgPSBcIiMxOTE5MTlcIjtcclxuICAgIH1cclxuICAgIGJpbmQocGFpbnRhYmxlKSB7XHJcbiAgICAgICAgdGhpcy5hdHRhY2hlZC5wdXNoKHBhaW50YWJsZSk7XHJcbiAgICAgICAgcGFpbnRhYmxlLmF0dGFjaCh0aGlzKTtcclxuICAgICAgICBwYWludGFibGUucGFpbnQoKTtcclxuICAgIH1cclxuICAgIHVuYmluZChwYWludGFibGUpIHtcclxuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLmF0dGFjaGVkLmluZGV4T2YocGFpbnRhYmxlKTtcclxuICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xyXG4gICAgICAgICAgICB0aGlzLmF0dGFjaGVkLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdXBkYXRlKHN0YXRlLCBhcmdzKSB7XHJcbiAgICAgICAgc3dpdGNoIChhcmdzKSB7XHJcbiAgICAgICAgICAgIGNhc2UgR2FtZUV2ZW50LkJBTExfQlJJQ0tfQ09MTElTSU9OOlxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNCcmljayhzdGF0ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJhbGwuZGV0YWNoKHN0YXRlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVuYmluZChzdGF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb2ludHMgKz0gc3RhdGUud2VpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGF0ZS53ZWlnaHQgPT0gQnJpY2tXZWlnaHQuSElHSCB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZS53ZWlnaHQgPT0gQnJpY2tXZWlnaHQuSFVHRSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJhbGwuY2hhbmdlRGlyZWN0aW9uKEhvcml6b250YWxEaXJlY3Rpb24uQ1VSUkVOVCwgVmVydGljYWxEaXJlY3Rpb24uRE9XTik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIEdhbWVTdG9yYWdlLnNhdmVSZWNvcmQodGhpcy5wb2ludHMpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGVCcmlja3MoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEdhbWVFdmVudC5CQUxMX0ZMT09SX0NPTExJU0lPTjpcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzQmFsbChzdGF0ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVuYmluZChzdGF0ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBHYW1lRXZlbnQuQkFMTF9QTEFZRVJfQ09MTElTSU9OOlxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNQbGF5ZXIoc3RhdGUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5iYWxsLmNoYW5nZURpcmVjdGlvbihIb3Jpem9udGFsRGlyZWN0aW9uLkNVUlJFTlQsIFZlcnRpY2FsRGlyZWN0aW9uLlRPUCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5yZXBhaW50KCk7XHJcbiAgICB9XHJcbiAgICBnZW5lcmF0ZUJyaWNrcygpIHtcclxuICAgICAgICBsZXQgaGFzQnJpY2tzID0gdGhpcy5hdHRhY2hlZC5maWx0ZXIoKGVsKSA9PiB0aGlzLmlzQnJpY2soZWwpKS5sZW5ndGggPiAwO1xyXG4gICAgICAgIGlmICghaGFzQnJpY2tzKSB7XHJcbiAgICAgICAgICAgIGxldCBicmlja3MgPSBuZXcgQnJpY2tGYWN0b3J5KDQsIHRoaXMuY2FudmFzKS5jcmVhdGUoKTtcclxuICAgICAgICAgICAgYnJpY2tzLmZvckVhY2goKGJyaWNrKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJpbmQoYnJpY2spO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5iYWxsLmF0dGFjaChicmljayk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJlcGFpbnQoKSB7XHJcbiAgICAgICAgdGhpcy5jYW52YXNcclxuICAgICAgICAgICAgLmdldENvbnRleHQoXCIyZFwiKVxyXG4gICAgICAgICAgICAuY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xyXG4gICAgICAgIHRoaXMuYXR0YWNoZWQuZm9yRWFjaCgoZWwpID0+IGVsLnBhaW50KCkpO1xyXG4gICAgfVxyXG4gICAgaXNCYWxsKGFyZykge1xyXG4gICAgICAgIHJldHVybiBhcmcgaW5zdGFuY2VvZiBCYWxsO1xyXG4gICAgfVxyXG4gICAgaXNCcmljayhhcmcpIHtcclxuICAgICAgICByZXR1cm4gYXJnIGluc3RhbmNlb2YgQnJpY2s7XHJcbiAgICB9XHJcbiAgICBpc1BsYXllcihhcmcpIHtcclxuICAgICAgICByZXR1cm4gYXJnIGluc3RhbmNlb2YgUGxheWVyO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEdhbWVib2FyZDtcclxuIiwiaW1wb3J0IE1vdmVDb21tYW5kIGZyb20gXCIuLi9jb21tYW5kcy9Nb3ZlQ29tbWFuZFwiO1xyXG5pbXBvcnQgR2FtZUV2ZW50IGZyb20gXCIuLi9lbnVtcy9HYW1lRXZlbnRcIjtcclxuaW1wb3J0IE1lZGlhTG9hZGVyIGZyb20gXCIuLi91dGlscy9NZWRpYUxvYWRlclwiO1xyXG5pbXBvcnQgU29saWQyRCBmcm9tIFwiLi9hYnN0cmFjdC9Tb2xpZDJEXCI7XHJcbmltcG9ydCBCYWxsIGZyb20gXCIuL0JhbGxcIjtcclxuY2xhc3MgUGxheWVyIGV4dGVuZHMgU29saWQyRCB7XHJcbiAgICBjb25zdHJ1Y3Rvcih3aWR0aCwgaGVpZ2h0LCBjb250ZXh0KSB7XHJcbiAgICAgICAgbGV0IGluaXRpYWxYID0gKGNvbnRleHQud2lkdGggLSB3aWR0aCkgLyAyO1xyXG4gICAgICAgIGxldCBzdGF0aWNZID0gY29udGV4dC5oZWlnaHQgLSBoZWlnaHQ7XHJcbiAgICAgICAgc3VwZXIoaW5pdGlhbFgsIHN0YXRpY1ksIHdpZHRoLCBoZWlnaHQsIGNvbnRleHQpO1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZU1lZGlhKCk7XHJcbiAgICAgICAgdGhpcy5tb3ZlKDApO1xyXG4gICAgfVxyXG4gICAgaW5pdGlhbGl6ZU1lZGlhKCkge1xyXG4gICAgICAgIGxldCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIGltYWdlLnNyYyA9IE1lZGlhTG9hZGVyLmxvYWRTcHJpdGUoXCJwbGF5ZXIucG5nXCIpO1xyXG4gICAgICAgIHRoaXMuc3ByaXRlID0gaW1hZ2U7XHJcbiAgICAgICAgdGhpcy5zb3VuZCA9IG5ldyBBdWRpbyhNZWRpYUxvYWRlci5sb2FkU291bmQoXCJwbGF5ZXIub2dnXCIpKTtcclxuICAgICAgICB0aGlzLnNvdW5kLnZvbHVtZSA9IDAuMTU7XHJcbiAgICB9XHJcbiAgICB1cGRhdGUob2JzZXJ2YWJsZSwgYXJncykge1xyXG4gICAgICAgIGlmIChvYnNlcnZhYmxlIGluc3RhbmNlb2YgQmFsbCkge1xyXG4gICAgICAgICAgICBpZiAoYXJncyA9PSBHYW1lRXZlbnQuQkFMTF9NT1ZFRCAmJiB0aGlzLmlzQ29sbGlkaW5nKG9ic2VydmFibGUpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNvdW5kLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm90aWZ5KEdhbWVFdmVudC5CQUxMX1BMQVlFUl9DT0xMSVNJT04pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcGFpbnQoKSB7XHJcbiAgICAgICAgbGV0IGNvbnRleHQgPSB0aGlzLmNvbnRleHQuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKHRoaXMuc3ByaXRlLCB0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG4gICAgfVxyXG4gICAgbW92ZShkeCkge1xyXG4gICAgICAgIGxldCBjb21tYW5kID0gbmV3IE1vdmVDb21tYW5kKHRoaXMueCArIGR4LCB0aGlzLnksIHRoaXMpO1xyXG4gICAgICAgIHRoaXMueCA9IGNvbW1hbmQuZXhlY3V0ZSgpWzBdO1xyXG4gICAgICAgIHRoaXMubm90aWZ5KCk7XHJcbiAgICB9XHJcbiAgICBkZXN0cm95KCkgeyB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgUGxheWVyO1xyXG4iLCJjbGFzcyBCYXNlR2FtZXBhZCB7XHJcbiAgICBjb25zdHJ1Y3RvcihldmVudCkge1xyXG4gICAgICAgIGRvY3VtZW50W2V2ZW50XSA9IChwcmVzc2VkKSA9PiB0aGlzLnByb2Nlc3NDb21tYW5kKHByZXNzZWQpO1xyXG4gICAgfVxyXG4gICAgbW92ZShwbGF5ZXIsIHgpIHtcclxuICAgICAgICBwbGF5ZXIubW92ZSh4KTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBCYXNlR2FtZXBhZDtcclxuIiwiaW1wb3J0IE9ic2VydmFibGUgZnJvbSBcIi4uLy4uL3V0aWxzL2ludGVyZmFjZXMvT2JzZXJ2YWJsZVwiO1xyXG5jbGFzcyBTb2xpZDJEIGV4dGVuZHMgT2JzZXJ2YWJsZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcih4LCB5LCB3aWR0aCwgaGVpZ2h0LCBjb250ZXh0KSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoICsgMC41O1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0ICsgMC41O1xyXG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XHJcbiAgICAgICAgdGhpcy5vYnNlcnZlcnMgPSBbXTtcclxuICAgIH1cclxuICAgIGF0dGFjaChvYnNlcnZlcikge1xyXG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzLnB1c2gob2JzZXJ2ZXIpO1xyXG4gICAgfVxyXG4gICAgZGV0YWNoKG9ic2VydmVyKSB7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5vYnNlcnZlcnMuaW5kZXhPZihvYnNlcnZlcik7XHJcbiAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcclxuICAgICAgICAgICAgdGhpcy5vYnNlcnZlcnMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBub3RpZnkoYXJncykge1xyXG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzLmZvckVhY2goKG9ic2VydmVyKSA9PiBvYnNlcnZlci51cGRhdGUodGhpcywgYXJncykpO1xyXG4gICAgfVxyXG4gICAgaXNDb2xsaWRpbmcoc29saWQpIHtcclxuICAgICAgICBpZiAodGhpcy54IDwgc29saWQueCArIHNvbGlkLndpZHRoICYmXHJcbiAgICAgICAgICAgIHRoaXMueCArIHRoaXMud2lkdGggPiBzb2xpZC54ICYmXHJcbiAgICAgICAgICAgIHRoaXMueSA8IHNvbGlkLnkgKyBzb2xpZC5oZWlnaHQgJiZcclxuICAgICAgICAgICAgdGhpcy55ICsgdGhpcy5oZWlnaHQgPiBzb2xpZC55KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBnZXRYKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLng7XHJcbiAgICB9XHJcbiAgICBnZXRZKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnk7XHJcbiAgICB9XHJcbiAgICBwYWludCgpIHsgfVxyXG4gICAgZGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLm9ic2VydmVycy5mb3JFYWNoKChvYnNlcnZlcikgPT4gdGhpcy5kZXRhY2gob2JzZXJ2ZXIpKTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBTb2xpZDJEO1xyXG4iLCJpbXBvcnQgQmFzZUdhbWVwYWQgZnJvbSBcIi4uL0Jhc2VHYW1lcGFkXCI7XHJcbmltcG9ydCB7IEtleWJvYXJkQWN0aW9uLCBBcnJvd0FjdGlvbiwgR2FtZXBhZExpc3RlbmVyIH0gZnJvbSBcIi4uLy4uLy4uL2VudW1zL0dhbWVwYWRBY3Rpb25zXCI7XHJcbmNsYXNzIERlc2t0b3BHYW1lcGFkIGV4dGVuZHMgQmFzZUdhbWVwYWQge1xyXG4gICAgY29uc3RydWN0b3IocGxheWVyKSB7XHJcbiAgICAgICAgc3VwZXIoR2FtZXBhZExpc3RlbmVyLktFWUJPQVJEKTtcclxuICAgICAgICB0aGlzLnBsYXllciA9IHBsYXllcjtcclxuICAgICAgICB0aGlzLnN0ZXBzID0gTWF0aC5mbG9vcihwbGF5ZXIuY29udGV4dC53aWR0aCAvIDE1KTtcclxuICAgIH1cclxuICAgIHByb2Nlc3NDb21tYW5kKHByZXNzZWQpIHtcclxuICAgICAgICB0aGlzLmRvQWN0aW9uKHByZXNzZWQpO1xyXG4gICAgfVxyXG4gICAgZG9BY3Rpb24ocHJlc3NlZCkge1xyXG4gICAgICAgIGxldCBrZXkgPSBwcmVzc2VkLmNvZGU7XHJcbiAgICAgICAgaWYgKGtleSA9PSBLZXlib2FyZEFjdGlvbi5MRUZUIHx8IGtleSA9PSBBcnJvd0FjdGlvbi5MRUZUKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW92ZSh0aGlzLnBsYXllciwgLXRoaXMuc3RlcHMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChrZXkgPT0gS2V5Ym9hcmRBY3Rpb24uUklHSFQgfHwga2V5ID09IEFycm93QWN0aW9uLlJJR0hUKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW92ZSh0aGlzLnBsYXllciwgdGhpcy5zdGVwcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IERlc2t0b3BHYW1lcGFkO1xyXG4iLCJpbXBvcnQgQmFzZUdhbWVwYWQgZnJvbSBcIi4uL0Jhc2VHYW1lcGFkXCI7XHJcbmltcG9ydCB7IEdhbWVwYWRMaXN0ZW5lciB9IGZyb20gXCIuLi8uLi8uLi9lbnVtcy9HYW1lcGFkQWN0aW9uc1wiO1xyXG5jbGFzcyBNb2JpbGVHYW1lcGFkIGV4dGVuZHMgQmFzZUdhbWVwYWQge1xyXG4gICAgY29uc3RydWN0b3IocGxheWVyKSB7XHJcbiAgICAgICAgc3VwZXIoR2FtZXBhZExpc3RlbmVyLlRPVUNIKTtcclxuICAgICAgICB0aGlzLnBsYXllciA9IHBsYXllcjtcclxuICAgICAgICB0aGlzLnN0ZXBzID0gTWF0aC5mbG9vcihwbGF5ZXIuY29udGV4dC53aWR0aCAvIDE1KTtcclxuICAgIH1cclxuICAgIHByb2Nlc3NDb21tYW5kKHByZXNzZWQpIHtcclxuICAgICAgICBsZXQgc2NyZWVuV2lkdGggPSB0aGlzLnBsYXllci5jb250ZXh0LmNsaWVudFdpZHRoO1xyXG4gICAgICAgIGlmIChwcmVzc2VkLmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFggPiBzY3JlZW5XaWR0aCAvIDIpIHtcclxuICAgICAgICAgICAgdGhpcy5tb3ZlKHRoaXMucGxheWVyLCB0aGlzLnN0ZXBzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubW92ZSh0aGlzLnBsYXllciwgLXRoaXMuc3RlcHMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBNb2JpbGVHYW1lcGFkO1xyXG4iLCJjbGFzcyBHYW1lU3RvcmFnZSB7XHJcbiAgICBzdGF0aWMgc2F2ZVJlY29yZChyZWNvcmRWYWx1ZSkge1xyXG4gICAgICAgIGlmIChyZWNvcmRWYWx1ZSA+IHRoaXMuZ2V0UmVjb3JkKCkpIHtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5yZWNvcmRLZXksIHJlY29yZFZhbHVlLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHN0YXRpYyBnZXRSZWNvcmQoKSB7XHJcbiAgICAgICAgbGV0IHJlY29yZCA9IHBhcnNlSW50KGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMucmVjb3JkS2V5KSk7XHJcbiAgICAgICAgaWYgKE51bWJlci5pc1NhZmVJbnRlZ2VyKHJlY29yZCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlY29yZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcbn1cclxuR2FtZVN0b3JhZ2UucmVjb3JkS2V5ID0gXCJwbGF5ZXJfcmVjb3JkXCI7XHJcbmV4cG9ydCBkZWZhdWx0IEdhbWVTdG9yYWdlO1xyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBNZWRpYUxvYWRlciB7XHJcbiAgICBzdGF0aWMgbG9hZFNwcml0ZShmaWxlbmFtZSkge1xyXG4gICAgICAgIGxldCBzcHJpdGVEaXIgPSBcIi4vZGlzdC9zcHJpdGVzL1wiO1xyXG4gICAgICAgIHJldHVybiBgJHtzcHJpdGVEaXJ9JHtmaWxlbmFtZX1gO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGxvYWRTb3VuZChmaWxlbmFtZSkge1xyXG4gICAgICAgIGxldCBhdWRpb0RpciA9IFwiLi9kaXN0L3NvdW5kcy9cIjtcclxuICAgICAgICByZXR1cm4gYCR7YXVkaW9EaXJ9JHtmaWxlbmFtZX1gO1xyXG4gICAgfVxyXG59XHJcbiIsImNsYXNzIE9ic2VydmFibGUge1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IE9ic2VydmFibGU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=