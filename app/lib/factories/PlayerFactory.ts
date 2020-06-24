import Player from "../model/Player";

class PlayerFactory {
  private initialX: number;
  readonly width: number;
  readonly height: number;
  readonly context: HTMLCanvasElement;

  constructor(
    width: number,
    height: number,
    context: HTMLCanvasElement
  ) {
    this.width = width;
    this.height = height;
    this.context = context;
  }

  create() {
    return new Player(this.width, this.height, this.context);
  }
}

export default PlayerFactory
