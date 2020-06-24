import Ball from "../model/Ball";

class BallFactory {
  readonly width: number;
  readonly height: number;
  readonly context: HTMLCanvasElement;

  constructor(width: number, context: HTMLCanvasElement) {
    this.width = width;
    this.height = width;
    this.context = context;
  }

  create() {
    return new Ball(this.width, this.height, this.context);
  }
}

export default BallFactory;
