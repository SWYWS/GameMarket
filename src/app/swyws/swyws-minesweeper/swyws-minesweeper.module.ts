import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SwywsMinesweeperRoutingModule } from './swyws-minesweeper-routing.module';
import { SwywsMinesweeperComponent } from './swyws-minesweeper.component';


@NgModule({
  declarations: [SwywsMinesweeperComponent],
  imports: [
    CommonModule,
    SwywsMinesweeperRoutingModule
  ]
})
export class SwywsMinesweeperModule { }
