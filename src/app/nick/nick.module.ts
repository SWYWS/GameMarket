import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NickRoutingModule } from './nick-routing.module';
import { NickComponent } from './nick.component';


@NgModule({
  declarations: [NickComponent],
  imports: [
    CommonModule,
    NickRoutingModule
  ]
})
export class NickModule { }
