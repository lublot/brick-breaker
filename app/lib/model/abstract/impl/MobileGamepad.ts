import BaseGamepad from "../BaseGamepad";
import Player from "../../Player";

class MobileGamepad extends BaseGamepad {
  readonly player: Player;
  readonly steps: number;
  
  constructor(player: Player) {
    super();
    this.player = player;
    this.steps = Math.floor(player.context.width / 15);
  }

  processCommand(pressed: TouchEvent) {
    console.log(pressed)
    let screenWidth = this.player.context.clientWidth
    console.log(pressed.changedTouches[0].clientX, screenWidth)
    if (pressed.changedTouches[0].clientX > screenWidth / 2) {
      this.move(this.player, this.steps);
    } else {
      this.move(this.player, -this.steps);
    }
  }
}

export default MobileGamepad