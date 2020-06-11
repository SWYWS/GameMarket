import { Injectable } from '@angular/core';
import { XoSettings } from './nick-xo-settings/xo-settings';

@Injectable({
  providedIn: 'root'
})
export class NickXoLogicService {

  xoSettings: XoSettings;
  gameModel: string[][] = [];
  endMessage: string = "";

  choiceSideButtonVisible: boolean = false;
  canvasVisible: boolean = true;
  fieldVisible: boolean = true;
  newGameButtonVisible: boolean = true;

  constructor() { }

  dataInit(data: XoSettings): void {
    this.xoSettings = data;
    this.createGameModel();
    this.choiceSideButtonVisible = !this.choiceSideButtonVisible;
    this.fieldVisible = !this.fieldVisible;
    //this.canvasVisible = !this.canvasVisible;
    if (this.xoSettings.botSide == "X") this.moveBot();
  }

  gameStep(arr: string[]): void {

    if (this.gameModel[arr[0]][arr[1]] != "") return;
    this.gameModel[arr[0]][arr[1]] = this.xoSettings.playerSide;

    if (this.draw()) this.endGameAlert("Draw");
    if (this.gameOver(this.xoSettings.playerSide)) this.endGameAlert("win");

    this.moveBot();
    if (this.gameOver(this.xoSettings.botSide)) this.endGameAlert("Loose");
    if (this.draw() && this.endMessage == "") this.endGameAlert("Draw");
  }

  createGameModel(): void {
    for (let i = 0; i < this.xoSettings.heigth; i++) {
      this.gameModel[i] = [""];
      for (let j = 0; j < this.xoSettings.width; j++) {
        this.gameModel[i][j] = "";
      }
    }
  }


  randomInt(max: number): number {
    return Math.floor(Math.random() * max);
  }

  moveBot(): void {
    if (this.endMessage != "") return;
    while (true) {
      let x = this.randomInt(3);
      let y = this.randomInt(3);

      if (this.gameModel[x][y] != "") continue;
      this.gameModel[x][y] = this.xoSettings.botSide;
      break;
    }
  }

  gameOver(str: string): boolean {

    if (this.gameModel[0][0] == str && this.gameModel[1][1] == str && this.gameModel[2][2] == str
      || this.gameModel[0][2] == str && this.gameModel[1][1] == str && this.gameModel[2][0] == str) {
      return true;
    }

    for (let i = 0; i < this.gameModel.length; i++) {
      if (this.gameModel[i][0] == str && this.gameModel[i][1] == str && this.gameModel[i][2] == str
        || this.gameModel[0][i] == str && this.gameModel[1][i] == str && this.gameModel[2][i] == str) {
        return true;
      }
    }
  }

  draw(): boolean {
    for (let i = 0; i < this.xoSettings.heigth; i++) {
      for (let j = 0; j < this.xoSettings.width; j++) {
        if (this.gameModel[i][j] == "") return;
      }
    }
    return true;
  }

  endGameAlert(str: string): void {
    if (this.newGameButtonVisible == true) this.newGameButtonVisible = !this.newGameButtonVisible;
    this.endMessage = str;
  }

  startNewGame(): void {
    this.fieldVisible = !this.fieldVisible;
    this.newGameButtonVisible = !this.newGameButtonVisible;
    this.choiceSideButtonVisible = !this.choiceSideButtonVisible;
  //  this.canvasVisible = !this.canvasVisible;
    this.endMessage = "";
    this.createGameModel();
  }

}
