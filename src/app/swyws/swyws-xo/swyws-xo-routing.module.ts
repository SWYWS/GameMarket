import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SwywsXoComponent } from './swyws-xo.component';

const routes: Routes = [{ path: '', component: SwywsXoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SwywsXoRoutingModule { }
