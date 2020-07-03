import Brick, { BrickWeight } from "../model/Brick";
class BrickFactory {
  private lines: number;
  private context: HTMLCanvasElement;
  readonly bricksPerColumn: number;

  constructor(lines: number, context: HTMLCanvasElement) {
    this.lines = lines;
    this.context = context;
    this.bricksPerColumn = 25;
  }

  create(): Array<Brick> {
    let bricks: Array<Brick> = [];
    let nextPosition = { x: 0, y: 0 };
    let brickLength = this.context.width / this.bricksPerColumn;

    for (let line = 0; line < this.lines; line++) {
      for (let column = 0; column < this.bricksPerColumn; column++) {
        let brickWeight = this.getBrickWeight();
        bricks.push(
          new Brick(
            nextPosition.x,
            nextPosition.y,
            brickLength,
            this.context,
            brickWeight
          )
        );
        nextPosition.x += brickLength;
      }
      nextPosition.x = 0;
      nextPosition.y += brickLength;
    }
    return bricks;
  }

  private getBrickWeight(): BrickWeight {
    let randomWeight = Math.floor(Math.random() * 4);
    switch (randomWeight) {
      case 0:
        return BrickWeight.HUGE;
      case 1:
        return BrickWeight.HIGH;
      case 2:
        return BrickWeight.MEDIUM;
      case 3:
        return BrickWeight.LOW;
      default:
        return BrickWeight.LOW;
    }
  }
}

export default BrickFactory;
