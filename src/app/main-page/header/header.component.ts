import { Component, OnInit } from '@angular/core';
import { MainPageService } from "../main-page.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  hiddenDevs: boolean = true;

  constructor(private mainDataService: MainPageService) { }

  showDevs() {
    this.hiddenDevs = !this.hiddenDevs;
  }

  ngOnInit() {
  }

}
