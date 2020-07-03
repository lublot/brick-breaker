import MoveCommand from "../commands/MoveCommand";
import GameEvent from "../enums/GameEvent";
import Observable from "../utils/interfaces/Observable";
import Observer from "../utils/interfaces/Observer";
import MediaLoader from "../utils/MediaLoader";
import Solid2D from "./abstract/Solid2D";
import Ball from "./Ball";

class Player extends Solid2D implements Observer {
  private sprite: HTMLImageElement;
  private sound: HTMLAudioElement;

  constructor(width: number, height: number, context: HTMLCanvasElement) {
    let initialX = (context.width - width) / 2;
    let staticY = context.height - height;
    super(initialX, staticY, width, height, context);
    this.initializeMedia();
    this.move(0);
  }

  private initializeMedia() {
    let image = new Image();
    image.src = MediaLoader.loadSprite("player.png");
    this.sprite = image;
    this.sound = new Audio(MediaLoader.loadSound("player.ogg"));
    this.sound.volume = 0.15
  }

  update(observable: Observable, args?: GameEvent): void {
    if (observable instanceof Ball) {
      if (args == GameEvent.BALL_MOVED && this.isColliding(observable)) {
        this.sound.play();
        this.notify(GameEvent.BALL_PLAYER_COLLISION);
      }
    }
  }

  paint(): void {
    let context = this.context.getContext("2d");
    context.drawImage(this.sprite, this.x, this.y, this.width, this.height);
  }

  move(dx: number) {
    let command = new MoveCommand(this.x + dx, this.y, this);
    this.x = command.execute()[0];
    this.notify();
  }

  destroy() {}
}

export default Player;
