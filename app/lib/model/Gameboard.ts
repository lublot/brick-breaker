import Observer from "../utils/interfaces/Observer";
import Paintable from "../utils/interfaces/Paintable";
import Solid2D from "./abstract/Solid2D";
import BaseGamepad from "./abstract/BaseGamepad";
import GamepadFactory from "../factories/GamepadFactory";
import PlayerFactory from "../factories/PlayerFactory";
import BrickFactory from "../factories/BrickFactory";
import BallFactory from "../factories/BallFactory";
import Player from "./Player";
import Brick from "./Brick";
import Ball from "./Ball";
import GameEvent from "../enums/GameEvent";
import GameStorage from "../utils/GameStorage";
import { HorizontalDirection, VerticalDirection } from "../enums/Direction";

class Gameboard implements Observer {
  readonly canvas: HTMLCanvasElement;
  readonly gamepad: BaseGamepad;
  private points: number;
  private attached: Array<Paintable>;

  private player: Player;
  private ball: Ball;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.points = 0;
    this.prepareScene();
    this.attached = [];

    this.player = new PlayerFactory(300, 50, this.canvas).create();
    this.gamepad = new GamepadFactory(this.player).create();
    this.ball = new BallFactory(30, this.canvas).create();

    this.generateBricks();

    this.bind(this.player);
    this.bind(this.ball);

    this.ball.attach(this.player);
    this.ball.attach(this);

    this.ball.start();
  }

  private prepareScene() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.canvas.style.background = "#191919";
  }

  bind(paintable: Solid2D): void {
    this.attached.push(paintable);
    paintable.attach(this);
    paintable.paint();
  }

  unbind(paintable: Solid2D): void {
    let index = this.attached.indexOf(paintable);
    if (index > -1) {
      this.attached.splice(index, 1);
    }
  }

  update(state: any, args?: GameEvent): void {
    switch (args) {
      case GameEvent.BALL_BRICK_COLLISION:
        if (this.isBrick(state)) {
          this.ball.detach(state);
          this.unbind(state);
          this.points += state.weight;
          GameStorage.saveRecord(this.points);
          this.generateBricks();
        }
        break;
      case GameEvent.BALL_FLOOR_COLLISION:
        if (this.isBall(state)) {
          this.unbind(state);
        }
        break;
      case GameEvent.BALL_PLAYER_COLLISION:
        if (this.isPlayer(state)) {
          this.ball.changeDirection(
            HorizontalDirection.CURRENT,
            VerticalDirection.TOP
          );
        }
        break;
    }

    this.repaint();
  }

  private generateBricks() {
    let hasBricks = this.attached.filter((el) => this.isBrick(el)).length > 0;
    if (!hasBricks) {
      let bricks = new BrickFactory(4, this.canvas).create();
      bricks.forEach((brick) => {
        this.bind(brick);
        this.ball.attach(brick);
      });
    }
  }

  private repaint() {
    this.canvas
      .getContext("2d")
      .clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.attached.forEach((el) => el.paint());
  }

  private isBall(arg: any): arg is Ball {
    return arg instanceof Ball;
  }

  private isBrick(arg: any): arg is Brick {
    return arg instanceof Brick;
  }

  private isPlayer(arg: any): arg is Player {
    return arg instanceof Player;
  }
}

export default Gameboard;
