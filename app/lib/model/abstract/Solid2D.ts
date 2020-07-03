import Paintable from "../../utils/interfaces/Paintable";
import Observable from "../../utils/interfaces/Observable";
import Observer from "../../utils/interfaces/Observer";

abstract class Solid2D extends Observable implements Paintable {
  protected x: number;
  protected y: number;
  readonly width: number;
  readonly height: number;
  readonly context: HTMLCanvasElement;
  protected observers: Array<Observer>;

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
    this.observers = [];
  }

  attach(observer: Observer): void {
    this.observers.push(observer);
  }

  detach(observer: Observer): void {
    let index = this.observers.indexOf(observer);

    if (index > -1) {
      this.observers.splice(index, 1);
    }
  }

  protected notify(args?: any): void {
    this.observers.forEach((observer) => observer.update(this, args));
  }

  protected isColliding(solid: Solid2D): Boolean {
    if (
      this.x < solid.x + solid.width &&
      this.x + this.width > solid.x &&
      this.y < solid.y + solid.height &&
      this.y + this.height > solid.y
    ) {
      return true;
    }
    return false;
  }

  getX(): number {
    return this.x;
  }

  getY(): number {
    return this.y;
  }

  paint(): void {}

  destroy(): void {
    this.observers.forEach((observer) => this.detach(observer));
  }
}

export default Solid2D;
