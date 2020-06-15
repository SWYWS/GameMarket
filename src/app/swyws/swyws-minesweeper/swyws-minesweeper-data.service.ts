import { Injectable } from '@angular/core';
import { MsSettings } from "./ms-settings";
import { MsGameCell } from "./ms-game-cell";

@Injectable({
  providedIn: 'root'
})
export class SwywsMinesweeperDataService {

  settings: MsSettings;
  gameModel: MsGameCell[][] = [];
  modelFilled: boolean;
  flags: number;
  cellsRemain: number;
  game_over: number = 0; //0 - game on, 1 - lost, 2 - won
  showSettingsComp: boolean = true;

  constructor() { }

  showSettings(): void {
    this.showSettingsComp = true;
  }

  hideSettingsComp(): void {
    this.showSettingsComp = false;
  }

  getModel(): MsGameCell[][] {
    return this.gameModel;
  }

  dataInit(settings: MsSettings): void {
    this.settings = settings;
    this.gameModel = this.createModel();
    this.modelFilled = false;
    this.flags = this.settings.bombs;
    this.cellsRemain = this.settings.height * this.settings.width;
    this.game_over = 0;
  }

  createModel(): MsGameCell[][] {
    let gameModel: MsGameCell[][] = [];
    for (let i = 0; i < this.settings.height; i++) {
      gameModel[i] = [];
      for (let j = 0; j < this.settings.width; j++) {
        gameModel[i][j] = new MsGameCell(i + "_" + j);
      }
    }
    return gameModel;
  }

  makeMove(y: number, x: number): void {
    //y - OY coord, x - OX coord
    if (!this.modelFilled) {
      this.fillGameModel(y, x);
    }

    let target = this.gameModel[y][x];

    if (target.getValue == "bomb" && !target.flagged) {
      target.bombed();
      this.gameOverLoss();
    }

    if (this.game_over) return;

    this.cellsRemain = target.openCell(this.cellsRemain);
    if (!target.getValue) {
      let closestCells = this.getClosestCells(y, x);
      for (let cell of closestCells) {
        if (cell.opened) continue;
        let coords = cell.id.split("_");
        this.makeMove(+coords[0], +coords[1]);
      }
    }

    this.gameOverWin();
  }

  placeFlag(y: number, x: number): void {
    if (!this.modelFilled || this.game_over) return;
    
    let target = this.gameModel[y][x];
    this.flags = target.flagCell(this.flags);
  }

  openClosestCells(y: number, x: number): void {
    if (this.game_over) return;

    let currentCell: MsGameCell = this.gameModel[y][x];

    if (currentCell.flagged) return;

    let closestCells: MsGameCell[] = this.getClosestCells(y, x);
    let count = 0;

    for (let cell of closestCells) {
      if (cell.flagged) count++;
    }

    if (count < currentCell.getValue) return;

    for (let cell of closestCells) {
      let cellId = cell.id.split("_");
      this.makeMove(+cellId[0], +cellId[1]);
    }

    if (count > currentCell.getValue) {
      this.gameOverLoss();
    }
  }

  fillGameModel(y: number, x: number): void {
    let bombs = this.settings.bombs;

    //PLACING BOMBS
    while (bombs > 0) {
      let randX: number = Math.floor(Math.random() * this.settings.width);
      let randY: number = Math.floor(Math.random() * this.settings.height);

      if ((randX === x && randY === y)
        || this.gameModel[randY][randX].getValue) continue;

      this.gameModel[randY][randX].setValue = "bomb";
      bombs--;
    }

    //PLACING NUMBERS
    for (let i = 0; i < this.settings.height; i++) {
      for (let j = 0; j < this.settings.width; j++) {
        if (this.gameModel[i][j].getValue) continue;

        let closestCells: MsGameCell[] = this.getClosestCells(i, j);
        let count: number = 0;

        for (let item of closestCells) {
          if (item.getValue == "bomb") count++;
        }

        if (count) {
          this.gameModel[i][j].setValue = count;
        }
      }
    }

    this.modelFilled = true;
  }

  getClosestCells(y: number, x: number): MsGameCell[] {
    let closestCells: MsGameCell[] = [];

    for (let i = -1; i < 2; i++) {
      for (let j = -1; j < 2; j++) {
        if ((i == 0 && j == 0)
          || x + i < 0
          || x + i > this.settings.width - 1
          || y + j < 0
          || y + j > this.settings.height - 1)
          continue;

        closestCells.push(this.gameModel[y + j][x + i]);
      }
    }
    return closestCells;
  }

  gameOverLoss(): void {
    for (let row of this.gameModel) {
      for (let cell of row) {
        if (cell.getValue == "bomb") {
          this.cellsRemain = cell.openCell(this.cellsRemain);
        }
        if (!cell.flaggedCorrectly()) {
          cell.noBomb();
        }
      }
    }
    this.game_over = 1;
  }

  gameOverWin(): void {
    if (this.cellsRemain != this.settings.bombs) return;
    
    for (let row of this.gameModel) {
      for (let cell of row) {
        if (!cell.flagged) this.flags = cell.flagCell(this.flags);
      }
    }
    this.game_over = 2;
  }
}