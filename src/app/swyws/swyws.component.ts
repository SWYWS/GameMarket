import { Component, OnInit } from '@angular/core';
import { MainPageService } from "../main-page/main-page.service";

@Component({
  selector: 'app-swyws',
  templateUrl: './swyws.component.html',
  styleUrls: ['./swyws.component.css']
})
export class SwywsComponent implements OnInit {

  constructor(private mainDataService: MainPageService) { }

  ngOnInit() {
  }

}
