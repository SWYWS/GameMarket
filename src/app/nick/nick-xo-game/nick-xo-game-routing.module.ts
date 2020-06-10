import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NickXoGameComponent } from './nick-xo-game.component';

const routes: Routes = [{ path: '', component: NickXoGameComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NickXoGameRoutingModule { }
