import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NickXoGameRoutingModule } from './nick-xo-game-routing.module';
import { NickXoGameComponent } from './nick-xo-game.component';
import { NickXoSettingsComponent } from './nick-xo-settings/nick-xo-settings.component';
import { NickXoFieldComponent } from './nick-xo-field/nick-xo-field.component';
import { NickXoGameCanvasComponent } from './nick-xo-game-canvas/nick-xo-game-canvas.component';


@NgModule({
  declarations: [NickXoGameComponent, NickXoSettingsComponent, NickXoFieldComponent, NickXoGameCanvasComponent],
  imports: [
    CommonModule,
    NickXoGameRoutingModule
  ]
})
export class NickXoGameModule { }
