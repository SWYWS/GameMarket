import { Component, OnInit } from '@angular/core';
import { SwywsXoDataService } from "../swyws-xo-data.service";

@Component({
  selector: 'app-swyws-xo-game',
  templateUrl: './swyws-xo-game.component.html',
  styleUrls: ['./swyws-xo-game.component.css']
})
export class SwywsXoGameComponent implements OnInit {
  
  constructor(private dataService: SwywsXoDataService) { }

  makeMove(index: number): void {
    this.dataService.makeMove(index);
  }

  showSettingsComp(): void {
    this.dataService.showSettingsComponent();
  }

  ngOnInit() {
  }

}
