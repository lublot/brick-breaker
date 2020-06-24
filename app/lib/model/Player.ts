import Solid2D from "./abstract/Solid2D";
import MoveCommand from "../commands/MoveCommand";
import Observable from "./interfaces/Observable";
import Observer from "./interfaces/Observer";

class Player extends Solid2D implements Observable {

  constructor(width: number, height: number, context: HTMLCanvasElement) {
    let initialX = (context.width - width) / 2;
    let staticY = context.height - height;
    super(initialX, staticY, width, height, context);
    this.move(0);
  }

  paint(): void {
    let context = this.context.getContext("2d");
    context.fillRect(this.x, this.y, this.width, this.height);
  }

  move(dx: number) {
    let command = new MoveCommand(this.x + dx, this.y, this);
    this.x = command.execute()[0];
    this.notify()
  }
}

export default Player;
