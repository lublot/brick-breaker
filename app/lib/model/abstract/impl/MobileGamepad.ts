import BaseGamepad from "../BaseGamepad";
import Player from "../../Player";
import { GamepadListener } from "../../../enums/GamepadActions";

class MobileGamepad extends BaseGamepad {
  readonly player: Player;
  readonly steps: number;

  constructor(player: Player) {
    super(GamepadListener.TOUCH);
    this.player = player;
    this.steps = Math.floor(player.context.width / 15);
  }

  processCommand(pressed: TouchEvent) {
    let screenWidth = this.player.context.clientWidth;
    if (pressed.changedTouches[0].clientX > screenWidth / 2) {
      this.move(this.player, this.steps);
    } else {
      this.move(this.player, -this.steps);
    }
  }
}

export default MobileGamepad;
