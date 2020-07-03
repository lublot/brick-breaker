import Observer from "./Observer";

abstract class Observable {
  abstract attach(observer: Observer): void;
  abstract detach(observer: Observer): void;
  protected abstract notify(args?: any): void;
}

export default Observable;
