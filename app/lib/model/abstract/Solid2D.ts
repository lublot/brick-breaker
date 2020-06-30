import Paintable from "../interfaces/Paintable";
import Observable from "../interfaces/Observable";
import Observer from "../interfaces/Observer";

abstract class Solid2D extends Observable implements Paintable {
  protected x: number;
  protected y: number;
  readonly width: number;
  readonly height: number;
  readonly context: HTMLCanvasElement;
  private observables: Array<Observer>;

  constructor(
    x: number,
    y: number,
    width: number,
    height: number,
    context: HTMLCanvasElement
  ) {
    super();
    this.x = x;
    this.y = y;
    this.width = width + 0.5;
    this.height = height + 0.5;
    this.context = context;
    this.observables = [];
  }

  attach(observer: Observer): void {
    this.observables.push(observer);
  }

  detach(observer: Observer): void {
    let index = this.observables.indexOf(observer);

    if (index > -1) {
      this.observables.splice(index, 1);
    }
  }

  protected notify(args?: any): void {
    this.observables.forEach((observer) => observer.update(this, args));
  }

  paint(): void {}

  abstract destroy(): void;
}

export default Solid2D;
