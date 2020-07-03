export default class MediaLoader {
  static loadSprite(filename: string): string {
    let spriteDir = "./dist/sprites/"
    return `${spriteDir}${filename}`
  }

  static loadSound(filename: string): string {
    let audioDir = "./dist/sounds/"
    return `${audioDir}${filename}`
  }
}