import Observer from "./Observer";

interface Observable {
  attach(observer: Observer): void;
  detach(observer: Observer): void;
  notify(args?: any): void;
}

export default Observable;
