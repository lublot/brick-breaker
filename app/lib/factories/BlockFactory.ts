import Block, { BrickWeight } from "../model/Block"
class BlockFactory{
  private lines: number
  private context: HTMLCanvasElement
  readonly blocksPerColumn: number
  constructor(lines: number, context: HTMLCanvasElement) {
    this.lines = lines
    this.context = context
    this.blocksPerColumn = 25
  }

  create() : Array<Block> {
    let blocks: Array<Block> = []
    let nextPosition = { x: 0, y: 0 }
    let length = this.context.width / this.blocksPerColumn
    
    for (let line = 0; line < this.lines; line++) {
      for (let column = 0; column < this.blocksPerColumn; column++) {
        let blockWeight = this.getBlockWeight(line)
        blocks.push(
          new Block(nextPosition.x, nextPosition.y, length, this.context, blockWeight)
        )
        nextPosition.x += length
      }
      nextPosition.x = 0
      nextPosition.y += length
    }

    return blocks
  }

  private getBlockWeight(line: number) : BrickWeight {
    switch (line) {
      case 0:
        return BrickWeight.HUGE
      case 1:
        return BrickWeight.HIGH
      case 2:
        return BrickWeight.MEDIUM
      case 3:
        return BrickWeight.LOW
      default:
        return BrickWeight.LOW
    }
  }
}

export default BlockFactory