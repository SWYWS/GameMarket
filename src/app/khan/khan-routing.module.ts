import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KhanComponent } from './khan.component';

const routes: Routes = [{ path: '', component: KhanComponent }, { path: 'khan-xo', loadChildren: () => import('./khan-xo/khan-xo.module').then(m => m.KhanXoModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KhanRoutingModule { }
