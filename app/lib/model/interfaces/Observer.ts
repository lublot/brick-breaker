import Observable from "./Observable";

interface Observer{
  update(observable: Observable, args?: any) : void
}

export default Observer