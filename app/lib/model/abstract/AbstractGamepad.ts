import Player from "../Player"

abstract class AbstractGamepad {
  protected move(player: Player, x: number) {
    player.move(x)
  }
}

export default AbstractGamepad