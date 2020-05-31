import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SwywsComponent } from './swyws.component';

const routes: Routes = [{ path: '', component: SwywsComponent }, { path: 'swyws-xo', loadChildren: () => import('./swyws-xo/swyws-xo.module').then(m => m.SwywsXoModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SwywsRoutingModule { }
