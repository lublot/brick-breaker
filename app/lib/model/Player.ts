import Solid2D from "./abstract/Solid2D";
import MoveCommand from "../commands/MoveCommand";
import SpriteLoader from "../utils/SpriteLoader";
import Observer from "./interfaces/Observer";
import Observable from "./interfaces/Observable";
import Ball, { BallActions } from "./Ball";

class Player extends Solid2D implements Observer{

  private sprite: HTMLImageElement
  
  constructor(width: number, height: number, context: HTMLCanvasElement) {
    let initialX = (context.width - width) / 2;
    let staticY = context.height - height;
    let image = new Image
    super(initialX, staticY, width, height, context);
    this.move(0);
    image.src = SpriteLoader.load("player.png")
    this.sprite = image
  }
  
  update(observable: Observable, args?: any): void {
    if (observable instanceof Ball) {
      if (args.action == BallActions.MOVE) {
        if (this.isColliding(observable)) {
          console.log("Tocou")
          this.destroy()
        }
      }
    }
  }

  paint(): void {
    let context = this.context.getContext("2d");
    context.drawImage(this.sprite, this.x, this.y, this.width, this.height)
  }

  move(dx: number) {
    let command = new MoveCommand(this.x + dx, this.y, this);
    this.x = command.execute()[0];
    this.notify()
  }

  destroy() {}
}

export default Player;
