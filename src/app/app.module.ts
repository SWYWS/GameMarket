import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './main-page/header/header.component';
import { GameSpaceComponent } from './main-page/game-space/game-space.component';
import { MenuComponent } from './main-page/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GameSpaceComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
