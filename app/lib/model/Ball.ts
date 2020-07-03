import Solid2D from "./abstract/Solid2D";
import MoveCommand from "../commands/MoveCommand";
import MediaLoader from "../utils/MediaLoader";
import GameEvent from "../enums/GameEvent";
import { HorizontalDirection, VerticalDirection } from "../enums/Direction"

class Ball extends Solid2D {
  readonly velocity: number;
  private dx: number;
  private dy: number;
  private sprite: HTMLImageElement;
  private timer: number;

  constructor(width: number, height: number, context: HTMLCanvasElement) {
    let initialX = context.width / 2;
    console.log(context.width)
    let staticY = context.height / 2;
    let image = new Image();
    super(initialX, staticY, width, height, context);
    image.src = MediaLoader.loadSprite("ball.png");
    this.sprite = image;
    this.velocity = 10;
    this.dx = this.velocity;
    this.dy = this.velocity;
    this.move();
  }

  paint(): void {
    let context = this.context.getContext("2d");
    context.drawImage(this.sprite, this.x, this.y, this.width, this.height);
  }

  start(): void {
    this.timer = setInterval(() => this.move(), 12);
  }

  changeDirection(x: HorizontalDirection, y: VerticalDirection) {
    if (x != HorizontalDirection.CURRENT) {
      this.dx = this.velocity * x
    }

    if (y != VerticalDirection.CURRENT) {
      this.dy = this.velocity * y;
    }
  }

  move() {
    let command = new MoveCommand(
      this.x + this.dx,
      this.y + this.dy,
      this
    );
    let result = command.execute();
    this.x = result[0];
    this.y = result[1];

    if (this.x + this.width >= this.context.width) {
      this.changeDirection(HorizontalDirection.LEFT, VerticalDirection.CURRENT)
    } else if (this.x == 0) {
      this.changeDirection(HorizontalDirection.RIGHT, VerticalDirection.CURRENT)
    }

    if (this.y + this.height >= this.context.height) {
      this.destroy();
    } else if (this.y == 0) {
      this.changeDirection(HorizontalDirection.CURRENT, VerticalDirection.DOWN)
    }

    this.notify(GameEvent.BALL_MOVED);
  }

  destroy() {
    this.notify(GameEvent.BALL_FLOOR_COLLISION);
    clearInterval(this.timer);
    this.observers.forEach((observer) => this.detach(observer));
  }
}

export default Ball;