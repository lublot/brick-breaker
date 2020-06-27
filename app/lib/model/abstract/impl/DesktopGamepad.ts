import BaseGamepad from "../BaseGamepad";
import { KeyboardAction, ArrowAction } from "../../../enums/GamepadActions";
import Player from "../../Player";

class DesktopGamepad extends BaseGamepad {
  readonly player: Player;
  readonly steps: number;
  
  constructor(player: Player) {
    super();
    this.player = player;
    this.steps = Math.floor(player.context.width / 15);
  }

  processCommand(pressed: KeyboardEvent) {
    this.doAction(pressed)
  }

  private doAction(pressed: KeyboardEvent) {
    let key = pressed.code;
    if (key == KeyboardAction.LEFT || key == ArrowAction.LEFT) {
      this.move(this.player, -this.steps);
    } else if (key == KeyboardAction.RIGHT || key == ArrowAction.RIGHT) {
      this.move(this.player, this.steps);
    }
  }
}

export default DesktopGamepad;
