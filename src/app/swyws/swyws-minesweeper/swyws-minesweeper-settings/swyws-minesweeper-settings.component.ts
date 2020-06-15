import { Component, OnInit } from '@angular/core';
import { MsSettings } from "../ms-settings";
import { SwywsMinesweeperDataService } from "../swyws-minesweeper-data.service"

@Component({
  selector: 'app-swyws-minesweeper-settings',
  templateUrl: './swyws-minesweeper-settings.component.html',
  styleUrls: ['./swyws-minesweeper-settings.component.css']
})
export class SwywsMinesweeperSettingsComponent implements OnInit {

  settings: MsSettings;
  showFormForCustomSettings: boolean = false;

  constructor(private dataService: SwywsMinesweeperDataService) { }

  toggleFormForCustomSettings(): void {
    this.showFormForCustomSettings = true;
    this.settings.width = undefined;
    this.settings.height = undefined;
    this.settings.bombs = undefined;
  }

  setStandardSettings(width: number, height: number, bombs: number): void {
    this.showFormForCustomSettings = false;
    this.settings.width = width;
    this.settings.height = height;
    this.settings.bombs = bombs;
  }

  startGame(): void {
    this.dataService.hideSettingsComp();
    this.dataService.dataInit(this.settings);
  }

  ngOnInit() {
    this.settings = new MsSettings;
  }

}
