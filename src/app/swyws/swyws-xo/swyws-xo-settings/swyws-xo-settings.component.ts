import { Component, OnInit } from '@angular/core';
import { XoSettings } from "../xo-settings";
import { SwywsXoDataService } from "../swyws-xo-data.service";

@Component({
  selector: 'app-swyws-xo-settings',
  templateUrl: './swyws-xo-settings.component.html',
  styleUrls: ['./swyws-xo-settings.component.css']
})
export class SwywsXoSettingsComponent implements OnInit {

  sideX: string = "X";
  sideO: string = "O";
  diffEasy: string = "easy";
  diffHard: string = "hard";
  settings: XoSettings;

  constructor(private dataService: SwywsXoDataService) { }

  changeSide(huPlayer: string, aiPlayer: string): void {
    this.settings.huPlayer = huPlayer;
    this.settings.aiPlayer = aiPlayer;
  }

  changeDifficulty(diff: string): void {
    this.settings.difficulty = diff;
  }

  startGame(): void {
    this.dataService.dataInit(this.settings);
    this.dataService.toggleSettingsComponentVisibility();
  }

  ngOnInit() {
    this.settings = new XoSettings;
  }

}
