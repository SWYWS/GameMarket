import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BattleshipsRoutingModule } from './battleships-routing.module';
import { BattleshipsComponent } from './battleships.component';
import { PlayerFieldComponent } from './player-field/player-field.component';
import { BotFieldComponent } from './bot-field/bot-field.component';
import { SettingsComponent } from './settings/settings.component';


@NgModule({
  declarations: [BattleshipsComponent, PlayerFieldComponent, BotFieldComponent, SettingsComponent],
  imports: [
    CommonModule,
    BattleshipsRoutingModule
  ]
})
export class BattleshipsModule { }
