class GameStorage {
  private static recordKey = "player_record";

  static saveRecord(recordValue: number) {
    if (recordValue > this.getRecord()) {
      localStorage.setItem(this.recordKey, recordValue.toString());
    }
  }

  static getRecord(): number {
    let record = parseInt(localStorage.getItem(this.recordKey))
    if (Number.isSafeInteger(record)) {
      return record;
    }
    return 0;
  }
}

export default GameStorage;
