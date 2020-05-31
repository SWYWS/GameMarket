import { Component, OnInit } from '@angular/core';
import { SwywsXoDataService } from "./swyws-xo-data.service";

@Component({
  selector: 'app-swyws-xo',
  templateUrl: './swyws-xo.component.html',
  styleUrls: ['./swyws-xo.component.css']
})
export class SwywsXoComponent implements OnInit {

  constructor(private dataService: SwywsXoDataService) { }

  ngOnInit() {
  }

}
