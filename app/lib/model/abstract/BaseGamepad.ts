import Player from "../Player"

abstract class BaseGamepad {
  protected move(player: Player, x: number) {
    player.move(x)
    
  }

  abstract processCommand(pressed: KeyboardEvent | TouchEvent): any
}

export default BaseGamepad