export class MsGameCell {
  private value: number | string;
  className: string;
  opened: boolean;
  flagged: boolean;
  id: string;

  constructor(id: string) {
    this.setValue = 0;
    this.className = "ms-cell-closed";
    this.opened = false;
    this.flagged = false;
    this.id = id;
  }

  get getValue(): number | string {
    return this.value;
  }

  set setValue(value: number | string) {
    this.value = value;
  }

  openCell(cells: number): number {
    if (this.opened || this.flagged) return cells;

    this.className = "ms-cell-" + this.value;
    this.opened = true;
    return --cells;
  }

  flagCell(flags: number): number {
    if (this.opened) return flags;

    if (!this.flagged) {
      this.className = "ms-cell-flagged";
      this.flagged = true;
      return --flags;
    } else if (this.flagged) {
      this.className = "ms-cell-closed";
      this.flagged = false;
      return ++flags;
    }
    return 0;
  }

  flaggedCorrectly(): boolean {
    if (this.flagged && this.getValue != "bomb") return false;
    return true;
  }

  bombed(): void {
    if (this.opened || this.flagged) return;

    this.className = "ms-cell-bombed";
    this.opened = true;
  }

  noBomb(): void {
    this.className = "ms-cell-nobomb"
    this.opened = true;
  }
}