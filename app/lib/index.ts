import PlayerFactory from "./factories/PlayerFactory";
import DesktopGamepad from "./model/abstract/impl/DesktopGamepad";
import Gameboard from "./model/Gameboard"

const player = new PlayerFactory(
  48,
  6,
  document.querySelector("#gameboard")
).create();
const gamepad = new DesktopGamepad(player);

const gameboard = new Gameboard(document.querySelector("#gameboard"))
gameboard.attachToContext(player)

document.addEventListener("keydown", function (evt) {
  gamepad.doAction(evt);
});
// if (document.fullscreenEnabled) {
//   document.documentElement.requestFullscreen()
// }
