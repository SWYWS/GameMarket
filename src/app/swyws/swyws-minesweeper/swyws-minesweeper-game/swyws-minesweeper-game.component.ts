import { Component, OnInit } from '@angular/core';
import { SwywsMinesweeperDataService } from "../swyws-minesweeper-data.service"

@Component({
  selector: 'app-swyws-minesweeper-game',
  templateUrl: './swyws-minesweeper-game.component.html',
  styleUrls: ['./swyws-minesweeper-game.component.css']
})
export class SwywsMinesweeperGameComponent implements OnInit {
  
  constructor(private dataService: SwywsMinesweeperDataService) { }

  makeMove(y: number, x: number): void {
    //y - OY coord, x - OX coord
    this.dataService.makeMove(y, x);
  }

  placeFlag(y: number, x: number): boolean {
    this.dataService.placeFlag(y, x);
    return false;
  }

  makeMoveDblclick(y: number, x: number): boolean {
    this.dataService.openClosestCells(y, x);
    return false;
  }

  showSettingsComp(): void {

  }

  ngOnInit() {
  }

}
