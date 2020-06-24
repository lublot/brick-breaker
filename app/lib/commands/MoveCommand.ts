import BaseCommand from "./BaseCommand";
import Solid2D from "../model/abstract/Solid2D";

class MoveCommand implements BaseCommand {
  private x: number;
  private y: number;
  private moveable: Solid2D;

  constructor(newX: number, newY: number, moveable: Solid2D) {
    this.x = newX;
    this.y = newY;
    this.moveable = moveable;
  }

  execute(): [number, number] {
    let nextPosition = this.x + this.moveable.width;

    if (this.x < 0) {
      this.x = 0;
    } else if (nextPosition > this.moveable.context.width) {
      this.x = Math.abs(this.moveable.context.width - this.moveable.width);
    }

    return [this.x, this.y];
  }
}

export default MoveCommand;
