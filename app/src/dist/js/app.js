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
        let nextPosition = this.x + this.moveable.width;
        if (this.x < 0) {
            this.x = 0;
        }
        else if (nextPosition > this.moveable.context.width) {
            this.x = Math.abs(this.moveable.context.width - this.moveable.width);
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
/* harmony import */ var _model_abstract_impl_DesktopGamepad__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model/abstract/impl/DesktopGamepad */ "./app/lib/model/abstract/impl/DesktopGamepad.ts");
/* harmony import */ var _model_Gameboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model/Gameboard */ "./app/lib/model/Gameboard.ts");



const player = new _factories_PlayerFactory__WEBPACK_IMPORTED_MODULE_0__["default"](48, 6, document.querySelector("#gameboard")).create();
const gamepad = new _model_abstract_impl_DesktopGamepad__WEBPACK_IMPORTED_MODULE_1__["default"](player);
const gameboard = new _model_Gameboard__WEBPACK_IMPORTED_MODULE_2__["default"](document.querySelector("#gameboard"));
gameboard.attachToContext(player);
document.addEventListener("keydown", function (evt) {
    gamepad.doAction(evt);
});


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
        console.log("");
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
        console.log(pressed.code);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBwL2xpYi9jb21tYW5kcy9Nb3ZlQ29tbWFuZC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvbGliL2VudW1zL0dhbWVwYWRBY3Rpb25zLnRzIiwid2VicGFjazovLy8uL2FwcC9saWIvZmFjdG9yaWVzL1BsYXllckZhY3RvcnkudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2xpYi9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvbGliL21vZGVsL0dhbWVib2FyZC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvbGliL21vZGVsL1BsYXllci50cyIsIndlYnBhY2s6Ly8vLi9hcHAvbGliL21vZGVsL2Fic3RyYWN0L0Fic3RyYWN0R2FtZXBhZC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvbGliL21vZGVsL2Fic3RyYWN0L1NvbGlkMkQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2xpYi9tb2RlbC9hYnN0cmFjdC9pbXBsL0Rlc2t0b3BHYW1lcGFkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2UsMEVBQVcsRUFBQzs7Ozs7Ozs7Ozs7OztBQ2pCM0I7QUFBQTtBQUFBO0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxDQUFDLHdDQUF3QztBQUNsQztBQUNQO0FBQ0E7QUFDQTtBQUNBLENBQUMsa0NBQWtDOzs7Ozs7Ozs7Ozs7O0FDVG5DO0FBQUE7QUFBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIscURBQU07QUFDekI7QUFDQTtBQUNlLDRFQUFhLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNYN0I7QUFBQTtBQUFBO0FBQUE7QUFBc0Q7QUFDWTtBQUN4QjtBQUMxQyxtQkFBbUIsZ0VBQWE7QUFDaEMsb0JBQW9CLDJFQUFjO0FBQ2xDLHNCQUFzQix3REFBUztBQUMvQjtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDVEQ7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZSx3RUFBUyxFQUFDOzs7Ozs7Ozs7Ozs7O0FDckJ6QjtBQUFBO0FBQUE7QUFBeUM7QUFDUztBQUNsRCxxQkFBcUIseURBQU87QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiw2REFBVztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNlLHFFQUFNLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNuQnRCO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNlLDhFQUFlLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNML0I7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDZSxzRUFBTyxFQUFDOzs7Ozs7Ozs7Ozs7O0FDdkJ2QjtBQUFBO0FBQUE7QUFBaUQ7QUFDMkI7QUFDNUUsNkJBQTZCLHdEQUFlO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsb0VBQWMsZ0JBQWdCLGlFQUFXO0FBQzVEO0FBQ0E7QUFDQSx3QkFBd0Isb0VBQWMsaUJBQWlCLGlFQUFXO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ2UsNkVBQWMsRUFBQyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2FwcC9saWIvaW5kZXgudHNcIik7XG4iLCJjbGFzcyBNb3ZlQ29tbWFuZCB7XHJcbiAgICBjb25zdHJ1Y3RvcihuZXdYLCBuZXdZLCBtb3ZlYWJsZSkge1xyXG4gICAgICAgIHRoaXMueCA9IG5ld1g7XHJcbiAgICAgICAgdGhpcy55ID0gbmV3WTtcclxuICAgICAgICB0aGlzLm1vdmVhYmxlID0gbW92ZWFibGU7XHJcbiAgICB9XHJcbiAgICBleGVjdXRlKCkge1xyXG4gICAgICAgIGxldCBuZXh0UG9zaXRpb24gPSB0aGlzLnggKyB0aGlzLm1vdmVhYmxlLndpZHRoO1xyXG4gICAgICAgIGlmICh0aGlzLnggPCAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMueCA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKG5leHRQb3NpdGlvbiA+IHRoaXMubW92ZWFibGUuY29udGV4dC53aWR0aCkge1xyXG4gICAgICAgICAgICB0aGlzLnggPSBNYXRoLmFicyh0aGlzLm1vdmVhYmxlLmNvbnRleHQud2lkdGggLSB0aGlzLm1vdmVhYmxlLndpZHRoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFt0aGlzLngsIHRoaXMueV07XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTW92ZUNvbW1hbmQ7XHJcbiIsImV4cG9ydCB2YXIgS2V5Ym9hcmRBY3Rpb247XHJcbihmdW5jdGlvbiAoS2V5Ym9hcmRBY3Rpb24pIHtcclxuICAgIEtleWJvYXJkQWN0aW9uW1wiTEVGVFwiXSA9IFwiS2V5QVwiO1xyXG4gICAgS2V5Ym9hcmRBY3Rpb25bXCJSSUdIVFwiXSA9IFwiS2V5RFwiO1xyXG59KShLZXlib2FyZEFjdGlvbiB8fCAoS2V5Ym9hcmRBY3Rpb24gPSB7fSkpO1xyXG5leHBvcnQgdmFyIEFycm93QWN0aW9uO1xyXG4oZnVuY3Rpb24gKEFycm93QWN0aW9uKSB7XHJcbiAgICBBcnJvd0FjdGlvbltcIkxFRlRcIl0gPSBcIkFycm93TGVmdFwiO1xyXG4gICAgQXJyb3dBY3Rpb25bXCJSSUdIVFwiXSA9IFwiQXJyb3dSaWdodFwiO1xyXG59KShBcnJvd0FjdGlvbiB8fCAoQXJyb3dBY3Rpb24gPSB7fSkpO1xyXG4iLCJpbXBvcnQgUGxheWVyIGZyb20gXCIuLi9tb2RlbC9QbGF5ZXJcIjtcclxuY2xhc3MgUGxheWVyRmFjdG9yeSB7XHJcbiAgICBjb25zdHJ1Y3Rvcih3aWR0aCwgaGVpZ2h0LCBjb250ZXh0KSB7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XHJcbiAgICB9XHJcbiAgICBjcmVhdGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQbGF5ZXIodGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsIHRoaXMuY29udGV4dCk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgUGxheWVyRmFjdG9yeTtcclxuIiwiaW1wb3J0IFBsYXllckZhY3RvcnkgZnJvbSBcIi4vZmFjdG9yaWVzL1BsYXllckZhY3RvcnlcIjtcclxuaW1wb3J0IERlc2t0b3BHYW1lcGFkIGZyb20gXCIuL21vZGVsL2Fic3RyYWN0L2ltcGwvRGVza3RvcEdhbWVwYWRcIjtcclxuaW1wb3J0IEdhbWVib2FyZCBmcm9tIFwiLi9tb2RlbC9HYW1lYm9hcmRcIjtcclxuY29uc3QgcGxheWVyID0gbmV3IFBsYXllckZhY3RvcnkoNDgsIDYsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZ2FtZWJvYXJkXCIpKS5jcmVhdGUoKTtcclxuY29uc3QgZ2FtZXBhZCA9IG5ldyBEZXNrdG9wR2FtZXBhZChwbGF5ZXIpO1xyXG5jb25zdCBnYW1lYm9hcmQgPSBuZXcgR2FtZWJvYXJkKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZ2FtZWJvYXJkXCIpKTtcclxuZ2FtZWJvYXJkLmF0dGFjaFRvQ29udGV4dChwbGF5ZXIpO1xyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbiAoZXZ0KSB7XHJcbiAgICBnYW1lcGFkLmRvQWN0aW9uKGV2dCk7XHJcbn0pO1xyXG4iLCJjbGFzcyBHYW1lYm9hcmQge1xyXG4gICAgY29uc3RydWN0b3IoY2FudmFzKSB7XHJcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XHJcbiAgICAgICAgdGhpcy5hdHRhY2hlZCA9IFtdO1xyXG4gICAgfVxyXG4gICAgYXR0YWNoVG9Db250ZXh0KHBhaW50YWJsZSkge1xyXG4gICAgICAgIHRoaXMuYXR0YWNoZWQucHVzaChwYWludGFibGUpO1xyXG4gICAgICAgIHBhaW50YWJsZS5hdHRhY2godGhpcyk7XHJcbiAgICAgICAgcGFpbnRhYmxlLnBhaW50KCk7XHJcbiAgICB9XHJcbiAgICB1cGRhdGUoc3RhdGUsIGFyZ3MpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlwiKTtcclxuICAgICAgICB0aGlzLnJlcGFpbnQoKTtcclxuICAgIH1cclxuICAgIHJlcGFpbnQoKSB7XHJcbiAgICAgICAgdGhpcy5jYW52YXNcclxuICAgICAgICAgICAgLmdldENvbnRleHQoXCIyZFwiKVxyXG4gICAgICAgICAgICAuY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xyXG4gICAgICAgIHRoaXMuYXR0YWNoZWQuZm9yRWFjaCgoZWwpID0+IGVsLnBhaW50KCkpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEdhbWVib2FyZDtcclxuIiwiaW1wb3J0IFNvbGlkMkQgZnJvbSBcIi4vYWJzdHJhY3QvU29saWQyRFwiO1xyXG5pbXBvcnQgTW92ZUNvbW1hbmQgZnJvbSBcIi4uL2NvbW1hbmRzL01vdmVDb21tYW5kXCI7XHJcbmNsYXNzIFBsYXllciBleHRlbmRzIFNvbGlkMkQge1xyXG4gICAgY29uc3RydWN0b3Iod2lkdGgsIGhlaWdodCwgY29udGV4dCkge1xyXG4gICAgICAgIGxldCBpbml0aWFsWCA9IChjb250ZXh0LndpZHRoIC0gd2lkdGgpIC8gMjtcclxuICAgICAgICBsZXQgc3RhdGljWSA9IGNvbnRleHQuaGVpZ2h0IC0gaGVpZ2h0O1xyXG4gICAgICAgIHN1cGVyKGluaXRpYWxYLCBzdGF0aWNZLCB3aWR0aCwgaGVpZ2h0LCBjb250ZXh0KTtcclxuICAgICAgICB0aGlzLm1vdmUoMCk7XHJcbiAgICB9XHJcbiAgICBwYWludCgpIHtcclxuICAgICAgICBsZXQgY29udGV4dCA9IHRoaXMuY29udGV4dC5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgICAgICAgY29udGV4dC5maWxsUmVjdCh0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG4gICAgfVxyXG4gICAgbW92ZShkeCkge1xyXG4gICAgICAgIGxldCBjb21tYW5kID0gbmV3IE1vdmVDb21tYW5kKHRoaXMueCArIGR4LCB0aGlzLnksIHRoaXMpO1xyXG4gICAgICAgIHRoaXMueCA9IGNvbW1hbmQuZXhlY3V0ZSgpWzBdO1xyXG4gICAgICAgIHRoaXMubm90aWZ5KCk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgUGxheWVyO1xyXG4iLCJjbGFzcyBBYnN0cmFjdEdhbWVwYWQge1xyXG4gICAgbW92ZShwbGF5ZXIsIHgpIHtcclxuICAgICAgICBwbGF5ZXIubW92ZSh4KTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBBYnN0cmFjdEdhbWVwYWQ7XHJcbiIsImNsYXNzIFNvbGlkMkQge1xyXG4gICAgY29uc3RydWN0b3IoeCwgeSwgd2lkdGgsIGhlaWdodCwgY29udGV4dCkge1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcclxuICAgICAgICB0aGlzLm9ic2VydmFibGVzID0gW107XHJcbiAgICB9XHJcbiAgICBhdHRhY2gob2JzZXJ2ZXIpIHtcclxuICAgICAgICB0aGlzLm9ic2VydmFibGVzLnB1c2gob2JzZXJ2ZXIpO1xyXG4gICAgfVxyXG4gICAgZGV0YWNoKG9ic2VydmVyKSB7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5vYnNlcnZhYmxlcy5pbmRleE9mKG9ic2VydmVyKTtcclxuICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xyXG4gICAgICAgICAgICB0aGlzLm9ic2VydmFibGVzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbm90aWZ5KGFyZ3MpIHtcclxuICAgICAgICB0aGlzLm9ic2VydmFibGVzLmZvckVhY2goKG9ic2VydmVyKSA9PiBvYnNlcnZlci51cGRhdGUodGhpcywgYXJncykpO1xyXG4gICAgfVxyXG4gICAgcGFpbnQoKSB7IH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBTb2xpZDJEO1xyXG4iLCJpbXBvcnQgQWJzdHJhY3RHYW1lcGFkIGZyb20gXCIuLi9BYnN0cmFjdEdhbWVwYWRcIjtcclxuaW1wb3J0IHsgS2V5Ym9hcmRBY3Rpb24sIEFycm93QWN0aW9uIH0gZnJvbSBcIi4uLy4uLy4uL2VudW1zL0dhbWVwYWRBY3Rpb25zXCI7XHJcbmNsYXNzIERlc2t0b3BHYW1lcGFkIGV4dGVuZHMgQWJzdHJhY3RHYW1lcGFkIHtcclxuICAgIGNvbnN0cnVjdG9yKHBsYXllcikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBwbGF5ZXI7XHJcbiAgICAgICAgdGhpcy5zdGVwcyA9IE1hdGguZmxvb3IocGxheWVyLmNvbnRleHQud2lkdGggLyAxNSk7XHJcbiAgICB9XHJcbiAgICBkb0FjdGlvbihwcmVzc2VkKSB7XHJcbiAgICAgICAgbGV0IGtleSA9IHByZXNzZWQuY29kZTtcclxuICAgICAgICBjb25zb2xlLmxvZyhwcmVzc2VkLmNvZGUpO1xyXG4gICAgICAgIGlmIChrZXkgPT0gS2V5Ym9hcmRBY3Rpb24uTEVGVCB8fCBrZXkgPT0gQXJyb3dBY3Rpb24uTEVGVCkge1xyXG4gICAgICAgICAgICB0aGlzLm1vdmUodGhpcy5wbGF5ZXIsIC10aGlzLnN0ZXBzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoa2V5ID09IEtleWJvYXJkQWN0aW9uLlJJR0hUIHx8IGtleSA9PSBBcnJvd0FjdGlvbi5SSUdIVCkge1xyXG4gICAgICAgICAgICB0aGlzLm1vdmUodGhpcy5wbGF5ZXIsIHRoaXMuc3RlcHMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBEZXNrdG9wR2FtZXBhZDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==