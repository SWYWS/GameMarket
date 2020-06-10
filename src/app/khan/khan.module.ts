import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KhanRoutingModule } from './khan-routing.module';
import { KhanComponent } from './khan.component';


@NgModule({
  declarations: [KhanComponent],
  imports: [
    CommonModule,
    KhanRoutingModule
  ]
})
export class KhanModule { }
