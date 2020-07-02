import Solid2D from "./abstract/Solid2D";
import MoveCommand from "../commands/MoveCommand";
import SpriteLoader from "../utils/SpriteLoader";

class Ball extends Solid2D {
  private directionX: number;
  private directionY: number;
  private sprite: HTMLImageElement;
  private gravity: number;
  private gravitySpeed: number;
  private timer: number

  constructor(width: number, height: number, context: HTMLCanvasElement) {
    let initialX = (context.width - width) / 2;
    let staticY = context.height - height;
    let image = new Image();
    super(initialX, staticY, width, height, context);
    image.src = SpriteLoader.load("ball.png");
    this.sprite = image;
    this.x = 0;
    this.directionX = 1;
    this.directionY = 1;
    this.gravity = 0.5;
    this.gravitySpeed = 0;
    this.move();
  }

  paint(): void {
    let context = this.context.getContext("2d");
    context.drawImage(this.sprite, this.x, this.y, this.width, this.height);
  }

  start(): void {
    this.timer = setInterval(() => this.move(), 12);
  }

  move() {
    let command = new MoveCommand(
      this.x + 10 * this.directionX,
      this.y + 10 * this.gravitySpeed,
      this
    );
    let result = command.execute();
    this.x = result[0];
    this.y = result[1];

    if (this.x + this.width >= this.context.width) {
      this.directionX = -1;
    } else if (this.x == 0) {
      this.directionX = 1;
    }

    if (this.y + this.height >= this.context.height) {
      this.gravitySpeed -= this.gravity;
      this.destroy();
    } else if (this.y == 0) {
      this.gravitySpeed += this.gravity + Math.random();
    }

    this.notify({ action: BallActions.MOVE });
  }

  destroy() {
    this.notify({ action: BallActions.DESTROY });
    clearInterval(this.timer)
    this.observers.forEach(observer => this.detach(observer))
  }
}

export default Ball;

export enum BallActions {
  MOVE,
  DESTROY,
}
