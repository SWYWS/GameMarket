import { Injectable } from '@angular/core';
import { XoSettings } from "./xo-settings";

@Injectable({
  providedIn: "root"
})
export class SwywsXoDataService {

  settings: XoSettings;
  gameModel: Array<number | string>;
  huWon: boolean = true;
  aiWon: boolean = false;
  draw: boolean = false;
  aiMove: Function;

  constructor() { }

  dataInit(settings: XoSettings): void {
    this.settings = settings;
    this.aiMove = this.selectAiMove(this.settings.difficulty);
    this.gameModel = this.createModel();
    this.huWon = false;
    this.aiWon = false;
    this.draw = false;

    if (this.settings.huPlayer == "O") {
      let id: number = this.aiMove(this.gameModel).index;
      this.setGameCellValue(id, this.settings.aiPlayer);
    }
  }

  createModel(): Array<number | string> {
    let gameModel = [];
    for (let i = 0; i < this.settings.height * this.settings.width; i++) {
      gameModel[i] = i;
    }
    return gameModel;
  }

  makeMove(index: number): void {
    if (typeof this.gameModel[index] == "string" || this.huWon || this.aiWon || this.draw) return;

    this.setGameCellValue(index, this.settings.huPlayer);

    if (this.xoWin_3x3(this.gameModel, this.settings.huPlayer)) {
      this.huWon = true;
      return;
    } else if (this.getEmptyIds(this.gameModel).length == 0) {
      this.draw = true;
      return;
    }

    let id: number = this.aiMove(this.gameModel).index;
    this.setGameCellValue(id, this.settings.aiPlayer);

    if (this.xoWin_3x3(this.gameModel, this.settings.aiPlayer)) {
      this.aiWon = true;
      return;
    } else if (this.getEmptyIds(this.gameModel).length == 0) {
      this.draw = true;
      return;
    }
  }

  selectAiMove(diff: string): Function {
    switch (diff) {
      case "hard":
        return this.minimax;
      default:
      case "easy":
        return this.getRandomId;
    }
  }

  setGameCellValue(index: number, val: string): void {
    this.gameModel[index] = val;
  }

  xoWin_3x3(model: Array<number | string>, player: string): boolean {
    if ((model[0] == player && model[1] == player && model[2] == player)
      || (model[3] == player && model[4] == player && model[5] == player)
      || (model[6] == player && model[7] == player && model[8] == player)
      || (model[0] == player && model[3] == player && model[6] == player)
      || (model[1] == player && model[4] == player && model[7] == player)
      || (model[2] == player && model[5] == player && model[8] == player)
      || (model[0] == player && model[4] == player && model[8] == player)
      || (model[2] == player && model[4] == player && model[6] == player))
      return true;

    return false;
  }

  getEmptyIds(model: Array<number | string>): Array<number | string> {
    return model.filter(item => typeof item == "number");
  }

  getRandomId(model: Array<number | string>) {
    let availIds = this.getEmptyIds(model);
    return { index: +availIds[Math.floor(Math.random() * (availIds.length))] };
  }

  minimax(model: Array<number | string>, player: string = this.settings.aiPlayer) {
    let availIds = this.getEmptyIds(model);

    if (this.xoWin_3x3(model, this.settings.huPlayer)) {
      return { score: -10 };
    } else if (this.xoWin_3x3(model, this.settings.aiPlayer)) {
      return { score: 10 };
    } else if (availIds.length === 0) {
      return { score: 0 };
    }

    let moves = new Array;
    for (let i = 0; i < availIds.length; i++) {
      let move = new MoveInfo;
      move.index = model[availIds[i]];
      model[availIds[i]] = player;

      if (player == this.settings.aiPlayer) {
        let result = this.minimax(model, this.settings.huPlayer);
        move.score = result.score;
      } else {
        let result = this.minimax(model, this.settings.aiPlayer);
        move.score = result.score;
      }

      model[availIds[i]] = move.index;
      moves.push(move);
    }

    let bestMove;
    if (player === this.settings.aiPlayer) {
      let bestScore = -99999;
      for (let i = 0; i < moves.length; i++) {
        if (moves[i].score > bestScore) {
          bestScore = moves[i].score;
          bestMove = i;
        }
      }
    } else {
      let bestScore = 99999;
      for (let i = 0; i < moves.length; i++) {
        if (moves[i].score < bestScore) {
          bestScore = moves[i].score;
          bestMove = i;
        }
      }
    }
    return moves[bestMove];
  }

}

export class MoveInfo {
  index: number;
  score: number;
}