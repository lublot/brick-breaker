import Player from "../Player";
import { GamepadListener } from "../../enums/GamepadActions";

abstract class BaseGamepad {
  constructor(event: GamepadListener) {
    document[event] = (pressed: KeyboardEvent | TouchEvent) =>
      this.processCommand(pressed);
  }

  protected move(player: Player, x: number) {
    player.move(x);
  }

  protected abstract processCommand(pressed: KeyboardEvent | TouchEvent): any;
}

export default BaseGamepad;
