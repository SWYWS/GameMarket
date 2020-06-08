import { Injectable } from '@angular/core';
import { MsSettings } from "./ms-settings"

@Injectable({
  providedIn: 'root'
})
export class SwywsMinesweeperDataService {

  settings: MsSettings;

  constructor() { }

  dataInit(settings: MsSettings): void {
    this.settings = settings;
  }
}
