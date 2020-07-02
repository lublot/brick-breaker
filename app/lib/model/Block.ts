import Solid2D from "./abstract/Solid2D";
import Observer from "./interfaces/Observer";
import Observable from "./interfaces/Observable";
import Ball, { BallActions } from "./Ball";
import SpriteLoader from "../utils/SpriteLoader"

class Brick extends Solid2D implements Observer{
  private weight: number
  private sprite: HTMLImageElement

  constructor(x: number, y: number, length: number, context: HTMLCanvasElement, weight: BrickWeight) {
    super(x, y, length, length, context)
    this.weight = weight
    this.setSprite(weight)
  }
  
  private setSprite(weight: BrickWeight) {
    let image = new Image()
    
    switch (weight) {
      case BrickWeight.LOW:
        image.src = SpriteLoader.load(BrickSprite.LOW)
        break;
      case BrickWeight.MEDIUM:
        image.src = SpriteLoader.load(BrickSprite.MEDIUM)
        break;
      case BrickWeight.HIGH:
        image.src = SpriteLoader.load(BrickSprite.HIGH)
        break;
      case BrickWeight.HUGE:
        image.src = SpriteLoader.load(BrickSprite.HUGE)
        break;
    }
    this.sprite = image
  }

  update(observable: Observable, args?: any): void {
    if (observable instanceof Ball) {
      if (args.action == BallActions.MOVE) {
        if (this.isColliding(observable)) {
          this.destroy()
        }
      }
    }
  }

  paint() {
    let context = this.context.getContext("2d");
    context.drawImage(this.sprite, this.x, this.y, this.width, this.height)
  }
  
  destroy(): void {
    this.notify({ action: BrickActions.DESTROY })
    super.destroy()
  }
}

export default Brick

export enum BrickActions {
  DESTROY
}

export enum BrickWeight {
  LOW = 10,
  MEDIUM = 20,
  HIGH = 30,
  HUGE = 50
}

enum BrickSprite {
  LOW = "1.png",
  MEDIUM = "2.png",
  HIGH = "3.png",
  HUGE = "4.png"
}