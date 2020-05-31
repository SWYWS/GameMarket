export class XoSettings {

  height: number;
  width: number;
  huPlayer: string;
  aiPlayer: string;
  difficulty: string;

  constructor() {
    this.height = 3;
    this.width = 3;
    this.huPlayer = "X";
    this.aiPlayer = "O";
    this.difficulty = "easy";
  }
  
}