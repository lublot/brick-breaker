import Observer from "./interfaces/Observer";
import Paintable from "./interfaces/Paintable";
import Solid2D from "./abstract/Solid2D";
import BaseGamepad from "./abstract/BaseGamepad";
import GamepadFactory from "../factories/GamepadFactory";
import PlayerFactory from "../factories/PlayerFactory";
import Player from "./Player";

class Gameboard implements Observer {
  readonly canvas: HTMLCanvasElement;
  readonly gamepad: BaseGamepad;
  private attached: Array<Paintable>;
  private player: Player;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.attached = [];
    this.player = new PlayerFactory(
      48,
      6,
      document.querySelector("#gameboard")
    ).create();
    this.gamepad = new GamepadFactory(this.player).create();

    this.attachToContext(this.player)
  }

  attachToContext(paintable: Solid2D) {
    this.attached.push(paintable);
    paintable.attach(this);
    paintable.paint();
  }

  update(state: any, args?: any): void {
    this.repaint();
  }

  private repaint() {
    this.canvas
      .getContext("2d")
      .clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.attached.forEach((el) => el.paint());
  }
}

export default Gameboard;
