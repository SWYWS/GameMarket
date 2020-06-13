import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckersRoutingModule } from './checkers-routing.module';
import { CheckersComponent } from './checkers.component';
import { SettingsComponent } from './settings/settings.component';
import { GameFieldComponent } from './game-field/game-field.component';


@NgModule({
  declarations: [CheckersComponent, SettingsComponent, GameFieldComponent],
  imports: [
    CommonModule,
    CheckersRoutingModule
  ]
})
export class CheckersModule { }
