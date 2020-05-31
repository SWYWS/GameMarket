import { Component, OnInit } from '@angular/core';
import { MainPageService } from "../main-page.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  hiddenList: boolean[] = [];
  listOpened: boolean = false;

  constructor(private mainDataService: MainPageService) { }

  toggleGameLists(toHide: number): void {
    this.hideAllGames();
    this.hiddenList[toHide] = false;
    this.listOpened = true;
  }

  hideAllGames(): void {
    for (let i = 0; i < this.hiddenList.length; i++) {
      this.hiddenList[i] = true;
    }
    this.listOpened = false;
  }

  ngOnInit() {
    for (let i = 0; i < this.mainDataService.devs.length; i++) {
      this.hiddenList[i] = true;
    }
  }

}
