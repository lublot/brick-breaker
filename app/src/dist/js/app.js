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


class Gameboard {
    constructor(canvas) {
        this.canvas = canvas;
        this.attached = [];
        this.player = new _factories_PlayerFactory__WEBPACK_IMPORTED_MODULE_1__["default"](48, 6, document.querySelector("#gameboard")).create();
        this.gamepad = new _factories_GamepadFactory__WEBPACK_IMPORTED_MODULE_0__["default"](this.player).create();
        this.attachToContext(this.player);
        this.attachControls();
    }
    attachToContext(paintable) {
        this.attached.push(paintable);
        paintable.attach(this);
        paintable.paint();
    }
    attachControls() {
        this.canvas.addEventListener("keydown", function (evt) {
            this.processCommand(evt);
        }.bind(this));
        this.canvas.addEventListener("touchstart", function (evt) {
            evt.preventDefault();
            this.processCommand(evt);
        }.bind(this));
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

/***/ "./app/lib/model/abstract/BaseGamepad.ts":
/*!***********************************************!*\
  !*** ./app/lib/model/abstract/BaseGamepad.ts ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class BaseGamepad {
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
/* harmony import */ var _BaseGamepad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../BaseGamepad */ "./app/lib/model/abstract/BaseGamepad.ts");
/* harmony import */ var _enums_GamepadActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../enums/GamepadActions */ "./app/lib/enums/GamepadActions.ts");


class DesktopGamepad extends _BaseGamepad__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(player) {
        super();
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

class MobileGamepad extends _BaseGamepad__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(player) {
        super();
        this.player = player;
        this.steps = Math.floor(player.context.width / 15);
    }
    processCommand(pressed) {
        console.log(pressed);
        let screenWidth = this.player.context.clientWidth;
        console.log(pressed.changedTouches[0].clientX, screenWidth);
        if (pressed.changedTouches[0].clientX > screenWidth / 2) {
            this.move(this.player, this.steps);
        }
        else {
            this.move(this.player, -this.steps);
        }
    }
}
/* harmony default export */ __webpack_exports__["default"] = (MobileGamepad);


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBwL2xpYi9jb21tYW5kcy9Nb3ZlQ29tbWFuZC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvbGliL2VudW1zL0dhbWVwYWRBY3Rpb25zLnRzIiwid2VicGFjazovLy8uL2FwcC9saWIvZmFjdG9yaWVzL0dhbWVwYWRGYWN0b3J5LnRzIiwid2VicGFjazovLy8uL2FwcC9saWIvZmFjdG9yaWVzL1BsYXllckZhY3RvcnkudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2xpYi9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvbGliL21vZGVsL0dhbWVib2FyZC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvbGliL21vZGVsL1BsYXllci50cyIsIndlYnBhY2s6Ly8vLi9hcHAvbGliL21vZGVsL2Fic3RyYWN0L0Jhc2VHYW1lcGFkLnRzIiwid2VicGFjazovLy8uL2FwcC9saWIvbW9kZWwvYWJzdHJhY3QvU29saWQyRC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvbGliL21vZGVsL2Fic3RyYWN0L2ltcGwvRGVza3RvcEdhbWVwYWQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2xpYi9tb2RlbC9hYnN0cmFjdC9pbXBsL01vYmlsZUdhbWVwYWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7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LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9hcHAvbGliL2luZGV4LnRzXCIpO1xuIiwiY2xhc3MgTW92ZUNvbW1hbmQge1xyXG4gICAgY29uc3RydWN0b3IobmV3WCwgbmV3WSwgbW92ZWFibGUpIHtcclxuICAgICAgICB0aGlzLnggPSBuZXdYO1xyXG4gICAgICAgIHRoaXMueSA9IG5ld1k7XHJcbiAgICAgICAgdGhpcy5tb3ZlYWJsZSA9IG1vdmVhYmxlO1xyXG4gICAgfVxyXG4gICAgZXhlY3V0ZSgpIHtcclxuICAgICAgICBsZXQgbmV4dFBvc2l0aW9uWCA9IHRoaXMueCArIHRoaXMubW92ZWFibGUud2lkdGg7XHJcbiAgICAgICAgbGV0IG5leHRQb3NpdGlvblkgPSB0aGlzLnkgKyB0aGlzLm1vdmVhYmxlLmhlaWdodDtcclxuICAgICAgICBpZiAodGhpcy54IDwgMCkge1xyXG4gICAgICAgICAgICB0aGlzLnggPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChuZXh0UG9zaXRpb25YID4gdGhpcy5tb3ZlYWJsZS5jb250ZXh0LndpZHRoKSB7XHJcbiAgICAgICAgICAgIHRoaXMueCA9IE1hdGguYWJzKHRoaXMubW92ZWFibGUuY29udGV4dC53aWR0aCAtIHRoaXMubW92ZWFibGUud2lkdGgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy55IDwgMCkge1xyXG4gICAgICAgICAgICB0aGlzLnkgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChuZXh0UG9zaXRpb25ZID4gdGhpcy5tb3ZlYWJsZS5jb250ZXh0LmhlaWdodCkge1xyXG4gICAgICAgICAgICB0aGlzLnkgPSBNYXRoLmFicyh0aGlzLm1vdmVhYmxlLmNvbnRleHQuaGVpZ2h0IC0gdGhpcy5tb3ZlYWJsZS5oZWlnaHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gW3RoaXMueCwgdGhpcy55XTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBNb3ZlQ29tbWFuZDtcclxuIiwiZXhwb3J0IHZhciBLZXlib2FyZEFjdGlvbjtcclxuKGZ1bmN0aW9uIChLZXlib2FyZEFjdGlvbikge1xyXG4gICAgS2V5Ym9hcmRBY3Rpb25bXCJMRUZUXCJdID0gXCJLZXlBXCI7XHJcbiAgICBLZXlib2FyZEFjdGlvbltcIlJJR0hUXCJdID0gXCJLZXlEXCI7XHJcbn0pKEtleWJvYXJkQWN0aW9uIHx8IChLZXlib2FyZEFjdGlvbiA9IHt9KSk7XHJcbmV4cG9ydCB2YXIgQXJyb3dBY3Rpb247XHJcbihmdW5jdGlvbiAoQXJyb3dBY3Rpb24pIHtcclxuICAgIEFycm93QWN0aW9uW1wiTEVGVFwiXSA9IFwiQXJyb3dMZWZ0XCI7XHJcbiAgICBBcnJvd0FjdGlvbltcIlJJR0hUXCJdID0gXCJBcnJvd1JpZ2h0XCI7XHJcbn0pKEFycm93QWN0aW9uIHx8IChBcnJvd0FjdGlvbiA9IHt9KSk7XHJcbiIsImltcG9ydCBEZXNrdG9wR2FtZXBhZCBmcm9tIFwiLi4vbW9kZWwvYWJzdHJhY3QvaW1wbC9EZXNrdG9wR2FtZXBhZFwiO1xyXG5pbXBvcnQgTW9iaWxlR2FtZXBhZCBmcm9tIFwiLi4vbW9kZWwvYWJzdHJhY3QvaW1wbC9Nb2JpbGVHYW1lcGFkXCI7XHJcbmNsYXNzIEdhbWVwYWRGYWN0b3J5IHtcclxuICAgIGNvbnN0cnVjdG9yKHBsYXllcikge1xyXG4gICAgICAgIHRoaXMucGxheWVyID0gcGxheWVyO1xyXG4gICAgfVxyXG4gICAgY3JlYXRlKCkge1xyXG4gICAgICAgIGlmICgoJ29udG91Y2hzdGFydCcgaW4gd2luZG93KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IE1vYmlsZUdhbWVwYWQodGhpcy5wbGF5ZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBEZXNrdG9wR2FtZXBhZCh0aGlzLnBsYXllcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEdhbWVwYWRGYWN0b3J5O1xyXG4iLCJpbXBvcnQgUGxheWVyIGZyb20gXCIuLi9tb2RlbC9QbGF5ZXJcIjtcclxuY2xhc3MgUGxheWVyRmFjdG9yeSB7XHJcbiAgICBjb25zdHJ1Y3Rvcih3aWR0aCwgaGVpZ2h0LCBjb250ZXh0KSB7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XHJcbiAgICAgICAgdGhpcy5yZWNvcmQgPSB0aGlzLmxvYWRSZWNvcmQoKTtcclxuICAgIH1cclxuICAgIGNyZWF0ZSgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFBsYXllcih0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgdGhpcy5jb250ZXh0KTtcclxuICAgIH1cclxuICAgIGxvYWRSZWNvcmQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicmVjb3JkXCIpKTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXJGYWN0b3J5O1xyXG4iLCJpbXBvcnQgR2FtZWJvYXJkIGZyb20gXCIuL21vZGVsL0dhbWVib2FyZFwiO1xyXG5jb25zdCBnYW1lYm9hcmQgPSBuZXcgR2FtZWJvYXJkKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZ2FtZWJvYXJkXCIpKTtcclxuIiwiaW1wb3J0IEdhbWVwYWRGYWN0b3J5IGZyb20gXCIuLi9mYWN0b3JpZXMvR2FtZXBhZEZhY3RvcnlcIjtcclxuaW1wb3J0IFBsYXllckZhY3RvcnkgZnJvbSBcIi4uL2ZhY3Rvcmllcy9QbGF5ZXJGYWN0b3J5XCI7XHJcbmNsYXNzIEdhbWVib2FyZCB7XHJcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMpIHtcclxuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcclxuICAgICAgICB0aGlzLmF0dGFjaGVkID0gW107XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBuZXcgUGxheWVyRmFjdG9yeSg0OCwgNiwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNnYW1lYm9hcmRcIikpLmNyZWF0ZSgpO1xyXG4gICAgICAgIHRoaXMuZ2FtZXBhZCA9IG5ldyBHYW1lcGFkRmFjdG9yeSh0aGlzLnBsYXllcikuY3JlYXRlKCk7XHJcbiAgICAgICAgdGhpcy5hdHRhY2hUb0NvbnRleHQodGhpcy5wbGF5ZXIpO1xyXG4gICAgICAgIHRoaXMuYXR0YWNoQ29udHJvbHMoKTtcclxuICAgIH1cclxuICAgIGF0dGFjaFRvQ29udGV4dChwYWludGFibGUpIHtcclxuICAgICAgICB0aGlzLmF0dGFjaGVkLnB1c2gocGFpbnRhYmxlKTtcclxuICAgICAgICBwYWludGFibGUuYXR0YWNoKHRoaXMpO1xyXG4gICAgICAgIHBhaW50YWJsZS5wYWludCgpO1xyXG4gICAgfVxyXG4gICAgYXR0YWNoQ29udHJvbHMoKSB7XHJcbiAgICAgICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgICAgICAgICB0aGlzLnByb2Nlc3NDb21tYW5kKGV2dCk7XHJcbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcclxuICAgICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCBmdW5jdGlvbiAoZXZ0KSB7XHJcbiAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB0aGlzLnByb2Nlc3NDb21tYW5kKGV2dCk7XHJcbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuICAgIHVwZGF0ZShzdGF0ZSwgYXJncykge1xyXG4gICAgICAgIHRoaXMucmVwYWludCgpO1xyXG4gICAgfVxyXG4gICAgcmVwYWludCgpIHtcclxuICAgICAgICB0aGlzLmNhbnZhc1xyXG4gICAgICAgICAgICAuZ2V0Q29udGV4dChcIjJkXCIpXHJcbiAgICAgICAgICAgIC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XHJcbiAgICAgICAgdGhpcy5hdHRhY2hlZC5mb3JFYWNoKChlbCkgPT4gZWwucGFpbnQoKSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgR2FtZWJvYXJkO1xyXG4iLCJpbXBvcnQgU29saWQyRCBmcm9tIFwiLi9hYnN0cmFjdC9Tb2xpZDJEXCI7XHJcbmltcG9ydCBNb3ZlQ29tbWFuZCBmcm9tIFwiLi4vY29tbWFuZHMvTW92ZUNvbW1hbmRcIjtcclxuY2xhc3MgUGxheWVyIGV4dGVuZHMgU29saWQyRCB7XHJcbiAgICBjb25zdHJ1Y3Rvcih3aWR0aCwgaGVpZ2h0LCBjb250ZXh0KSB7XHJcbiAgICAgICAgbGV0IGluaXRpYWxYID0gKGNvbnRleHQud2lkdGggLSB3aWR0aCkgLyAyO1xyXG4gICAgICAgIGxldCBzdGF0aWNZID0gY29udGV4dC5oZWlnaHQgLSBoZWlnaHQ7XHJcbiAgICAgICAgc3VwZXIoaW5pdGlhbFgsIHN0YXRpY1ksIHdpZHRoLCBoZWlnaHQsIGNvbnRleHQpO1xyXG4gICAgICAgIHRoaXMubW92ZSgwKTtcclxuICAgIH1cclxuICAgIHBhaW50KCkge1xyXG4gICAgICAgIGxldCBjb250ZXh0ID0gdGhpcy5jb250ZXh0LmdldENvbnRleHQoXCIyZFwiKTtcclxuICAgICAgICBjb250ZXh0LmZpbGxSZWN0KHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcbiAgICB9XHJcbiAgICBtb3ZlKGR4KSB7XHJcbiAgICAgICAgbGV0IGNvbW1hbmQgPSBuZXcgTW92ZUNvbW1hbmQodGhpcy54ICsgZHgsIHRoaXMueSwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy54ID0gY29tbWFuZC5leGVjdXRlKClbMF07XHJcbiAgICAgICAgdGhpcy5ub3RpZnkoKTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7XHJcbiIsImNsYXNzIEJhc2VHYW1lcGFkIHtcclxuICAgIG1vdmUocGxheWVyLCB4KSB7XHJcbiAgICAgICAgcGxheWVyLm1vdmUoeCk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQmFzZUdhbWVwYWQ7XHJcbiIsImNsYXNzIFNvbGlkMkQge1xyXG4gICAgY29uc3RydWN0b3IoeCwgeSwgd2lkdGgsIGhlaWdodCwgY29udGV4dCkge1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcclxuICAgICAgICB0aGlzLm9ic2VydmFibGVzID0gW107XHJcbiAgICB9XHJcbiAgICBhdHRhY2gob2JzZXJ2ZXIpIHtcclxuICAgICAgICB0aGlzLm9ic2VydmFibGVzLnB1c2gob2JzZXJ2ZXIpO1xyXG4gICAgfVxyXG4gICAgZGV0YWNoKG9ic2VydmVyKSB7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5vYnNlcnZhYmxlcy5pbmRleE9mKG9ic2VydmVyKTtcclxuICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xyXG4gICAgICAgICAgICB0aGlzLm9ic2VydmFibGVzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbm90aWZ5KGFyZ3MpIHtcclxuICAgICAgICB0aGlzLm9ic2VydmFibGVzLmZvckVhY2goKG9ic2VydmVyKSA9PiBvYnNlcnZlci51cGRhdGUodGhpcywgYXJncykpO1xyXG4gICAgfVxyXG4gICAgcGFpbnQoKSB7IH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBTb2xpZDJEO1xyXG4iLCJpbXBvcnQgQmFzZUdhbWVwYWQgZnJvbSBcIi4uL0Jhc2VHYW1lcGFkXCI7XHJcbmltcG9ydCB7IEtleWJvYXJkQWN0aW9uLCBBcnJvd0FjdGlvbiB9IGZyb20gXCIuLi8uLi8uLi9lbnVtcy9HYW1lcGFkQWN0aW9uc1wiO1xyXG5jbGFzcyBEZXNrdG9wR2FtZXBhZCBleHRlbmRzIEJhc2VHYW1lcGFkIHtcclxuICAgIGNvbnN0cnVjdG9yKHBsYXllcikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBwbGF5ZXI7XHJcbiAgICAgICAgdGhpcy5zdGVwcyA9IE1hdGguZmxvb3IocGxheWVyLmNvbnRleHQud2lkdGggLyAxNSk7XHJcbiAgICB9XHJcbiAgICBwcm9jZXNzQ29tbWFuZChwcmVzc2VkKSB7XHJcbiAgICAgICAgdGhpcy5kb0FjdGlvbihwcmVzc2VkKTtcclxuICAgIH1cclxuICAgIGRvQWN0aW9uKHByZXNzZWQpIHtcclxuICAgICAgICBsZXQga2V5ID0gcHJlc3NlZC5jb2RlO1xyXG4gICAgICAgIGlmIChrZXkgPT0gS2V5Ym9hcmRBY3Rpb24uTEVGVCB8fCBrZXkgPT0gQXJyb3dBY3Rpb24uTEVGVCkge1xyXG4gICAgICAgICAgICB0aGlzLm1vdmUodGhpcy5wbGF5ZXIsIC10aGlzLnN0ZXBzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoa2V5ID09IEtleWJvYXJkQWN0aW9uLlJJR0hUIHx8IGtleSA9PSBBcnJvd0FjdGlvbi5SSUdIVCkge1xyXG4gICAgICAgICAgICB0aGlzLm1vdmUodGhpcy5wbGF5ZXIsIHRoaXMuc3RlcHMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBEZXNrdG9wR2FtZXBhZDtcclxuIiwiaW1wb3J0IEJhc2VHYW1lcGFkIGZyb20gXCIuLi9CYXNlR2FtZXBhZFwiO1xyXG5jbGFzcyBNb2JpbGVHYW1lcGFkIGV4dGVuZHMgQmFzZUdhbWVwYWQge1xyXG4gICAgY29uc3RydWN0b3IocGxheWVyKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnBsYXllciA9IHBsYXllcjtcclxuICAgICAgICB0aGlzLnN0ZXBzID0gTWF0aC5mbG9vcihwbGF5ZXIuY29udGV4dC53aWR0aCAvIDE1KTtcclxuICAgIH1cclxuICAgIHByb2Nlc3NDb21tYW5kKHByZXNzZWQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhwcmVzc2VkKTtcclxuICAgICAgICBsZXQgc2NyZWVuV2lkdGggPSB0aGlzLnBsYXllci5jb250ZXh0LmNsaWVudFdpZHRoO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHByZXNzZWQuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WCwgc2NyZWVuV2lkdGgpO1xyXG4gICAgICAgIGlmIChwcmVzc2VkLmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFggPiBzY3JlZW5XaWR0aCAvIDIpIHtcclxuICAgICAgICAgICAgdGhpcy5tb3ZlKHRoaXMucGxheWVyLCB0aGlzLnN0ZXBzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubW92ZSh0aGlzLnBsYXllciwgLXRoaXMuc3RlcHMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBNb2JpbGVHYW1lcGFkO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9