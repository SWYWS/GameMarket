import { Component, OnInit } from '@angular/core';
import { NickXoLogicService } from '../nick-xo-logic.service'

@Component({
  selector: 'app-nick-xo-field',
  templateUrl: './nick-xo-field.component.html',
  styleUrls: ['./nick-xo-field.component.css']
})
export class NickXoFieldComponent implements OnInit {

  constructor(public xoLogicsService: NickXoLogicService) { }

  playGame(event: Event): void {
    let target: HTMLElement = event.target as HTMLElement;
    if (target.className != "xo-cell" || this.xoLogicsService.endMessage != "") return;

    this.xoLogicsService.gameStep(target.id.split("_"));
  }

  ngOnInit(): void {
  }
}
