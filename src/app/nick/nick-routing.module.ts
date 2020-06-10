import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NickComponent } from './nick.component';

const routes: Routes = [{ path: '', component: NickComponent }, { path: 'nick-xo-game', loadChildren: () => import('./nick-xo-game/nick-xo-game.module').then(m => m.NickXoGameModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NickRoutingModule { }
