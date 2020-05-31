import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SwywsXoRoutingModule } from './swyws-xo-routing.module';
import { SwywsXoComponent } from './swyws-xo.component';
import { SwywsXoSettingsComponent } from './swyws-xo-settings/swyws-xo-settings.component';
import { SwywsXoGameComponent } from './swyws-xo-game/swyws-xo-game.component';
import { FilterStringPipe } from './filter-string.pipe';


@NgModule({
  declarations: [SwywsXoComponent, SwywsXoSettingsComponent, SwywsXoGameComponent, FilterStringPipe],
  imports: [
    CommonModule,
    SwywsXoRoutingModule
  ]
})
export class SwywsXoModule { }
