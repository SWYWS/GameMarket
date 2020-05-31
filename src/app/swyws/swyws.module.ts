import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SwywsRoutingModule } from './swyws-routing.module';
import { SwywsComponent } from './swyws.component';


@NgModule({
  declarations: [SwywsComponent],
  imports: [
    CommonModule,
    SwywsRoutingModule
  ]
})
export class SwywsModule { }
