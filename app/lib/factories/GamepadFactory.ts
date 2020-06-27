import DesktopGamepad from "../model/abstract/impl/DesktopGamepad"
import MobileGamepad from "../model/abstract/impl/MobileGamepad"
import Player from "../model/Player"
import BaseGamepad from "../model/abstract/BaseGamepad"

class GamepadFactory {
  private player: Player

  constructor(player: Player) {
    this.player = player
  }

  create() : BaseGamepad{
    if(('ontouchstart' in window)) {
      return new MobileGamepad(this.player)
    } else {
      return new DesktopGamepad(this.player)
    }
  }
}

export default GamepadFactory