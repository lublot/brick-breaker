import Solid2D from "./abstract/Solid2D";
import Observer from "../utils/interfaces/Observer";
import Observable from "../utils/interfaces/Observable";
import Ball from "./Ball";
import MediaLoader from "../utils/MediaLoader";
import GameEvent from "../enums/GameEvent";

class Brick extends Solid2D implements Observer {
  readonly weight: number;
  private sprite: HTMLImageElement;
  private sound: HTMLAudioElement;

  constructor(
    x: number,
    y: number,
    length: number,
    context: HTMLCanvasElement,
    weight: BrickWeight
  ) {
    super(x, y, length, length, context);
    this.weight = weight;
    this.sound = new Audio(MediaLoader.loadSound("collision.flac"));
    this.sound.volume = 0.15
    this.setSprite(weight);
  }

  private setSprite(weight: BrickWeight) {
    let image = new Image();

    switch (weight) {
      case BrickWeight.LOW:
        image.src = MediaLoader.loadSprite(BrickSprite.LOW);
        break;
      case BrickWeight.MEDIUM:
        image.src = MediaLoader.loadSprite(BrickSprite.MEDIUM);
        break;
      case BrickWeight.HIGH:
        image.src = MediaLoader.loadSprite(BrickSprite.HIGH);
        break;
      case BrickWeight.HUGE:
        image.src = MediaLoader.loadSprite(BrickSprite.HUGE);
        break;
    }
    this.sprite = image;
  }

  update(observable: Observable, args?: GameEvent): void {
    if (observable instanceof Ball) {
      if (args == GameEvent.BALL_MOVED && this.isColliding(observable)) {
        this.destroy();
      }
    }
  }

  paint() {
    let context = this.context.getContext("2d");
    context.drawImage(this.sprite, this.x, this.y, this.width, this.height);
  }

  destroy(): void {
    this.sound.play();
    this.notify(GameEvent.BALL_BRICK_COLLISION);
    super.destroy();
  }
}

export default Brick;

export enum BrickWeight {
  LOW = 10,
  MEDIUM = 20,
  HIGH = 30,
  HUGE = 50,
}

enum BrickSprite {
  LOW = "1.png",
  MEDIUM = "2.png",
  HIGH = "3.png",
  HUGE = "4.png",
}
