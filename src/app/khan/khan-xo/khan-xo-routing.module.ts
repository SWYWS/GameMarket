import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KhanXoComponent } from './khan-xo.component';

const routes: Routes = [{ path: '', component: KhanXoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KhanXoRoutingModule { }
