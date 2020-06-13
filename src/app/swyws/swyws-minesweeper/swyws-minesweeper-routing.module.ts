import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SwywsMinesweeperComponent } from './swyws-minesweeper.component';

const routes: Routes = [{ path: '', component: SwywsMinesweeperComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SwywsMinesweeperRoutingModule { }
