import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BattleshipsComponent } from './battleships.component';

const routes: Routes = [{ path: '', component: BattleshipsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BattleshipsRoutingModule { }
