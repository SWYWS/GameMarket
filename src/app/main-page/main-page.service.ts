import { Injectable } from '@angular/core';
import { DevelopersInfo } from "./developers";

@Injectable({
  providedIn: 'root'
})
export class MainPageService {

  devs: DevelopersInfo[] = [];

  constructor() { 
    this.devs[0] = new DevelopersInfo("swyws", ["swyws-xo"], 0);
    this.devs[1] = new DevelopersInfo("nick", ["nick-xo"], 1);
    this.devs[2] = new DevelopersInfo("khan", ["khan-xo"], 2);
  }

}
