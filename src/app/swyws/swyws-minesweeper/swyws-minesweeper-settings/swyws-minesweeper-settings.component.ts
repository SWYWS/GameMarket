import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-swyws-minesweeper-settings',
  templateUrl: './swyws-minesweeper-settings.component.html',
  styleUrls: ['./swyws-minesweeper-settings.component.css']
})
export class SwywsMinesweeperSettingsComponent implements OnInit {

  showFormForCustomSettings: boolean = false;
  
  constructor() { }

  toggleFormForCustomSettings(): void {
    this.showFormForCustomSettings = true;
  }

  test(): void {
    this.showFormForCustomSettings = false;
  }

  ngOnInit() {
  }

}
