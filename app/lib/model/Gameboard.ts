import Observer from "./interfaces/Observer";
import Paintable from "./interfaces/Paintable";
import Solid2D from "./abstract/Solid2D";
import BaseGamepad from "./abstract/BaseGamepad";
import GamepadFactory from "../factories/GamepadFactory";
import PlayerFactory from "../factories/PlayerFactory";
import BlockFactory from "../factories/BlockFactory";
import BallFactory from "../factories/BallFactory";
import Player from "./Player";
import Block, { BrickActions } from "./Block";
import Ball, { BallActions } from "./Ball";

class Gameboard implements Observer {
  readonly canvas: HTMLCanvasElement;
  readonly gamepad: BaseGamepad;
  private attached: Array<Paintable>;
  private player: Player;
  private ball: Ball;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.prepareScene();
    this.attached = [];
    this.player = new PlayerFactory(300, 50, this.canvas).create();
    this.gamepad = new GamepadFactory(this.player).create();
    this.ball = new BallFactory(30, this.canvas).create()
    
    let blocks = new BlockFactory(4, this.canvas).create();

    blocks.forEach((block) => {
      this.attachToContext(block);
      this.ball.attach(block)
    });

    this.attachToContext(this.player);
    this.attachToContext(this.ball)
    this.ball.attach(this.player)
    this.ball.attach(this)
    this.ball.start()
  }

  private prepareScene() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.canvas.style.background = "#191919";
  }

  attachToContext(paintable: Solid2D) {
    this.attached.push(paintable);
    paintable.attach(this);
    paintable.paint();
  }

  detachOfContext(paintable: Solid2D) {
    let index = this.attached.indexOf(paintable)
    if (index > -1) {
      this.attached.splice(index, 1);
    }
  }

  update(state: any, args?: any): void {
    if (state instanceof Block) {
      if (args.action == BrickActions.DESTROY) {
        this.detachOfContext(state)
      }
    } else if (state instanceof Ball) {
      switch (args.action) {
        case BallActions.MOVE:
          break;
        case BallActions.DESTROY:
          this.detachOfContext(state)
          break
      }
    }
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
