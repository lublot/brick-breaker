import Paintable from "../interfaces/Paintable";
import Observable from "../interfaces/Observable";
import Observer from "../interfaces/Observer";

abstract class Solid2D implements Paintable, Observable{
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
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.context = context;
    this.observables = []
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

  notify(args?: any): void {
    this.observables.forEach((observer) => observer.update(this, args));
  }

  paint(): void {}
}

export default Solid2D;
