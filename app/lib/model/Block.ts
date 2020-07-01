import Solid2D from "./abstract/Solid2D";

class Brick extends Solid2D{
  private weight: number
  private sprite: HTMLImageElement

  constructor(x: number, y: number, length: number, context: HTMLCanvasElement, weight: BrickWeight) {
    super(x, y, length, length, context)
    this.weight = weight
    this.setSprite(weight)
    setTimeout(() => {
      console.log(`Destroy at: ${this.x} ${this.y}`)
      this.destroy()
    }, Math.random() * 10000)
  }

  private setSprite(weight: BrickWeight) {
    let image = new Image()
    
    switch (weight) {
      case BrickWeight.LOW:
        image.src = "./dist/sprites/" + BrickSprite.LOW
        break;
      case BrickWeight.MEDIUM:
        image.src = "./dist/sprites/" + BrickSprite.MEDIUM
        break;
      case BrickWeight.HIGH:
        image.src = "./dist/sprites/" + BrickSprite.HIGH
        break;
      case BrickWeight.HUGE:
        image.src = "./dist/sprites/" + BrickSprite.HUGE
        break;
    }
    image.onload = () => {
      this.sprite = image
    }
  }

  paint() {
    let context = this.context.getContext("2d");
    context.strokeStyle = "#000000"
    context.strokeRect(this.x, this.y, this.width, this.height)
    context.drawImage(this.sprite, this.x, this.y, this.width, this.height)
    // context.fillStyle = this.sprite
    // context.fillRect(this.x, this.y, this.width, this.height);
  }
  
  destroy(): void {
    this.notify({ action: BrickActions.DESTROY })
  }
}

export default Brick

export enum BrickActions {
  DESTROY
}

export enum BrickWeight {
  LOW = 10,
  MEDIUM = 20,
  HIGH = 30,
  HUGE = 50
}

enum BrickSprite {
  LOW = "1.png",
  MEDIUM = "2.png",
  HIGH = "3.png",
  HUGE = "4.png"
}