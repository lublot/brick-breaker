import PlayerFactory from "./factories/PlayerFactory";
import BallFactory from "./factories/BallFactory";
import DesktopGamepad from "./model/abstract/impl/DesktopGamepad";
import Gameboard from "./model/Gameboard";

const player = new PlayerFactory(
  48,
  6,
  document.querySelector("#gameboard")
).create();

const ball = new BallFactory(6, document.querySelector("#gameboard")).create();

const gamepad = new DesktopGamepad(player);

const gameboard = new Gameboard(document.querySelector("#gameboard"));
gameboard.attachToContext(player);
gameboard.attachToContext(ball);
ball.start();

document.addEventListener("keydown", function (evt) {
  gamepad.doAction(evt);
});
// if (document.fullscreenEnabled) {
//   document.documentElement.requestFullscreen()
// }
