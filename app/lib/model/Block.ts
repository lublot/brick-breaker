import Solid2D from "./abstract/Solid2D";

class Brick extends Solid2D{
  private weight: number
  private color: string

  constructor(x: number, y: number, length: number, context: HTMLCanvasElement, weight: BrickWeight) {
    super(x, y, length, length, context)
    this.weight = weight
    this.setColor(weight)
  }

  private setColor(weight: BrickWeight) {
    switch (weight) {
      case BrickWeight.LOW:
        this.color = BrickColors.LOW
        break;
      case BrickWeight.MEDIUM:
        this.color = BrickColors.MEDIUM
        break;
      case BrickWeight.HIGH:
        this.color = BrickColors.HIGH
        break;
      case BrickWeight.HUGE:
        this.color = BrickColors.HUGE
        break;
    }
  }

  paint() {
    let context = this.context.getContext("2d");
    context.strokeStyle = "#000000"
    context.strokeRect(this.x, this.y, this.width, this.height)
    context.fillStyle = this.color
    context.fillRect(this.x, this.y, this.width, this.height);
  }
  
  destroy(): void {
    this.notify({ action: BrickActions.DESTROY })
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

enum BrickColors {
  LOW = "#dddddd",
  MEDIUM = "#00ff00",
  HIGH = "#0000ff",
  HUGE = "#ff0000"
}