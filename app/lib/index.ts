import Gameboard from "./model/Gameboard";

// const player = new PlayerFactory(
//   48,
//   6,
//   document.querySelector("#gameboard")
// ).create();

// const ball = new BallFactory(6, document.querySelector("#gameboard")).create();

// const gamepad = new DesktopGamepad(player);

const gameboard = new Gameboard(document.querySelector("#gameboard"));
// gameboard.attachToContext(player);
// gameboard.attachToContext(ball);
// ball.start();

// if (document.fullscreenEnabled) {
//   document.documentElement.requestFullscreen()
// }
