import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KhanXoRoutingModule } from './khan-xo-routing.module';
import { KhanXoComponent } from './khan-xo.component';
import { KhanXoSettingsComponent } from './khan-xo-settings/khan-xo-settings.component';
import { KhanXoFieldComponent } from './khan-xo-field/khan-xo-field.component';


@NgModule({
  declarations: [KhanXoComponent, KhanXoSettingsComponent, KhanXoFieldComponent],
  imports: [
    CommonModule,
    KhanXoRoutingModule
  ]
})
export class KhanXoModule { }
