import Paintable from "../interfaces/Paintable";
import Observable from "../interfaces/Observable";
import Observer from "../interfaces/Observer";

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

  protected isColliding(solid: Solid2D) : Boolean {
    let s1 = this
    let s2 = solid
    
    if (
      s1.x < s2.x + s2.width &&
      s1.x + s1.width > s2.x &&
      s1.y < s2.y + s2.height &&
      s1.y + s1.height > s2.y
    ) {
      return true
    }
    return false
  }

  getX () : number {
    return this.x
  }

  getY () : number {
    return this.y
  }

  paint(): void { }

  destroy(): void {
    this.observers.forEach(observer => this.detach(observer))
  }
}

export default Solid2D;
