import { Injectable } from '@angular/core';
import { XoSettings } from 'src/app/khan/khan-xo/xo-setting';

@Injectable({
  providedIn: 'root'
})
export class KhanXoLogicalService {

  xoSettings: XoSettings;
  array: string[][] = [];
  showTable: boolean = false;
  hideButtons: boolean = true;
  showResult: boolean = false;
  result: string = "message";

  constructor() { }

  dataInit(settings: XoSettings) {
    this.xoSettings = settings;
    this.createXoModel();
    if (this.xoSettings.playerSide == "O"){
      this.drowBot();
    }
  }

  createXoModel() {
    for (let i = 0; i < this.xoSettings.height; i++) {
      this.array[i] = [];
      for (let j = 0; j < this.xoSettings.width; j++) {
        this.array[i][j] = "";
      }
    }
  }

  func(arr: string[]): void {
    if (this.array[arr[0]][arr[1]] != "" || this.won(this.xoSettings.playerSide) || this.won(this.xoSettings.botSide)) return;
    this.array[arr[0]][arr[1]] = this.xoSettings.playerSide;//this.array[1][0]=x

    if (this.xoSettings.playerSide == this.won(this.xoSettings.playerSide)) {
      this.showResult = true;
      this.result = "You won";
      return;
    }

    if (this.draw()) {
      this.showResult = true;
      this.result = "draw";
      return;
    }

    this.drowBot();

    if (this.xoSettings.botSide == this.won(this.xoSettings.botSide)) {
      this.showResult = true;
      this.result = "You lose";
      return;
    }

    if (this.draw()) {
      this.showResult = true;
      this.result = "It is draw";
      return;
    }

  }

  drowBot() {
    while (true) {
      let x: number = this.random(3);
      let y: number = this.random(3);

      if (this.array[x][y] != "") continue;
      this.array[x][y] = this.xoSettings.botSide;
      break;
    }
  }

  random(max: number): number {
    return Math.floor(Math.random() * Math.floor(max));
  }

  won(str: string) {
    if (this.array[0][0] == str && this.array[1][1] == str && this.array[2][2] == str
      || this.array[2][0] == str && this.array[1][1] == str && this.array[0][2] == str) return str;

    for (let i = 0; i < 3; i++) {
      if (this.array[i][0] == str && this.array[i][1] == str && this.array[i][2] == str
        || this.array[0][i] == str && this.array[1][i] == str && this.array[2][i] == str) return str;
    }
  }

  draw() {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (this.array[i][j] != "") {
          continue;
        }
        else {
          return;
        }
      }
    }
    return true;
  }

  newGame() {
    this.hideButtons = true;
    this.showTable = false;
    this.showResult = false;
  }


}
