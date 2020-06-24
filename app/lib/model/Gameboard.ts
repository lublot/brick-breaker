import Observer from "./interfaces/Observer";
import Paintable from "./interfaces/Paintable";
import Solid2D from "./abstract/Solid2D";

class Gameboard implements Observer {
  readonly canvas: HTMLCanvasElement;
  private attached: Array<Paintable>;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.attached = [];
  }

  attachToContext(paintable: Solid2D) {
    this.attached.push(paintable);
    paintable.attach(this)
    paintable.paint();
  }

  update(state: any, args?: any): void {
    this.repaint();
  }

  private repaint() {
    this.canvas
      .getContext("2d")
      .clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.attached.forEach((el) => el.paint());
  }
}

export default Gameboard;
