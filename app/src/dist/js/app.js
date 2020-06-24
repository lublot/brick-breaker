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
/*! exports provided: KeyboardAction, ArrowAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyboardAction", function() { return KeyboardAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrowAction", function() { return ArrowAction; });
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
    }
    create() {
        return new _model_Player__WEBPACK_IMPORTED_MODULE_0__["default"](this.width, this.height, this.context);
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
/* harmony import */ var _factories_PlayerFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factories/PlayerFactory */ "./app/lib/factories/PlayerFactory.ts");
/* harmony import */ var _factories_BallFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./factories/BallFactory */ "./app/lib/factories/BallFactory.ts");
/* harmony import */ var _model_abstract_impl_DesktopGamepad__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model/abstract/impl/DesktopGamepad */ "./app/lib/model/abstract/impl/DesktopGamepad.ts");
/* harmony import */ var _model_Gameboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./model/Gameboard */ "./app/lib/model/Gameboard.ts");




const player = new _factories_PlayerFactory__WEBPACK_IMPORTED_MODULE_0__["default"](48, 6, document.querySelector("#gameboard")).create();
const ball = new _factories_BallFactory__WEBPACK_IMPORTED_MODULE_1__["default"](6, document.querySelector("#gameboard")).create();
const gamepad = new _model_abstract_impl_DesktopGamepad__WEBPACK_IMPORTED_MODULE_2__["default"](player);
const gameboard = new _model_Gameboard__WEBPACK_IMPORTED_MODULE_3__["default"](document.querySelector("#gameboard"));
gameboard.attachToContext(player);
gameboard.attachToContext(ball);
ball.start();
document.addEventListener("keydown", function (evt) {
    gamepad.doAction(evt);
});


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


class Ball extends _abstract_Solid2D__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(width, height, context) {
        let initialX = (context.width - width) / 2;
        let staticY = context.height - height;
        super(initialX, staticY, width, height, context);
        this.x = 0;
        this.directionX = 1;
        this.directionY = 1;
        this.gravity = 0.5;
        this.gravitySpeed = 0;
        this.move();
    }
    paint() {
        let context = this.context.getContext("2d");
        context.fillRect(this.x, this.y, this.width, this.height);
    }
    start() {
        setInterval(() => this.move(), 60);
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
        }
        else if (this.y == 0) {
            this.gravitySpeed += this.gravity + Math.random();
        }
        console.log(this.directionY);
        this.notify();
    }
}
/* harmony default export */ __webpack_exports__["default"] = (Ball);


/***/ }),

/***/ "./app/lib/model/Gameboard.ts":
/*!************************************!*\
  !*** ./app/lib/model/Gameboard.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Gameboard {
    constructor(canvas) {
        this.canvas = canvas;
        this.attached = [];
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
        context.fillRect(this.x, this.y, this.width, this.height);
    }
    move(dx) {
        let command = new _commands_MoveCommand__WEBPACK_IMPORTED_MODULE_1__["default"](this.x + dx, this.y, this);
        this.x = command.execute()[0];
        this.notify();
    }
}
/* harmony default export */ __webpack_exports__["default"] = (Player);


/***/ }),

/***/ "./app/lib/model/abstract/AbstractGamepad.ts":
/*!***************************************************!*\
  !*** ./app/lib/model/abstract/AbstractGamepad.ts ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class AbstractGamepad {
    move(player, x) {
        player.move(x);
    }
}
/* harmony default export */ __webpack_exports__["default"] = (AbstractGamepad);


/***/ }),

/***/ "./app/lib/model/abstract/Solid2D.ts":
/*!*******************************************!*\
  !*** ./app/lib/model/abstract/Solid2D.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Solid2D {
    constructor(x, y, width, height, context) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
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
/* harmony import */ var _AbstractGamepad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../AbstractGamepad */ "./app/lib/model/abstract/AbstractGamepad.ts");
/* harmony import */ var _enums_GamepadActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../enums/GamepadActions */ "./app/lib/enums/GamepadActions.ts");


class DesktopGamepad extends _AbstractGamepad__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(player) {
        super();
        this.player = player;
        this.steps = Math.floor(player.context.width / 15);
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


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBwL2xpYi9jb21tYW5kcy9Nb3ZlQ29tbWFuZC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvbGliL2VudW1zL0dhbWVwYWRBY3Rpb25zLnRzIiwid2VicGFjazovLy8uL2FwcC9saWIvZmFjdG9yaWVzL0JhbGxGYWN0b3J5LnRzIiwid2VicGFjazovLy8uL2FwcC9saWIvZmFjdG9yaWVzL1BsYXllckZhY3RvcnkudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2xpYi9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvbGliL21vZGVsL0JhbGwudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2xpYi9tb2RlbC9HYW1lYm9hcmQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2xpYi9tb2RlbC9QbGF5ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2xpYi9tb2RlbC9hYnN0cmFjdC9BYnN0cmFjdEdhbWVwYWQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2xpYi9tb2RlbC9hYnN0cmFjdC9Tb2xpZDJELnRzIiwid2VicGFjazovLy8uL2FwcC9saWIvbW9kZWwvYWJzdHJhY3QvaW1wbC9EZXNrdG9wR2FtZXBhZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMs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QUNBO0FBQ0E7QUFDZSw2RUFBYyxFQUFDIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vYXBwL2xpYi9pbmRleC50c1wiKTtcbiIsImNsYXNzIE1vdmVDb21tYW5kIHtcclxuICAgIGNvbnN0cnVjdG9yKG5ld1gsIG5ld1ksIG1vdmVhYmxlKSB7XHJcbiAgICAgICAgdGhpcy54ID0gbmV3WDtcclxuICAgICAgICB0aGlzLnkgPSBuZXdZO1xyXG4gICAgICAgIHRoaXMubW92ZWFibGUgPSBtb3ZlYWJsZTtcclxuICAgIH1cclxuICAgIGV4ZWN1dGUoKSB7XHJcbiAgICAgICAgbGV0IG5leHRQb3NpdGlvblggPSB0aGlzLnggKyB0aGlzLm1vdmVhYmxlLndpZHRoO1xyXG4gICAgICAgIGxldCBuZXh0UG9zaXRpb25ZID0gdGhpcy55ICsgdGhpcy5tb3ZlYWJsZS5oZWlnaHQ7XHJcbiAgICAgICAgaWYgKHRoaXMueCA8IDApIHtcclxuICAgICAgICAgICAgdGhpcy54ID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAobmV4dFBvc2l0aW9uWCA+IHRoaXMubW92ZWFibGUuY29udGV4dC53aWR0aCkge1xyXG4gICAgICAgICAgICB0aGlzLnggPSBNYXRoLmFicyh0aGlzLm1vdmVhYmxlLmNvbnRleHQud2lkdGggLSB0aGlzLm1vdmVhYmxlLndpZHRoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMueSA8IDApIHtcclxuICAgICAgICAgICAgdGhpcy55ID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAobmV4dFBvc2l0aW9uWSA+IHRoaXMubW92ZWFibGUuY29udGV4dC5oZWlnaHQpIHtcclxuICAgICAgICAgICAgdGhpcy55ID0gTWF0aC5hYnModGhpcy5tb3ZlYWJsZS5jb250ZXh0LmhlaWdodCAtIHRoaXMubW92ZWFibGUuaGVpZ2h0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFt0aGlzLngsIHRoaXMueV07XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTW92ZUNvbW1hbmQ7XHJcbiIsImV4cG9ydCB2YXIgS2V5Ym9hcmRBY3Rpb247XHJcbihmdW5jdGlvbiAoS2V5Ym9hcmRBY3Rpb24pIHtcclxuICAgIEtleWJvYXJkQWN0aW9uW1wiTEVGVFwiXSA9IFwiS2V5QVwiO1xyXG4gICAgS2V5Ym9hcmRBY3Rpb25bXCJSSUdIVFwiXSA9IFwiS2V5RFwiO1xyXG59KShLZXlib2FyZEFjdGlvbiB8fCAoS2V5Ym9hcmRBY3Rpb24gPSB7fSkpO1xyXG5leHBvcnQgdmFyIEFycm93QWN0aW9uO1xyXG4oZnVuY3Rpb24gKEFycm93QWN0aW9uKSB7XHJcbiAgICBBcnJvd0FjdGlvbltcIkxFRlRcIl0gPSBcIkFycm93TGVmdFwiO1xyXG4gICAgQXJyb3dBY3Rpb25bXCJSSUdIVFwiXSA9IFwiQXJyb3dSaWdodFwiO1xyXG59KShBcnJvd0FjdGlvbiB8fCAoQXJyb3dBY3Rpb24gPSB7fSkpO1xyXG4iLCJpbXBvcnQgQmFsbCBmcm9tIFwiLi4vbW9kZWwvQmFsbFwiO1xyXG5jbGFzcyBCYWxsRmFjdG9yeSB7XHJcbiAgICBjb25zdHJ1Y3Rvcih3aWR0aCwgY29udGV4dCkge1xyXG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IHdpZHRoO1xyXG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XHJcbiAgICB9XHJcbiAgICBjcmVhdGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBCYWxsKHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCB0aGlzLmNvbnRleHQpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEJhbGxGYWN0b3J5O1xyXG4iLCJpbXBvcnQgUGxheWVyIGZyb20gXCIuLi9tb2RlbC9QbGF5ZXJcIjtcclxuY2xhc3MgUGxheWVyRmFjdG9yeSB7XHJcbiAgICBjb25zdHJ1Y3Rvcih3aWR0aCwgaGVpZ2h0LCBjb250ZXh0KSB7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XHJcbiAgICB9XHJcbiAgICBjcmVhdGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQbGF5ZXIodGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsIHRoaXMuY29udGV4dCk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgUGxheWVyRmFjdG9yeTtcclxuIiwiaW1wb3J0IFBsYXllckZhY3RvcnkgZnJvbSBcIi4vZmFjdG9yaWVzL1BsYXllckZhY3RvcnlcIjtcclxuaW1wb3J0IEJhbGxGYWN0b3J5IGZyb20gXCIuL2ZhY3Rvcmllcy9CYWxsRmFjdG9yeVwiO1xyXG5pbXBvcnQgRGVza3RvcEdhbWVwYWQgZnJvbSBcIi4vbW9kZWwvYWJzdHJhY3QvaW1wbC9EZXNrdG9wR2FtZXBhZFwiO1xyXG5pbXBvcnQgR2FtZWJvYXJkIGZyb20gXCIuL21vZGVsL0dhbWVib2FyZFwiO1xyXG5jb25zdCBwbGF5ZXIgPSBuZXcgUGxheWVyRmFjdG9yeSg0OCwgNiwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNnYW1lYm9hcmRcIikpLmNyZWF0ZSgpO1xyXG5jb25zdCBiYWxsID0gbmV3IEJhbGxGYWN0b3J5KDYsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZ2FtZWJvYXJkXCIpKS5jcmVhdGUoKTtcclxuY29uc3QgZ2FtZXBhZCA9IG5ldyBEZXNrdG9wR2FtZXBhZChwbGF5ZXIpO1xyXG5jb25zdCBnYW1lYm9hcmQgPSBuZXcgR2FtZWJvYXJkKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZ2FtZWJvYXJkXCIpKTtcclxuZ2FtZWJvYXJkLmF0dGFjaFRvQ29udGV4dChwbGF5ZXIpO1xyXG5nYW1lYm9hcmQuYXR0YWNoVG9Db250ZXh0KGJhbGwpO1xyXG5iYWxsLnN0YXJ0KCk7XHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uIChldnQpIHtcclxuICAgIGdhbWVwYWQuZG9BY3Rpb24oZXZ0KTtcclxufSk7XHJcbiIsImltcG9ydCBTb2xpZDJEIGZyb20gXCIuL2Fic3RyYWN0L1NvbGlkMkRcIjtcclxuaW1wb3J0IE1vdmVDb21tYW5kIGZyb20gXCIuLi9jb21tYW5kcy9Nb3ZlQ29tbWFuZFwiO1xyXG5jbGFzcyBCYWxsIGV4dGVuZHMgU29saWQyRCB7XHJcbiAgICBjb25zdHJ1Y3Rvcih3aWR0aCwgaGVpZ2h0LCBjb250ZXh0KSB7XHJcbiAgICAgICAgbGV0IGluaXRpYWxYID0gKGNvbnRleHQud2lkdGggLSB3aWR0aCkgLyAyO1xyXG4gICAgICAgIGxldCBzdGF0aWNZID0gY29udGV4dC5oZWlnaHQgLSBoZWlnaHQ7XHJcbiAgICAgICAgc3VwZXIoaW5pdGlhbFgsIHN0YXRpY1ksIHdpZHRoLCBoZWlnaHQsIGNvbnRleHQpO1xyXG4gICAgICAgIHRoaXMueCA9IDA7XHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb25YID0gMTtcclxuICAgICAgICB0aGlzLmRpcmVjdGlvblkgPSAxO1xyXG4gICAgICAgIHRoaXMuZ3Jhdml0eSA9IDAuNTtcclxuICAgICAgICB0aGlzLmdyYXZpdHlTcGVlZCA9IDA7XHJcbiAgICAgICAgdGhpcy5tb3ZlKCk7XHJcbiAgICB9XHJcbiAgICBwYWludCgpIHtcclxuICAgICAgICBsZXQgY29udGV4dCA9IHRoaXMuY29udGV4dC5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgICAgICAgY29udGV4dC5maWxsUmVjdCh0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG4gICAgfVxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4gdGhpcy5tb3ZlKCksIDYwKTtcclxuICAgIH1cclxuICAgIG1vdmUoKSB7XHJcbiAgICAgICAgbGV0IGNvbW1hbmQgPSBuZXcgTW92ZUNvbW1hbmQodGhpcy54ICsgMTAgKiB0aGlzLmRpcmVjdGlvblgsIHRoaXMueSArIDEwICogdGhpcy5ncmF2aXR5U3BlZWQsIHRoaXMpO1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBjb21tYW5kLmV4ZWN1dGUoKTtcclxuICAgICAgICB0aGlzLnggPSByZXN1bHRbMF07XHJcbiAgICAgICAgdGhpcy55ID0gcmVzdWx0WzFdO1xyXG4gICAgICAgIGlmICh0aGlzLnggKyB0aGlzLndpZHRoID49IHRoaXMuY29udGV4dC53aWR0aCkge1xyXG4gICAgICAgICAgICB0aGlzLmRpcmVjdGlvblggPSAtMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy54ID09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb25YID0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMueSArIHRoaXMuaGVpZ2h0ID49IHRoaXMuY29udGV4dC5oZWlnaHQpIHtcclxuICAgICAgICAgICAgdGhpcy5ncmF2aXR5U3BlZWQgLT0gdGhpcy5ncmF2aXR5O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLnkgPT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmdyYXZpdHlTcGVlZCArPSB0aGlzLmdyYXZpdHkgKyBNYXRoLnJhbmRvbSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmRpcmVjdGlvblkpO1xyXG4gICAgICAgIHRoaXMubm90aWZ5KCk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQmFsbDtcclxuIiwiY2xhc3MgR2FtZWJvYXJkIHtcclxuICAgIGNvbnN0cnVjdG9yKGNhbnZhcykge1xyXG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xyXG4gICAgICAgIHRoaXMuYXR0YWNoZWQgPSBbXTtcclxuICAgIH1cclxuICAgIGF0dGFjaFRvQ29udGV4dChwYWludGFibGUpIHtcclxuICAgICAgICB0aGlzLmF0dGFjaGVkLnB1c2gocGFpbnRhYmxlKTtcclxuICAgICAgICBwYWludGFibGUuYXR0YWNoKHRoaXMpO1xyXG4gICAgICAgIHBhaW50YWJsZS5wYWludCgpO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlKHN0YXRlLCBhcmdzKSB7XHJcbiAgICAgICAgdGhpcy5yZXBhaW50KCk7XHJcbiAgICB9XHJcbiAgICByZXBhaW50KCkge1xyXG4gICAgICAgIHRoaXMuY2FudmFzXHJcbiAgICAgICAgICAgIC5nZXRDb250ZXh0KFwiMmRcIilcclxuICAgICAgICAgICAgLmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcclxuICAgICAgICB0aGlzLmF0dGFjaGVkLmZvckVhY2goKGVsKSA9PiBlbC5wYWludCgpKTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBHYW1lYm9hcmQ7XHJcbiIsImltcG9ydCBTb2xpZDJEIGZyb20gXCIuL2Fic3RyYWN0L1NvbGlkMkRcIjtcclxuaW1wb3J0IE1vdmVDb21tYW5kIGZyb20gXCIuLi9jb21tYW5kcy9Nb3ZlQ29tbWFuZFwiO1xyXG5jbGFzcyBQbGF5ZXIgZXh0ZW5kcyBTb2xpZDJEIHtcclxuICAgIGNvbnN0cnVjdG9yKHdpZHRoLCBoZWlnaHQsIGNvbnRleHQpIHtcclxuICAgICAgICBsZXQgaW5pdGlhbFggPSAoY29udGV4dC53aWR0aCAtIHdpZHRoKSAvIDI7XHJcbiAgICAgICAgbGV0IHN0YXRpY1kgPSBjb250ZXh0LmhlaWdodCAtIGhlaWdodDtcclxuICAgICAgICBzdXBlcihpbml0aWFsWCwgc3RhdGljWSwgd2lkdGgsIGhlaWdodCwgY29udGV4dCk7XHJcbiAgICAgICAgdGhpcy5tb3ZlKDApO1xyXG4gICAgfVxyXG4gICAgcGFpbnQoKSB7XHJcbiAgICAgICAgbGV0IGNvbnRleHQgPSB0aGlzLmNvbnRleHQuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gICAgICAgIGNvbnRleHQuZmlsbFJlY3QodGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuICAgIH1cclxuICAgIG1vdmUoZHgpIHtcclxuICAgICAgICBsZXQgY29tbWFuZCA9IG5ldyBNb3ZlQ29tbWFuZCh0aGlzLnggKyBkeCwgdGhpcy55LCB0aGlzKTtcclxuICAgICAgICB0aGlzLnggPSBjb21tYW5kLmV4ZWN1dGUoKVswXTtcclxuICAgICAgICB0aGlzLm5vdGlmeSgpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFBsYXllcjtcclxuIiwiY2xhc3MgQWJzdHJhY3RHYW1lcGFkIHtcclxuICAgIG1vdmUocGxheWVyLCB4KSB7XHJcbiAgICAgICAgcGxheWVyLm1vdmUoeCk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQWJzdHJhY3RHYW1lcGFkO1xyXG4iLCJjbGFzcyBTb2xpZDJEIHtcclxuICAgIGNvbnN0cnVjdG9yKHgsIHksIHdpZHRoLCBoZWlnaHQsIGNvbnRleHQpIHtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XHJcbiAgICAgICAgdGhpcy5vYnNlcnZhYmxlcyA9IFtdO1xyXG4gICAgfVxyXG4gICAgYXR0YWNoKG9ic2VydmVyKSB7XHJcbiAgICAgICAgdGhpcy5vYnNlcnZhYmxlcy5wdXNoKG9ic2VydmVyKTtcclxuICAgIH1cclxuICAgIGRldGFjaChvYnNlcnZlcikge1xyXG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMub2JzZXJ2YWJsZXMuaW5kZXhPZihvYnNlcnZlcik7XHJcbiAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcclxuICAgICAgICAgICAgdGhpcy5vYnNlcnZhYmxlcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG5vdGlmeShhcmdzKSB7XHJcbiAgICAgICAgdGhpcy5vYnNlcnZhYmxlcy5mb3JFYWNoKChvYnNlcnZlcikgPT4gb2JzZXJ2ZXIudXBkYXRlKHRoaXMsIGFyZ3MpKTtcclxuICAgIH1cclxuICAgIHBhaW50KCkgeyB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgU29saWQyRDtcclxuIiwiaW1wb3J0IEFic3RyYWN0R2FtZXBhZCBmcm9tIFwiLi4vQWJzdHJhY3RHYW1lcGFkXCI7XHJcbmltcG9ydCB7IEtleWJvYXJkQWN0aW9uLCBBcnJvd0FjdGlvbiB9IGZyb20gXCIuLi8uLi8uLi9lbnVtcy9HYW1lcGFkQWN0aW9uc1wiO1xyXG5jbGFzcyBEZXNrdG9wR2FtZXBhZCBleHRlbmRzIEFic3RyYWN0R2FtZXBhZCB7XHJcbiAgICBjb25zdHJ1Y3RvcihwbGF5ZXIpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMucGxheWVyID0gcGxheWVyO1xyXG4gICAgICAgIHRoaXMuc3RlcHMgPSBNYXRoLmZsb29yKHBsYXllci5jb250ZXh0LndpZHRoIC8gMTUpO1xyXG4gICAgfVxyXG4gICAgZG9BY3Rpb24ocHJlc3NlZCkge1xyXG4gICAgICAgIGxldCBrZXkgPSBwcmVzc2VkLmNvZGU7XHJcbiAgICAgICAgaWYgKGtleSA9PSBLZXlib2FyZEFjdGlvbi5MRUZUIHx8IGtleSA9PSBBcnJvd0FjdGlvbi5MRUZUKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW92ZSh0aGlzLnBsYXllciwgLXRoaXMuc3RlcHMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChrZXkgPT0gS2V5Ym9hcmRBY3Rpb24uUklHSFQgfHwga2V5ID09IEFycm93QWN0aW9uLlJJR0hUKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW92ZSh0aGlzLnBsYXllciwgdGhpcy5zdGVwcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IERlc2t0b3BHYW1lcGFkO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9