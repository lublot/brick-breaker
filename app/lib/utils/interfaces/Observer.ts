import Observable from "./Observable";
import GameEvent from "../../enums/GameEvent";

interface Observer{
  update(observable: Observable, args?: GameEvent) : void
}

export default Observer