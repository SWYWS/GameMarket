import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SwywsMinesweeperRoutingModule } from './swyws-minesweeper-routing.module';
import { SwywsMinesweeperComponent } from './swyws-minesweeper.component';
import { SwywsMinesweeperSettingsComponent } from './swyws-minesweeper-settings/swyws-minesweeper-settings.component';
import { SwywsMinesweeperGameComponent } from './swyws-minesweeper-game/swyws-minesweeper-game.component';


@NgModule({
  declarations: [SwywsMinesweeperComponent, SwywsMinesweeperSettingsComponent, SwywsMinesweeperGameComponent],
  imports: [
    CommonModule,
    SwywsMinesweeperRoutingModule
  ]
})
export class SwywsMinesweeperModule { }
