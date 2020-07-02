export default class SpriteLoader {
  static load(filename: string): string {
    let spriteDir = "./dist/sprites/"
    return `${spriteDir}${filename}`
  }
}