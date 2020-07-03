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

  /**
   * This method evaluates the gameboard context bounds and set the new position of a Solid2D.
   * 
   * @return {[number, number]} - Returns an array containing x and y position.
   */
  execute(): [number, number] {
    let nextPositionX = this.x + this.moveable.width;
    let nextPositionY = this.y + this.moveable.height;

    if (this.x < 0) {
      this.x = 0;
    } else if (nextPositionX > this.moveable.context.width) {
      this.x = Math.abs(this.moveable.context.width - this.moveable.width);
    }

    if (this.y < 0) {
      this.y = 0;
    } else if (nextPositionY > this.moveable.context.height) {
      this.y = Math.abs(this.moveable.context.height - this.moveable.height);
    }

    return [this.x, this.y];
  }
}

export default MoveCommand;
