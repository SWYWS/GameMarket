import { Component, OnInit } from '@angular/core';
import { KhanXoLogicalService } from 'src/app/khan/khan-xo/khan-xo-logical.service';

@Component({
  selector: 'app-khan-xo-field',
  templateUrl: './khan-xo-field.component.html',
  styleUrls: ['./khan-xo-field.component.css']
})
export class KhanXoFieldComponent implements OnInit {

  constructor(public service: KhanXoLogicalService) { }

  clickOnTable(event: MouseEvent): void {
    let target: HTMLElement = event.target as HTMLElement;
    let arr = target.id.split('_');
    this.service.func(arr);
  }

  ngOnInit() {
  }

}
