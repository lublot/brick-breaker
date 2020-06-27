import Player from "../model/Player";

class PlayerFactory {
  readonly width: number;
  readonly height: number;
  readonly context: HTMLCanvasElement;
  readonly record: number

  constructor(width: number, height: number, context: HTMLCanvasElement) {
    this.width = width;
    this.height = height;
    this.context = context;
    this.record = this.loadRecord()
  }

  create() {
    return new Player(this.width, this.height, this.context);
  }

  private loadRecord() :number {
    return parseInt(localStorage.getItem("record"))
  }
}

export default PlayerFactory;
