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
        console.log(context.width);
        let staticY = context.height / 2;
        let image = new Image();
        super(initialX, staticY, width, height, context);
        image.src = _utils_MediaLoader__WEBPACK_IMPORTED_MODULE_2__["default"].loadSprite("ball.png");
        this.sprite = image;
        this.velocity = 10;
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
/* harmony import */ var _factories_GamepadFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../factories/GamepadFactory */ "./app/lib/factories/GamepadFactory.ts");
/* harmony import */ var _factories_PlayerFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../factories/PlayerFactory */ "./app/lib/factories/PlayerFactory.ts");
/* harmony import */ var _factories_BrickFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../factories/BrickFactory */ "./app/lib/factories/BrickFactory.ts");
/* harmony import */ var _factories_BallFactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../factories/BallFactory */ "./app/lib/factories/BallFactory.ts");
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Player */ "./app/lib/model/Player.ts");
/* harmony import */ var _Brick__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Brick */ "./app/lib/model/Brick.ts");
/* harmony import */ var _Ball__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Ball */ "./app/lib/model/Ball.ts");
/* harmony import */ var _enums_GameEvent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../enums/GameEvent */ "./app/lib/enums/GameEvent.ts");
/* harmony import */ var _utils_GameStorage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/GameStorage */ "./app/lib/utils/GameStorage.ts");
/* harmony import */ var _enums_Direction__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../enums/Direction */ "./app/lib/enums/Direction.ts");










class Gameboard {
    constructor(canvas) {
        this.canvas = canvas;
        this.points = 0;
        this.prepareScene();
        this.attached = [];
        this.player = new _factories_PlayerFactory__WEBPACK_IMPORTED_MODULE_1__["default"](300, 50, this.canvas).create();
        this.gamepad = new _factories_GamepadFactory__WEBPACK_IMPORTED_MODULE_0__["default"](this.player).create();
        this.ball = new _factories_BallFactory__WEBPACK_IMPORTED_MODULE_3__["default"](30, this.canvas).create();
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
            case _enums_GameEvent__WEBPACK_IMPORTED_MODULE_7__["default"].BALL_BRICK_COLLISION:
                if (this.isBrick(state)) {
                    this.ball.detach(state);
                    this.unbind(state);
                    this.points += state.weight;
                    _utils_GameStorage__WEBPACK_IMPORTED_MODULE_8__["default"].saveRecord(this.points);
                    this.generateBricks();
                }
                break;
            case _enums_GameEvent__WEBPACK_IMPORTED_MODULE_7__["default"].BALL_FLOOR_COLLISION:
                if (this.isBall(state)) {
                    this.unbind(state);
                }
                break;
            case _enums_GameEvent__WEBPACK_IMPORTED_MODULE_7__["default"].BALL_PLAYER_COLLISION:
                if (this.isPlayer(state)) {
                    this.ball.changeDirection(_enums_Direction__WEBPACK_IMPORTED_MODULE_9__["HorizontalDirection"].CURRENT, _enums_Direction__WEBPACK_IMPORTED_MODULE_9__["VerticalDirection"].TOP);
                }
                break;
        }
        this.repaint();
    }
    generateBricks() {
        let hasBricks = this.attached.filter((el) => this.isBrick(el)).length > 0;
        if (!hasBricks) {
            let bricks = new _factories_BrickFactory__WEBPACK_IMPORTED_MODULE_2__["default"](4, this.canvas).create();
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
        return arg instanceof _Ball__WEBPACK_IMPORTED_MODULE_6__["default"];
    }
    isBrick(arg) {
        return arg instanceof _Brick__WEBPACK_IMPORTED_MODULE_5__["default"];
    }
    isPlayer(arg) {
        return arg instanceof _Player__WEBPACK_IMPORTED_MODULE_4__["default"];
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
/* harmony import */ var _utils_MediaLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/MediaLoader */ "./app/lib/utils/MediaLoader.ts");
/* harmony import */ var _Ball__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Ball */ "./app/lib/model/Ball.ts");
/* harmony import */ var _enums_GameEvent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../enums/GameEvent */ "./app/lib/enums/GameEvent.ts");





class Player extends _abstract_Solid2D__WEBPACK_IMPORTED_MODULE_0__["default"] {
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
        if (observable instanceof _Ball__WEBPACK_IMPORTED_MODULE_3__["default"]) {
            if (args == _enums_GameEvent__WEBPACK_IMPORTED_MODULE_4__["default"].BALL_MOVED && this.isColliding(observable)) {
                this.sound.play();
                this.notify(_enums_GameEvent__WEBPACK_IMPORTED_MODULE_4__["default"].BALL_PLAYER_COLLISION);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBwL2xpYi9jb21tYW5kcy9Nb3ZlQ29tbWFuZC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvbGliL2VudW1zL0RpcmVjdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9hcHAvbGliL2VudW1zL0dhbWVFdmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvbGliL2VudW1zL0dhbWVwYWRBY3Rpb25zLnRzIiwid2VicGFjazovLy8uL2FwcC9saWIvZmFjdG9yaWVzL0JhbGxGYWN0b3J5LnRzIiwid2VicGFjazovLy8uL2FwcC9saWIvZmFjdG9yaWVzL0JyaWNrRmFjdG9yeS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvbGliL2ZhY3Rvcmllcy9HYW1lcGFkRmFjdG9yeS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvbGliL2ZhY3Rvcmllcy9QbGF5ZXJGYWN0b3J5LnRzIiwid2VicGFjazovLy8uL2FwcC9saWIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2xpYi9tb2RlbC9CYWxsLnRzIiwid2VicGFjazovLy8uL2FwcC9saWIvbW9kZWwvQnJpY2sudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2xpYi9tb2RlbC9HYW1lYm9hcmQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2xpYi9tb2RlbC9QbGF5ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2xpYi9tb2RlbC9hYnN0cmFjdC9CYXNlR2FtZXBhZC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvbGliL21vZGVsL2Fic3RyYWN0L1NvbGlkMkQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2xpYi9tb2RlbC9hYnN0cmFjdC9pbXBsL0Rlc2t0b3BHYW1lcGFkLnRzIiwid2VicGFjazovLy8uL2FwcC9saWIvbW9kZWwvYWJzdHJhY3QvaW1wbC9Nb2JpbGVHYW1lcGFkLnRzIiwid2VicGFjazovLy8uL2FwcC9saWIvdXRpbHMvR2FtZVN0b3JhZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2xpYi91dGlscy9NZWRpYUxvYWRlci50cyIsIndlYnBhY2s6Ly8vLi9hcHAvbGliL3V0aWxzL2ludGVyZmFjZXMvT2JzZXJ2YWJsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2UsMEVBQVcsRUFBQzs7Ozs7Ozs7Ozs7OztBQ3hCM0I7QUFBQTtBQUFBO0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsa0RBQWtEO0FBQzVDO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLDhDQUE4Qzs7Ozs7Ozs7Ozs7OztBQ1gvQztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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Q0E7QUFDQSxtQkFBbUIsb0VBQWMsZ0JBQWdCLGlFQUFXO0FBQzVEO0FBQ0E7QUFDQSx3QkFBd0Isb0VBQWMsaUJBQWlCLGlFQUFXO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ2UsNkVBQWMsRUFBQzs7Ozs7Ozs7Ozs7OztBQ3JCOUI7QUFBQTtBQUFBO0FBQXlDO0FBQ3VCO0FBQ2hFLDRCQUE0QixvREFBVztBQUN2QztBQUNBLGNBQWMscUVBQWU7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZSw0RUFBYSxFQUFDOzs7Ozs7Ozs7Ozs7O0FDbEI3QjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNlLDBFQUFXLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNmM0I7QUFBQTtBQUFlO0FBQ2Y7QUFDQTtBQUNBLGtCQUFrQixVQUFVLEVBQUUsU0FBUztBQUN2QztBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsU0FBUyxFQUFFLFNBQVM7QUFDdEM7QUFDQTs7Ozs7Ozs7Ozs7OztBQ1RBO0FBQUE7QUFDQTtBQUNlLHlFQUFVLEVBQUMiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9hcHAvbGliL2luZGV4LnRzXCIpO1xuIiwiY2xhc3MgTW92ZUNvbW1hbmQge1xyXG4gICAgY29uc3RydWN0b3IobmV3WCwgbmV3WSwgbW92ZWFibGUpIHtcclxuICAgICAgICB0aGlzLnggPSBuZXdYO1xyXG4gICAgICAgIHRoaXMueSA9IG5ld1k7XHJcbiAgICAgICAgdGhpcy5tb3ZlYWJsZSA9IG1vdmVhYmxlO1xyXG4gICAgfVxyXG4gICAgZXhlY3V0ZSgpIHtcclxuICAgICAgICBsZXQgbmV4dFBvc2l0aW9uWCA9IHRoaXMueCArIHRoaXMubW92ZWFibGUud2lkdGg7XHJcbiAgICAgICAgbGV0IG5leHRQb3NpdGlvblkgPSB0aGlzLnkgKyB0aGlzLm1vdmVhYmxlLmhlaWdodDtcclxuICAgICAgICBpZiAodGhpcy54IDwgMCkge1xyXG4gICAgICAgICAgICB0aGlzLnggPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChuZXh0UG9zaXRpb25YID4gdGhpcy5tb3ZlYWJsZS5jb250ZXh0LndpZHRoKSB7XHJcbiAgICAgICAgICAgIHRoaXMueCA9IE1hdGguYWJzKHRoaXMubW92ZWFibGUuY29udGV4dC53aWR0aCAtIHRoaXMubW92ZWFibGUud2lkdGgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy55IDwgMCkge1xyXG4gICAgICAgICAgICB0aGlzLnkgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChuZXh0UG9zaXRpb25ZID4gdGhpcy5tb3ZlYWJsZS5jb250ZXh0LmhlaWdodCkge1xyXG4gICAgICAgICAgICB0aGlzLnkgPSBNYXRoLmFicyh0aGlzLm1vdmVhYmxlLmNvbnRleHQuaGVpZ2h0IC0gdGhpcy5tb3ZlYWJsZS5oZWlnaHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gW3RoaXMueCwgdGhpcy55XTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBNb3ZlQ29tbWFuZDtcclxuIiwiZXhwb3J0IHZhciBIb3Jpem9udGFsRGlyZWN0aW9uO1xyXG4oZnVuY3Rpb24gKEhvcml6b250YWxEaXJlY3Rpb24pIHtcclxuICAgIEhvcml6b250YWxEaXJlY3Rpb25bSG9yaXpvbnRhbERpcmVjdGlvbltcIkxFRlRcIl0gPSAtMV0gPSBcIkxFRlRcIjtcclxuICAgIEhvcml6b250YWxEaXJlY3Rpb25bSG9yaXpvbnRhbERpcmVjdGlvbltcIlJJR0hUXCJdID0gMV0gPSBcIlJJR0hUXCI7XHJcbiAgICBIb3Jpem9udGFsRGlyZWN0aW9uW0hvcml6b250YWxEaXJlY3Rpb25bXCJDVVJSRU5UXCJdID0gMF0gPSBcIkNVUlJFTlRcIjtcclxufSkoSG9yaXpvbnRhbERpcmVjdGlvbiB8fCAoSG9yaXpvbnRhbERpcmVjdGlvbiA9IHt9KSk7XHJcbmV4cG9ydCB2YXIgVmVydGljYWxEaXJlY3Rpb247XHJcbihmdW5jdGlvbiAoVmVydGljYWxEaXJlY3Rpb24pIHtcclxuICAgIFZlcnRpY2FsRGlyZWN0aW9uW1ZlcnRpY2FsRGlyZWN0aW9uW1wiVE9QXCJdID0gLTFdID0gXCJUT1BcIjtcclxuICAgIFZlcnRpY2FsRGlyZWN0aW9uW1ZlcnRpY2FsRGlyZWN0aW9uW1wiRE9XTlwiXSA9IDFdID0gXCJET1dOXCI7XHJcbiAgICBWZXJ0aWNhbERpcmVjdGlvbltWZXJ0aWNhbERpcmVjdGlvbltcIkNVUlJFTlRcIl0gPSAwXSA9IFwiQ1VSUkVOVFwiO1xyXG59KShWZXJ0aWNhbERpcmVjdGlvbiB8fCAoVmVydGljYWxEaXJlY3Rpb24gPSB7fSkpO1xyXG4iLCJ2YXIgR2FtZUV2ZW50O1xyXG4oZnVuY3Rpb24gKEdhbWVFdmVudCkge1xyXG4gICAgR2FtZUV2ZW50W0dhbWVFdmVudFtcIlBMQVlFUl9NT1ZFRFwiXSA9IDBdID0gXCJQTEFZRVJfTU9WRURcIjtcclxuICAgIEdhbWVFdmVudFtHYW1lRXZlbnRbXCJCQUxMX01PVkVEXCJdID0gMV0gPSBcIkJBTExfTU9WRURcIjtcclxuICAgIEdhbWVFdmVudFtHYW1lRXZlbnRbXCJCQUxMX1BMQVlFUl9DT0xMSVNJT05cIl0gPSAyXSA9IFwiQkFMTF9QTEFZRVJfQ09MTElTSU9OXCI7XHJcbiAgICBHYW1lRXZlbnRbR2FtZUV2ZW50W1wiQkFMTF9CUklDS19DT0xMSVNJT05cIl0gPSAzXSA9IFwiQkFMTF9CUklDS19DT0xMSVNJT05cIjtcclxuICAgIEdhbWVFdmVudFtHYW1lRXZlbnRbXCJCQUxMX0ZMT09SX0NPTExJU0lPTlwiXSA9IDRdID0gXCJCQUxMX0ZMT09SX0NPTExJU0lPTlwiO1xyXG59KShHYW1lRXZlbnQgfHwgKEdhbWVFdmVudCA9IHt9KSk7XHJcbmV4cG9ydCBkZWZhdWx0IEdhbWVFdmVudDtcclxuIiwiZXhwb3J0IHZhciBLZXlib2FyZEFjdGlvbjtcclxuKGZ1bmN0aW9uIChLZXlib2FyZEFjdGlvbikge1xyXG4gICAgS2V5Ym9hcmRBY3Rpb25bXCJMRUZUXCJdID0gXCJLZXlBXCI7XHJcbiAgICBLZXlib2FyZEFjdGlvbltcIlJJR0hUXCJdID0gXCJLZXlEXCI7XHJcbn0pKEtleWJvYXJkQWN0aW9uIHx8IChLZXlib2FyZEFjdGlvbiA9IHt9KSk7XHJcbmV4cG9ydCB2YXIgQXJyb3dBY3Rpb247XHJcbihmdW5jdGlvbiAoQXJyb3dBY3Rpb24pIHtcclxuICAgIEFycm93QWN0aW9uW1wiTEVGVFwiXSA9IFwiQXJyb3dMZWZ0XCI7XHJcbiAgICBBcnJvd0FjdGlvbltcIlJJR0hUXCJdID0gXCJBcnJvd1JpZ2h0XCI7XHJcbn0pKEFycm93QWN0aW9uIHx8IChBcnJvd0FjdGlvbiA9IHt9KSk7XHJcbmV4cG9ydCB2YXIgR2FtZXBhZExpc3RlbmVyO1xyXG4oZnVuY3Rpb24gKEdhbWVwYWRMaXN0ZW5lcikge1xyXG4gICAgR2FtZXBhZExpc3RlbmVyW1wiVE9VQ0hcIl0gPSBcIm9udG91Y2hzdGFydFwiO1xyXG4gICAgR2FtZXBhZExpc3RlbmVyW1wiS0VZQk9BUkRcIl0gPSBcIm9ua2V5ZG93blwiO1xyXG59KShHYW1lcGFkTGlzdGVuZXIgfHwgKEdhbWVwYWRMaXN0ZW5lciA9IHt9KSk7XHJcbiIsImltcG9ydCBCYWxsIGZyb20gXCIuLi9tb2RlbC9CYWxsXCI7XHJcbmNsYXNzIEJhbGxGYWN0b3J5IHtcclxuICAgIGNvbnN0cnVjdG9yKHdpZHRoLCBjb250ZXh0KSB7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gd2lkdGg7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcclxuICAgIH1cclxuICAgIGNyZWF0ZSgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IEJhbGwodGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsIHRoaXMuY29udGV4dCk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQmFsbEZhY3Rvcnk7XHJcbiIsImltcG9ydCBCcmljaywgeyBCcmlja1dlaWdodCB9IGZyb20gXCIuLi9tb2RlbC9Ccmlja1wiO1xyXG5jbGFzcyBCcmlja0ZhY3Rvcnkge1xyXG4gICAgY29uc3RydWN0b3IobGluZXMsIGNvbnRleHQpIHtcclxuICAgICAgICB0aGlzLmxpbmVzID0gbGluZXM7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcclxuICAgICAgICB0aGlzLmJyaWNrc1BlckNvbHVtbiA9IDI1O1xyXG4gICAgfVxyXG4gICAgY3JlYXRlKCkge1xyXG4gICAgICAgIGxldCBicmlja3MgPSBbXTtcclxuICAgICAgICBsZXQgbmV4dFBvc2l0aW9uID0geyB4OiAwLCB5OiAwIH07XHJcbiAgICAgICAgbGV0IGJyaWNrTGVuZ3RoID0gdGhpcy5jb250ZXh0LndpZHRoIC8gdGhpcy5icmlja3NQZXJDb2x1bW47XHJcbiAgICAgICAgZm9yIChsZXQgbGluZSA9IDA7IGxpbmUgPCB0aGlzLmxpbmVzOyBsaW5lKyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgY29sdW1uID0gMDsgY29sdW1uIDwgdGhpcy5icmlja3NQZXJDb2x1bW47IGNvbHVtbisrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYnJpY2tXZWlnaHQgPSB0aGlzLmdldEJyaWNrV2VpZ2h0KCk7XHJcbiAgICAgICAgICAgICAgICBicmlja3MucHVzaChuZXcgQnJpY2sobmV4dFBvc2l0aW9uLngsIG5leHRQb3NpdGlvbi55LCBicmlja0xlbmd0aCwgdGhpcy5jb250ZXh0LCBicmlja1dlaWdodCkpO1xyXG4gICAgICAgICAgICAgICAgbmV4dFBvc2l0aW9uLnggKz0gYnJpY2tMZW5ndGg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbmV4dFBvc2l0aW9uLnggPSAwO1xyXG4gICAgICAgICAgICBuZXh0UG9zaXRpb24ueSArPSBicmlja0xlbmd0aDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGJyaWNrcztcclxuICAgIH1cclxuICAgIGdldEJyaWNrV2VpZ2h0KCkge1xyXG4gICAgICAgIGxldCByYW5kb21XZWlnaHQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA0KTtcclxuICAgICAgICBzd2l0Y2ggKHJhbmRvbVdlaWdodCkge1xyXG4gICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gQnJpY2tXZWlnaHQuSFVHRTtcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEJyaWNrV2VpZ2h0LkhJR0g7XHJcbiAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBCcmlja1dlaWdodC5NRURJVU07XHJcbiAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgIHJldHVybiBCcmlja1dlaWdodC5MT1c7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gQnJpY2tXZWlnaHQuTE9XO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBCcmlja0ZhY3Rvcnk7XHJcbiIsImltcG9ydCBEZXNrdG9wR2FtZXBhZCBmcm9tIFwiLi4vbW9kZWwvYWJzdHJhY3QvaW1wbC9EZXNrdG9wR2FtZXBhZFwiO1xyXG5pbXBvcnQgTW9iaWxlR2FtZXBhZCBmcm9tIFwiLi4vbW9kZWwvYWJzdHJhY3QvaW1wbC9Nb2JpbGVHYW1lcGFkXCI7XHJcbmNsYXNzIEdhbWVwYWRGYWN0b3J5IHtcclxuICAgIGNvbnN0cnVjdG9yKHBsYXllcikge1xyXG4gICAgICAgIHRoaXMucGxheWVyID0gcGxheWVyO1xyXG4gICAgfVxyXG4gICAgY3JlYXRlKCkge1xyXG4gICAgICAgIGlmICgoJ29udG91Y2hzdGFydCcgaW4gd2luZG93KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IE1vYmlsZUdhbWVwYWQodGhpcy5wbGF5ZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBEZXNrdG9wR2FtZXBhZCh0aGlzLnBsYXllcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEdhbWVwYWRGYWN0b3J5O1xyXG4iLCJpbXBvcnQgUGxheWVyIGZyb20gXCIuLi9tb2RlbC9QbGF5ZXJcIjtcclxuY2xhc3MgUGxheWVyRmFjdG9yeSB7XHJcbiAgICBjb25zdHJ1Y3Rvcih3aWR0aCwgaGVpZ2h0LCBjb250ZXh0KSB7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XHJcbiAgICAgICAgdGhpcy5yZWNvcmQgPSB0aGlzLmxvYWRSZWNvcmQoKTtcclxuICAgIH1cclxuICAgIGNyZWF0ZSgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFBsYXllcih0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgdGhpcy5jb250ZXh0KTtcclxuICAgIH1cclxuICAgIGxvYWRSZWNvcmQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicmVjb3JkXCIpKTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXJGYWN0b3J5O1xyXG4iLCJpbXBvcnQgR2FtZWJvYXJkIGZyb20gXCIuL21vZGVsL0dhbWVib2FyZFwiO1xyXG5uZXcgR2FtZWJvYXJkKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZ2FtZWJvYXJkXCIpKTtcclxuIiwiaW1wb3J0IFNvbGlkMkQgZnJvbSBcIi4vYWJzdHJhY3QvU29saWQyRFwiO1xyXG5pbXBvcnQgTW92ZUNvbW1hbmQgZnJvbSBcIi4uL2NvbW1hbmRzL01vdmVDb21tYW5kXCI7XHJcbmltcG9ydCBNZWRpYUxvYWRlciBmcm9tIFwiLi4vdXRpbHMvTWVkaWFMb2FkZXJcIjtcclxuaW1wb3J0IEdhbWVFdmVudCBmcm9tIFwiLi4vZW51bXMvR2FtZUV2ZW50XCI7XHJcbmltcG9ydCB7IEhvcml6b250YWxEaXJlY3Rpb24sIFZlcnRpY2FsRGlyZWN0aW9uIH0gZnJvbSBcIi4uL2VudW1zL0RpcmVjdGlvblwiO1xyXG5jbGFzcyBCYWxsIGV4dGVuZHMgU29saWQyRCB7XHJcbiAgICBjb25zdHJ1Y3Rvcih3aWR0aCwgaGVpZ2h0LCBjb250ZXh0KSB7XHJcbiAgICAgICAgbGV0IGluaXRpYWxYID0gY29udGV4dC53aWR0aCAvIDI7XHJcbiAgICAgICAgY29uc29sZS5sb2coY29udGV4dC53aWR0aCk7XHJcbiAgICAgICAgbGV0IHN0YXRpY1kgPSBjb250ZXh0LmhlaWdodCAvIDI7XHJcbiAgICAgICAgbGV0IGltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgc3VwZXIoaW5pdGlhbFgsIHN0YXRpY1ksIHdpZHRoLCBoZWlnaHQsIGNvbnRleHQpO1xyXG4gICAgICAgIGltYWdlLnNyYyA9IE1lZGlhTG9hZGVyLmxvYWRTcHJpdGUoXCJiYWxsLnBuZ1wiKTtcclxuICAgICAgICB0aGlzLnNwcml0ZSA9IGltYWdlO1xyXG4gICAgICAgIHRoaXMudmVsb2NpdHkgPSAxMDtcclxuICAgICAgICB0aGlzLmR4ID0gdGhpcy52ZWxvY2l0eTtcclxuICAgICAgICB0aGlzLmR5ID0gdGhpcy52ZWxvY2l0eTtcclxuICAgICAgICB0aGlzLm1vdmUoKTtcclxuICAgIH1cclxuICAgIHBhaW50KCkge1xyXG4gICAgICAgIGxldCBjb250ZXh0ID0gdGhpcy5jb250ZXh0LmdldENvbnRleHQoXCIyZFwiKTtcclxuICAgICAgICBjb250ZXh0LmRyYXdJbWFnZSh0aGlzLnNwcml0ZSwgdGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuICAgIH1cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMudGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB0aGlzLm1vdmUoKSwgMTIpO1xyXG4gICAgfVxyXG4gICAgY2hhbmdlRGlyZWN0aW9uKHgsIHkpIHtcclxuICAgICAgICBpZiAoeCAhPSBIb3Jpem9udGFsRGlyZWN0aW9uLkNVUlJFTlQpIHtcclxuICAgICAgICAgICAgdGhpcy5keCA9IHRoaXMudmVsb2NpdHkgKiB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoeSAhPSBWZXJ0aWNhbERpcmVjdGlvbi5DVVJSRU5UKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZHkgPSB0aGlzLnZlbG9jaXR5ICogeTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBtb3ZlKCkge1xyXG4gICAgICAgIGxldCBjb21tYW5kID0gbmV3IE1vdmVDb21tYW5kKHRoaXMueCArIHRoaXMuZHgsIHRoaXMueSArIHRoaXMuZHksIHRoaXMpO1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBjb21tYW5kLmV4ZWN1dGUoKTtcclxuICAgICAgICB0aGlzLnggPSByZXN1bHRbMF07XHJcbiAgICAgICAgdGhpcy55ID0gcmVzdWx0WzFdO1xyXG4gICAgICAgIGlmICh0aGlzLnggKyB0aGlzLndpZHRoID49IHRoaXMuY29udGV4dC53aWR0aCkge1xyXG4gICAgICAgICAgICB0aGlzLmNoYW5nZURpcmVjdGlvbihIb3Jpem9udGFsRGlyZWN0aW9uLkxFRlQsIFZlcnRpY2FsRGlyZWN0aW9uLkNVUlJFTlQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLnggPT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmNoYW5nZURpcmVjdGlvbihIb3Jpem9udGFsRGlyZWN0aW9uLlJJR0hULCBWZXJ0aWNhbERpcmVjdGlvbi5DVVJSRU5UKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMueSArIHRoaXMuaGVpZ2h0ID49IHRoaXMuY29udGV4dC5oZWlnaHQpIHtcclxuICAgICAgICAgICAgdGhpcy5kZXN0cm95KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMueSA9PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlRGlyZWN0aW9uKEhvcml6b250YWxEaXJlY3Rpb24uQ1VSUkVOVCwgVmVydGljYWxEaXJlY3Rpb24uRE9XTik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubm90aWZ5KEdhbWVFdmVudC5CQUxMX01PVkVEKTtcclxuICAgIH1cclxuICAgIGRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5ub3RpZnkoR2FtZUV2ZW50LkJBTExfRkxPT1JfQ09MTElTSU9OKTtcclxuICAgICAgICBjbGVhckludGVydmFsKHRoaXMudGltZXIpO1xyXG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzLmZvckVhY2goKG9ic2VydmVyKSA9PiB0aGlzLmRldGFjaChvYnNlcnZlcikpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEJhbGw7XHJcbiIsImltcG9ydCBTb2xpZDJEIGZyb20gXCIuL2Fic3RyYWN0L1NvbGlkMkRcIjtcclxuaW1wb3J0IEJhbGwgZnJvbSBcIi4vQmFsbFwiO1xyXG5pbXBvcnQgTWVkaWFMb2FkZXIgZnJvbSBcIi4uL3V0aWxzL01lZGlhTG9hZGVyXCI7XHJcbmltcG9ydCBHYW1lRXZlbnQgZnJvbSBcIi4uL2VudW1zL0dhbWVFdmVudFwiO1xyXG5jbGFzcyBCcmljayBleHRlbmRzIFNvbGlkMkQge1xyXG4gICAgY29uc3RydWN0b3IoeCwgeSwgbGVuZ3RoLCBjb250ZXh0LCB3ZWlnaHQpIHtcclxuICAgICAgICBzdXBlcih4LCB5LCBsZW5ndGgsIGxlbmd0aCwgY29udGV4dCk7XHJcbiAgICAgICAgdGhpcy53ZWlnaHQgPSB3ZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5zb3VuZCA9IG5ldyBBdWRpbyhNZWRpYUxvYWRlci5sb2FkU291bmQoXCJjb2xsaXNpb24uZmxhY1wiKSk7XHJcbiAgICAgICAgdGhpcy5zb3VuZC52b2x1bWUgPSAwLjE1O1xyXG4gICAgICAgIHRoaXMuc2V0U3ByaXRlKHdlaWdodCk7XHJcbiAgICB9XHJcbiAgICBzZXRTcHJpdGUod2VpZ2h0KSB7XHJcbiAgICAgICAgbGV0IGltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgc3dpdGNoICh3ZWlnaHQpIHtcclxuICAgICAgICAgICAgY2FzZSBCcmlja1dlaWdodC5MT1c6XHJcbiAgICAgICAgICAgICAgICBpbWFnZS5zcmMgPSBNZWRpYUxvYWRlci5sb2FkU3ByaXRlKEJyaWNrU3ByaXRlLkxPVyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBCcmlja1dlaWdodC5NRURJVU06XHJcbiAgICAgICAgICAgICAgICBpbWFnZS5zcmMgPSBNZWRpYUxvYWRlci5sb2FkU3ByaXRlKEJyaWNrU3ByaXRlLk1FRElVTSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBCcmlja1dlaWdodC5ISUdIOlxyXG4gICAgICAgICAgICAgICAgaW1hZ2Uuc3JjID0gTWVkaWFMb2FkZXIubG9hZFNwcml0ZShCcmlja1Nwcml0ZS5ISUdIKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEJyaWNrV2VpZ2h0LkhVR0U6XHJcbiAgICAgICAgICAgICAgICBpbWFnZS5zcmMgPSBNZWRpYUxvYWRlci5sb2FkU3ByaXRlKEJyaWNrU3ByaXRlLkhVR0UpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc3ByaXRlID0gaW1hZ2U7XHJcbiAgICB9XHJcbiAgICB1cGRhdGUob2JzZXJ2YWJsZSwgYXJncykge1xyXG4gICAgICAgIGlmIChvYnNlcnZhYmxlIGluc3RhbmNlb2YgQmFsbCkge1xyXG4gICAgICAgICAgICBpZiAoYXJncyA9PSBHYW1lRXZlbnQuQkFMTF9NT1ZFRCAmJiB0aGlzLmlzQ29sbGlkaW5nKG9ic2VydmFibGUpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHBhaW50KCkge1xyXG4gICAgICAgIGxldCBjb250ZXh0ID0gdGhpcy5jb250ZXh0LmdldENvbnRleHQoXCIyZFwiKTtcclxuICAgICAgICBjb250ZXh0LmRyYXdJbWFnZSh0aGlzLnNwcml0ZSwgdGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuICAgIH1cclxuICAgIGRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5zb3VuZC5wbGF5KCk7XHJcbiAgICAgICAgdGhpcy5ub3RpZnkoR2FtZUV2ZW50LkJBTExfQlJJQ0tfQ09MTElTSU9OKTtcclxuICAgICAgICBzdXBlci5kZXN0cm95KCk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQnJpY2s7XHJcbmV4cG9ydCB2YXIgQnJpY2tXZWlnaHQ7XHJcbihmdW5jdGlvbiAoQnJpY2tXZWlnaHQpIHtcclxuICAgIEJyaWNrV2VpZ2h0W0JyaWNrV2VpZ2h0W1wiTE9XXCJdID0gMTBdID0gXCJMT1dcIjtcclxuICAgIEJyaWNrV2VpZ2h0W0JyaWNrV2VpZ2h0W1wiTUVESVVNXCJdID0gMjBdID0gXCJNRURJVU1cIjtcclxuICAgIEJyaWNrV2VpZ2h0W0JyaWNrV2VpZ2h0W1wiSElHSFwiXSA9IDMwXSA9IFwiSElHSFwiO1xyXG4gICAgQnJpY2tXZWlnaHRbQnJpY2tXZWlnaHRbXCJIVUdFXCJdID0gNTBdID0gXCJIVUdFXCI7XHJcbn0pKEJyaWNrV2VpZ2h0IHx8IChCcmlja1dlaWdodCA9IHt9KSk7XHJcbnZhciBCcmlja1Nwcml0ZTtcclxuKGZ1bmN0aW9uIChCcmlja1Nwcml0ZSkge1xyXG4gICAgQnJpY2tTcHJpdGVbXCJMT1dcIl0gPSBcIjEucG5nXCI7XHJcbiAgICBCcmlja1Nwcml0ZVtcIk1FRElVTVwiXSA9IFwiMi5wbmdcIjtcclxuICAgIEJyaWNrU3ByaXRlW1wiSElHSFwiXSA9IFwiMy5wbmdcIjtcclxuICAgIEJyaWNrU3ByaXRlW1wiSFVHRVwiXSA9IFwiNC5wbmdcIjtcclxufSkoQnJpY2tTcHJpdGUgfHwgKEJyaWNrU3ByaXRlID0ge30pKTtcclxuIiwiaW1wb3J0IEdhbWVwYWRGYWN0b3J5IGZyb20gXCIuLi9mYWN0b3JpZXMvR2FtZXBhZEZhY3RvcnlcIjtcclxuaW1wb3J0IFBsYXllckZhY3RvcnkgZnJvbSBcIi4uL2ZhY3Rvcmllcy9QbGF5ZXJGYWN0b3J5XCI7XHJcbmltcG9ydCBCcmlja0ZhY3RvcnkgZnJvbSBcIi4uL2ZhY3Rvcmllcy9Ccmlja0ZhY3RvcnlcIjtcclxuaW1wb3J0IEJhbGxGYWN0b3J5IGZyb20gXCIuLi9mYWN0b3JpZXMvQmFsbEZhY3RvcnlcIjtcclxuaW1wb3J0IFBsYXllciBmcm9tIFwiLi9QbGF5ZXJcIjtcclxuaW1wb3J0IEJyaWNrIGZyb20gXCIuL0JyaWNrXCI7XHJcbmltcG9ydCBCYWxsIGZyb20gXCIuL0JhbGxcIjtcclxuaW1wb3J0IEdhbWVFdmVudCBmcm9tIFwiLi4vZW51bXMvR2FtZUV2ZW50XCI7XHJcbmltcG9ydCBHYW1lU3RvcmFnZSBmcm9tIFwiLi4vdXRpbHMvR2FtZVN0b3JhZ2VcIjtcclxuaW1wb3J0IHsgSG9yaXpvbnRhbERpcmVjdGlvbiwgVmVydGljYWxEaXJlY3Rpb24gfSBmcm9tIFwiLi4vZW51bXMvRGlyZWN0aW9uXCI7XHJcbmNsYXNzIEdhbWVib2FyZCB7XHJcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMpIHtcclxuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcclxuICAgICAgICB0aGlzLnBvaW50cyA9IDA7XHJcbiAgICAgICAgdGhpcy5wcmVwYXJlU2NlbmUoKTtcclxuICAgICAgICB0aGlzLmF0dGFjaGVkID0gW107XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBuZXcgUGxheWVyRmFjdG9yeSgzMDAsIDUwLCB0aGlzLmNhbnZhcykuY3JlYXRlKCk7XHJcbiAgICAgICAgdGhpcy5nYW1lcGFkID0gbmV3IEdhbWVwYWRGYWN0b3J5KHRoaXMucGxheWVyKS5jcmVhdGUoKTtcclxuICAgICAgICB0aGlzLmJhbGwgPSBuZXcgQmFsbEZhY3RvcnkoMzAsIHRoaXMuY2FudmFzKS5jcmVhdGUoKTtcclxuICAgICAgICB0aGlzLmdlbmVyYXRlQnJpY2tzKCk7XHJcbiAgICAgICAgdGhpcy5iaW5kKHRoaXMucGxheWVyKTtcclxuICAgICAgICB0aGlzLmJpbmQodGhpcy5iYWxsKTtcclxuICAgICAgICB0aGlzLmJhbGwuYXR0YWNoKHRoaXMucGxheWVyKTtcclxuICAgICAgICB0aGlzLmJhbGwuYXR0YWNoKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuYmFsbC5zdGFydCgpO1xyXG4gICAgfVxyXG4gICAgcHJlcGFyZVNjZW5lKCkge1xyXG4gICAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcbiAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmJhY2tncm91bmQgPSBcIiMxOTE5MTlcIjtcclxuICAgIH1cclxuICAgIGJpbmQocGFpbnRhYmxlKSB7XHJcbiAgICAgICAgdGhpcy5hdHRhY2hlZC5wdXNoKHBhaW50YWJsZSk7XHJcbiAgICAgICAgcGFpbnRhYmxlLmF0dGFjaCh0aGlzKTtcclxuICAgICAgICBwYWludGFibGUucGFpbnQoKTtcclxuICAgIH1cclxuICAgIHVuYmluZChwYWludGFibGUpIHtcclxuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLmF0dGFjaGVkLmluZGV4T2YocGFpbnRhYmxlKTtcclxuICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xyXG4gICAgICAgICAgICB0aGlzLmF0dGFjaGVkLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdXBkYXRlKHN0YXRlLCBhcmdzKSB7XHJcbiAgICAgICAgc3dpdGNoIChhcmdzKSB7XHJcbiAgICAgICAgICAgIGNhc2UgR2FtZUV2ZW50LkJBTExfQlJJQ0tfQ09MTElTSU9OOlxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNCcmljayhzdGF0ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJhbGwuZGV0YWNoKHN0YXRlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVuYmluZChzdGF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb2ludHMgKz0gc3RhdGUud2VpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgIEdhbWVTdG9yYWdlLnNhdmVSZWNvcmQodGhpcy5wb2ludHMpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGVCcmlja3MoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEdhbWVFdmVudC5CQUxMX0ZMT09SX0NPTExJU0lPTjpcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzQmFsbChzdGF0ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVuYmluZChzdGF0ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBHYW1lRXZlbnQuQkFMTF9QTEFZRVJfQ09MTElTSU9OOlxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNQbGF5ZXIoc3RhdGUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5iYWxsLmNoYW5nZURpcmVjdGlvbihIb3Jpem9udGFsRGlyZWN0aW9uLkNVUlJFTlQsIFZlcnRpY2FsRGlyZWN0aW9uLlRPUCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5yZXBhaW50KCk7XHJcbiAgICB9XHJcbiAgICBnZW5lcmF0ZUJyaWNrcygpIHtcclxuICAgICAgICBsZXQgaGFzQnJpY2tzID0gdGhpcy5hdHRhY2hlZC5maWx0ZXIoKGVsKSA9PiB0aGlzLmlzQnJpY2soZWwpKS5sZW5ndGggPiAwO1xyXG4gICAgICAgIGlmICghaGFzQnJpY2tzKSB7XHJcbiAgICAgICAgICAgIGxldCBicmlja3MgPSBuZXcgQnJpY2tGYWN0b3J5KDQsIHRoaXMuY2FudmFzKS5jcmVhdGUoKTtcclxuICAgICAgICAgICAgYnJpY2tzLmZvckVhY2goKGJyaWNrKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJpbmQoYnJpY2spO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5iYWxsLmF0dGFjaChicmljayk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJlcGFpbnQoKSB7XHJcbiAgICAgICAgdGhpcy5jYW52YXNcclxuICAgICAgICAgICAgLmdldENvbnRleHQoXCIyZFwiKVxyXG4gICAgICAgICAgICAuY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xyXG4gICAgICAgIHRoaXMuYXR0YWNoZWQuZm9yRWFjaCgoZWwpID0+IGVsLnBhaW50KCkpO1xyXG4gICAgfVxyXG4gICAgaXNCYWxsKGFyZykge1xyXG4gICAgICAgIHJldHVybiBhcmcgaW5zdGFuY2VvZiBCYWxsO1xyXG4gICAgfVxyXG4gICAgaXNCcmljayhhcmcpIHtcclxuICAgICAgICByZXR1cm4gYXJnIGluc3RhbmNlb2YgQnJpY2s7XHJcbiAgICB9XHJcbiAgICBpc1BsYXllcihhcmcpIHtcclxuICAgICAgICByZXR1cm4gYXJnIGluc3RhbmNlb2YgUGxheWVyO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEdhbWVib2FyZDtcclxuIiwiaW1wb3J0IFNvbGlkMkQgZnJvbSBcIi4vYWJzdHJhY3QvU29saWQyRFwiO1xyXG5pbXBvcnQgTW92ZUNvbW1hbmQgZnJvbSBcIi4uL2NvbW1hbmRzL01vdmVDb21tYW5kXCI7XHJcbmltcG9ydCBNZWRpYUxvYWRlciBmcm9tIFwiLi4vdXRpbHMvTWVkaWFMb2FkZXJcIjtcclxuaW1wb3J0IEJhbGwgZnJvbSBcIi4vQmFsbFwiO1xyXG5pbXBvcnQgR2FtZUV2ZW50IGZyb20gXCIuLi9lbnVtcy9HYW1lRXZlbnRcIjtcclxuY2xhc3MgUGxheWVyIGV4dGVuZHMgU29saWQyRCB7XHJcbiAgICBjb25zdHJ1Y3Rvcih3aWR0aCwgaGVpZ2h0LCBjb250ZXh0KSB7XHJcbiAgICAgICAgbGV0IGluaXRpYWxYID0gKGNvbnRleHQud2lkdGggLSB3aWR0aCkgLyAyO1xyXG4gICAgICAgIGxldCBzdGF0aWNZID0gY29udGV4dC5oZWlnaHQgLSBoZWlnaHQ7XHJcbiAgICAgICAgc3VwZXIoaW5pdGlhbFgsIHN0YXRpY1ksIHdpZHRoLCBoZWlnaHQsIGNvbnRleHQpO1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZU1lZGlhKCk7XHJcbiAgICAgICAgdGhpcy5tb3ZlKDApO1xyXG4gICAgfVxyXG4gICAgaW5pdGlhbGl6ZU1lZGlhKCkge1xyXG4gICAgICAgIGxldCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIGltYWdlLnNyYyA9IE1lZGlhTG9hZGVyLmxvYWRTcHJpdGUoXCJwbGF5ZXIucG5nXCIpO1xyXG4gICAgICAgIHRoaXMuc3ByaXRlID0gaW1hZ2U7XHJcbiAgICAgICAgdGhpcy5zb3VuZCA9IG5ldyBBdWRpbyhNZWRpYUxvYWRlci5sb2FkU291bmQoXCJwbGF5ZXIub2dnXCIpKTtcclxuICAgICAgICB0aGlzLnNvdW5kLnZvbHVtZSA9IDAuMTU7XHJcbiAgICB9XHJcbiAgICB1cGRhdGUob2JzZXJ2YWJsZSwgYXJncykge1xyXG4gICAgICAgIGlmIChvYnNlcnZhYmxlIGluc3RhbmNlb2YgQmFsbCkge1xyXG4gICAgICAgICAgICBpZiAoYXJncyA9PSBHYW1lRXZlbnQuQkFMTF9NT1ZFRCAmJiB0aGlzLmlzQ29sbGlkaW5nKG9ic2VydmFibGUpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNvdW5kLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm90aWZ5KEdhbWVFdmVudC5CQUxMX1BMQVlFUl9DT0xMSVNJT04pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcGFpbnQoKSB7XHJcbiAgICAgICAgbGV0IGNvbnRleHQgPSB0aGlzLmNvbnRleHQuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKHRoaXMuc3ByaXRlLCB0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG4gICAgfVxyXG4gICAgbW92ZShkeCkge1xyXG4gICAgICAgIGxldCBjb21tYW5kID0gbmV3IE1vdmVDb21tYW5kKHRoaXMueCArIGR4LCB0aGlzLnksIHRoaXMpO1xyXG4gICAgICAgIHRoaXMueCA9IGNvbW1hbmQuZXhlY3V0ZSgpWzBdO1xyXG4gICAgICAgIHRoaXMubm90aWZ5KCk7XHJcbiAgICB9XHJcbiAgICBkZXN0cm95KCkgeyB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgUGxheWVyO1xyXG4iLCJjbGFzcyBCYXNlR2FtZXBhZCB7XHJcbiAgICBjb25zdHJ1Y3RvcihldmVudCkge1xyXG4gICAgICAgIGRvY3VtZW50W2V2ZW50XSA9IChwcmVzc2VkKSA9PiB0aGlzLnByb2Nlc3NDb21tYW5kKHByZXNzZWQpO1xyXG4gICAgfVxyXG4gICAgbW92ZShwbGF5ZXIsIHgpIHtcclxuICAgICAgICBwbGF5ZXIubW92ZSh4KTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBCYXNlR2FtZXBhZDtcclxuIiwiaW1wb3J0IE9ic2VydmFibGUgZnJvbSBcIi4uLy4uL3V0aWxzL2ludGVyZmFjZXMvT2JzZXJ2YWJsZVwiO1xyXG5jbGFzcyBTb2xpZDJEIGV4dGVuZHMgT2JzZXJ2YWJsZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcih4LCB5LCB3aWR0aCwgaGVpZ2h0LCBjb250ZXh0KSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoICsgMC41O1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0ICsgMC41O1xyXG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XHJcbiAgICAgICAgdGhpcy5vYnNlcnZlcnMgPSBbXTtcclxuICAgIH1cclxuICAgIGF0dGFjaChvYnNlcnZlcikge1xyXG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzLnB1c2gob2JzZXJ2ZXIpO1xyXG4gICAgfVxyXG4gICAgZGV0YWNoKG9ic2VydmVyKSB7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5vYnNlcnZlcnMuaW5kZXhPZihvYnNlcnZlcik7XHJcbiAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcclxuICAgICAgICAgICAgdGhpcy5vYnNlcnZlcnMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBub3RpZnkoYXJncykge1xyXG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzLmZvckVhY2goKG9ic2VydmVyKSA9PiBvYnNlcnZlci51cGRhdGUodGhpcywgYXJncykpO1xyXG4gICAgfVxyXG4gICAgaXNDb2xsaWRpbmcoc29saWQpIHtcclxuICAgICAgICBpZiAodGhpcy54IDwgc29saWQueCArIHNvbGlkLndpZHRoICYmXHJcbiAgICAgICAgICAgIHRoaXMueCArIHRoaXMud2lkdGggPiBzb2xpZC54ICYmXHJcbiAgICAgICAgICAgIHRoaXMueSA8IHNvbGlkLnkgKyBzb2xpZC5oZWlnaHQgJiZcclxuICAgICAgICAgICAgdGhpcy55ICsgdGhpcy5oZWlnaHQgPiBzb2xpZC55KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBnZXRYKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLng7XHJcbiAgICB9XHJcbiAgICBnZXRZKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnk7XHJcbiAgICB9XHJcbiAgICBwYWludCgpIHsgfVxyXG4gICAgZGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLm9ic2VydmVycy5mb3JFYWNoKChvYnNlcnZlcikgPT4gdGhpcy5kZXRhY2gob2JzZXJ2ZXIpKTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBTb2xpZDJEO1xyXG4iLCJpbXBvcnQgQmFzZUdhbWVwYWQgZnJvbSBcIi4uL0Jhc2VHYW1lcGFkXCI7XHJcbmltcG9ydCB7IEtleWJvYXJkQWN0aW9uLCBBcnJvd0FjdGlvbiwgR2FtZXBhZExpc3RlbmVyIH0gZnJvbSBcIi4uLy4uLy4uL2VudW1zL0dhbWVwYWRBY3Rpb25zXCI7XHJcbmNsYXNzIERlc2t0b3BHYW1lcGFkIGV4dGVuZHMgQmFzZUdhbWVwYWQge1xyXG4gICAgY29uc3RydWN0b3IocGxheWVyKSB7XHJcbiAgICAgICAgc3VwZXIoR2FtZXBhZExpc3RlbmVyLktFWUJPQVJEKTtcclxuICAgICAgICB0aGlzLnBsYXllciA9IHBsYXllcjtcclxuICAgICAgICB0aGlzLnN0ZXBzID0gTWF0aC5mbG9vcihwbGF5ZXIuY29udGV4dC53aWR0aCAvIDE1KTtcclxuICAgIH1cclxuICAgIHByb2Nlc3NDb21tYW5kKHByZXNzZWQpIHtcclxuICAgICAgICB0aGlzLmRvQWN0aW9uKHByZXNzZWQpO1xyXG4gICAgfVxyXG4gICAgZG9BY3Rpb24ocHJlc3NlZCkge1xyXG4gICAgICAgIGxldCBrZXkgPSBwcmVzc2VkLmNvZGU7XHJcbiAgICAgICAgaWYgKGtleSA9PSBLZXlib2FyZEFjdGlvbi5MRUZUIHx8IGtleSA9PSBBcnJvd0FjdGlvbi5MRUZUKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW92ZSh0aGlzLnBsYXllciwgLXRoaXMuc3RlcHMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChrZXkgPT0gS2V5Ym9hcmRBY3Rpb24uUklHSFQgfHwga2V5ID09IEFycm93QWN0aW9uLlJJR0hUKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW92ZSh0aGlzLnBsYXllciwgdGhpcy5zdGVwcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IERlc2t0b3BHYW1lcGFkO1xyXG4iLCJpbXBvcnQgQmFzZUdhbWVwYWQgZnJvbSBcIi4uL0Jhc2VHYW1lcGFkXCI7XHJcbmltcG9ydCB7IEdhbWVwYWRMaXN0ZW5lciB9IGZyb20gXCIuLi8uLi8uLi9lbnVtcy9HYW1lcGFkQWN0aW9uc1wiO1xyXG5jbGFzcyBNb2JpbGVHYW1lcGFkIGV4dGVuZHMgQmFzZUdhbWVwYWQge1xyXG4gICAgY29uc3RydWN0b3IocGxheWVyKSB7XHJcbiAgICAgICAgc3VwZXIoR2FtZXBhZExpc3RlbmVyLlRPVUNIKTtcclxuICAgICAgICB0aGlzLnBsYXllciA9IHBsYXllcjtcclxuICAgICAgICB0aGlzLnN0ZXBzID0gTWF0aC5mbG9vcihwbGF5ZXIuY29udGV4dC53aWR0aCAvIDE1KTtcclxuICAgIH1cclxuICAgIHByb2Nlc3NDb21tYW5kKHByZXNzZWQpIHtcclxuICAgICAgICBsZXQgc2NyZWVuV2lkdGggPSB0aGlzLnBsYXllci5jb250ZXh0LmNsaWVudFdpZHRoO1xyXG4gICAgICAgIGlmIChwcmVzc2VkLmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFggPiBzY3JlZW5XaWR0aCAvIDIpIHtcclxuICAgICAgICAgICAgdGhpcy5tb3ZlKHRoaXMucGxheWVyLCB0aGlzLnN0ZXBzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubW92ZSh0aGlzLnBsYXllciwgLXRoaXMuc3RlcHMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBNb2JpbGVHYW1lcGFkO1xyXG4iLCJjbGFzcyBHYW1lU3RvcmFnZSB7XHJcbiAgICBzdGF0aWMgc2F2ZVJlY29yZChyZWNvcmRWYWx1ZSkge1xyXG4gICAgICAgIGlmIChyZWNvcmRWYWx1ZSA+IHRoaXMuZ2V0UmVjb3JkKCkpIHtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5yZWNvcmRLZXksIHJlY29yZFZhbHVlLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHN0YXRpYyBnZXRSZWNvcmQoKSB7XHJcbiAgICAgICAgbGV0IHJlY29yZCA9IHBhcnNlSW50KGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMucmVjb3JkS2V5KSk7XHJcbiAgICAgICAgaWYgKE51bWJlci5pc1NhZmVJbnRlZ2VyKHJlY29yZCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlY29yZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcbn1cclxuR2FtZVN0b3JhZ2UucmVjb3JkS2V5ID0gXCJwbGF5ZXJfcmVjb3JkXCI7XHJcbmV4cG9ydCBkZWZhdWx0IEdhbWVTdG9yYWdlO1xyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBNZWRpYUxvYWRlciB7XHJcbiAgICBzdGF0aWMgbG9hZFNwcml0ZShmaWxlbmFtZSkge1xyXG4gICAgICAgIGxldCBzcHJpdGVEaXIgPSBcIi4vZGlzdC9zcHJpdGVzL1wiO1xyXG4gICAgICAgIHJldHVybiBgJHtzcHJpdGVEaXJ9JHtmaWxlbmFtZX1gO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGxvYWRTb3VuZChmaWxlbmFtZSkge1xyXG4gICAgICAgIGxldCBhdWRpb0RpciA9IFwiLi9kaXN0L3NvdW5kcy9cIjtcclxuICAgICAgICByZXR1cm4gYCR7YXVkaW9EaXJ9JHtmaWxlbmFtZX1gO1xyXG4gICAgfVxyXG59XHJcbiIsImNsYXNzIE9ic2VydmFibGUge1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IE9ic2VydmFibGU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=