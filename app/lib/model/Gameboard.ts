import Observer from "./interfaces/Observer";
import Paintable from "./interfaces/Paintable";
import Solid2D from "./abstract/Solid2D";
import BaseGamepad from "./abstract/BaseGamepad";
import GamepadFactory from "../factories/GamepadFactory";
import PlayerFactory from "../factories/PlayerFactory";
import BlockFactory from "../factories/BlockFactory";
import Player from "./Player";
import Block, { BrickActions } from "./Block"

class Gameboard implements Observer {
  readonly canvas: HTMLCanvasElement;
  readonly gamepad: BaseGamepad;
  private attached: Array<Paintable>;
  private player: Player;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.prepareScene()

    this.attached = [];
    this.player = new PlayerFactory(300, 50, this.canvas).create();
    this.gamepad = new GamepadFactory(this.player).create();

    let blocks = new BlockFactory(4, this.canvas).create();
       
    blocks.forEach((block) => {
      this.attachToContext(block);
    });
    
    this.attachToContext(this.player);
  }

  private prepareScene() {
    this.canvas.width = window.innerWidth
    this.canvas.height = window.innerHeight
  }

  attachToContext(paintable: Solid2D) {
    this.attached.push(paintable);
    paintable.attach(this);
    paintable.paint();
  }

  update(state: any, args?: any): void {
    if (state instanceof Block) {
      if (args.action == BrickActions.DESTROY) {
        let index = this.attached.indexOf(state)
        this.attached.splice(index, 1)
      }
    }
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
