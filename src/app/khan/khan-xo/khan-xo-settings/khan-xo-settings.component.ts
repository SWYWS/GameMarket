import { Component, OnInit } from '@angular/core';
import { XoSettings } from 'src/app/khan/khan-xo/xo-setting';
import { KhanXoLogicalService } from 'src/app/khan/khan-xo/khan-xo-logical.service';

@Component({
  selector: 'app-khan-xo-settings',
  templateUrl: './khan-xo-settings.component.html',
  styleUrls: ['./khan-xo-settings.component.css']
})
export class KhanXoSettingsComponent implements OnInit {

  xoSettings: XoSettings;

  constructor(private service: KhanXoLogicalService) { }

  ngOnInit() {
    this.xoSettings = new XoSettings;
  }

  choice(player: string, bot: string) {
    this.xoSettings.playerSide = player;
    this.xoSettings.botSide = bot;
    this.service.dataInit(this.xoSettings);
    this.service.hideButtons = false;
    this.service.showTable = true;
  }


}
