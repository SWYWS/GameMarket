import { Component, OnInit } from '@angular/core';
import { NickXoLogicService } from '../nick-xo-logic.service';
import { XoSettings } from './xo-settings';

@Component({
  selector: 'app-nick-xo-settings',
  templateUrl: './nick-xo-settings.component.html',
  styleUrls: ['./nick-xo-settings.component.css']
})
export class NickXoSettingsComponent implements OnInit {

  xoSettings: XoSettings;

  constructor(public xoLogicsService: NickXoLogicService) { }

  choiceSide(playerSide: string, botSide: string): void {
    this.xoSettings.playerSide = playerSide;
    this.xoSettings.botSide = botSide;
    this.xoLogicsService.dataInit(this.xoSettings);
  }

  ngOnInit(): void {
    this.xoSettings = new XoSettings;
  }
}